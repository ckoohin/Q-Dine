import {
  LayoutDashboard,
  Utensils,
  Table,
  Users,
  BarChart3,
  ReceiptText,
  Settings,
} from "lucide-react";

type SidebarSection = {
    title: string;
    items: {
        label: string;
        href: string;
        icon: any;
    }[];
};

export const sidebarSections: SidebarSection[] = [
  {
    title: "Tổng quan",
    items: [
      { label: "Tổng quan", href: "/admin/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "Quản lý",
    items: [
      { label: "Thực đơn", href: "/admin/menu", icon: Utensils },
      { label: "Sơ đồ bàn", href: "/admin/tables", icon: Table },
      { label: "Nhân viên", href: "/admin/staff", icon: Users },
    ],
  },
  {
    title: "Vận hành",
    items: [
        { label: "Lịch sử đơn", href: "/admin/orders", icon: ReceiptText },
        { label: "Báo cáo", href: "/admin/reports", icon: BarChart3 },
    ],
  },
  {
    title: "system",
    items: [
      { label: "Cài đặt", href: "/admin/settings", icon: Settings },
    ],
  },
];
