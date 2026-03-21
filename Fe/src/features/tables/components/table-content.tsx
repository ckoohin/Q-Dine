import Link from "next/link"
import { useTableFilter } from "../context/table-filter.context"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import TableFilter from "./table-filter"
import TableStats from "./table-stats"
import TableData from "./table-data"
import TableCards from "./table-cards"
import TableEdit from "./table-edit"
import TableCreateForm from "./table-create-form"
import { useTableCreate } from "../context/table-create.context"

export default function TablesContent() {

  const { view, setView } = useTableFilter()
  const { creating ,setCreating } = useTableCreate()

  return (
    <div className="space-y-6 pb-8">

      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            Sơ đồ bàn thời gian thực
          </h1>
          <p className="text-slate-500 mt-1">
            Hôm nay: 24 Tháng 5, 2024 • 14:30 PM
          </p>
        </div>

        {/* <Link href="/admin/tables/create"> */}
        <Button
          onClick={() => {
            
            setCreating(true)
            console.log(creating);
            
          }}
          className="bg-savory-green text-white px-6 py-2.5 rounded-full flex items-center gap-2">
            <Plus size={18} />
            Thêm bàn mới
          </Button>
        {/* </Link> */}
      </div>

      <TableFilter />

      <TableStats />

      {view === "table"
        ? <TableData />
        : <TableCards />
      }

      {/* from edit */}
      <TableEdit />

      {/* from create */}
      <TableCreateForm />
    </div>
  )
}
