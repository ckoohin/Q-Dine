"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ListTable from "@/components/list-table/ListTable"
import type { Column } from "@/components/list-table/types"
import ConfirmDialog from "@/components/common/ConfirmDialog"

import { useAreas, useCreateArea, useDeleteArea, useUpdateArea } from "@/features/areas/hooks/useAreas"
import type { Area } from "@/features/areas/types/area.type"
import AreaForm from "@/features/areas/components/AreaForm"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useFloors } from "@/features/floors/hooks/useFloors"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AreasPage() {
  const { data: floors } = useFloors()
  const [selectedFloor, setSelectedFloor] = useState<string | undefined>(undefined)

  const { data: areas, isLoading } = useAreas(selectedFloor)
  const create = useCreateArea()
  const update = useUpdateArea()
  const del = useDeleteArea()

  const [openCreate, setOpenCreate] = useState(false)
  const [editing, setEditing] = useState<Area | null>(null)

  const columns: Column<Area>[] = [
    {
      key: "name",
      title: "Tên khu vực",
    },
    {
      key: "floorId",
      title: "Tầng",
      render: (row) => floors?.find((f) => f.id === row.floorId)?.name ?? row.floorId,
    },
    {
      key: "maxTables",
      title: "Số bàn tối đa",
    },
    {
      key: "createdAt",
      title: "Ngày tạo",
      render: (row) => new Date(row.createdAt).toLocaleString(),
    },
    {
      key: "actions",
      title: "Thao tác",
      render: (row) => (
        <div className="flex items-center gap-2 justify-end">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setEditing(row)}
          >
            <Pencil size={16} />
          </Button>

          <ConfirmDialog
            title="Xóa khu vực?"
            description={`Bạn chắc chắn muốn xóa khu vực ${row.name}?`}
            confirmText="Xóa"
            cancelText="Hủy"
            onConfirm={async () => {
              try {
                await del.mutateAsync(row.id)
                toast.success("Đã xóa khu vực")
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Xóa khu vực thất bại")
              }
            }}
            trigger={
              <Button size="icon" variant="destructive">
                <Trash2 size={16} />
              </Button>
            }
          />
        </div>
      ),
      className: "text-right",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Quản lý khu vực</CardTitle>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Lọc theo tầng:</span>
              <Select
                value={selectedFloor ?? "all"}
                onValueChange={(v) => setSelectedFloor(v === "all" ? undefined : v)}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Chọn tầng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả tầng</SelectItem>
                  {floors?.map((f) => (
                    <SelectItem key={f.id} value={f.id}>
                      {f.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={() => setOpenCreate(true)} className="gap-2">
            <Plus size={16} />
            Thêm khu vực mới
          </Button>
        </CardHeader>

        <CardContent>
          {isLoading ? (
            <div className="card p-6">Đang tải...</div>
          ) : (
            <ListTable columns={columns} data={areas ?? []} />
          )}
        </CardContent>
      </Card>

      <Dialog open={openCreate} onOpenChange={setOpenCreate}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Thêm khu vực mới</DialogTitle>
          </DialogHeader>

          <AreaForm
            isSubmitting={create.isPending}
            submitText="Tạo khu vực"
            onSubmit={async (values) => {
              try {
                await create.mutateAsync(values)
                toast.success("Tạo khu vực thành công")
                setOpenCreate(false)
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Tạo khu vực thất bại")
              }
            }}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa khu vực</DialogTitle>
          </DialogHeader>

          {editing && (
            <AreaForm
              defaultValues={editing}
              isSubmitting={update.isPending}
              submitText="Cập nhật"
              onSubmit={async (values) => {
                try {
                  await update.mutateAsync({ id: editing.id, data: values })
                  toast.success("Cập nhật khu vực thành công")
                  setEditing(null)
                } catch (err: any) {
                  toast.error(err?.response?.data?.message?.message ?? "Cập nhật khu vực thất bại")
                }
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

