"use client"

import { useState } from "react"

import Container from "@/components/Container"

import MenuHeader from "@/features/menu/components/menu-header"
import MenuFilter from "@/features/menu/components/menu-filters"
import MenuViewToggle from "@/features/menu/components/menu-view-toggle"
import MenuGrid from "@/features/menu/components/menu-grid"
import MenuTable from "@/features/menu/components/menu-table"
import MenuPagination from "@/features/menu/components/menu-pagination"

export default function MenuPage() {
    const [view, setView] = useState<"grid" | "list">("grid")
    const [page, setPage] = useState(1)

    return (
        <>
            <div className="space-y-6">

                <MenuHeader />

                <div className="flex items-center justify-between">
                    <MenuFilter />
                    <MenuViewToggle view={view} setView={setView} />
                </div>

                {view === "grid" ? <MenuGrid /> : <MenuTable />}
                <MenuPagination
                    page={page}
                    totalPages={8}
                    onPageChange={setPage}
                />
            </div>
        </>
    )
}