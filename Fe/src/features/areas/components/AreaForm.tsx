"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import type { Area, CreateAreaInput } from "@/features/areas/types/area.type"
import { useFloors } from "@/features/floors/hooks/useFloors"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const schema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên khu vực"),
  floorId: z.string().trim().min(1, "Vui lòng chọn tầng"),
  maxTables: z.coerce.number().int().min(1).optional(),
})

type Values = z.infer<typeof schema>

type Props = {
  defaultValues?: Partial<Values> | Area
  submitText?: string
  isSubmitting?: boolean
  onSubmit: (values: CreateAreaInput) => void | Promise<void>
}

const toValues = (v?: Props["defaultValues"]): Values => ({
  name: (v as any)?.name ?? "",
  floorId: (v as any)?.floorId ?? "",
  maxTables: (v as any)?.maxTables ?? undefined,
})

export default function AreaForm({
  defaultValues,
  submitText = "Lưu",
  isSubmitting,
  onSubmit,
}: Props) {
  const { data: floors } = useFloors()

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: toValues(defaultValues),
  })

  useEffect(() => {
    form.reset(toValues(defaultValues))
  }, [defaultValues, form])

  const handleSubmit = async (values: Values) => {
    await onSubmit({
      name: values.name,
      floorId: values.floorId,
      maxTables: values.maxTables,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên khu vực</FormLabel>
              <FormControl>
                <Input placeholder="Khu VIP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="floorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thuộc tầng</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn tầng" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {floors?.map((f) => {
                    const remaining = f.maxAreas - Number(f.areas?.length)
                    const isFull = remaining <= 0

                    return (
                      <SelectItem
                        key={f.id}
                        value={String(f.id)}
                        disabled={isFull}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {f.name}
                          </span>

                          <span className="text-xs text-muted-foreground">
                            {isFull
                              ? "Không còn khu vực trống"
                              : `Còn ${remaining} khu vực trống`}
                          </span>
                        </div>

                        {!isFull && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md">
                            {remaining}
                          </span>
                        )}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxTables"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số bàn tối đa (tuỳ chọn)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Ví dụ: 20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Đang lưu..." : submitText}
          </Button>
        </div>
      </form>
    </Form>
  )
}

