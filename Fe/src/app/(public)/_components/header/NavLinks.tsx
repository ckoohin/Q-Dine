import Link from "next/link";
import { cn } from "@/libs/utils"; // bạn đang dùng cn rồi

const NAV = [
  { label: "Trang chủ", to: "/", variant: "primary" as const },
  { label: "Thực đơn", to: "/menu" },
  { label: "Khuyến mãi", to: "/promotions" },
  { label: "Về chúng tôi", to: "/about" },
];

export default function NavLinks() {
  return (
    <>
      {NAV.map((item) => (
        <Link
          key={item.to}
          href={item.to}
          className={cn(
            "text-sm leading-normal transition-colors",
            item.variant === "primary"
              ? "text-primary font-semibold hover:opacity-80 transition-opacity"
              : "text-slate-600 dark:text-slate-300 font-medium hover:text-primary"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}