"use client";

import { Utensils } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarSections } from "./sidebar.config";
import LogoAdmin from "@/components/logo/LogoAdmin";

export default function Sidebar() {
    return (
        <aside className="w-72 pt-8 pb-6 px-4 flex-shrink-0 flex flex-col bg-aside border-r border-slate-200/50">
            {/* Logo */}
            <LogoAdmin />
            
            {/* Menu */}
            <nav className="flex-1 mt-6 space-y-8 overflow-y-auto">
                {sidebarSections.map((section) => (
                    <div key={section.title}>
                        <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                            {section.title}
                        </p>

                        <div className="space-y-2">
                            {section.items.map((item) => (
                                <SidebarItem key={item.href} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer user */}
            <div className=" mt-auto">
                <div className="bg-white rounded-[20px] p-4 shadow-soft border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-savory-light"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs5y2SAnhFfdEPHdF4733c3PuD5joGwwYRiXjP-ST5GYKwizZksYrgbsWKTR0Ea91yIvbtUkwsmOtsMvJISaub7cMGaULtHpYa4D0hiqdBxXq7kEvRvpJAHPqgigJMtXiYgdHm7az6ZBZP3HqtFjo1ERyYsEub4ACNrAqMM5OT-5DHmu3jKb9nSUDtRFY3m1vOa2rtJRzmmZACwaq4qmX5iGYnQ7NTLPK6pnG6WkM0-vPi4_VH5obkkawjTrb7quM2RGRn_qg9AYo")' }}>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Alex Rivera</p>
                            <p className="text-[10px] text-savory-green font-bold uppercase tracking-wider">Quản lý</p>
                        </div>
                    </div>
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-500 py-2.5 px-4 rounded-xl font-bold text-xs transition-all">
                        <span className="material-symbols-outlined text-[18px]">logout</span>
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
