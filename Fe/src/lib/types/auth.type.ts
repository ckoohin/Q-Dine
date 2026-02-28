/**
 * Auth types - Role and user DTOs for cookie-based httpOnly authentication.
 * No localStorage tokens; all auth state derived from "me" query.
 */

export type UserRole = 'admin' | 'staff' | 'customer';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  avatar?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: User;
}

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};
