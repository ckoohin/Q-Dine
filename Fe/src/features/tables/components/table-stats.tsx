import { Armchair, CookingPot, Clock, Sigma } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

import { useTables } from "../hooks/useTables"
import TableStatsLoading from "./TableStatsLoading"

import { TableStatus } from "@/features/tables/types/table-status.type"
import { useFilteredTables } from "../hooks/useFilteredTables"
export const TABLE_STATUS: Record<string, TableStatus> = {
  AVAILABLE: "AVAILABLE",
  RESERVED: "RESERVED",
  OCCUPIED: "OCCUPIED",
  CLEANING: "CLEANING",
}
export default function TableStats() {
  const { data: tables, isLoading } = useTables()

  const filteredTables = useFilteredTables(tables)

  const stats = [
    {
      icon: Armchair,
      label: "Bàn trống",
      value: filteredTables?.filter((table) => table.status === TABLE_STATUS.AVAILABLE).length ?? 0,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CookingPot,
      label: "Đang phục vụ",
      value: filteredTables?.filter((table) => table.status === TABLE_STATUS.OCCUPIED).length ?? 0,
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Clock,
      label: "Đặt trước",
      value: filteredTables?.filter((table) => table.status === TABLE_STATUS.RESERVED).length ?? 0,
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Sigma,
      label: "Tổng số bàn",
      value: filteredTables?.length ?? 0,
      color: "bg-blue-100 text-blue-600"
    },
  ]
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => {
        const Icon = item.icon

        return (
          <Card key={i} className="card rounded-full flex justify-center py-0">
            <CardContent className="flex items-center gap-3 p-4">

              <div className={`size-10 rounded-full flex items-center justify-center ${item.color}`}>
                <Icon size={18} />
              </div>

              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </p>

                <p className="text-xl font-bold">
                  {item.value}
                </p>
              </div>

            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}