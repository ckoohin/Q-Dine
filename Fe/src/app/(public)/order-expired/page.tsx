"use client"

import { useSearchParams } from "next/navigation"

export default function OrderExpiredPage() {

  const params = useSearchParams()
  const message = params.get("message")

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      <h1 className="text-xl font-bold">
        QR không hợp lệ
      </h1>

      <p className="text-muted-foreground">
        {message || "Vui lòng quét lại mã QR trên bàn"}
      </p>

    </div>
  )
}