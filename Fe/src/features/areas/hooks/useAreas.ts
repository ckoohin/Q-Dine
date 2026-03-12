'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { areaService } from '@/features/areas/services/area.service'
import { areaQueryKeys } from '@/features/areas/queries/area.query'
import type { UpdateAreaInput } from '@/features/areas/types/area.type'

export function useAreas(floorId?: string) {
  return useQuery({
    queryKey: areaQueryKeys.areas.list(floorId),
    queryFn: () => areaService.getAreas(floorId),
    staleTime: 5 * 60 * 1000,
  })
}

export function useArea(id: string) {
  return useQuery({
    queryKey: areaQueryKeys.areas.detail(id),
    queryFn: () => areaService.getArea(id),
    enabled: !!id,
  })
}

export function useCreateArea() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: areaService.createArea,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: areaQueryKeys.areas.all,
      })
    },
  })
}

export function useUpdateArea() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateAreaInput }) =>
      areaService.updateArea(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: areaQueryKeys.areas.all,
      })

      queryClient.invalidateQueries({
        queryKey: areaQueryKeys.areas.detail(variables.id),
      })
    },
  })
}

export function useDeleteArea() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: areaService.deleteArea,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: areaQueryKeys.areas.all,
      })
    },
  })
}

