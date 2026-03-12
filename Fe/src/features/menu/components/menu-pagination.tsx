"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function MenuPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-between py-4">

      <p className="text-sm text-muted-foreground">
        Trang {page} / {totalPages}
      </p>

      <Pagination>
        <PaginationContent className="gap-2">

          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              className="h-10 w-10 p-0 cursor-pointer"
              onClick={() => page > 1 && onPageChange(page - 1)}
            />
          </PaginationItem>

          {/* Pages */}
          {pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                className="h-10 w-10 p-0 font-bold cursor-pointer"
                onClick={() => onPageChange(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              className="h-10 w-10 p-0 cursor-pointer"
              onClick={() =>
                page < totalPages && onPageChange(page + 1)
              }
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  )
}