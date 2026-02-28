/**
 * Axios HTTP client - Cookie httpOnly authentication.
 * - withCredentials = true (sends cookies with every request)
 * - No localStorage tokens - backend sets httpOnly cookies
 * - 401 interceptor: refresh queue to prevent race conditions
 */

import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1';

const http = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Refresh lock state - prevents multiple simultaneous refresh calls
let isRefreshing = false;

type QueuedRequest = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
};

let failedQueue: QueuedRequest[] = [];

const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
  failedQueue = [];
};

let onUnauthenticated: (() => void) | null = null;

/**
 * Register a callback to run when refresh fails (force logout).
 * Called from auth hooks / providers.
 */
export function setOnUnauthenticated(callback: () => void) {
  onUnauthenticated = callback;
}

const refreshToken = async (): Promise<boolean> => {
  try {
    await axios.post(`${baseURL}/auth/refresh`, {}, { withCredentials: true });
    return true;
  } catch {
    return false;
  }
};

http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status !== 401 || !originalRequest) {
      return Promise.reject(error);
    }

    // Skip refresh for auth endpoints to avoid loops
    const isAuthEndpoint =
      originalRequest.url?.includes('/auth/login') ||
      originalRequest.url?.includes('/auth/refresh') ||
      originalRequest.url?.includes('/auth/logout');

    if (isAuthEndpoint) {
      return Promise.reject(error);
    }

    // Already retried - refresh failed, force logout
    if (originalRequest._retry) {
      onUnauthenticated?.();
      return Promise.reject(error);
    }

    if (isRefreshing) {
      // Queue this request until refresh completes
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(() => http(originalRequest)).catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshed = await refreshToken();

    if (refreshed) {
      processQueue(null);
      isRefreshing = false;
      return http(originalRequest);
    }

    processQueue(error);
    isRefreshing = false;
    onUnauthenticated?.();
    return Promise.reject(error);
  }
);

export default http;
