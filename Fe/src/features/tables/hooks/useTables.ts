'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { tableService } from '@/features/tables/services/table.service'
import { queryKeys } from '@/features/tables/queries/table.query'
import type { TCreateTableInput, UpdateTableInput } from '@/features/tables/types/table.type'
import { TableStatus } from '../types/table-status.type'
import { toast } from 'sonner'
import axios from 'axios'

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
      toast.success("Thêm bàn thành công")
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })
    },
    onError: (error: any) => {
      let message = 'Thêm bàn thất bại'
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message
      } else if (error instanceof Error) {
        message = error.message
      }
      toast.error(message)
    }
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
    onError: (error: any) => {
      let message = 'Cập nhật bàn thất bại'
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message
      } else if (error instanceof Error) {
        message = error.message
      }
      toast.error(message)
    }
  })
}

export function useUpdateTableStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: TableStatus }) => tableService.updateTableStatus(id, status),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.detail(variables.id),
      })

      queryClient.invalidateQueries({
        queryKey: queryKeys.tables.list(),
      })
    },
    onError: (error: unknown) => {
      let message = 'Cập nhật trạng thái bàn thất bại'
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message
      } else if (error instanceof Error) {
        message = error.message
      }
      toast.error(message)
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

    onError: (error: unknown) => {
      let message = 'Xóa bàn thất bại'
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message
      } else if (error instanceof Error) {
        message = error.message
      }
      toast.error(message)
    }
  })
}