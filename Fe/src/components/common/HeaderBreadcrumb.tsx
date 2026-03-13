"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center text-sm text-gray-500">
      <Link href="/" className="flex items-center gap-1 hover:text-black">
        <HomeIcon className="w-4 h-4" />
        Trang chủ
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        return (
          <div key={index} className="flex items-center">
            <ChevronRightIcon className="w-4 h-4 mx-2" />

            <Link href={href} className="hover:text-black">
              {segment}
            </Link>
          </div>
        );
      })}
    </div>
  );
}