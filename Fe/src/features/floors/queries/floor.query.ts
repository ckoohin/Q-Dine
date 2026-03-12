export const floorQueryKeys = {
  floors: {
    all: ['floors'] as const,
    list: () => [...floorQueryKeys.floors.all, 'list'] as const,
    detail: (id: string) => [...floorQueryKeys.floors.all, 'detail', id] as const,
  },
} as const

