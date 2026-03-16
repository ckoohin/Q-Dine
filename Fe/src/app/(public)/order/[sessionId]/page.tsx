"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import axios from "axios"
import http from "@/lib/api/http"

export default function OrderSessionPage() {
    const params = useParams()
    const router = useRouter()

    const sessionId = params.sessionId as string

    useEffect(() => {

        const validate = async () => {

            if (!sessionId) {
                router.replace("/order-expired")
                return
            }

            try {

                const { data } = await http.get(
                    `/qr-tables/validate/${sessionId}`
                )

                console.log(data);


                localStorage.setItem(
                    "ORDER_SESSION",
                    JSON.stringify({
                        sessionId: data.sessionToken,
                        tableId: data.tableId,
                        tableNumber: data.table.number
                    })
                )

                router.replace("/order")

            } catch (error: any) {

                const message =
                    error?.response?.data?.message?.message ||
                    "QR không hợp lệ hoặc đã hết hạn"

                router.replace(`/order-expired?message=${encodeURIComponent(message)}`)
            }
        }

        validate()

    }, [sessionId])

    return <div>Đang xác thực QR...</div>
}