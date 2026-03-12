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
import HeaderBreadcrumb from '@/components/common/HeaderBreadcrumb';
import LogoAdmin from '@/components/logo/LogoAdmin';
const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-gray-100">
                <HeaderBreadcrumb />
                <div className="max-w-full mx-auto flex items-center justify-between px-8 py-4">
                    <div className="flex items-center gap-8">
                        <LogoAdmin />
                        <div className="h-8 w-[1px] bg-gray-200"></div>
                        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                            <span className="material-symbols-outlined text-savory text-xl">table_restaurant</span>
                            <span className="text-sm font-bold text-[var(--text-main)]">Bàn số 04</span>
                        </div>
                    </div>
                    <div className="flex-1 max-w-xl px-8">
                        <div className="relative group">
                            <span
                                className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-savory transition-colors">search</span>
                            <input
                                className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-savory/20 text-sm transition-all"
                                placeholder="Tìm kiếm món ăn..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="relative flex items-center justify-center p-3 rounded-xl bg-gray-50 text-[var(--text-main)] hover:bg-gray-100 transition-all">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <span
                                className="absolute -top-1 -right-1 bg-savory-green text-white text-[10px] font-bold size-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">3</span>
                        </button>
                        <div className="size-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                            <img alt="User Avatar" className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvhlUebZH39XYos9fMgBROU6vwJVZorzzCCqykaq2wpJemK51aJK9y64wAWj_3EWBp00WtQqA7ytp0jNH_LcH1toptahqkTiQHN9vpf-21HwGeqyzrullZN-Kx9_zOa3ejZ41u5B4fJcaoJM2yAhfWUjKGFNTHoKvSxRJIvPPiVxbOzwbQLZC5OnPAHTlg4PbRE2L-R_rZsc39Gz5aghhoI5O7XipaP9brSX-WC1RqPyQ4LjYgZ13-2fzvUTjIkulnRLBzq8Hh6qI" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header