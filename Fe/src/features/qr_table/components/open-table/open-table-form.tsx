"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import { useQrTableContext } from "../../context/qr_table.context"
import { useOpenQrTable } from "../../hooks/useQrTable"

import { toast } from "sonner"
import ServiceTypeSelect from "./service-select"
import { useTable, useUpdateTableStatus } from "@/features/tables/hooks/useTables"
import { useRouter } from "next/navigation"

export default function TableSessionForm() {
  const router = useRouter()
  const { tableId } = useQrTableContext()
  const { data: table } = useTable(tableId as string)

  const [pax, setPax] = useState<number | "">("")
  const [service, setService] = useState<string>("")

  const updateTableStatus = useUpdateTableStatus()
  const { mutate, isPending } = useOpenQrTable(String(tableId))

  const handleOpenTable = () => {

    if (!pax) {
      toast.error("Vui lòng nhập số lượng khách")
      return
    }

    mutate(
      {
        pax,
        serviceType: service
      },
      {
        onSuccess: (data) => {

          toast.success("Mở bàn thành công 🎉")

          console.log(data);

          console.log("Session token:", data.sessionToken)

          updateTableStatus.mutateAsync({
            id: String(tableId),
            status: "OCCUPIED"
          })
        },

        onError: (error: any) => {

          const message =
            error?.response?.data?.message?.message ||
            error?.response?.data?.message ||
            "Mở bàn thất bại"

          toast.error(message)

        }
      }
    )
  }

  return (
    <div className="lg:col-span-3 space-y-6">

      <div className="bg-white dark:bg-slate-900 p-8 rounded-4xl shadow-sm border border-slate-200 dark:border-slate-800">

        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-savory-green">
            info
          </span>
          Thông tin phiên phục vụ
        </h3>

        <div className="space-y-6">

          {/* Pax */}
          <div>
            <Label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Số lượng khách (Pax)
            </Label>

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">
                groups
              </span>

              <Input
                value={pax}
                max={table?.capacity}
                min={1}
                onChange={(e) => setPax(Number(e.target.value))}
                className="w-full pl-12 pr-4 py-6 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                placeholder="Nhập số lượng khách, vd: 4"
                type="number"
              />

            </div>
          </div>

          {/* Service */}
          <div>

            <Label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Loại hình dịch vụ
            </Label>

            <ServiceTypeSelect
            // value={service}
            // onChange={setService}
            />

          </div>

          {/* Button */}
          <div className="pt-4">

            <Button
              disabled={isPending}
              onClick={handleOpenTable}
              className="w-full text-white font-bold py-7 rounded-3xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
            >

              {isPending ? (
                <>
                  <span className="animate-spin material-symbols-outlined">
                    progress_activity
                  </span>
                  Đang tạo QR...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">
                    qr_code_2
                  </span>
                  Mở bàn & Tạo mã QR
                </>
              )}

            </Button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Thời gian dự kiến bắt đầu:
              <span className="font-semibold"> Hôm nay</span>
            </p>

          </div>

        </div>

      </div>

      {/* Tip */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm flex gap-4">

        <span className="material-symbols-outlined text-[#4caf50]">
          auto_awesome
        </span>

        <p className="text-xs leading-relaxed text-slate-500">
          <strong>Tự động hóa phục vụ:</strong> Khách hàng có thể quét mã QR này
          để xem thực đơn và gọi món trực tiếp từ điện thoại cá nhân. Thông tin
          sẽ được đồng bộ ngay lập tức tới máy tính tiền.
        </p>

      </div>

    </div>
  )
}