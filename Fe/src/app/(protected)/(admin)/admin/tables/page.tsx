"use client"

import TableFilter from "@/features/tables/components/table-filter"
import TableStats from "@/features/tables/components/table-stats"
import TableData from "@/features/tables/components/table-data"
import TableCards from "@/features/tables/components/table-cards"
import { TableFilterProvider } from "@/features/tables/context/table-filter.context"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TablesContent from "@/features/tables/components/table-content"
import { TableEditProvider } from "@/features/tables/context/table-edit-context"
import { useCreateTable, useUpdateTable } from "@/features/tables/hooks/useTables"
import { TableProvider } from "@/features/tables/context/table-context"
import { TableCreateProvider } from "@/features/tables/context/table-create.context"

export default function TablesPage() {

  const update = useUpdateTable()
  const create = useCreateTable()
  return (

    <TableProvider>
      <TableFilterProvider>
        <TableCreateProvider create={create}>
          <TableEditProvider update={update}>

            <TablesContent />

          </TableEditProvider>
        </TableCreateProvider>
      </TableFilterProvider>
    </TableProvider>
  )
}