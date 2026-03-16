import React from "react";
import HeaderBreadcrumb from "@/components/common/HeaderBreadcrumb";
import HeaderSearch from "@/components/layouts/admin/header/HeaderSearch";
import HeaderActions from "@/components/layouts/admin/header/HeaderActions";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-sidebar-border bg-white/80 backdrop-blur-md px-6">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        <SidebarTrigger className="h-9 w-9 rounded-lg hover:bg-slate-100 transition" />

        <div className="h-5 w-px bg-slate-200" />

        <HeaderBreadcrumb />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <HeaderSearch />

        <HeaderActions />

      </div>

    </header>
  );
};

export default Header;