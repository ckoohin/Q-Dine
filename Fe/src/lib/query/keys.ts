/**
 * Query keys - Centralized for consistency and cache invalidation.
 * Use with React Query's queryKey and queryClient.invalidateQueries.
 */

export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    me: () => [...queryKeys.auth.all, 'me'] as const,
  },
} as const;
