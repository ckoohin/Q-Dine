"use client"

import { createContext, useContext, useState } from "react"

type TableFilterContextType = {
    search: string
    status: string
    floorId?: string
    areaId?: string
    view?: "table" | "card"

    setSearch: (v: string) => void
    setStatus: (v: string) => void
    setFloorId: (v?: string) => void
    setAreaId: (v?: string) => void
    setView: (v: "table" | "card") => void
}

const TableFilterContext = createContext<TableFilterContextType | null>(null)

export function TableFilterProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("All")
    const [floorId, setFloorId] = useState<string>()
    const [areaId, setAreaId] = useState<string>()
    const [view, setView] = useState<"table" | "card">("card")

    return (
        <TableFilterContext.Provider
            value={{
                search,
                status,
                floorId,
                areaId,
                setSearch,
                setStatus,
                setFloorId,
                setAreaId,
                view,
                setView,
            }}
        >
            {children}
        </TableFilterContext.Provider>
    )
}

export function useTableFilter() {
    const context = useContext(TableFilterContext)

    if (!context) {
        throw new Error("useTableFilter must be used inside TableFilterProvider")
    }

    return context
}