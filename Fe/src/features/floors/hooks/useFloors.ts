'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { floorService } from '@/features/floors/services/floor.service'
import { floorQueryKeys } from '@/features/floors/queries/floor.query'
import type { UpdateFloorInput } from '@/features/floors/types/floor.type'

export function useFloors() {
  return useQuery({
    queryKey: floorQueryKeys.floors.list(),
    queryFn: floorService.getFloors,
    staleTime: 5 * 60 * 1000,
  })
}

export function useFloor(id: string) {
  return useQuery({
    queryKey: floorQueryKeys.floors.detail(id),
    queryFn: () => floorService.getFloor(id),
    enabled: !!id,
  })
}

export function useCreateFloor() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: floorService.createFloor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: floorQueryKeys.floors.list(),
      })
    },
  })
}

export function useUpdateFloor() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateFloorInput }) =>
      floorService.updateFloor(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: floorQueryKeys.floors.list(),
      })

      queryClient.invalidateQueries({
        queryKey: floorQueryKeys.floors.detail(variables.id),
      })
    },
  })
}

export function useDeleteFloor() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: floorService.deleteFloor,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: floorQueryKeys.floors.list(),
      })
    },
  })
}

