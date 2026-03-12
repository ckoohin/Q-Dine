"use client"

import { Button } from "@/components/ui/button"
import { MenuCategory } from "../types/menu-pagination"
import { useState } from "react"

const categories: { label: string; value: MenuCategory | "all" }[] = [
  { label: "Tất cả", value: "all" },
  { label: "Món chính", value: "main" },
  { label: "Khai vị", value: "starter" },
  { label: "Đồ uống", value: "drink" },
  { label: "Tráng miệng", value: "dessert" },
]

export default function MenuFilters() {
  const [active, setActive] = useState("all")

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <Button
          key={cat.value}
          variant={active === cat.value ? "default" : "outline"}
          onClick={() => setActive(cat.value)}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  )
}