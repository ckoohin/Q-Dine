"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { string, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import type { CreateTableInput, Table } from "@/features/tables/types/table.type"
import type { TableStatus } from "@/features/tables/types/table-status.type"
import { useFloors } from "@/features/floors/hooks/useFloors"
import { useAreas } from "@/features/areas/hooks/useAreas"

const schema = z.object({
  number: z.string().trim().min(1, "Vui lòng nhập số/mã bàn"),
  capacity: z.coerce.number().int().min(1, "Sức chứa phải >= 1"),
  floorId: z.string().trim().min(1, "Vui lòng chọn tầng"),
  areaId: z.string().trim().min(1, "Vui lòng chọn khu vực"),
  status: z.enum(["AVAILABLE", "RESERVED", "OCCUPIED", "CLEANING"]),
  notes: z.string().trim().optional(),
})

export type TableFormValues = z.infer<typeof schema>

type Props = {
  defaultValues?: Partial<TableFormValues> | Table
  submitText?: string
  isSubmitting?: boolean
  onSubmit: (values: CreateTableInput) => void | Promise<void>
  onCancel?: () => void
}

const toValues = (v?: Props["defaultValues"]): TableFormValues => ({
  number: (v as any)?.number ?? "",
  capacity: Number((v as any)?.capacity ?? 1),
  floorId: String((v as any)?.floorId ?? ""),
  areaId: ((v as any)?.areaId ?? "") || "",
  status: ((v as any)?.status as TableStatus) ?? "AVAILABLE",
  notes: (v as any)?.notes ?? "",
})

export default function TableForm({
  defaultValues,
  submitText = "Lưu thông tin",
  isSubmitting,
  onSubmit,
  onCancel,
}: Props) {
  const form = useForm<TableFormValues>({
    resolver: zodResolver(schema),
    defaultValues: toValues(defaultValues),
  })

  useEffect(() => {
    form.reset(toValues(defaultValues))
  }, [defaultValues, form])

  const { data: floors, isLoading } = useFloors()

  const selectedFloorId = form.watch("floorId")

  const selectedFloor = floors?.find(
    (f) => String(f.id) === selectedFloorId
  )

  const areas = selectedFloor?.areas ?? []

  const handleSubmit = async (values: TableFormValues) => {
    await onSubmit({
      number: values.number,
      capacity: values.capacity,
      floorId: values.floorId,
      areaId: values.areaId,
      status: values.status,
      notes: values.notes,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số/Mã bàn</FormLabel>
                <FormControl>
                  <Input placeholder="T-08" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sức chứa</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="floorId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tầng</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value)

                    // reset area khi đổi tầng
                    form.setValue("areaId", "")
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tầng" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {floors?.map((floor) => (
                      <SelectItem
                        key={floor.id}
                        value={String(floor.id)}
                      >
                        {floor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areaId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Khu vực</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={!selectedFloorId}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn khu vực" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {areas.length > 0 ? (
                      areas.map((area) => (
                        <SelectItem
                          key={area.id}
                          value={String(area.id)}
                        >
                          {area.name}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="px-2 py-2 text-sm text-muted-foreground">
                        Không có khu vực
                      </div>
                    )}
                  </SelectContent>

                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trạng thái</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn trạng thái" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="AVAILABLE">Trống</SelectItem>
                  <SelectItem value="OCCUPIED">Đang dùng</SelectItem>
                  <SelectItem value="RESERVED">Đã đặt</SelectItem>
                  <SelectItem value="CLEANING">Đang dọn</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ghi chú</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Nhập ghi chú..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 mb-4">
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel}>
              Hủy
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Đang lưu..." : submitText}
          </Button>
        </div>
      </form>
    </Form>
  )
}

