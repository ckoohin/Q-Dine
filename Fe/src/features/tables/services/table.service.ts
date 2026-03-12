import http from '@/lib/api/http'
import type { CreateTableInput, Table, UpdateTableInput } from '../types/table.type'

export const tableService = {

  getTables: async () => {
    const res = await http.get<Table[]>('/tables')
    return res.data
  },

  getTable: async (id: string) => {
    const res = await http.get<Table>(`/tables/${id}`)
    return res.data
  },

  createTable: async (data: CreateTableInput) => {
    const res = await http.post<Table>('/tables', data)
    return res.data
  },

  updateTable: async (id: string, data: UpdateTableInput) => {
    const res = await http.patch<Table>(`/tables/${id}`, data)
    return res.data
  },

  deleteTable: async (id: string) => {
    const res = await http.delete(`/tables/${id}`)
    return res.data
  }

}