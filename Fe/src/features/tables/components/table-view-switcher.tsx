"use client"

import { LayoutGrid, List } from "lucide-react"
import { useTableFilter } from "../context/table-filter.context"

export default function ViewSwitcher() {
  const { view, setView } = useTableFilter()

  return (
    <div className="flex items-center gap-1 rounded-lg border bg-muted/40 p-1">

      <button
        onClick={() => setView("table")}
        className={`flex items-center justify-center rounded-md p-2 transition
          ${view === "table"
            ? "bg-white shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
          }`}
      >
        <List size={18} />
      </button>

      <button
        onClick={() => setView("card")}
        className={`flex items-center justify-center rounded-md p-2 transition
          ${view === "card"
            ? "bg-white shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
          }`}
      >
        <LayoutGrid size={18} />
      </button>

    </div>
  )
}