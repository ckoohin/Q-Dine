import React from 'react'
import {
  LayoutDashboard,
  Utensils,
  Table,
  Users,
  BarChart3,
  ReceiptText,
  Settings,
} from "lucide-react";
import HeaderBreadcrumb from './HeaderBreadcrumb';
const Header = () => {
    return (
        <>
            <header className="h-20 flex items-center justify-between px-8 bg-transparent shrink-0">
                <HeaderBreadcrumb/>
                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-savory-green transition-colors">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </span>
                        <input className="pl-11 pr-4 py-2.5 bg-white border-none rounded-full text-sm w-72 shadow-soft focus:ring-2 focus:ring-savory-green/20 transition-all placeholder:text-slate-400" placeholder="Tìm kiếm đơn hàng, bàn..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all">
                            <span className="material-symbols-outlined text-[20px]">mail</span>
                        </button>
                        <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all relative">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header