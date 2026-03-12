"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getBreadcrumb } from "@/utils/getBreadcrumb";
const HeaderBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumb = getBreadcrumb(pathname);

  if (!breadcrumb) return null;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-slate-400">
        {breadcrumb.sectionTitle}
      </span>

      <ChevronRight size={14} className="text-slate-300" />
      <breadcrumb.icon size={14} className="text-slate" />

      <span className="font-semibold text-slate-900 dark:text-white">
        {breadcrumb.pageLabel}
      </span>
    </div>
  );
};

export default HeaderBreadcrumb;
