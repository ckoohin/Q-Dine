import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TablePagination() {
  return (
    <div className="px-6 py-4 border-t flex items-center justify-between">

      {/* Info */}
      <span className="text-sm text-muted-foreground">
        Hiển thị 1-5 trên 24 kết quả
      </span>

      {/* Pagination */}
      <div className="flex items-center gap-2">

        <Button
          variant="ghost"
          size="icon"
        >
          <ChevronLeft size={18} />
        </Button>

        <Button
          size="sm"
          className="rounded-md"
        >
          1
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-md"
        >
          2
        </Button>

        <Button
          variant="ghost"
          size="icon"
        >
          <ChevronRight size={18} />
        </Button>

      </div>

    </div>
  )
}