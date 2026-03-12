export interface Area {
  id: string
  name: string
  floorId: string
  maxTables: number
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
export type CreateAreaInput = {
  name: string
  floorId: string
  maxTables?: number
  maxCapacity?: number
}

export type UpdateAreaInput = Partial<CreateAreaInput>

