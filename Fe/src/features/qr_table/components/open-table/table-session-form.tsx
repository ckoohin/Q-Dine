"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useQrTableContext } from "../../context/qr_table.context"
import { useOpenQrTable } from "../../hooks/useQrTable"
import { CheckCircle } from "lucide-react"

export default function TableSessionForm() {

  return (
    <div className="lg:col-span-3 space-y-6">
      <div
        className="bg-white dark:bg-slate-900 p-8 rounded-4xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-savory-green">info</span>
          Thông tin phiên phục vụ
        </h3>
        <div className="space-y-6">
          <div>
            <Label
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Số
              lượng khách (Pax)
            </Label>
            <div className="relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">groups</span>
              <Input
                className="w-full pl-12 pr-4 py-6 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary"
                placeholder="Nhập số lượng khách, vd: 4" type="number" />
            </div>
          </div>
          <div>
            <Label
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Loại
              hình dịch vụ</Label>
            <div className="grid grid-cols-2 gap-4">
              <Label
                className="relative flex items-center justify-center p-4 border-primary bg-savory-green/5 border-savory-green border-2 rounded-3xl cursor-pointer group transition-all">
                <input className="hidden" name="service" type="radio" />
                <div className="text-center">
                  <span
                    className="material-symbols-outlined text-savory-green text-3xl mb-1">
                    menu_book
                  </span>
                  <p className="font-bold text-savory-green">À la carte</p>
                  <p className="text-xs text-savory-green/70">Gọi món theo thực đơn</p>
                </div>
                <span
                  className="absolute top-2 right-2 material-symbols-outlined text-savory-green text-xl">
                  <CheckCircle/>
                  </span>
              </Label>
              <Label
                className="relative flex items-center justify-center p-4 border-2 border-slate-100 dark:border-slate-800 hover:border-savory-green/50 rounded-3xl cursor-pointer group transition-all">
                <input className="hidden" name="service" type="radio" />
                <div className="text-center">
                  <span
                    className="material-symbols-outlined text-slate-400 group-hover:text-savory-green transition-colors text-3xl mb-1">
                    restaurant
                  </span>
                  <p className="font-bold text-slate-600 dark:text-slate-300">Buffet</p>
                  <p className="text-xs text-slate-400">Trọn gói theo suất</p>
                </div>
              </Label>
            </div>
          </div>
          <div className="pt-4">
            <Button
              className="w-full text-white font-bold py-7 rounded-3xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">qr_code_2</span>
              Mở bàn &amp; Tạo mã QR
            </Button>
          </div>
        </div>
      </div>
      <div
        className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4">
        <span className="material-symbols-outlined text-blue-500">lightbulb</span>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <strong>Mẹo:</strong> Khách hàng có thể quét mã QR này để xem thực đơn và gọi món trực
          tiếp từ điện thoại cá nhân. Thông tin sẽ được đồng bộ ngay lập tức tới máy tính tiền.
        </p>
      </div>
    </div>
  )
}