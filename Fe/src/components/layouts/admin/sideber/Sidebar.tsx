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
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Bot,
    BookOpen,
    Settings,
    Boxes,
    ChevronDown,
    ChevronRight,
    Sparkles,
    BadgeCheck,
    CreditCard,
    Bell,
    LogOut,
    Plus,
    ChevronsUpDown,
} from "lucide-react"
import UserProfile from "./SidebarUserProfile";

export default function SidebarAdmin() {

    const { data: profile, isLoading } = useProfile();

    const { mutateAsync: logout } = useLogout();
    return (
        <Sidebar
            collapsible="offcanvas"
            className="pt-3 pb-6 px-3 transition-all duration-150 bg-white border-r border-slate-200/50 overflow-x-visible"
        >
            <SidebarHeader>

                <DropdownMenu>

                    <DropdownMenuTrigger asChild>

                        <div className="flex items-center gap-3 py-2 pr-2 rounded-lg hover:bg-muted cursor-pointer">

                            <LogoAdmin className="w-9 h-9" classNameText="group-data-[collapsible=icon]:hidden" />

                            <ChevronsUpDown className="ml-auto w-4 h-4 group-data-[collapsible=icon]:hidden" />
                        </div>


                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-64 "
                        align="start"
                    >

                        <DropdownMenuLabel>
                            Teams
                        </DropdownMenuLabel>

                        <DropdownMenuItem className="flex items-center gap-2">
                            <Boxes className="w-4 h-4" />
                            Acme Inc
                            <span className="ml-auto text-xs text-muted-foreground">
                                ⌘1
                            </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-2">
                            <Bot className="w-4 h-4" />
                            Acme Corp.
                            <span className="ml-auto text-xs text-muted-foreground">
                                ⌘2
                            </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-2">
                            <Settings className="w-4 h-4" />
                            Evil Corp.
                            <span className="ml-auto text-xs text-muted-foreground">
                                ⌘3
                            </span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add team
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>

            </SidebarHeader>

            {/* Menu */}
            <nav className="flex-1 mt-6 space-y-8 overflow-y-auto overflow-x-visible scrollbar-hide">
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

            {/* FOOTER USER */}
            <SidebarFooter className="border-t p-2">

                <DropdownMenu>

                    <DropdownMenuTrigger asChild >

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

                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        side="right"
                        className="w-56"
                    >

                        <DropdownMenuLabel className="flex items-center gap-2">

                            <UserProfile profile={profile} isLoading={isLoading} />

                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Upgrade to Pro
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <BadgeCheck className="mr-2 h-4 w-4" />
                            Account
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Billing
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                        >
                            <ConfirmDialog
                                title="Bạn chắc chắn muốn đăng xuất?"
                                description="Bạn sẽ cần đăng nhập lại để tiếp tục sử dụng hệ thống."
                                confirmText="Đăng xuất"
                                cancelText="Huỷ"
                                onConfirm={logout}
                                trigger={

                                    <button className="flex items-center gap-2">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Đăng xuất
                                    </button>
                                }
                            />
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>

            </SidebarFooter>
        </Sidebar>
    );
}
