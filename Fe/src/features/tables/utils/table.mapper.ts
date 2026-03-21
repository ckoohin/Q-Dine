import { TableFormValues } from "../schemas/table.schema"

export const toTableFormValues = (v?: any): TableFormValues => ({
  number: v?.number ?? "",
  capacity: Number(v?.capacity ?? 1),
  floorId: String(v?.floorId ?? ""),
  areaId: v?.areaId ?? "",
  status: v?.status ?? "AVAILABLE",
  notes: v?.notes ?? "",
})