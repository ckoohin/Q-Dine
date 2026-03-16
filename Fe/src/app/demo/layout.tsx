"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/admin/sideber/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>

      <div className="flex min-h-screen w-full">

        <AppSidebar />

        <main className="flex-1">

          {/* Nút toggle sidebar */}
          <div className="p-3">
            <SidebarTrigger />
          </div>

          {children}

        </main>

      </div>

    </SidebarProvider>
  )
}