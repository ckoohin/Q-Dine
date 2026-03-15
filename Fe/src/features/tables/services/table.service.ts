import http from '@/lib/api/http'
import type { TCreateTableInput, TTable, UpdateTableInput } from '../types/table.type'
import { TableStatus } from '../types/table-status.type'

export const tableService = {

  getTables: async () => {
    const res = await http.get<TTable[]>('/tables')
    return res.data
  },

  getTable: async (id: string) => {
    const res = await http.get<TTable>(`/tables/${id}`)
    return res.data
  },

  createTable: async (data: TCreateTableInput) => {
    const res = await http.post<TTable>('/tables', data)
    return res.data
  },

  updateTable: async (id: string, data: UpdateTableInput) => {
    const res = await http.patch<TTable>(`/tables/${id}`, data)
    return res.data
  },

  updateTableStatus: async (id: string, status: TableStatus) => {
    const res = await http.patch<TTable>(`/tables/${id}`, { status })
    return res.data
  },

  deleteTable: async (id: string) => {
    const res = await http.delete(`/tables/${id}`)
    return res.data
  }

}