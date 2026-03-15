"use client";

import { Utensils } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { sidebarSections } from "./sidebar.config";
import LogoAdmin from "@/components/logo/LogoAdmin";
import { useAuth, useLogout, useProfile } from "@/features/auth/hooks/auth.hooks";
import type { User } from "@/features/auth/types/auth.type";
import { Button } from "@/components/ui/button";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Sidebar() {
    const { data: user }: { data: User | undefined } = useAuth();

    const { data: profile, isLoading } = useProfile();

    const { mutateAsync: logout } = useLogout();
    return (
        <aside className="w-62 pt-8 pb-6 px-3 flex-shrink-0 flex flex-col bg-aside border-r border-slate-200/50">
            {/* Logo */}
            <LogoAdmin />

            {/* Menu */}
            <nav className="flex-1 mt-6 space-y-8 overflow-y-auto scrollbar-hide">
                {sidebarSections.map((section) => (
                    <div key={section.title} >
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
                <div className="bg-white rounded-[20px] p-4 shadow-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        {
                            isLoading ? (
                                <div className="flex items-center gap-3 pr-4">
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]" />
                                        <Skeleton className="h-4 w-[150px]" />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${profile?.avatar}`}
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>{profile?.fullName?.charAt(0).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{profile?.fullName}</p>
                                        <p className="text-[10px] text-savory-green font-bold uppercase tracking-wider">{profile?.role}</p>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <ConfirmDialog
                        title="Bạn chắc chắn muốn đăng xuất?"
                        description="Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng hệ thống."
                        confirmText="Đăng xuất"
                        cancelText="Huỷ"
                        onConfirm={logout}
                        trigger={
                            <Button
                                className="w-full flex items-center justify-center gap-2 
                                bg-slate-50 hover:bg-red-50 
                                text-slate-600 hover:text-red-500
                                py-2.5 px-4 rounded-xl font-bold text-xs"
                            >
                                <span className="material-symbols-outlined text-[18px]">
                                    logout
                                </span>
                                Đăng xuất
                            </Button>
                        }
                    />
                </div>
            </div>
        </aside>
    );
}
