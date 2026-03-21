"use client"
import { TableFilterProvider } from "@/features/tables/context/table-filter.context"
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