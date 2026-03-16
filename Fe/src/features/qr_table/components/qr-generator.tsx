"use client"

import QRCode from "react-qr-code"
import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useQrTableContext } from "../context/qr_table.context"

export default function QrGenerator() {

  const { sessionId, tableId, isPending , setIsPending, setUrlQr } = useQrTableContext()

  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/order/${sessionId}`

  setUrlQr(url)

  setIsPending(false)
  return (
    <>
      {/* QR Code */}
      {sessionId && (

        <QRCode value={url} size={500} className="w-full h-full" />

      )}


    </>
  )
}