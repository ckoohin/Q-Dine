import QRGenerator from "@/app/(protected)/staff/qr_table/[tableId]/qr-generator";
// import { useParams } from "next/navigation";


export default function TablesPage() {
  const tableId = "qweqweqweqwe";
  return (
    <>
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <header
          className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Quản lý Bàn</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="font-semibold">Mở bàn &amp; Tạo mã QR</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              Đang mở phiên
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>
        {/* Page Content */}
        <div className="p-8 max-w-6xl mx-auto w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Mở bàn &amp; Tạo
              mã QR</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Bàn: <span
              className="text-primary font-bold">T-01</span> • Khu vực: Tầng trệt • Sức chứa: 4-6 khách</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-3 space-y-6">
              <div
                className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Thông tin phiên phục vụ
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Số
                      lượng khách (Pax)</label>
                    <div className="relative">
                      <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">groups</span>
                      <input
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-primary focus:border-primary"
                        placeholder="Nhập số lượng khách, vd: 4" type="number" />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Loại
                      hình dịch vụ</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        className="relative flex items-center justify-center p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer group transition-all">
                        <input  className="hidden" name="service" type="radio" />
                        <div className="text-center">
                          <span
                            className="material-symbols-outlined text-primary text-3xl mb-1">menu_book</span>
                          <p className="font-bold text-primary">À la carte</p>
                          <p className="text-xs text-primary/70">Gọi món theo thực đơn</p>
                        </div>
                        <span
                          className="absolute top-2 right-2 material-symbols-outlined text-primary text-xl">check_circle</span>
                      </label>
                      <label
                        className="relative flex items-center justify-center p-4 border-2 border-slate-100 dark:border-slate-800 hover:border-primary/50 rounded-xl cursor-pointer group transition-all">
                        <input className="hidden" name="service" type="radio" />
                        <div className="text-center">
                          <span
                            className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-3xl mb-1">restaurant</span>
                          <p className="font-bold text-slate-600 dark:text-slate-300">Buffet</p>
                          <p className="text-xs text-slate-400">Trọn gói theo suất</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined">qr_code_2</span>
                      Mở bàn &amp; Tạo mã QR
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 flex gap-4">
                <span className="material-symbols-outlined text-blue-500">lightbulb</span>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Mẹo:</strong> Khách hàng có thể quét mã QR này để xem thực đơn và gọi món trực
                  tiếp từ điện thoại cá nhân. Thông tin sẽ được đồng bộ ngay lập tức tới máy tính tiền.
                </p>
              </div>
            </div>
            {/* Result Section (QR Card) */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border-4 border-primary text-center relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 p-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                  Đang mở
                </div>
                <h4 className="text-lg font-bold mb-1">Mã QR Đặt món</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Bàn T-01 • 14/10/2023</p>
                <div
                  className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 mb-8 aspect-square flex items-center justify-center">
                  {/* Simulated QR Code */}
                  <div
                    className="relative size-full max-w-[200px] flex items-center justify-center bg-white p-2 rounded-lg">
                    <div className="w-full h-full bg-center bg-no-repeat bg-contain"
                      data-alt="Dynamic QR Code for Table T-01 session"
                      style={"background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlJtCFYRD9mM9yQSsnUILYS54kWe2Z-zem2ZENJfhhQqgFCdBVJLCwkzY9UqubNKZEklJEUaLdVd2VUuFTRGqBu1rLwn8w5xWwwk_SxV70Pg6Ki_QSIZmuHMEQIMqOZ1FciNMCQRp_3CcwYV3UdkmXbBOnOZJ6Cm1HsXQHgD2WiRO9M-HQpNR9tMRFm2POwsZdhX8dGfljI5uZV5FZHhiTN2JHuk-2uabRIWEa8-LrwpFHReNaDAmuXiWGJu4A1LBkPzkdKM73HOM')"}>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="size-10 bg-white rounded-lg shadow-md flex items-center justify-center p-1">
                        <div
                          className="size-full bg-primary rounded-md flex items-center justify-center">
                          <span
                            className="material-symbols-outlined text-white text-xs">restaurant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 dark:bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined">print</span>
                    In mã (A6)
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="material-symbols-outlined">download</span>
                    Tải ảnh mã
                  </button>
                </div>
                <p className="mt-6 text-[10px] text-slate-400 uppercase font-bold tracking-widest">Savory Smart
                  QR System</p>
              </div>
              <div
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h5 className="font-bold mb-4">Hoạt động gần đây</h5>
                <div className="space-y-4">
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Bàn T-01 đã được khởi
                        tạo</p>
                      <p className="text-xs text-slate-500">Bởi Minh Trần • 10:45 AM</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="size-2 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                    <div>
                      <p className="font-medium text-slate-600 dark:text-slate-400">Bàn T-04 đã thanh toán
                      </p>
                      <p className="text-xs text-slate-500">Bởi Lan Nguyễn • 10:32 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}