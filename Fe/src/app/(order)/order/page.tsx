"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import http from "@/lib/api/http"

export default function OrderPage() {

    const router = useRouter()

    useEffect(() => {

        const sessionId = localStorage.getItem("ORDER_SESSION")

        if (!sessionId) {
            router.replace("/order-expired")
        }

    }, [])

    return <div>Menu gọi món</div>
}