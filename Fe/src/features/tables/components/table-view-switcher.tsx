"use client"

import { LayoutGrid, List } from "lucide-react"
import { useTableFilter } from "../context/table-filter.context"

export default function TableViewSwitcher() {
  const { view, setView } = useTableFilter()

  return (
    <div className="flex items-center max-w-20 justify-end gap-1 bg-muted p-1 rounded-lg">

      <button
        onClick={() => setView("table")}
        className={`flex items-center justify-center rounded-md p-2 transition
          ${view === "table"
            ? "bg-background shadow"
            : "text-muted-foreground"
          }`}
      >
        <List size={18} />
      </button>

      <button
        onClick={() => setView("card")}
        className={`flex items-center justify-center rounded-md p-2 transition
          ${view === "card"
            ? "bg-background shadow"
            : "text-muted-foreground"
          }`}
      >
        <LayoutGrid size={18} />
      </button>

    </div>
  )
}