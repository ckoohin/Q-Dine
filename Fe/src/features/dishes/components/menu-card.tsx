import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"

type Props = {
  item: {
    name: string
    price: number
    image: string
    category: string
    available: boolean
  }
}

export default function MenuCard({ item }: Props) {
  return (
    <Card className="overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-800">

      {/* Image */}
      <div className="relative h-48 w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        {/* Category */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
          {item.category}
        </div>

        {/* Sold out overlay */}
        {!item.available && (
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
            <span className="bg-white text-slate-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              Hết hàng
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
            {item.name}
          </h3>

          <span className="text-primary font-bold">
            {(item.price / 1000).toFixed(0)}k
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700 px-5 pb-5">

        {/* Status */}
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-5 rounded-full relative cursor-pointer ${
              item.available
                ? "bg-primary/20"
                : "bg-slate-200 dark:bg-slate-700"
            }`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full shadow-sm transition ${
                item.available
                  ? "right-0.5 bg-primary"
                  : "left-0.5 bg-white"
              }`}
            />
          </div>

          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {item.available ? "Đang bán" : "Ngưng bán"}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-primary/10 text-slate-400 hover:text-primary"
          >
            <Pencil size={18} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-red-50 text-slate-400 hover:text-red-500"
          >
            <Trash size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}