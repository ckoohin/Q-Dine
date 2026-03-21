import Container from '@/components/Container'
import { MenuProvider } from '@/features/dishes/context/dishes-context'
import React from 'react'

function MenuLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <MenuProvider>
            {children}
        </MenuProvider>
    )
}

export default MenuLayout