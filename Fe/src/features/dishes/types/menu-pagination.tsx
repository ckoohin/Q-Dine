export type MenuCategory =
  | "main"
  | "starter"
  | "drink"
  | "dessert"

export type MenuItem = {
  id: string
  name: string
  price: number
  image: string
  category: MenuCategory
  available: boolean
}