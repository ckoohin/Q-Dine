export type TStatusMenu = "AVAILABLE" | "OUT_OF_STOCK" | "INACTIVE"

export type TCreateMenu = {
    name : string,
    description: string,
    price: number,
    status: TStatusMenu,
    imageUrl: string
}
export type FormValues = {
  name: string
  description: string
  price: number
  status: TStatusMenu
  imageUrl: string
} 

export type TUpdateMenu = {
  name: string
  description: string
  price: number
  status: TStatusMenu
  imageUrl: string
}

export type TMenu = {
  id: string
  name: string
  description: string
  price: string
  status: TStatusMenu
  categoryId: null
  imageUrl: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}