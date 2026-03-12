import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function MenuHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Quản lý thực đơn</h1>
        <p className="text-muted-foreground">
          Cập nhật và chỉnh sửa danh sách món ăn
        </p>
      </div>

      <Link href="/admin/menu/create">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Thêm món
        </Button>
      </Link>
    </div>
  )
}