"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormValues, TCreateMenu } from "../types/dishes-pagination"

// const schema = z.object({
//   name: z.string().min(1, "Nhập tên món"),
//   description: z.string().optional(),
//   price: z.coerce.number().min(0, "Giá không hợp lệ"),
//   status: z.enum(["AVAILABLE", "UNAVAILABLE"]),
//   imageUrl: z.string().optional(),
// })


// type FormValue = z.infer<typeof schema>


type Props = {
  defaultValues?: Partial<FormValues>
  onSubmit: (data: FormValues ) => void | Promise<void>
  isSubmitting?: boolean
  submitText?: string
  onCancel?: () => void
}

export default function DishesForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  submitText,
  onCancel,
}: Props) {
  const [preview, setPreview] = useState(defaultValues?.imageUrl)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      status: "AVAILABLE",
      imageUrl: "",
      ...defaultValues,
    },
  })

  const status = watch("status")

  return (
    <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-xl custom-shadow overflow-hidden flex flex-col mx-auto">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary">
              restaurant_menu
            </span>
          </div>
          <h2 className="text-xl font-bold">Chỉnh sửa món ăn</h2>
        </div>

        <Link href="/admin/menu" className="p-2 hover:bg-slate-100 rounded-full">
          <X />
        </Link>
      </header>

      {/* Body */}
      <div className="px-8 py-6 overflow-y-auto max-h-[75vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Upload */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Hình ảnh món ăn</p>

            <div
              className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center gap-3 bg-slate-50 hover:border-primary/50 cursor-pointer"
              onClick={() => {
                const url = prompt("Nhập URL ảnh")
                if (url) {
                  setValue("imageUrl", url)
                  setPreview(url)
                }
              }}
            >
              {preview ? (
                <img src={preview} className="h-32 rounded-lg object-cover" />
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nhấn để tải ảnh
                </p>
              )}
            </div>
          </div>

          {/* Name + Category */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Tên món ăn</label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Category (UI only) */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Danh mục</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Món chính</SelectItem>
                  <SelectItem value="starter">Khai vị</SelectItem>
                  <SelectItem value="dessert">Tráng miệng</SelectItem>
                  <SelectItem value="drink">Đồ uống</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Mô tả chi tiết</label>
            <Textarea {...register("description")} />
          </div>

          {/* Price + Status */}
          <div className="grid md:grid-cols-2 gap-4 items-end">

            {/* Price */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">Giá bán</label>
              <Input type="number" {...register("price")} />
              {errors.price && (
                <p className="text-red-500 text-xs">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div className="flex items-center justify-between p-3 rounded-lg border bg-slate-50">
              <span className="text-sm font-semibold">Đang bán</span>
              <Switch
                checked={status === "AVAILABLE"}
                onCheckedChange={(v) =>
                  setValue("status", v ? "AVAILABLE" : "INACTIVE")
                }
              />
            </div>
          </div>

          {/* Hidden submit button để form submit đúng */}
          <button type="submit" className="hidden" />
        </form>
      </div>

      {/* Footer */}
      <footer className="px-8 py-6 border-t flex justify-end gap-3">
        <Button variant="ghost" onClick={onCancel}>Hủy</Button>

        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang lưu..." : submitText}
        </Button>
      </footer>
    </div>
  )
}