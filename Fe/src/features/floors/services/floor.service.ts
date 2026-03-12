import http from '@/lib/api/http'
import type { CreateFloorInput, Floor, UpdateFloorInput } from '../types/floor.type'

export const floorService = {
  getFloors: async () => {
    const res = await http.get<Floor[]>('/floors')
    return res.data
  },

  getFloor: async (id: string) => {
    const res = await http.get<Floor>(`/floors/${id}`)
    return res.data
  },

  createFloor: async (data: CreateFloorInput) => {
    const res = await http.post<Floor>('/floors', data)
    return res.data
  },

  updateFloor: async (id: string, data: UpdateFloorInput) => {
    const res = await http.patch<Floor>(`/floors/${id}`, data)
    return res.data
  },

  deleteFloor: async (id: string) => {
    const res = await http.delete(`/floors/${id}`)
    return res.data
  },
}

