"use client"

import QRCode from "react-qr-code"
import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Props {
  tableId: string
  token?: string
  isLoading?: boolean
}

export default function QrGenerator({ tableId, token, isLoading }: Props) {

  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/order/${token}`

  return (
    <Card className="w-full flex justify-center">

      <CardContent className="flex flex-col items-center gap-4 p-6">

        <h2 className="font-semibold text-lg">
          QR bàn {tableId}
        </h2>

        {/* Loading */}
        {isLoading && (
          <div className="relative flex items-center justify-center w-[220px] h-[220px] border rounded-xl bg-muted">

            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />

            <p className="absolute bottom-4 text-xs text-muted-foreground">
              Đang tạo QR...
            </p>

          </div>
        )}

        {/* QR Code */}
        {!isLoading && token && (
          <div className="p-4 bg-white rounded-xl border">

            <QRCode value={url} size={200} />

          </div>
        )}

        {/* URL */}
        {!isLoading && token && (
          <p className="text-xs text-muted-foreground text-center break-all">
            {url}
          </p>
        )}

        {/* Empty state */}
        {!isLoading && !token && (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">

            <div className="w-[220px] h-[220px] border border-dashed rounded-xl flex items-center justify-center">

              <span className="text-sm">
                Chưa tạo QR
              </span>

            </div>

            <p className="text-xs">
              Mở bàn để tạo mã QR
            </p>

          </div>
        )}

      </CardContent>

    </Card>
  )
}