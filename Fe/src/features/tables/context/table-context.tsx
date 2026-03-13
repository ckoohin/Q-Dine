"use client"

import { createContext, useContext, useState } from "react"

type Table = {
  id: string
  name: string
  capacity?: number
  status?: string
}

type TableContextType = {
  tables: Table[]
  setTables: (tables: Table[]) => void

  selectedTable: Table | null
  setSelectedTable: (table: Table | null) => void

  editing: Table | null
  setEditing: (table: Table | null) => void

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
  const [tables, setTables] = useState<Table[]>([])
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [editing, setEditing] = useState<Table | null>(null)
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