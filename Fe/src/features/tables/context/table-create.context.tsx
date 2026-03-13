"use client"

import { createContext, useContext, useState } from "react"
import { UseMutationResult } from "@tanstack/react-query"
import { TCreateTableInput, TTable } from "../types/table.type"

type TableCreateContextType = {
  creating: boolean
  setCreating: (v: boolean) => void
  create: UseMutationResult<any, Error, TCreateTableInput>
}

const TableCreateContext = createContext<TableCreateContextType | null>(null)

export function TableCreateProvider({
  children,
  create,
}: {
  children: React.ReactNode
  create: UseMutationResult<any, Error, TCreateTableInput>
}) {
  const [creating, setCreating] = useState(false)

  return (
    <TableCreateContext.Provider
      value={{
        creating,
        setCreating,
        create,
      }}
    >
      {children}
    </TableCreateContext.Provider>
  )
}

export function useTableCreate() {
  const context = useContext(TableCreateContext)

  if (!context) {
    throw new Error("useTableCreate must be used inside TableCreateProvider")
  }

  return context
}