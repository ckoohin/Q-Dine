import DishesCard from "./dishes-card"
import { menuItems } from "../data/dishes.mock"
import { useDishes } from "../hooks/useDishes"

export default function DishesGrid() {
  const { data: dishes, isLoading } = useDishes()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-row-4 gap-6">
      {dishes?.map((item) => (
        <DishesCard key={item.id} item={item} />
      ))}
    </div>
  )
}