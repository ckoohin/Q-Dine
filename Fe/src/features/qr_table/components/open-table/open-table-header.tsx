import { useTable } from "@/features/tables/hooks/useTables"
import { useQrTableContext } from "../../context/qr_table.context"

export default function TableHeader() {

  const { tableId } = useQrTableContext()

  const { data: table } = useTable(tableId as string)

  // console.log(table);


  return (
    <div className="mb-8">
      <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Thiết lập phiên
        phục vụ &amp; QR</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-1">
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="px-4 py-2 bg-slate-100 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-lg">table_restaurant</span>
            <span className="text-sm font-bold text-slate-700">Bàn {table?.number}</span>
          </div>
          <div className="px-4 py-2 bg-slate-100 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-lg">layers</span>
            <span className="text-sm font-medium text-slate-600">Tầng {table?.floorId}</span>
          </div>
          <div className="px-4 py-2 bg-slate-100 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-lg">map</span>
            <span className="text-sm font-medium text-slate-600">Khu vực {table?.areaId}</span>
          </div>
          <div className="px-4 py-2 bg-slate-100 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 text-lg">groups</span>
            <span className="text-sm font-medium text-slate-600">{table?.capacity} khách</span>
          </div>
        </div>
      </p>
    </div>
  )
}