"use client"

import { createContext, useContext, useState } from "react"
import { UseMutationResult } from "@tanstack/react-query"
import type { TCreateTableInput, TTable, UpdateTableInput } from "../types/table.type"

type UpdatePayload = {
  id: string
  data: UpdateTableInput
}

type TableEditContextType = {
  editing: TTable | null
  setEditing: (table: TTable | null) => void
  update: UseMutationResult<any, Error, { id: string; data: UpdateTableInput }>
}

const TableEditContext = createContext<TableEditContextType | null>(null)

export function TableEditProvider({
  children,
  update,
}: {
  children: React.ReactNode
  update: UseMutationResult<any, Error, { id: string; data: UpdateTableInput }>
}) {
  const [editing, setEditing] = useState<TTable | null>(null)

  return (
    <TableEditContext.Provider
      value={{
        editing,
        setEditing,
        update,
      }}
    >
      {children}
    </TableEditContext.Provider>
  )
}

export function useTableEdit() {
  const context = useContext(TableEditContext)

  if (!context) {
    throw new Error("useTableEdit must be used inside TableEditProvider")
  }

  return context
}