'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { qrTableQueryKeys } from '@/features/qr_table/queries/qr_table.query'
import { qrTableService } from '../services/qr-table.service'
import { IQrTables } from '../types/qr-table.type'

// export function useFloors() {
//   return useQuery({
//     queryKey: floorQueryKeys.floors.list(),
//     queryFn: floorService.getFloors,
//     staleTime: 5 * 60 * 1000,
//   })
// }

// export function useFloor(id: string) {
//   return useQuery({
//     queryKey: floorQueryKeys.floors.detail(id),
//     queryFn: () => floorService.getFloor(id),
//     enabled: !!id,
//   })
// }

export const useOpenQrTable = (id: string) => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => qrTableService.openQrTable(id),

    onSuccess: (data) => {
      queryClient.setQueryData(
        qrTableQueryKeys.qr_table.open(),
        data
      )
    }
  })
}

// export function useUpdateFloor() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: ({ id, data }: { id: string; data: UpdateFloorInput }) =>
//       floorService.updateFloor(id, data),

//     onSuccess: (_, variables) => {
//       queryClient.invalidateQueries({
//         queryKey: floorQueryKeys.floors.list(),
//       })

//       queryClient.invalidateQueries({
//         queryKey: floorQueryKeys.floors.detail(variables.id),
//       })
//     },
//   })
// }

// export function useDeleteFloor() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: floorService.deleteFloor,

//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: floorQueryKeys.floors.list(),
//       })
//     },
//   })
// }

