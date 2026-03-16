"use client"

import { Users, Table2, Plus, UtensilsCrossed } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { useDeleteTable, useTables, useUpdateTable } from "../hooks/useTables"
import TableActionsDropdown from "./table-actions-dropdown"
import { useFilteredTables } from "../hooks/useFilteredTables"
import Link from "next/link"
import { toast } from "sonner"
import { tableStatusConfig } from "../config/table-status-config"
import { useTableEdit } from "../context/table-edit-context"
import { TableCardSkeleton } from "@/components/loadings/loading-table-card"
import { cn } from "@/lib/utils"

export default function TableCards() {

  const { data: tables, isLoading } = useTables()
  const filteredTables = useFilteredTables(tables)

  const update = useUpdateTable()
  const del = useDeleteTable()

  const { editing, setEditing } = useTableEdit()

  return (
    <>
      {
        isLoading ? (

          <TableCardSkeleton />
        ) : (

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredTables.map((item) => {

              const status = tableStatusConfig[item.status]
              const StatusIcon = status.icon

              const isAvailable = item.status === "AVAILABLE"

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-3xl min-h-[200px] border-t-7 p-5 shadow-xl transition hover:shadow-2xl hover:-translate-y-1 ${status.classCard}`}
                >
                  {/* header */}
                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className={cn(`size-10 rounded-xl flex items-center justify-center shadow-sm`, status.iconClass)}>
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
                        className="w-full mt-4 rounded-xl"
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
        )
      }
    </>
  )
}
