"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import { ChevronLeft, Table2, Users, Pencil, QrCode, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import ConfirmDialog from "@/components/common/ConfirmDialog"
import TableForm from "@/features/tables/components/table-form"
import { useDeleteTable, useTable, useUpdateTable } from "@/features/tables/hooks/useTables"
import { tableStatusConfig } from "@/features/tables/config/table-status-config"
import { cn } from "@/lib/utils"

export default function TableDetailPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const id = String(params?.id ?? "")

  const { data: table, isLoading, isError } = useTable(id)
  const update = useUpdateTable()
  const del = useDeleteTable()

  const [openEdit, setOpenEdit] = useState(false)

  const status = useMemo(() => {
    if (!table) return null
    return tableStatusConfig[table.status]
  }, [table])

  if (isLoading) {
    return <div className="card p-6">Đang tải...</div>
  }

  if (isError || !table) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => router.push("/admin/tables")} className="gap-2">
          <ChevronLeft size={18} />
          Về danh sách
        </Button>
        <div className="card p-6">Không tìm thấy bàn hoặc có lỗi khi tải dữ liệu.</div>
      </div>
    )
  }

  const StatusIcon = status?.icon

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.back()} className="gap-2">
          <ChevronLeft size={18} />
          Quay lại
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2" onClick={() => setOpenEdit(true)}>
            <Pencil size={16} />
            Chỉnh sửa
          </Button>

          <ConfirmDialog
            title="Xóa bàn?"
            description={`Bạn chắc chắn muốn xóa bàn ${table.number}?`}
            confirmText="Xóa"
            cancelText="Hủy"
            onConfirm={async () => {
              try {
                await del.mutateAsync(table.id)
                toast.success("Đã xóa bàn")
                router.push("/admin/tables")
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Xóa bàn thất bại")
              }
            }}
            trigger={
              <Button variant="destructive" className="gap-2">
                <Trash2 size={16} />
                Xóa
              </Button>
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-neutral-soft dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("size-10 rounded-xl flex items-center justify-center text-primary", status?.iconClass)}>
                  <Table2 size={18} />
                </div>
                <div className="leading-tight">
                  <div className="text-xl font-black">{table.number}</div>
                  <div className="text-sm text-muted-foreground">
                    Tầng {table.floorId}{table.areaId ? ` • Khu ${table.areaId}` : ""}
                  </div>
                </div>
              </div>

              {status && StatusIcon && (
                <Badge
                  variant="outline"
                  className={`flex items-center rounded-full p-1 px-2 gap-1.5 w-fit ${status.className}`}
                >
                  <span className={`size-1.5 rounded-full ${status.dot}`} />
                  <StatusIcon size={14} />
                  {status.label}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={16} />
              <span>{table.capacity} Pax</span>
            </div>

            <Link href={`/admin/qr_table/${table.id}`}>
              <Button className="gap-2 w-full">
                <QrCode size={16} />
                Khởi tạo QR (coming soon)
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-neutral-soft dark:border-slate-800">
            <h3 className="text-lg font-bold mb-6">Thông tin chi tiết</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Vị trí</p>
                <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                  Tầng {table.floorId}{table.areaId ? ` • Khu ${table.areaId}` : ""}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Sức chứa</p>
                <p className="text-base font-medium text-slate-800 dark:text-slate-100">{table.capacity} người</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ngày tạo</p>
                <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                  {new Date(table.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cập nhật lần cuối</p>
                <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                  {new Date(table.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-neutral-soft dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Ghi chú</h3>
            <div className="text-slate-700 dark:text-slate-300">
              {table.notes?.trim() ? table.notes : <span className="text-muted-foreground">Chưa có ghi chú.</span>}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-xl rounded-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa bàn</DialogTitle>
          </DialogHeader>

          <TableForm
            defaultValues={table}
            isSubmitting={update.isPending}
            submitText="Cập nhật"
            onCancel={() => setOpenEdit(false)}
            onSubmit={async (values) => {
              try {
                await update.mutateAsync({ id: table.id, data: values })
                toast.success("Cập nhật bàn thành công")
                setOpenEdit(false)
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Cập nhật bàn thất bại")
              }
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}