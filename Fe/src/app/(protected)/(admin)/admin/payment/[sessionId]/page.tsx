"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useUpdateTableStatus } from '@/features/tables/hooks/useTables'
import { useCheckoutQrTable } from '@/features/qr_table/hooks/useQrTable'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const PaymentPage = () => { 

  const router = useRouter()
  const { sessionId } = useParams()
  const updateTableStatus = useUpdateTableStatus()

  const checkoutQrTable = useCheckoutQrTable()

  const handleCheckoutQrTable = async () => {
    try {
      await checkoutQrTable.mutateAsync(String(sessionId))
      toast.success("Bàn đã được đóng phiên")
      updateTableStatus.mutateAsync({
        id: String(sessionId),
        status: "CLEANING"
      })
      router.push("/admin/tables")
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message?.message ??
        "Không thể đóng phiên"
      )
    }
  }
  return (
    <>
      <div>Thanh toán {sessionId}</div>
      <Button onClick={handleCheckoutQrTable}>
        Thanh toán
      </Button>
    </>
  )
}

export default PaymentPage