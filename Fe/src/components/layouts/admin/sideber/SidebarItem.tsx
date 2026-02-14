"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import { motion } from "motion/react"

type Props = {
    href: string;
    label: string;
    icon: any;
};

export default function SidebarItem({ href, label, icon: Icon }: Props) {
    const pathname = usePathname();

    const active = pathname.startsWith(href);

    return (
        <motion.button
            className="w-full"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 1 }}
        >
            <Link
                href={href}
                className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all nav-link",
                    active
                        ? "bg-savory-light text-savory-dark border-r-3 border-savory-green nav-link active"
                        : "text-slate-600 hover:shadow-xl hover:bg-savory-light/40 hover:text-savory-dark hover:translate-x-0.5"
                )}
            >
                <Icon size={18} />
                {label}
            </Link>
        </motion.button>
    );
}