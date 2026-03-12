'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/features/auth/hooks/auth.hooks';
import TopLoadingBar from '@/components/loadings/TopLoadingBar';

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
      <>
        <div className="flex items-center justify-center h-screen">
          <TopLoadingBar />
        </div>
      </>
    );
  }

  return <>{children}</>;
}
