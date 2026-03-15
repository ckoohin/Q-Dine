import { MenuItem } from "../types/menu-pagination"

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Salad Cá Hồi",
    price: 185000,
    category: "main",
    available: true,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: "2",
    name: "Pizza Hải Sản",
    price: 245000,
    category: "main",
    available: true,
    image:
      "https://images.unsplash.com/photo-1601924638867-3ec2f6c3a0c6",
  },
  {
    id: "3",
    name: "Tropical Mocktail",
    price: 65000,
    category: "drink",
    available: false,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
]