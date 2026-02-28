'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth/auth.hooks';

/**
 * Protected layout - gates routes behind authentication.
 * "me" query is source of truth; redirects to login when unauthenticated.
 */
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: user, isLoading, isError, error } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (isError || !user) {
      const loginUrl = new URL('/login', window.location.origin);
      loginUrl.searchParams.set('next', pathname);
      router.replace(loginUrl.toString());
    }
  }, [user, isLoading, isError, error, router, pathname]);

  if (isLoading || isError || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
