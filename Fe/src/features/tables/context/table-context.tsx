"use client"

import { createContext, useContext, useState } from "react"
import { TTable } from "../types/table.type"

type TableContextType = {
  tables: TTable[]
  setTables: (tables: TTable[]) => void

  selectedTable: TTable | null
  setSelectedTable: (table: TTable | null) => void

  editing: TTable | null
  setEditing: (table: TTable | null) => void

  creating: boolean
  setCreating: (v: boolean) => void

  refreshTables: () => void
}

const TableContext = createContext<TableContextType | null>(null)

export function TableProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [tables, setTables] = useState<TTable[]>([])
  const [selectedTable, setSelectedTable] = useState<TTable | null>(null)
  const [editing, setEditing] = useState<TTable | null>(null)
  const [creating, setCreating] = useState(false)

  const refreshTables = () => {
    console.log("refresh tables")
  }

  return (
    <TableContext.Provider
      value={{
        tables,
        setTables,
        selectedTable,
        setSelectedTable,
        editing,
        setEditing,
        creating,
        setCreating,
        refreshTables,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export function useTable() {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error("useTable must be used inside TableProvider")
  }

  return context
}