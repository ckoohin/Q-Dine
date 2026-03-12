import { TableStatus } from "./table-status.type"

export interface Table {
  id: string
  floorId: string
  areaId: string | null
  number: string
  capacity: number
  status: TableStatus
  notes: string
  currentGuests?: string
  serviceType?:string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

// Payload dùng cho tạo mới bàn (khớp CreateTableDto bên BE)
export type CreateTableInput = {
  floorId: string
  areaId: string
  number: string
  capacity: number
  status?: TableStatus
  notes?: string
}

// Payload update cho phép partial
export type UpdateTableInput = Partial<CreateTableInput>