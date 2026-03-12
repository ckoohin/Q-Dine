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

import type { CreateFloorInput, Floor } from "@/features/floors/types/floor.type"

const schema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên tầng"),
  maxAreas: z.coerce.number().int().min(1).max(100).optional(),
})

type Values = z.infer<typeof schema>

type Props = {
  defaultValues?: Partial<Values> | Floor
  submitText?: string
  isSubmitting?: boolean
  onSubmit: (values: CreateFloorInput) => void | Promise<void>
}

const toValues = (v?: Props["defaultValues"]): Values => ({
  name: (v as any)?.name ?? "",
  maxAreas: (v as any)?.maxAreas ?? undefined,
})

export default function FloorForm({
  defaultValues,
  submitText = "Lưu",
  isSubmitting,
  onSubmit,
}: Props) {
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
      maxAreas: values.maxAreas,
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
              <FormLabel>Tên tầng</FormLabel>
              <FormControl>
                <Input placeholder="Tầng 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxAreas"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số khu vực tối đa (tuỳ chọn)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Ví dụ: 10"
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

