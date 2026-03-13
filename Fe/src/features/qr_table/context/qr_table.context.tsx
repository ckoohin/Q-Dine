"use client"

import { createContext, useContext, useState } from "react"

type QrTableContextType = {
  isOpen: boolean
  sessionId?: string
  tableId?: string

  isLoading?: boolean
  setLoading: (loading: boolean) => void
  setIsOpen: (isOpen: boolean) => void
  setSessionId: (sessionId: string) => void
  openQr: (sessionId: string) => void
  closeQr: () => void
  setTableId: (tableId: string) => void
}

const QrTableContext = createContext<QrTableContextType | null>(null)

export function QrTableProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [isOpen, setIsOpen] = useState(false)
  const [sessionId, setSessionId] = useState<string>()

  const [isLoading, setLoading] = useState(false)

  const [tableId, setTableId] = useState<string>()
  const openQr = (sessionId: string) => {
    setIsOpen(true)
    setSessionId(sessionId)
  }

  const closeQr = () => {
    setIsOpen(false)
    setSessionId(undefined)
  }

  return (
    <QrTableContext.Provider
      value={{
        isOpen,
        sessionId,
        tableId,
        isLoading,
        
        setLoading,
        setIsOpen,
        setSessionId,
        setTableId,
        openQr,
        closeQr
      }}
    >
      {children}
    </QrTableContext.Provider>
  )
}

export function useQrTableContext() {

  const context = useContext(QrTableContext)

  if (!context) {
    throw new Error("useQrTable must be used inside QrTableProvider")
  }

  return context
}