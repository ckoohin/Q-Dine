/**
 * Auth API - Cookie-based authentication endpoints.
 * No token handling - httpOnly cookies sent automatically via withCredentials.
 */

import type { User, LoginCredentials, LoginResponse } from '@/lib/types/auth.type';
import http from './http';

export const authApi = {
  /**
   * Get current user - source of truth for auth state.
   * Requires valid session cookie.
   */
  me: (): Promise<User> => {
    return http.get<User>('/auth/me').then((res) => res.data);
  },

  /**
   * Login - backend sets httpOnly cookies on success.
   */
  login: (credentials: LoginCredentials): Promise<LoginResponse> => {
    return http.post<LoginResponse>('/auth/login', credentials).then((res) => res.data);
  },

  /**
   * Logout - clears cookies on backend.
   */
  logout: (): Promise<void> => {
    return http.post('/auth/logout').then(() => undefined);
  },

  /**
   * Refresh - called by interceptor on 401; backend rotates cookies.
   */
  refresh: (): Promise<void> => {
    return http.post('/auth/refresh').then(() => undefined);
  },
};
