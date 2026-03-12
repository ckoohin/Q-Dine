"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ListTable from "@/components/list-table/ListTable"
import type { Column } from "@/components/list-table/types"
import ConfirmDialog from "@/components/common/ConfirmDialog"

import { useCreateFloor, useDeleteFloor, useFloors, useUpdateFloor } from "@/features/floors/hooks/useFloors"
import type { Floor } from "@/features/floors/types/floor.type"
import FloorForm from "@/features/floors/components/floor-form"
import { Plus, Pencil, Trash2 } from "lucide-react"
import FloorActionsDropdown from "@/features/floors/components/floor-actions-dropdown"
import TableSkeleton from "@/components/loadings/TableLoading"

export default function FloorsPage() {
  const { data: floors, isLoading } = useFloors()
  const create = useCreateFloor()
  const update = useUpdateFloor()
  const del = useDeleteFloor()

  const [openCreate, setOpenCreate] = useState(false)
  const [editing, setEditing] = useState<Floor | null>(null)

  const columns: Column<Floor>[] = [
    {
      key: "name",
      title: "Tên tầng",
    },
    {
      key: "maxAreas",
      title: "Số khu vực tối đa",
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
          <FloorActionsDropdown
            floor={row}
            onEdit={() => setEditing(row)}
          />
        </div>
      ),
      className: "text-right",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Danh sách Tầng</h1>
          <p className="text-slate-500 mt-1">Quản lý cấu trúc các tầng trong cơ sở của bạn.</p>
        </div>
        <Button onClick={() => setOpenCreate(true)} className="gap-2">
          <Plus size={16} />
          Thêm tầng mới
        </Button>
      </div>
      {isLoading ? (
        <TableSkeleton/>
      ) : (
        <ListTable columns={columns} data={floors ?? []} />
      )}

      <Dialog open={openCreate} onOpenChange={setOpenCreate}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Thêm tầng mới</DialogTitle>
          </DialogHeader>

          <FloorForm
            isSubmitting={create.isPending}
            submitText="Tạo tầng"
            onSubmit={async (values) => {
              try {
                await create.mutateAsync(values)
                toast.success("Tạo tầng thành công")
                setOpenCreate(false)
              } catch (err: any) {
                toast.error(err?.response?.data?.message?.message ?? "Tạo tầng thất bại")
              }
            }}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa tầng</DialogTitle>
          </DialogHeader>

          {editing && (
            <FloorForm
              defaultValues={editing}
              isSubmitting={update.isPending}
              submitText="Cập nhật"
              onSubmit={async (values) => {
                try {
                  await update.mutateAsync({ id: editing.id, data: values })
                  toast.success("Cập nhật tầng thành công")
                  setEditing(null)
                } catch (err: any) {
                  toast.error(err?.response?.data?.message?.message ?? "Cập nhật tầng thất bại")
                }
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

