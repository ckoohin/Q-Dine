import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { useDishesContext } from "../context/dishes-context"

export default function DishesHeader() {
  const { creating, setCreating } = useDishesContext()
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Quản lý thực đơn</h1>
        <p className="text-muted-foreground">
          Cập nhật và chỉnh sửa danh sách món ăn
        </p>
      </div>


      {/* <Link href="/admin/menu/create"> */}
      <Button
        onClick={() => {
          setCreating(true)
          console.log("23");

        }}
      >
        <Plus size={18} />
        Thêm món
      </Button>
      {/* </Link> */}
    </div>
  )
}