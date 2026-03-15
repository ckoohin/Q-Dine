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
  Loader2,
  CreditCard,
} from "lucide-react"
import { useRouter } from "next/navigation"
import type { TCreateTableInput, TTable } from "../types/table.type"
import ConfirmDialog from "@/components/common/ConfirmDialog"
import { useUpdateTableStatus } from "../hooks/useTables"
import { toast } from "sonner"
import { useCheckoutQrTable } from "@/features/qr_table/hooks/useQrTable"
import Link from "next/link"

interface Props {
  table: TTable
  onView?: (table: TTable) => void
  onEdit?: (table: TTable) => void
  onReserve?: (table: TTable) => void
  onDelete?: (table: TTable) => void
}

export default function TableActionsDropdown({
  table,
  onView,
  onEdit,
  onReserve,
  onDelete,
}: Props) {

  const router = useRouter()

  const updateTableStatus = useUpdateTableStatus()

  const checkoutQrTable = useCheckoutQrTable()

  const handleCheckoutQrTable = async () => {
    try {
      await checkoutQrTable.mutateAsync(table.id)
      toast.success("Bàn đã được đóng phiên")
      updateTableStatus.mutateAsync({
        id: String(table.id),
        status: "CLEANING"
      })
      router.refresh()
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message?.message ??
        "Không thể đóng phiên"
      )
    }
  }

  const handleConfirmClean = async () => {
    try {
      await updateTableStatus.mutateAsync({
        id: table.id,
        status: "AVAILABLE",
      })

      toast.success("Bàn đã sẵn sàng phục vụ")

      router.refresh()
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message?.message ??
        "Không thể cập nhật trạng thái bàn"
      )
    }
  }
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground shadow-sm"
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


        {
          table.status === "AVAILABLE" && (
            <DropdownMenuItem
              onClick={() => {
                router.push(`/admin/qr_table/${table.id}`)
              }}
              className="flex items-center gap-2"
            >
              <CalendarPlus size={16} />
              Đặt bàn
            </DropdownMenuItem>
          )
        }
        {/* Xác nhận dọn bàn xong */}
        {
          table.status === "CLEANING" && (
            <DropdownMenuItem
              disabled={updateTableStatus.isPending}
              onClick={handleConfirmClean}
              className="flex items-center gap-2"
            >
              {updateTableStatus.isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <CalendarPlus className="size-4 text-emerald-600" />
              )}

              <span>
                {updateTableStatus.isPending
                  ? "Đang cập nhật..."
                  : "Xác nhận dọn bàn xong"}
              </span>
            </DropdownMenuItem>
          )
        }
        {/* Đóng phiên bàn */}
        {
          table.status === "OCCUPIED" && (
            <DropdownMenuItem
              disabled={checkoutQrTable.isPending}
              onClick={() => router.push(`/admin/payment/${table.id}`)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <CreditCard className="size-4 " />

              <span className="font-medium ">
                Thanh toán
              </span>
            </DropdownMenuItem>
          )
        }

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