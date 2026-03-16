import LogoAdmin from '@/components/logo/LogoAdmin'
import { SidebarHeader } from '@/components/ui/sidebar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import { Bot, Boxes, ChevronsUpDown, Plus, Settings } from 'lucide-react'

const SideberHeaderAdmin = () => {
    return (
        <>
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
        </>
    )
}

export default SideberHeaderAdmin