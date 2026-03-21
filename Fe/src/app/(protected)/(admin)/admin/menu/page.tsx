"use client";

import { useMemo, useState } from "react";

import Container from "@/components/Container";

import DishesHeader from "@/features/dishes/components/dishes-header";
import DishesFilter from "@/features/dishes/components/dishes-filters";
import DishesViewToggle from "@/features/dishes/components/dishes-view-toggle";
import DishesGrid from "@/features/dishes/components/dishes-grid";
import DishesTable from "@/features/dishes/components/dishes-table";
import DishesPagination from "@/features/dishes/components/dishes-pagination";
import { MenuProvider, useDishesContext } from "@/features/dishes/context/dishes-context";
import { useDishes } from "@/features/dishes/hooks/useDishes";
import DishesCreate from "@/features/dishes/components/dishes-create";

export default function MenuPage() {
    const [page, setPage] = useState(1);
    const { view, setView } = useDishesContext();

      const { data: dishes } = useDishes()
      const pageSize = 15
      const paginatedDishes = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return dishes?.slice(start, end)
      }, [dishes, page])
    
    const totalPages = Math.ceil(dishes ? dishes.length : 1 / pageSize)
    
    const { creating } = useDishesContext()
    return (
        <>
            <div className="space-y-6">
                <DishesHeader />

                <div className="flex items-center justify-between">
                    <DishesFilter />
                </div>

                {view === "grid" ?
                    <DishesGrid />
                    : <DishesTable />}
                <div className="sticky bottom-0 left-0 right-0">
                    <DishesPagination
                        page={page} totalPages={totalPages} onPageChange={setPage} />
                </div>

                {/* from create */}
                <DishesCreate />

            </div>
        </>
    );
}
