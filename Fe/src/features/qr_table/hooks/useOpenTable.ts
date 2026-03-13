"use client"

import { useState } from "react"
import { toast } from "sonner"

interface Payload {
  tableId: string
  pax: number
  serviceType: "ALACARTE" | "BUFFET"
}

export function useOpenTable() {


  const [loading, setLoading] = useState(false)

  const openTable = async ({ tableId, pax, serviceType }: Payload) => {

    try {

      setLoading(true)

      const res = await fetch("/api/table-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tableId,
          pax,
          serviceType
        })
      })

      if (!res.ok) {
        throw new Error("Mở bàn thất bại")
      }

      const data = await res.json()

      toast.success("Mở bàn thành công")

      return data.sessionId

    } catch (error) {

      toast.error("Có lỗi xảy ra")

      throw error

    } finally {
      setLoading(false)
    }
  }

  return {
    openTable,
    loading
  }
}