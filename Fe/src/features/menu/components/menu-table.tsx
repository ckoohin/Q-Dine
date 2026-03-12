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
import { Pencil, Trash } from "lucide-react"

import { menuItems } from "../data/menu.mock"

export default function MenuTable() {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Món ăn</TableHead>
            <TableHead>Danh mục</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-right">Hành động</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-10 h-10 rounded object-cover"
                />
                {item.name}
              </TableCell>

              <TableCell>
                <Badge variant="outline">{item.category}</Badge>
              </TableCell>

              <TableCell>
                {(item.price / 1000).toFixed(0)}k
              </TableCell>

              <TableCell>
                {item.available ? (
                  <Badge>Đang bán</Badge>
                ) : (
                  <Badge variant="secondary">
                    Ngưng bán
                  </Badge>
                )}
              </TableCell>

              <TableCell className="text-right">
                <Button size="icon" variant="ghost">
                  <Pencil size={16} />
                </Button>

                <Button size="icon" variant="ghost">
                  <Trash size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}