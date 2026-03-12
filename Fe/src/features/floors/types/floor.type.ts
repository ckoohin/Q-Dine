import { Area } from "@/features/areas/types/area.type"

export interface Floor {
  id: string
  name: string
  maxAreas: number
  isDeleted: boolean
  areas?: Area[]
  createdAt: string
  updatedAt: string
}

export type CreateFloorInput = {
  name: string
  maxAreas?: number
}

export type UpdateFloorInput = Partial<CreateFloorInput>

