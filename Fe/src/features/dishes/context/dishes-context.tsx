"use client"
import { createContext, useContext, useState } from "react"
import { TMenu } from "../types/dishes-pagination"

type MenuContextType = {
    dishes: TMenu[]
    setDishes: (dishes: TMenu[]) => void
    selectedMenu: TMenu | null
    setSelectedMenu: (menu: TMenu | null) => void
    editing: TMenu | null
    setEditing: (menu: TMenu | null) => void
    creating: boolean
    view: "grid" | "list"
    setView: (view: "grid" | "list") => void
    setCreating: (v: boolean) => void
    refreshMenus: () => void
    createMenu: (menu: TMenu) => void
    updateMenu: (menu: TMenu) => void
    deleteMenu: (menu: TMenu) => void
    selectMenu: (menu: TMenu) => void
    editMenu: (menu: TMenu) => void
    cancelEdit: () => void
    cancelCreate: () => void
    cancelSelect: () => void
    cancelAll: () => void
}

const MenuContext = createContext<MenuContextType | null>(null)

export function MenuProvider({ children }: {
    children: React.ReactNode
}) {
    const [dishes, setDishes] = useState<TMenu[]>([])
    const [selectedMenu, setSelectedMenu] = useState<TMenu | null>(null)
    const [editing, setEditing] = useState<TMenu | null>(null)
    const [creating, setCreating] = useState(false)
    const [view, setView] = useState<"grid" | "list">("grid")

    const refreshMenus = () => {
    }

    const createMenu = (menu: TMenu) => {
    }

    const updateMenu = (menu: TMenu) => {
    }

    const deleteMenu = (menu: TMenu) => {
    }

    const selectMenu = (menu: TMenu) => {
        setSelectedMenu(menu)
    }

    const editMenu = (menu: TMenu) => {
        setEditing(menu)
    }

    const cancelEdit = () => {
        setEditing(null)
    }

    const cancelCreate = () => {
        setCreating(false)
    }

    const cancelSelect = () => {
        setSelectedMenu(null)
    }

    const cancelAll = () => {
        setEditing(null)
        setCreating(false)
        setSelectedMenu(null)
    }

    const value = {
        dishes,
        setDishes,
        view,
        setView,
        selectedMenu,
        setSelectedMenu,
        editing,
        setEditing,
        creating,
        setCreating,
        refreshMenus,
        createMenu,
        updateMenu,
        deleteMenu,
        selectMenu,
        editMenu,
        cancelEdit,
        cancelCreate,
        cancelSelect,
        cancelAll,
    }

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export function useDishesContext() {
    const context = useContext(MenuContext)
    if (!context) {
        throw new Error("useMenu must be used inside MenuProvider")
    }
    return context
}
