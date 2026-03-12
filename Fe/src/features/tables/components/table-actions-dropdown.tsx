"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Eye,
  Pencil,
  CalendarPlus,
  Trash2,
  MoreHorizontal,
} from "lucide-react"
import { useRouter } from "next/navigation"
import type { Table } from "../types/table.type"
import ConfirmDialog from "@/components/common/ConfirmDialog"

interface Props {
  table: Table
  onView?: (table: Table) => void
  onEdit?: (table: Table) => void
  onReserve?: (table: Table) => void
  onDelete?: (table: Table) => void
}

export default function TableActionsDropdown({
  table,
  onView,
  onEdit,
  onReserve,
  onDelete
}: Props) {

    const router = useRouter()
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <MoreHorizontal size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">

        <DropdownMenuItem
            onClick={() => (onView ? onView(table) : router.push(`/admin/tables/${table.id}`))}
            className="flex items-center gap-2"
            >
            <Eye size={16} />
            Xem chi tiết
            </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onEdit?.(table)}
          className="flex items-center gap-2"
        >
          <Pencil size={16} />
          Chỉnh sửa
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onReserve?.(table)}
          className="flex items-center gap-2"
        >
          <CalendarPlus size={16} />
          Đặt bàn
        </DropdownMenuItem>

        <ConfirmDialog
          title="Xóa bàn?"
          description={`Bạn chắc chắn muốn xóa bàn ${table.number}? Hành động này không thể hoàn tác.`}
          confirmText="Xóa"
          cancelText="Hủy"
          onConfirm={() => onDelete?.(table)}
          trigger={
            <DropdownMenuItem
              onSelect={(e) => e.preventDefault()}
              className="flex items-center gap-2 text-red-600 focus:text-red-600"
            >
              <Trash2 size={16} />
              Xóa bàn
            </DropdownMenuItem>
          }
        />

      </DropdownMenuContent>

    </DropdownMenu>
  )
}