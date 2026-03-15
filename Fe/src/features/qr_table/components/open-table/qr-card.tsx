import { Button } from "@/components/ui/button"
import QrGenerator from "../qr-generator"

interface Props {
  tableId: string
  token?: string
  isLoading?: boolean
}

export default function QrResultCard({ tableId, token, isLoading }: Props) {

  return (

    <div className="bg-white p-8 rounded-xl border">

      <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border-4 border-savory-green text-center relative overflow-hidden">

        {/* Status badge */}
        {token && (
          <div className="absolute top-0 right-0 p-3 bg-savory-green text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
            Đang mở
          </div>
        )}

        <h4 className="text-lg font-bold mb-1">
          Mã QR Đặt món
        </h4>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Bàn {tableId}
        </p>

        {/* QR area */}
        <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 mb-8 aspect-square flex items-center justify-center">

          {/* 1️⃣ Loading */}
          {isLoading && (
            <div className="flex flex-col items-center gap-3">

              <div className="size-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />

              <p className="text-sm text-slate-500">
                Đang tạo QR...
              </p>

            </div>
          )}

          {/* 2️⃣ QR created */}
          {!isLoading && token && (
            <div className="relative size-full max-w-[200px] flex items-center justify-center bg-white p-2 rounded-lg">

              <QrGenerator tableId={tableId} token={token} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-10 bg-white rounded-lg shadow-md flex items-center justify-center p-1">
                  <div className="size-full bg-primary rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xs">
                      restaurant
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* 3️⃣ Empty state */}
          {!isLoading && !token && (
            <div className="flex flex-col items-center gap-3 text-slate-400">

              <span className="material-symbols-outlined text-5xl">
                qr_code
              </span>

              <p className="text-sm">
                Chưa tạo mã QR
              </p>

              <p className="text-xs">
                Mở bàn để tạo mã
              </p>

            </div>
          )}

        </div>

        {/* Actions */}
        {token && (
          <div className="flex flex-col gap-3">

            <Button className="flex items-center justify-center gap-2 w-full py-5 rounded-xl">
              <span className="material-symbols-outlined">print</span>
              In mã (A6)
            </Button>

            <Button className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50">
              <span className="material-symbols-outlined">download</span>
              Tải ảnh mã
            </Button>

          </div>
        )}

        <p className="mt-6 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
          Savory Smart QR System
        </p>

      </div>

    </div>
  )
}