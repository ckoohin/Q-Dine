export default function RecentActivity() {

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h5 className="font-bold text-slate-800">Hoạt động gần đây</h5>
        <span
          className="text-[10px] font-bold text-[#4caf50] hover:underline cursor-pointer uppercase">Xem
          tất cả</span>
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div
            className="size-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#4caf50] text-xl">add_circle</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Khởi tạo phiên mới</p>
            <p className="text-xs text-slate-500">Minh Trần • 10:45 AM • Bàn T-01</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="size-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-slate-400 text-xl">payments</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-600">Hoàn tất thanh toán</p>
            <p className="text-xs text-slate-500">Lan Nguyễn • 10:32 AM • Bàn T-04</p>
          </div>
        </div>
      </div>
    </div>

  )
}