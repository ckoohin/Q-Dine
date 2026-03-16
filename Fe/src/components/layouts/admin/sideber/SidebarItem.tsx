"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
import { motion } from "motion/react"

type Props = {
    className?: string;
    classNameLabel?: string;
    classNameIcon?: string;
    href: string;
    label: string;
    icon: any;
};

export default function SidebarItem({ href, label, icon: Icon, classNameLabel, className, classNameIcon }: Props) {
    const pathname = usePathname();

    const active = pathname.startsWith(href);

    return (
        <motion.button
            className="w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
        >
            <Link
                href={href}
                className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 rounded-full text-sm font-semibold transition-all ",
                    active
                        ? "bg-savory-green/10 text-savory-green border-r-3 border-savory-green active"
                        : "text-slate-600 hover:shadow-sm hover:bg-slate-50 hover:text-savory-green hover:translate-x-0.5",
                    className
                )}
            >
                <Icon size={18} className={cn("", classNameIcon)} />
                <span className={cn("", classNameLabel)}>
                    {label}
                </span>
            </Link>
        </motion.button>
    );
}