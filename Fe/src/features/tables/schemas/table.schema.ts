import { z } from "zod"

export const tableSchema = z.object({
  number: z.string().trim().min(1, "Vui lòng nhập số/mã bàn"),
  capacity: z.coerce.number().int().min(1, "Sức chứa phải >= 1"),
  floorId: z.string().trim().min(1, "Vui lòng chọn tầng"),
  areaId: z.string().trim().min(1, "Vui lòng chọn khu vực"),
  status: z.enum(["AVAILABLE", "RESERVED", "OCCUPIED", "CLEANING"]),
  notes: z.string().trim().optional(),
})

export type TableFormValues = z.infer<typeof tableSchema>