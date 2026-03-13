"use client"

import QRCode from "react-qr-code"
import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useQrTableContext } from "../context/qr_table.context"
import { useOpenQrTable } from "../hooks/useQrTable"

interface Props {
  tableId: string
}

export default function QrGenerator({ tableId }: Props) {

  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/table/${tableId}`
  const { setLoading, sessionId } = useQrTableContext()

  const { mutateAsync: openQr, isPending } = useOpenQrTable(tableId)

  if (isPending) {
    setLoading(false)
  }
  
 
  return (
    <Card className="w-full flex justify-center">
      <CardContent className="flex flex-col items-center gap-4 p-6">

        <h2 className="font-semibold text-lg">
          QR bàn {tableId}
        </h2>

        {/* Loading */}
        {isPending && (
          <div className="relative flex items-center justify-center w-[220px] h-[220px] border rounded-xl bg-muted">

            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />

            <p className="absolute bottom-4 text-xs text-muted-foreground">
              Đang tạo QR...
            </p>

          </div>
        )}

        {/* QR */}
        {!isPending && sessionId && (
          <div className="p-4 bg-white rounded-xl border">
            <QRCode value={url} size={200} />
          </div>
        )}

        {!isPending && sessionId && (
          <p className="text-xs text-muted-foreground text-center break-all">
            {url}
          </p>
        )}

      </CardContent>
    </Card>
  )
}