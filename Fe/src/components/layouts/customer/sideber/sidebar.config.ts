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
    title: "Danh mục món ăn",
    items: [
      { label: "Khai vị", href: "/customer/menu", icon: Utensils },
      { label: "Món chính", href: "/customer/menu", icon: Utensils },
      { label: "Đồ uống", href: "/customer/menu", icon: Utensils },
      { label: "buffet Đặc Biệt", href: "/customer/menu", icon: Utensils },
      { label: "Tráng miệng", href: "/customer/menu", icon: Utensils },
    ],
  },
  {
    title: "Đặt bàn",
    items: [
      { label: "Đặt bàn", href: "/customer/reservation", icon: Table },
    ],
  },
];
