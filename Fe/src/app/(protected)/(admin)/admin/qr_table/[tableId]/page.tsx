"use client"

import { useParams } from "next/navigation"
import { useState } from "react"

import TableHeader from "@/features/qr_table/components/open-table/table-header"
import TableSessionForm from "@/features/qr_table/components/open-table/table-session-form"
import QrResultCard from "@/features/qr_table/components/open-table/qr-result-card"
import RecentActivity from "@/features/qr_table/components/open-table/recent-activity"

export default function TablesPage() {

  const { tableId } = useParams()

  const [sessionId, setSessionId] = useState<string | null>(null)

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">

      <TableHeader />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Form */}
        <div className="lg:col-span-3 space-y-6">
          <TableSessionForm
            tableId={String(tableId)}
          />
        </div>

        {/* QR */}
        <div className="lg:col-span-2 space-y-6">

          {sessionId && (
            <QrResultCard
              tableId={String(tableId)}
            />
          )}

          <RecentActivity />

        </div>

      </div>
    </div>
  )
}