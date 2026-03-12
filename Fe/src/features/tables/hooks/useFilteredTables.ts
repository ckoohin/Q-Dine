"use client"

import { useMemo } from "react"
import { useTableFilter } from "../context/table-filter.context"
import type { Table } from "../types/table.type"

export function useFilteredTables(tables?: Table[]) {

  const { status, floorId, areaId, search } = useTableFilter()

  const filteredTables = useMemo(() => {

    const q = search?.toLowerCase() || ""

    return (tables ?? [])
      .filter((t) => {

        if (q && !t.number.toLowerCase().includes(q)) return false
        if (status && status !== "All" && t.status !== status) return false
        if (floorId && floorId !== "All" && String(t.floorId) !== floorId) return false
        if (areaId && areaId !== "All" && String(t.areaId) !== areaId) return false

        return true
      })
      .sort((a, b) => a.number.localeCompare(b.number))

  }, [tables, search, status, floorId, areaId])

  return filteredTables
}
