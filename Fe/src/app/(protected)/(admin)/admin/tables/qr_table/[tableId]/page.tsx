"use client"

import { useParams } from "next/navigation"

import TableHeader from "@/features/qr_table/components/open-table/open-table-header"
import TableSessionForm from "@/features/qr_table/components/open-table/open-table-form"
import QrResultCard from "@/features/qr_table/components/open-table/qr-card"
import RecentActivity from "@/features/qr_table/components/open-table/activity-list"
import { useQrTableContext } from "@/features/qr_table/context/qr_table.context"

export default function TablesPage() {

  const { tableId } = useParams()

  const { tableId: tableIdContext, setTableId, sessionId } = useQrTableContext()

  setTableId(String(tableId))

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">

      <TableHeader />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 ">

        {/* Form */}
        {/* {
          !sessionId && ( */}
            <div className="lg:col-span-3 space-y-6">
              <TableSessionForm
              />
            </div>
          {/* )
        }  */}

        {/* QR */}
        <div className={`lg:col-span-2 space-y-6 ${sessionId ? "w-full" : ""}`}>

          <QrResultCard/>

          <RecentActivity />

        </div>

      </div>
    </div>
  )
}