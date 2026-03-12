export const queryKeys = {
  tables: {
    all: ['tables'] as const,
    list: () => [...queryKeys.tables.all, 'list'] as const,
    detail: (id: string) => [...queryKeys.tables.all, 'detail', id] as const,
  },
} as const;