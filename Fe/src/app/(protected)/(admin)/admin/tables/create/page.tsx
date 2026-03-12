"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Table2, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import TableForm from "@/features/tables/components/table-form"
import { useCreateTable } from "@/features/tables/hooks/useTables"

export default function CreateTablePage() {
  const router = useRouter()
  const create = useCreateTable()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.back()} className="gap-2">
          <ChevronLeft size={18} />
          Quay lại
        </Button>
      </div>

      <Card className="rounded-3xl">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Table2 size={18} />
          </div>
          <CardTitle className="text-xl font-semibold">Thêm bàn mới</CardTitle>
        </CardHeader>

        <CardContent>
          <TableForm
            isSubmitting={create.isPending}
            submitText="Tạo bàn"
            onCancel={() => router.push("/admin/tables")}
            onSubmit={async (values) => {
              try {
                await create.mutateAsync(values)
                toast.success("Tạo bàn thành công")
                router.push("/admin/tables")
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Tạo bàn thất bại")
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}