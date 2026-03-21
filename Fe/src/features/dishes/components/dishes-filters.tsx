"use client"

import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"
import DishesViewToggle from "./dishes-view-toggle"
import { useDishesContext } from "../context/dishes-context"
import { cn } from "@/lib/utils"
import { useDishes } from "../hooks/useDishes"


export default function DishesFilters() {
  const { view, setView } = useDishesContext()
  
  return (
    <div className={cn(
      "bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700 shadow-sm",
      "flex flex-row justify-between items-center gap-4"
    )}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4", view === "grid" ? "" : "")}>
        {/* Search */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Tìm
            kiếm</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all" placeholder="Tên món ăn..." type="text" />
          </div>
        </div>
        {/* Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Danh
            mục</label>
          <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm appearance-none cursor-pointer">
            <option>Tất cả danh mục</option>
            <option>Khai vị</option>
            <option>Món chính</option>
            <option>Tráng miệng</option>
            <option>Đồ uống</option>
            <option>Buffet</option>
          </select>
        </div>
        {/* Status */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Trạng
            thái</label>
          <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm appearance-none cursor-pointer">
            <option>Tất cả trạng thái</option>
            <option>Đang bán</option>
            <option>Ngừng bán</option>
            <option>Hết hàng</option>
          </select>
        </div>
        {/* Price Range */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Khoảng
            giá (k)</label>
          <div className="flex items-center gap-2">
            <input className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm" placeholder="Từ" type="number" />
            <span className="text-slate-400">-</span>
            <input className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm" placeholder="Đến" type="number" />
          </div>
        </div>
        {/* Tags/Popularity */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Đặc
            điểm</label>
          <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm appearance-none cursor-pointer">
            <option>Tất cả đặc điểm</option>
            <option>Món đặc trưng</option>
            <option>Khuyến mãi</option>
            <option>Món mới</option>
          </select>
        </div>
        {/* Sort By */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Sắp
            xếp</label>
          <select className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm appearance-none cursor-pointer font-semibold text-primary">
            <option>Mới nhất</option>
            <option>Giá tăng dần</option>
            <option>Giá giảm dần</option>
            <option>Phổ biến nhất</option>
          </select>
        </div>
      </div>
      <DishesViewToggle className="mt-5" />
    </div>
  )
}