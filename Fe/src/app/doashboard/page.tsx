import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <aside className="w-72 flex-shrink-0 flex flex-col bg-aside border-r border-slate-200/50 z-10">
                    <div className="p-8 flex items-center gap-3">
                        <div className="size-10 bg-gradient-to-br from-savory-green to-savory-dark rounded-xl flex items-center justify-center text-white shadow-lg shadow-savory-green/30">
                            <span className="material-symbols-outlined font-bold">restaurant</span>
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Savory</h1>
                    </div>
                    <nav className="flex-1 px-6 space-y-8 overflow-y-auto custom-scrollbar">
                        <div>
                            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">Quản lý</p>
                            <div className="space-y-2">
                                <a className="nav-link active" href="#">
                                    <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                    <span>Tổng quan</span>
                                </a>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
                                    <span>Thực đơn</span>
                                </a>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">table_restaurant</span>
                                    <span>Sơ đồ bàn</span>
                                </a>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">badge</span>
                                    <span>Nhân viên</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">Vận hành</p>
                            <div className="space-y-2">
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                                    <span>Báo cáo</span>
                                </a>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                                    <span>Lịch sử đơn</span>
                                </a>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined text-[20px]">settings</span>
                                    <span>Cài đặt</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="p-6 mt-auto">
                        <div className="bg-white rounded-[20px] p-4 shadow-soft border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-savory-light" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs5y2SAnhFfdEPHdF4733c3PuD5joGwwYRiXjP-ST5GYKwizZksYrgbsWKTR0Ea91yIvbtUkwsmOtsMvJISaub7cMGaULtHpYa4D0hiqdBxXq7kEvRvpJAHPqgigJMtXiYgdHm7az6ZBZP3HqtFjo1ERyYsEub4ACNrAqMM5OT-5DHmu3jKb9nSUDtRFY3m1vOa2rtJRzmmZACwaq4qmX5iGYnQ7NTLPK6pnG6WkM0-vPi4_VH5obkkawjTrb7quM2RGRn_qg9AYo")' }}>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Alex Rivera</p>
                                    <p className="text-[10px] text-savory-green font-bold uppercase tracking-wider">Quản lý</p>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-500 py-2.5 px-4 rounded-xl font-bold text-xs transition-all">
                                <span className="material-symbols-outlined text-[18px]">logout</span>
                                <span>Đăng xuất</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <main className="flex-1 flex flex-col overflow-hidden relative">
                    <header className="h-20 flex items-center justify-between px-8 bg-transparent shrink-0">
                        <div className="flex items-center gap-2">
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-savory-green transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </span>
                                <input className="pl-11 pr-4 py-2.5 bg-white border-none rounded-full text-sm w-72 shadow-soft focus:ring-2 focus:ring-savory-green/20 transition-all placeholder:text-slate-400" placeholder="Tìm kiếm đơn hàng, bàn..." type="text" />
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </button>
                                <button className="size-10 flex items-center justify-center bg-white rounded-full shadow-soft text-slate-400 hover:text-savory-green hover:shadow-md transition-all relative">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                    <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white" />
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-6">
                        <div className="flex flex-wrap justify-between items-end pt-2 pb-6">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Chào mừng trở lại, Alex! 👋
                                </h2>
                                <p className="text-text-muted font-medium">Đây là tổng quan tình hình kinh doanh hôm nay.</p>
                            </div>
                            <div className="flex bg-white p-1.5 rounded-2xl shadow-soft">
                                <button className="px-5 py-2 bg-savory-green text-white rounded-xl text-xs font-bold shadow-sm transition-transform active:scale-95">Hôm
                                    nay</button>
                                <button className="px-5 py-2 text-text-muted hover:text-savory-green text-xs font-bold transition-colors">Tuần
                                    này</button>
                                <button className="px-5 py-2 text-text-muted hover:text-savory-green text-xs font-bold transition-colors">Tháng
                                    này</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="card p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group cursor-default h-40 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 size-24 bg-savory-light rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Doanh thu
                                            ngày</p>
                                        <h4 className="text-3xl font-extrabold text-slate-800">4.250.000đ</h4>
                                    </div>
                                    <div className="size-12 bg-savory-light text-savory-green rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">payments</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-auto relative z-10">
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-savory-green bg-savory-light px-2 py-1 rounded-lg">
                                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                        +5.2%
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-medium">so với hôm qua</span>
                                </div>
                            </div>
                            <div className="card p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group cursor-default h-40 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 size-24 bg-orange-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tổng đơn hàng
                                        </p>
                                        <h4 className="text-3xl font-extrabold text-slate-800">128</h4>
                                    </div>
                                    <div className="size-12 bg-orange-50 text-savory-accent rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">receipt_long</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-auto relative z-10">
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-lg">
                                        <span className="material-symbols-outlined text-[14px]">trending_down</span>
                                        -2.1%
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-medium">so với trung bình</span>
                                </div>
                            </div>
                            <div className="card p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group cursor-default h-40 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 size-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tỷ lệ lấp đầy
                                        </p>
                                        <h4 className="text-3xl font-extrabold text-slate-800">85%</h4>
                                    </div>
                                    <div className="size-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">table_restaurant</span>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full mt-auto overflow-hidden relative z-10">
                                    <div className="bg-blue-500 h-full rounded-full w-[85%]" />
                                </div>
                                <p className="text-[10px] text-slate-400 font-medium mt-1 text-right">17/20 bàn đang dùng</p>
                            </div>
                            <div className="card p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group cursor-default h-40 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 size-24 bg-purple-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div className="flex items-start justify-between relative z-10">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Giá trị
                                            TB/Đơn</p>
                                        <h4 className="text-3xl font-extrabold text-slate-800">330k</h4>
                                    </div>
                                    <div className="size-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">leaderboard</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-auto relative z-10">
                                    <span className="flex items-center gap-1 text-[11px] font-bold text-savory-green bg-savory-light px-2 py-1 rounded-lg">
                                        <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                        +1.5%
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-medium">hiệu quả tốt</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[420px]">
                            <div className="lg:col-span-2 card p-8 flex flex-col h-full relative overflow-hidden">
                                <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                                </div>
                                <div className="flex items-center justify-between mb-6 relative z-10">
                                    <div>
                                        <h4 className="text-lg font-extrabold text-slate-800">Biểu đồ Doanh thu</h4>
                                        <p className="text-sm text-text-muted mt-1">Hiệu suất theo giờ trong ngày</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-savory-green">28.450.000đ</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mục tiêu tuần
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex-1 w-full min-h-0 z-10">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                                        <defs>
                                            <linearGradient id="greenGradient" x1={0} x2={0} y1={0} y2={1}>
                                                <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#4CAF50" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="orangeGradient" x1={0} x2={0} y1={0} y2={1}>
                                                <stop offset="0%" stopColor="#FF9800" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#FF9800" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 38 Q 15 35, 30 20 T 50 25 T 70 10 T 100 15 V 40 H 0 Z" fill="url(#orangeGradient)" />
                                        <path d="M0 38 Q 15 35, 30 20 T 50 25 T 70 10 T 100 15" fill="none" stroke="#FF9800" strokeDasharray="2 1" strokeWidth="0.8" />
                                        <path d="M0 35 Q 10 32, 20 25 T 40 28 T 60 15 T 80 18 T 100 5 V 40 H 0 Z" fill="url(#greenGradient)" />
                                        <path d="M0 35 Q 10 32, 20 25 T 40 28 T 60 15 T 80 18 T 100 5" fill="none" stroke="#4CAF50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                                        </path>
                                        <circle cx={20} cy={25} fill="#fff" r="1.5" stroke="#4CAF50" strokeWidth="1.5">
                                        </circle>
                                        <circle cx={60} cy={15} fill="#fff" r="1.5" stroke="#4CAF50" strokeWidth="1.5">
                                        </circle>
                                        <circle cx={100} cy={5} fill="#fff" r={2} stroke="#4CAF50" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <div className="flex justify-between mt-4 px-2 relative z-10 border-t border-slate-100 pt-3">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">10:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">12:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">14:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">16:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">18:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">20:00</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">22:00</p>
                                </div>
                            </div>
                            <div className="card p-0 flex flex-col h-full overflow-hidden">
                                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-lg font-extrabold text-slate-800">Trạng thái bàn</h4>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-savory-dark text-[10px] font-bold uppercase tracking-wider">
                                            <span className="size-1.5 bg-savory-green rounded-full animate-pulse" />
                                            Live
                                        </div>
                                    </div>
                                    <p className="text-xs text-text-muted mt-1">Cập nhật thời gian thực</p>
                                </div>
                                <div className="flex-1 overflow-y-auto p-2">
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-savory-light text-savory-dark flex items-center justify-center font-bold text-sm">
                                                    T04
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800 group-hover:text-savory-green transition-colors">
                                                        Bàn 04 - Đang phục vụ</p>
                                                    <p className="text-[11px] text-slate-400">Đã gọi món: 12 phút trước</p>
                                                </div>
                                            </div>
                                            <span className="status-dot bg-savory-green ring-4 ring-savory-light" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-orange-50 text-savory-accent flex items-center justify-center font-bold text-sm">
                                                    T07
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800 group-hover:text-savory-accent transition-colors">
                                                        Bàn 07 - Cần hỗ trợ</p>
                                                    <p className="text-[11px] text-slate-400">Yêu cầu thanh toán</p>
                                                </div>
                                            </div>
                                            <span className="status-dot bg-savory-accent ring-4 ring-orange-50" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-savory-light text-savory-dark flex items-center justify-center font-bold text-sm">
                                                    T12
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800 group-hover:text-savory-green transition-colors">
                                                        Bàn 12 - Mới vào</p>
                                                    <p className="text-[11px] text-slate-400">Đang xem thực đơn</p>
                                                </div>
                                            </div>
                                            <span className="status-dot bg-blue-500 ring-4 ring-blue-50" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group opacity-60">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-sm border border-slate-200">
                                                    T01
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-600">Bàn 01 - Trống</p>
                                                    <p className="text-[11px] text-slate-400">Sẵn sàng</p>
                                                </div>
                                            </div>
                                            <span className="status-dot bg-slate-300" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-savory-light text-savory-dark flex items-center justify-center font-bold text-sm">
                                                    T09
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800 group-hover:text-savory-green transition-colors">
                                                        Bàn 09 - Đang phục vụ</p>
                                                    <p className="text-[11px] text-slate-400">Chờ món chính: 5 phút</p>
                                                </div>
                                            </div>
                                            <span className="status-dot bg-savory-green ring-4 ring-savory-light" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                                    <button className="w-full py-2.5 text-xs font-bold text-savory-green hover:bg-white hover:shadow-sm transition-all border border-savory-green/20 rounded-lg bg-transparent uppercase tracking-wider">
                                        Xem Sơ Đồ Đầy Đủ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-extrabold text-slate-800">Thao tác nhanh</h4>
                                <button className="text-xs text-savory-green font-bold hover:underline">Tùy chỉnh</button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">add_circle</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">Tạo đơn
                                        mới</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">event_available</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">Đặt bàn</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">person_add</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">Thêm
                                        khách</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">print</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">In báo
                                        cáo</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">inventory_2</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">Kho hàng</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-savory-light hover:text-savory-dark transition-all border border-transparent hover:border-savory-green/20 group">
                                    <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-savory-green">help</span>
                                    <span className="text-xs font-bold text-slate-600 group-hover:text-savory-dark">Hỗ trợ</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Dashboard