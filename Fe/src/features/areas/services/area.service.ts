import http from '@/lib/api/http'
import type { Area, CreateAreaInput, UpdateAreaInput } from '../types/area.type'

export const areaService = {
  getAreas: async (floorId?: string) => {
    const res = await http.get<Area[]>('/areas', {
      params: floorId ? { floorId } : undefined,
    })
    return res.data
  },

  getArea: async (id: string) => {
    const res = await http.get<Area>(`/areas/${id}`)
    return res.data
  },

  createArea: async (data: CreateAreaInput) => {
    const res = await http.post<Area>('/areas', data)
    return res.data
  },

  updateArea: async (id: string, data: UpdateAreaInput) => {
    const res = await http.patch<Area>(`/areas/${id}`, data)
    return res.data
  },

  deleteArea: async (id: string) => {
    const res = await http.delete(`/areas/${id}`)
    return res.data
  },
}

