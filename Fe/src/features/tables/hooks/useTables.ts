'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { tableService } from '@/features/tables/services/table.service'
import { queryKeys } from '@/features/tables/queries/table.query'
import type { UpdateTableInput } from '@/features/tables/types/table.type'
import { TableStatus } from '../types/table-status.type'

export function useTables() {
  return useQuery({
    queryKey: queryKeys.tables.list(),
    queryFn: tableService.getTables,
    staleTime: 5 * 60 * 1000,
  })
}

export function useTable(id: string) {
  return useQuery({
    queryKey: queryKeys.tables.detail(id),
    queryFn: () => tableService.getTable(id),
    enabled: !!id,
  })
}

export function useCreateTable() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: tableService.createTable,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })
    },
  })
}

export function useUpdateTable() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTableInput }) =>
      tableService.updateTable(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })

      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.detail(variables.id),
      })
    },
  })
}

export function useUpdateTableStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: TableStatus }) => tableService.updateTableStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })
    },
  })
}
export function useDeleteTable() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: tableService.deleteTable,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })
    },
  })
}