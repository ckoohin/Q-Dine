import MenuCard from "./menu-card"
import { menuItems } from "../data/menu.mock"

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  )
}