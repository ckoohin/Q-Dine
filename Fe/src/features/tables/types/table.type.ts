import { TableStatus } from "./table-status.type"

export type TTable = {
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
export type TCreateTableInput = {
  number: string
  capacity: number
  floorId: string
  areaId: string
  status?: TableStatus
  notes?: string
}

export type UpdateTableInput = Partial<TCreateTableInput>