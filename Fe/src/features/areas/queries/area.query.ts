export const areaQueryKeys = {
  areas: {
    all: ['areas'] as const,
    list: (floorId?: string) =>
      floorId
        ? [...areaQueryKeys.areas.all, 'list', floorId] as const
        : [...areaQueryKeys.areas.all, 'list'] as const,
    detail: (id: string) => [...areaQueryKeys.areas.all, 'detail', id] as const,
  },
} as const

