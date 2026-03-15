import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFloors } from "@/features/floors/hooks/useFloors"
import { useState } from "react"
import { useTableFilter } from "../context/table-filter.context"
import TableViewSwitcher from "./table-view-switcher"
import { cn } from "@/lib/utils"

export const tableStatusOptions = [
  { value: "AVAILABLE", label: "Trống" },
  { value: "OCCUPIED", label: "Đang phục vụ" },
  { value: "RESERVED", label: "Đặt trước" },
  { value: "CLEANING", label: "Đang dọn" },
] 
interface TableFilterProps {
  className?: string
}
export default function TableFilter({ className }: TableFilterProps) {
  const { data: floors, isLoading } = useFloors()

  const [selectedFloorId, setSelectedFloorId] = useState<String>()

  const selectedFloor = floors?.find(
    (f) => String(f.id) === selectedFloorId
  )

  const areas = selectedFloor?.areas ?? []

  const {
    view,
    status,
    setStatus,
    setFloorId,
    setAreaId,
    setSearch,
    setView,
  } = useTableFilter()
  return (
    
    <div className={ cn("card p-5 flex flex-col lg:flex-row gap-4 lg:items-center justify-between", isLoading && "opacity-50", className)}>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 flex-1">

        {/* Search */}
        <div className="relative w-full sm:w-64">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm bàn, khu vực..."
            className="pl-9 rounded-full"
          />

        </div>

        {/* Tầng */}
        <Select
          onValueChange={(value) => {
            console.log(value);
            setSelectedFloorId(String(value))
            setFloorId(value)
          }}
        >
          <SelectTrigger className="w-[150px] rounded-full hover:border-savory-green/10">
            <SelectValue placeholder="Tất cả tầng" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem
              value={"All"}
            >
              Tất cả tầng
            </SelectItem>
            {floors?.map((floor) => (
              <SelectItem
                key={floor.id}
                value={String(floor.id)}
              >
                {floor.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Khu vực */}
        <Select
          onValueChange={(value) => {
            setAreaId(value)
          }}
        >
          <SelectTrigger className="w-[170px] rounded-full">
            <SelectValue placeholder="Tất cả khu vực" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem
              value={"All"}
            >
              Tất cả khu vực
            </SelectItem>
            {areas.length > 0 ? (
              areas.map((area) => (
                <SelectItem
                  key={area.id}
                  value={String(area.id)}
                >
                  {area.name}
                </SelectItem>
              ))
            ) : (
              <div className="px-2 py-2 text-sm text-muted-foreground">
                Không có khu vực
              </div>
            )}
          </SelectContent>
        </Select>

        {/* Trạng thái */}
        <Select value={status} onValueChange={(value) => setStatus(String(value))}>
          <SelectTrigger className="w-[170px] rounded-full">
            <SelectValue placeholder="Mọi trạng thái" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="All">Mọi trạng thái</SelectItem>

            {tableStatusOptions.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>

      <TableViewSwitcher/>

    </div>
  )
}