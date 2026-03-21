import { z } from "zod"

export const menuSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên món"),
  description: z.string().optional(),
  price: z.coerce.number().min(0, "Giá phải >= 0"),
  status: z.enum(["AVAILABLE", "UNAVAILABLE"]),
  imageUrl: z.string().optional(),
})

export type MenuFormValues = z.infer<typeof menuSchema>