import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, Table2, Trash, Users } from "lucide-react"

import { menuItems } from "../data/dishes.mock"
import { Checkbox } from "@radix-ui/react-checkbox"
import TableSkeleton from "@/components/loadings/TableLoading"
import TableActionsDropdown from "@/features/tables/components/table-actions-dropdown"
import TablePagination from "@/features/tables/components/table-pagination"
import { useDishes } from "../hooks/useDishes"

export default function DishesTable() {
  const { data: dishes, isLoading } = useDishes()
  
  if (!isLoading) {
    console.log(dishes)
  }
  return (
     <div className="rounded-3xl border bg-white overflow-hidden">

        <div className="overflow-x-auto">
          <Table>

            {/* HEADER */}
            <TableHeader className="bg-muted/40">
              <TableRow className="text-xs uppercase tracking-wider text-muted-foreground h-14">

                <TableHead className="w-12">
                  <Checkbox className="mx-auto block" />
                </TableHead>

                <TableHead>Mã món</TableHead>
                <TableHead>Tên món</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Trạng thái</TableHead>

                <TableHead className="text-right pr-5">
                  Thao tác
                </TableHead>

              </TableRow>
            </TableHeader>

            {/* BODY */}
            {isLoading ? (
              <TableSkeleton rows={10} columns={6} />
            ) : (
              <TableBody>

                {dishes?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                      Không có món nào phù hợp với bộ lọc
                    </TableCell>
                  </TableRow>
                ) :
                  (
                    dishes?.map((item) => {

                      return (
                        <TableRow
                          key={item.id}
                          className="hover:bg-muted/50 transition h-18 border-y-black/"
                        >

                          {/* Checkbox */}
                          <TableCell>
                            <Checkbox className="mx-auto block" />
                          </TableCell>

                          <TableCell className="font-mono text-muted-foreground text-sm">
                            {item.id}
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center gap-3">

                              <div className={`size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary`}>
                                <Table2 size={16} />
                              </div>

                              <span className="font-medium">
                                {item.name}
                              </span>

                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <Users size={14} />
                              <span className="text-sm">
                                {item.price} VNĐ
                              </span>
                            </div>
                          </TableCell>
                          
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              {/* <Users size={14} /> */}
                              <span className="text-sm">
                                {item.categoryId ? "danh mục" : "Không có danh mục"}
                              </span>
                            </div>
                          </TableCell>

                          {/* Status */}
                          <TableCell>

                            <Badge
                              variant="outline"
                              className={`flex items-center rounded-full p-1 px-2 gap-1.5 w-fit`}
                            >
                              <span className={`size-1.5 rounded-full ${item.status}`} />
                        
                              {item.status}

                            </Badge>

                          </TableCell>

                          {/* Actions */}
                          <TableCell className="text-right pr-5">

                            {/* <TableActionsDropdown
                              table={item}
                              onEdit={() => {
                                setEditing(item)
                              }}
                              onDelete={async (t) => {
                                try {
                                  await del.mutateAsync(t.id)
                                  toast.success("Đã xóa bàn")
                                } catch (err: any) {
                                  toast.error(err?.response?.data?.message?.message ?? "Xóa bàn thất bại")
                                }
                              }}
                            /> */}

                          </TableCell>

                        </TableRow>
                      )
                    })
                  )
                }

              </TableBody>
            )}

          </Table>
        </div>

        {/* <TablePagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        /> */}

      </div>
  )
}