'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { setOnUnauthenticated } from '@/lib/api/http';
import { queryKeys } from '@/lib/query/keys';

/**
 * Registers the global 401 handler - clears auth cache and redirects to login.
 * Renders nothing; must be inside QueryClientProvider.
 */
export function AuthSetup() {
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      queryClient.removeQueries({ queryKey: queryKeys.auth.me() });
      queryClient.clear();
      router.push('/login');
    };
    setOnUnauthenticated(handler);
    return () => setOnUnauthenticated(null);
  }, [queryClient, router]);

  return null;
}
