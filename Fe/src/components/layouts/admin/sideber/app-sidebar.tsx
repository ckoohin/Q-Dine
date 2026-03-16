"use client"

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

import { useState } from "react"
import LogoAdmin from "@/components/logo/LogoAdmin"
import SidebarHeaderAdmin from "./SideberHeaderAdmin"
import { sidebarSections } from "./sidebar.config"
import SidebarItem from "./SidebarItem"
import { useProfile } from "@/features/auth/hooks/auth.hooks"

export function AppSidebar() {
    const [playgroundOpen, setPlaygroundOpen] = useState(true)
    const [docsOpen, setDocsOpen] = useState(true)

    const { data: profile, isLoading } = useProfile();

    return (
        <Sidebar
            collapsible="icon"
            className="border-r transition-all duration-200 bg-white shadow-lg shadow-gray-200"
        >

            {/* HEADER */}
            <SidebarHeader className="p-2 ">

                <DropdownMenu>

                    <DropdownMenuTrigger asChild>

                        <div className="flex items-center gap-3 py-2 pr-2 rounded-lg hover:bg-muted cursor-pointer">

                            {/* <div className="bg-black text-white w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                                <Boxes className="w-5 h-5" />
                            </div>

                            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                                <span className="text-sm font-semibold">
                                    Acme Inc
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Enterprise
                                </span>
                            </div>

                            <ChevronsUpDown className="ml-auto w-4 h-4 group-data-[collapsible=icon]:hidden" /> */}

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
            {/* <SidebarHeaderAdmin/> */}

            {/* CONTENT */}
            <SidebarContent className="scrollbar-hide p-2">

                <SidebarGroup>
                    {/* <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
                        Điều hướng
                    </SidebarGroupLabel> */}

                    <SidebarMenu>
                        {/* <nav className="flex-1 mt-6 space-y-8 overflow-y-auto scrollbar-hide"> */}
                        {sidebarSections.map((section) => (
                            <div key={section.title} >
                                <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 group-data-[collapsible=icon]:hidden">
                                    {section.title}
                                </p>

                                <div className="space-y-2">
                                    {section.items.map((item) => (
                                        <SidebarItem
                                            key={item.href}
                                            {...item}
                                            classNameLabel="group-data-[collapsible=icon]:hidden"
                                            classNameIcon=""
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}

                        {sidebarSections.map((section) => (
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    tooltip={section.title}
                                    onClick={() => setPlaygroundOpen(!playgroundOpen)}
                                >
                                    <Bot className="w-4 h-4" />

                                    <span className="group-data-[collapsible=icon]:hidden">
                                        {section.title}
                                    </span>

                                    <span className="ml-auto group-data-[collapsible=icon]:hidden">
                                        {playgroundOpen ? (
                                            <ChevronDown className="w-4 h-4" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4" />
                                        )}
                                    </span>

                                </SidebarMenuButton>

                                {playgroundOpen && (
                                    <SidebarMenuSub className="group-data-[collapsible=icon]:hidden">

                                        {section.items.map((item) => (
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    <SidebarItem
                                                        key={item.href}
                                                        {...item}
                                                        classNameLabel="group-data-[collapsible=icon]:hidden"
                                                        classNameIcon=""
                                                    />
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                        ))}
                                    </SidebarMenuSub>
                                )}
                            </SidebarMenuItem>
                        ))}
                        {/* </nav> */}

                        {/* PLAYGROUND */}
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                tooltip="Playground"
                                onClick={() => setPlaygroundOpen(!playgroundOpen)}
                            >
                                <Bot className="w-4 h-4" />

                                <span className="group-data-[collapsible=icon]:hidden">
                                    Playground
                                </span>

                                <span className="ml-auto group-data-[collapsible=icon]:hidden">
                                    {playgroundOpen ? (
                                        <ChevronDown className="w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4" />
                                    )}
                                </span>

                            </SidebarMenuButton>

                            {playgroundOpen && (
                                <SidebarMenuSub className="group-data-[collapsible=icon]:hidden">

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>
                                            History
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>
                                            Starred
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>
                                            Settings
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                </SidebarMenuSub>
                            )}
                        </SidebarMenuItem>

                        {/* MODELS */}
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip="Models">
                                <Boxes className="w-4 h-4" />

                                <span className="group-data-[collapsible=icon]:hidden">
                                    Models
                                </span>

                                <ChevronRight className="ml-auto w-4 h-4 group-data-[collapsible=icon]:hidden" />
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {/* DOCUMENTATION */}
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                tooltip="Documentation"
                                onClick={() => setDocsOpen(!docsOpen)}
                            >
                                <BookOpen className="w-4 h-4" />

                                <span className="group-data-[collapsible=icon]:hidden">
                                    Documentation
                                </span>

                                <span className="ml-auto group-data-[collapsible=icon]:hidden">
                                    {docsOpen ? (
                                        <ChevronDown className="w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4" />
                                    )}
                                </span>

                            </SidebarMenuButton>

                            {docsOpen && (
                                <SidebarMenuSub className="group-data-[collapsible=icon]:hidden">

                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton>
                                            Introduction
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>

                                </SidebarMenuSub>
                            )}
                        </SidebarMenuItem>

                        {/* SETTINGS */}
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip="Settings">
                                <Settings className="w-4 h-4" />

                                <span className="group-data-[collapsible=icon]:hidden">
                                    Settings
                                </span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>

            </SidebarContent>

            {/* FOOTER USER */}
            <SidebarFooter className="border-t p-2">

                <DropdownMenu>

                    <DropdownMenuTrigger asChild>

                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">

                            <img
                                src="https://github.com/shadcn.png"
                                className="w-9 h-9 rounded-full shrink-0"
                            />

                            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                                <span className="text-sm font-medium">
                                    shadcn
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    m@example.com
                                </span>
                            </div>

                        </div>

                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        side="right"
                        className="w-56"
                    >

                        <DropdownMenuLabel className="flex items-center gap-2">

                            <img
                                src="https://github.com/shadcn.png"
                                className="w-8 h-8 rounded-full"
                            />

                            <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                    shadcn
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    m@example.com
                                </span>
                            </div>

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

                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                        </DropdownMenuItem>

                    </DropdownMenuContent>

                </DropdownMenu>

            </SidebarFooter>

        </Sidebar>

    )
}
