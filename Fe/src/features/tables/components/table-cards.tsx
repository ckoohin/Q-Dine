"use client"

import { Users, Table2, Plus, UtensilsCrossed } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { useDeleteTable, useTables, useUpdateTable } from "../hooks/useTables"
import TableActionsDropdown from "./table-actions-dropdown"
import { useFilteredTables } from "../hooks/useFilteredTables"
import EmptyState from "@/components/ui/empty-state"
import Link from "next/link"
import { toast } from "sonner"
import { useState } from "react"
import type { TTable } from "../types/table.type"
import TableEdit from "./table-edit"
import { tableStatusConfig } from "../config/table-status-config"
import TableCreateForm from "./table-create-form"
import { useTableEdit } from "../context/table-edit-context"

export default function TableCards() {

  const { data: tables } = useTables()
  const filteredTables = useFilteredTables(tables)

  const update = useUpdateTable()
  const del = useDeleteTable()

  const { editing, setEditing } = useTableEdit()

  if (!filteredTables.length) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <EmptyState
          title="Không tìm thấy bàn"
          description="Không có bàn nào phù hợp với bộ lọc hiện tại."
        />
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {filteredTables.map((item) => {

          const status = tableStatusConfig[item.status]
          const StatusIcon = status.icon

          const isAvailable = item.status === "AVAILABLE"

          return (
            <div
              key={item.id}
              className={`group relative rounded-2xl border p-5 shadow-sm transition hover:shadow-xl hover:-translate-y-1 ${status.className} bg-white`}
            >

              {/* header */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className={`size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary ${status.className}`}>
                    <Table2 size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-base">
                      Bàn {item.number}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      Tầng {item.floorId}
                    </p>
                  </div>

                </div>

                <TableActionsDropdown
                  table={item}
                  onEdit={() => {
                    setEditing(item)
                  }}
                  onDelete={async (t) => {
                    try {
                      await del.mutateAsync(t.id)
                      toast.success("Đã xóa bàn")
                    } catch (err: any) {
                      toast.error(err?.response?.data?.message?.message ?? "Xóa bàn thất bại")
                    }
                  }}
                />

              </div>


              {/* divider */}
              <div className="my-4 h-px bg-border" />


              {/* capacity */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users size={15} />

                  <span className="text-sm">
                    {isAvailable
                      ? `Tối đa ${item.capacity} khách`
                      : `${item.currentGuests ?? 0}/${item.capacity} khách`
                    }
                  </span>
                </div>

                <Badge
                  variant="outline"
                  className={`flex items-center gap-1.5 ${status.className}`}
                >
                  <span className={`size-1.5 rounded-full ${status.dot}`} />
                  <StatusIcon size={14} />
                  {status.label}
                </Badge>

              </div>


              {/* service type */}
              {!isAvailable && item.serviceType && (
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <UtensilsCrossed size={14} />
                  {item.serviceType === "BUFFET" ? "Buffet" : "Gọi món"}
                </div>
              )}


              {/* action */}
              {isAvailable && (
                <Link href={`qr_table/${item.id}`}>
                  <Button
                    className="w-full mt-4 rounded-xl bg-[var(--savory-green)] hover:bg-[var(--savory-dark)]"
                  >
                    <Plus size={16} />
                    Mở bàn
                  </Button>
                </Link >

              )}

            </div>

          )
        })}
      </div>
    </>
  )
}
