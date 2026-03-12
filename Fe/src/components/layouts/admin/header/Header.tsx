import React from "react";
import HeaderBreadcrumb from "@/components/common/HeaderBreadcrumb";
import HeaderSearch from "@/components/layouts/admin/header/HeaderSearch";
import HeaderActions from "@/components/layouts/admin/header/HeaderActions";

const Header = () => {
  return (
    <header className="h-20 py-5 px-8 flex items-center justify-between bg-white/80 dark:bg-[#1e2a1e]/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
      <HeaderBreadcrumb />

      <div className="flex items-center gap-6">
        <HeaderSearch />
        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;