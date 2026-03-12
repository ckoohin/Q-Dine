import { Skeleton } from "@/components/ui/skeleton"

export default function TableFilterLoading() {
  return (
    <div className="card p-5 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">

      <div className="flex flex-wrap items-center gap-3 flex-1">

        {/* Search */}
        <Skeleton className="h-10 w-full sm:w-64 rounded-full" />

        {/* Select tầng */}
        <Skeleton className="h-10 w-[150px] rounded-full" />

        {/* Select khu vực */}
        <Skeleton className="h-10 w-[170px] rounded-full" />

        {/* Select trạng thái */}
        <Skeleton className="h-10 w-[170px] rounded-full" />

      </div>

      {/* Button */}
      <Skeleton className="h-10 w-[150px] rounded-full" />

    </div>
  )
}