"use client"

import { cn } from "@/lib/utils"
import { LayoutGrid, List } from "lucide-react"
import { useDishesContext } from "../context/dishes-context"

type DishesViewToggleProps = {
  className?: string
}

export default function DishesViewToggle({ className }: DishesViewToggleProps) {
  const { view, setView } = useDishesContext()
  return (
    <div className={cn(
      "flex items-center max-w-20 justify-end gap-1 bg-muted p-1 rounded-lg h-full",
      className
    )}>
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