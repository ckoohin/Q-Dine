"use client"

import { Users, Table2, Plus, UtensilsCrossed } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { useTables } from "../hooks/useTables"
import { tableStatusConfig } from "../components/table-data"
import TableActionsDropdown from "./table-actions-dropdown"
import { useFilteredTables } from "../hooks/useFilteredTables"
import EmptyState from "@/components/ui/empty-state"

export default function TableCards() {

  const { data: tables } = useTables()
  const filteredTables = useFilteredTables(tables)

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
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {filteredTables.map((table) => {

        const status = tableStatusConfig[table.status]
        const StatusIcon = status.icon

        const isAvailable = table.status === "AVAILABLE"

        return (
          <div
            key={table.id}
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
                    Bàn {table.number}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Tầng {table.floorId}
                  </p>
                </div>

              </div>

              <TableActionsDropdown table={table} />

            </div>


            {/* divider */}
            <div className="my-4 h-px bg-border" />


            {/* capacity */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={15} />

                <span className="text-sm">
                  {isAvailable
                    ? `Tối đa ${table.capacity} khách`
                    : `${table.currentGuests ?? 0}/${table.capacity} khách`
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
            {!isAvailable && table.serviceType && (
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <UtensilsCrossed size={14} />
                {table.serviceType === "BUFFET" ? "Buffet" : "Gọi món"}
              </div>
            )}


            {/* action */}
            {isAvailable && (
              <Button
                className="w-full mt-4 rounded-xl bg-[var(--savory-green)] hover:bg-[var(--savory-dark)]"
              >
                <Plus size={16} />
                Mở bàn
              </Button>
            )}

          </div>
        )
      })}

    </div>
  )
}
