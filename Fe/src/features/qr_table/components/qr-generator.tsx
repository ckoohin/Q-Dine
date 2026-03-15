"use client"

import QRCode from "react-qr-code"
import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useQrTableContext } from "../context/qr_table.context"

export default function QrGenerator() {

  const { sessionId, tableId, isPending } = useQrTableContext()

  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/order/${sessionId}`

  return (
    <>
      {/* QR Code */}
      {sessionId && (

        <QRCode value={url} size={200} className="w-full h-full" />

      )}


    </>
  )
}