"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";

type Props = {
    href: string;
    label: string;
    icon: any;
};

export default function SidebarItem({ href, label, icon: Icon }: Props) {
    const pathname = usePathname();

    const active = pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all nav-link",
                active
                    ? "bg-savory-light text-savory-dark"
                    : "text-slate-600 hover:bg-slate-50"
            )}
        >
            <Icon size={18} />
                {label}
        </Link>
    );
}
