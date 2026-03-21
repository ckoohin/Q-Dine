import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { TMenu } from "../types/dishes-pagination"
import Link from "next/link"

type Props = {
  item: TMenu
}

export default function DishesCard({ item }: Props) {
  return (
    <Card className="bg-white min-w-[260px] dark:bg-slate-800 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
        <div className="h-48 w-full relative">
          <img className="w-full h-full object-cover"
            data-alt={item.description}
            src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBAelmlPm1mF_TqWxVuGwEibMgP6ExE_EqvZTsGJdn7U-TCxe9Inr2ZQbl0n20NekVdRhmPiOYT4DSEcAAec9Sia1lmzhnCI8QSzQNcOZBQeOt7CbqSx5K3nGJcdI1zHlk8tQ7Nv7Xp6LiOLIXK_DOFKqOJEUu6VYXyTr544VNAkKvkycOT1TPzmeQuRl4DpYjbRurOZMWtz0ADPzqe9nK68nBOKg1JduzSm8Rx2Qfv-kDmnQwRkuSahspeMH4sfaBY_xr0G55GI-8"} />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
            Món chính</div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{item.name}</h3>
            <span className="text-primary font-bold">{item.price}k</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-primary rounded-full shadow-sm">
                </div>
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{!item.isDeleted ? "Đang bán" :  "Ngưng bán"}</span>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/menu/edit/${item.id}`} className="p-2 hover:bg-primary/10 rounded-lg text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </Link>
              <button className="p-2 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>
        </div>
    </Card>
  )
}