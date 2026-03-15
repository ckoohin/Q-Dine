import http from '@/lib/api/http'
import { IQrTables, OpenQrTableResponse, OpenQrTableRequest } from '../types/qr-table.type'

export const qrTableService = {
  openQrTable: async (id: string, data: OpenQrTableRequest) => {
    const res = await http.post<OpenQrTableResponse>(`/qr-tables/${id}/open`, data)
    return res.data
  },

  checkoutQrTable: async (id: string) => {
    const res = await http.post<OpenQrTableResponse>(`/qr-tables/${id}/checkout`)
    return res.data
  },

  // getFloor: async (id: string) => {
  //   const res = await http.get<Floor>(`/floors/${id}`)
  //   return res.data
  // },

  // createFloor: async (data: CreateFloorInput) => {
  //   const res = await http.post<Floor>('/floors', data)
  //   return res.data
  // },

  // updateFloor: async (id: string, data: UpdateFloorInput) => {
  //   const res = await http.patch<Floor>(`/floors/${id}`, data)
  //   return res.data
  // },

  // deleteFloor: async (id: string) => {
  //   const res = await http.delete(`/floors/${id}`)
  //   return res.data
  // },
}

