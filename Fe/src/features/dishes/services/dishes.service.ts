import http from '@/lib/api/http'
import type { TMenu, TCreateMenu } from '../types/dishes-pagination'

export const disheService = {
  getDishes: async () => {
    const res = await http.get<TMenu[]>('/dishes')
    return res.data
  },

  getDishe: async (id: string) => {
    const res = await http.get<TMenu>(`/dishes/${id}`)
    return res.data
  },

  createDishe: async (data: TCreateMenu) => {
    const res = await http.post<TCreateMenu>('/dishes', data)
    return res.data
  },

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

