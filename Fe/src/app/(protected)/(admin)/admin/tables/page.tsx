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

export default function TablesPage() {

  return (

    <TableFilterProvider>
      <TablesContent />
    </TableFilterProvider>
  )
}