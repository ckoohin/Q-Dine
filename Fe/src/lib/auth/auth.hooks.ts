/**
 * Auth hooks - "me" query is source of truth.
 * No localStorage; all state from React Query cache.
 */

'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api/auth.api';
import { queryKeys } from '@/lib/query/keys';
import type { User, UserRole, LoginCredentials } from '@/lib/types/auth.type';

export function useAuth() {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: authApi.me,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.auth.me(), data.user);
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.me() });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: queryKeys.auth.me() });
      queryClient.clear();
      router.push('/login');
    },
  });
}

// Role helpers
export function hasRole(user: User | null | undefined, role: UserRole): boolean {
  return user?.role === role;
}

export function hasAnyRole(user: User | null | undefined, roles: UserRole[]): boolean {
  return user ? roles.includes(user.role) : false;
}

export function isAdmin(user: User | null | undefined): boolean {
  return hasRole(user, 'admin');
}

export function isStaff(user: User | null | undefined): boolean {
  return hasRole(user, 'staff');
}

export function isCustomer(user: User | null | undefined): boolean {
  return hasRole(user, 'customer');
}
