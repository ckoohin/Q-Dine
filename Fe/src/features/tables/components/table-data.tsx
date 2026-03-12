"use client"

import { useMemo, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Users,
  Table2,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

import TablePagination from "./table-pagination"
import TableSkeleton from "@/components/loadings/TableLoading"
import { useDeleteTable, useTables, useUpdateTable } from "../hooks/useTables"
import TableActionsDropdown from "./table-actions-dropdown"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import TableForm from "./table-form"
import type { Table as TableType } from "../types/table.type"
import { useTableFilter } from "../context/table-filter.context"
import { useFilteredTables } from "../hooks/useFilteredTables"
export const tableStatusConfig = {
  AVAILABLE: {
    label: "Trống",
    icon: CheckCircle,
    className: "bg-green-100 text-green-700 border-green-200",
    iconClass: "bg-green-500",
    classCard: "bg-green-100 text-green-700 border-green-200",
    dot: "bg-green-500",
  },

  RESERVED: {
    label: "Đặt trước",
    icon: Clock,
    className: "bg-yellow-100 text-yellow-700 border-yellow-200",
    iconClass: "bg-yellow-500",
    dot: "bg-yellow-500",
  },

  OCCUPIED: {
    label: "Đang dùng",
    icon: Users,
    className: "bg-red-100 text-red-700 border-red-200",
    classCard: "",
    iconClass: "bg-red-500",
    dot: "bg-red-500",
  },

  CLEANING: {
    label: "Đang dọn",
    icon: Sparkles,
    className: "bg-blue-100 text-blue-700 border-blue-200",
    iconClass: "bg-blue-500",
    dot: "bg-blue-500",
  },
}

export default function TableData() {
  const { data: tables, isLoading } = useTables()
  const update = useUpdateTable()
  const del = useDeleteTable()

  const [editing, setEditing] = useState<TableType | null>(null)

  const filteredTables = useFilteredTables(tables)

  return (
    <div className="rounded-3xl border bg-white overflow-hidden">

      <div className="overflow-x-auto">
        <Table>

          {/* HEADER */}
          <TableHeader className="bg-muted/40">
            <TableRow className="text-xs uppercase tracking-wider text-muted-foreground h-14">

              <TableHead className="w-12">
                <Checkbox className="mx-auto block" />
              </TableHead>

              <TableHead>Mã bàn</TableHead>
              <TableHead>Tên bàn</TableHead>
              <TableHead>Vị trí</TableHead>
              <TableHead>Sức chứa</TableHead>
              <TableHead>Trạng thái</TableHead>

              <TableHead className="text-right pr-5">
                Thao tác
              </TableHead>

            </TableRow>
          </TableHeader>

          {/* BODY */}
          {isLoading ? (
            <TableSkeleton rows={10} columns={6} />
          ) : (
            <TableBody>

              {filteredTables.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                    Không có bàn nào phù hợp với bộ lọc
                  </TableCell>
                </TableRow>
              ) :
                (
                  filteredTables?.map((item) => {

                    const statust = tableStatusConfig[item.status]
                    const StatusIcon = statust.icon

                    return (
                      <TableRow
                        key={item.id}
                        className="hover:bg-muted/50 transition h-18 border-y-black/"
                      >

                        {/* Checkbox */}
                        <TableCell>
                          <Checkbox className="mx-auto block" />
                        </TableCell>

                        {/* Code */}
                        <TableCell className="font-mono text-muted-foreground text-sm">
                          {item.number}
                        </TableCell>

                        {/* Name */}
                        <TableCell>
                          <div className="flex items-center gap-3">

                            <div className={`size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary ${statust.className}`}>
                              <Table2 size={16} />
                            </div>

                            <span className="font-medium">
                              Bàn VIP {item.number}
                            </span>

                          </div>
                        </TableCell>

                        {/* Location */}
                        <TableCell>
                          <div className="flex flex-col leading-tight">
                            <span className="text-sm font-medium">
                              Tầng {item.floorId}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Khu VIP
                            </span>
                          </div>
                        </TableCell>

                        {/* Capacity */}
                        <TableCell>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Users size={14} />
                            <span className="text-sm">
                              {item.capacity} Pax
                            </span>
                          </div>
                        </TableCell>

                        {/* Status */}
                        <TableCell>

                          <Badge
                            variant="outline"
                            className={`flex items-center rounded-full p-1 px-2 gap-1.5 w-fit ${statust.className}`}
                          >
                            <span className={`size-1.5 rounded-full ${statust.dot}`} />

                            <StatusIcon size={14} />

                            {statust.label}

                          </Badge>

                        </TableCell>

                        {/* Actions */}
                        <TableCell className="text-right pr-5">

                          <TableActionsDropdown
                            table={item}
                            onEdit={() => setEditing(item)}
                            onDelete={async (t) => {
                              try {
                                await del.mutateAsync(t.id)
                                toast.success("Đã xóa bàn")
                              } catch (err: any) {
                                toast.error(err?.response?.data?.message?.message ?? "Xóa bàn thất bại")
                              }
                            }}
                          />

                        </TableCell>

                      </TableRow>
                    )
                  })
                )
              }

            </TableBody>
          )}

        </Table>
      </div>

      <TablePagination />

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-xl rounded-2xl">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa bàn</DialogTitle>
          </DialogHeader>

          {editing && (
            <TableForm
              defaultValues={editing}
              isSubmitting={update.isPending}
              submitText="Cập nhật"
              onCancel={() => setEditing(null)}
              onSubmit={async (values) => {
                try {
                  await update.mutateAsync({ id: editing.id, data: values })
                  toast.success("Cập nhật bàn thành công")
                  setEditing(null)
                } catch (err: any) {
                  toast.error(err?.response?.data?.message?.message ?? "Cập nhật bàn thất bại")
                }
              }}
            />
          )}
        </DialogContent>
      </Dialog>

    </div>
  )
}