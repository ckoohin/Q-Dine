import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const HeaderSearch = () => {
  return (
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

      <Input
        placeholder="Tìm bàn, khu vực..."
        className="pl-9 rounded-full"
      />
    </div>
  );
};

export default HeaderSearch;