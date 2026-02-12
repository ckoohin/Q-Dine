import {
  LayoutDashboard,
  Utensils,
  Table,
  Users,
  BarChart3,
  ReceiptText,
  Settings,
} from "lucide-react";

export const sidebarSections = [
  {
    title: "Quản lý",
    items: [
      { label: "Tổng quan", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Thực đơn", href: "/admin/menu", icon: Utensils },
      { label: "Sơ đồ bàn", href: "/admin/tables", icon: Table },
      { label: "Nhân viên", href: "/admin/staff", icon: Users },
    ],
  },
  {
    title: "Vận hành",
    items: [
      { label: "Báo cáo", href: "/admin/reports", icon: BarChart3 },
      { label: "Lịch sử đơn", href: "/admin/orders", icon: ReceiptText },
      { label: "Cài đặt", href: "/admin/settings", icon: Settings },
    ],
  },
];
