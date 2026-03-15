"use client"

import { LayoutGrid, List } from "lucide-react"

type Props = {
  view: "grid" | "list"
  setView: (view: "grid" | "list") => void
}

export default function MenuViewToggle({ view, setView }: Props) {
  return (
    <div className="flex items-center max-w-20 justify-end gap-1 bg-muted p-1 rounded-lg">
      <button
        onClick={() => setView("list")}
        className={`p-2 rounded-md transition ${
          view === "list"
            ? "bg-background shadow"
            : "text-muted-foreground"
        }`}
      >
        <List size={18} />
      </button>

      <button
        onClick={() => setView("grid")}
        className={`p-2 rounded-md transition ${
          view === "grid"
            ? "bg-background shadow"
            : "text-muted-foreground"
        }`}
      >
        <LayoutGrid size={18} />
      </button>
    </div>
  )
}