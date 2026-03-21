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
  className?: string
}

export default function DishesPagination({
  page,
  totalPages,
  onPageChange,
  className
}: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={`flex items-center justify-between px-6 py-4 border-t bg-muted/20 ${className}`}>

      {/* info */}
      <span className="text-sm text-muted-foreground flex flex-row gap-2">
        Trang <span className="font-medium text-foreground">{page}</span> / <span>{totalPages}</span>
      </span>

      {/* pagination */}
      <Pagination>
        <PaginationContent>

          {/* prev */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 1 && onPageChange(page - 1)}
              className={page === 1 ? "pointer-events-none opacity-40" : "cursor-pointer"}
            />
          </PaginationItem>

          {/* page numbers */}
          {pages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={() => onPageChange(p)}
                className="cursor-pointer"
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* next */}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                page < totalPages && onPageChange(page + 1)
              }
              className={page === totalPages ? "pointer-events-none opacity-40" : "cursor-pointer"}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  )
}