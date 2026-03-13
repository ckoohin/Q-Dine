import { CheckCircle, Clock, Users, Sparkles } from "lucide-react"

export const tableStatusConfig: {
  [key: string]: {
    label: string
    icon: any
    className: string
    iconClass: string
    dot: string
  }
} = {
  AVAILABLE: {
    label: "Trống",
    icon: CheckCircle,
    className: "bg-green-100 text-green-700 border-green-200",
    iconClass: "bg-green-500",
    dot: "bg-green-500",
  },

  RESERVED: {
    label: "Đặt trước",
    icon: Clock,
    className: "bg-yellow-100 text-yellow-700 border-yellow-200",
    iconClass: "bg-yellow-500",
    dot: "bg-yellow-500",
  },

  OCCUPIED: {
    label: "Đang dùng",
    icon: Users,
    className: "bg-red-100 text-red-700 border-red-200",
    iconClass: "bg-red-500",
    dot: "bg-red-500",
  },

  CLEANING: {
    label: "Đang dọn",
    icon: Sparkles,
    className: "bg-blue-100 text-blue-700 border-blue-200",
    iconClass: "bg-blue-500",
    dot: "bg-blue-500",
  },
}