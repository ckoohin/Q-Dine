"use client"
import React from 'react'
import DashboardPage from '@/app/(protected)/(admin)/admin/dashboard/page'
import { useRouter } from 'next/navigation'
const Admin = () => {
    const router = useRouter()
    router.push("/admin/dashboard")
    return (
        <></>
    )
}

export default Admin