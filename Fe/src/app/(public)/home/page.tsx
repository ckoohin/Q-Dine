import Container from '@/components/Container'
import React from 'react'
import "./home.css"
const Home = () => {
    return (
        <>
            <Container>
                <div className="savory-scope"> 
                    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6">
                        <section className="py-12 @container">
                            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                                <div className="flex flex-col gap-8 lg:w-1/2">
                                    <div className="flex flex-col gap-4 text-left">
                                        <span className="text-primary font-bold tracking-widest uppercase text-xs">Chào mừng đến với
                                            Savory</span>
                                        <h1
                                            className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-[1.1] tracking-tight @[480px]:text-6xl">
                                            Trải nghiệm ẩm thực thông minh tại <span className="text-primary">Savory</span>
                                        </h1>
                                        <p
                                            className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[500px]">
                                            Khám phá hương vị tuyệt vời cùng dịch vụ đặt bàn và gọi món hiện đại, nhanh chóng ngay
                                            tại chỗ.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                                            <span>Đặt bàn ngay</span>
                                        </button>
                                        <button
                                            className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-2xl h-14 px-8 border-2 border-primary/20 text-slate-800 dark:text-slate-200 text-base font-bold hover:bg-primary/5 transition-all">
                                            <span>Khám phá thực đơn</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <img alt="Hero Food Image" className="w-full h-full object-cover"
                                            data-alt="Delicious gourmet food spread on a restaurant table"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguxFPdNXK-sHLsVKSuuiiQTGp_Mk_LAJeiLNXQ-KS_aYZEBZLFXm0weKUQ_eOhfvoKuKvtou5QCn633QXjKUQrL9_Fed2AtpafRAxkhyZoDfRPx2MxJDS6WdhFLL1Uik0fnmU4tiJjGeLkjfl7oZjr1Ev9kptM6A_-Zmikzb_aTwgtC_PrdJ3LaGHW2GxsTpNKv7Peb88aGQcpWCcOOeRSizTuJnjGt8wpOPBZJJLAxR8wj9KVcR78OtVb0NCXyU8DB2u46KU-jM" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 flex gap-2">
                                            <div className="bg-white/90 backdrop-blur p-3 rounded-xl flex items-center gap-3">
                                                <div
                                                    className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-900">4.9/5 Rating</p>
                                                    <p className="text-[10px] text-slate-500">Từ 2,000+ thực khách</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="mb-8">
                            <div
                                className="w-full bg-primary/5 dark:bg-primary/10 border-2 border-dashed border-primary/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                                        <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-extrabold">Bắt đầu bữa ăn ngay với mã
                                            QR tại bàn</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Tiết kiệm thời gian, gọi
                                            món chỉ trong 30 giây.</p>
                                    </div>
                                </div>
                                <button
                                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">touch_app</span>
                                    Quét mã ngay
                                </button>
                            </div>
                        </section>
                        <section className="py-16">
                            <div className="text-center mb-12">
                                <h2
                                    className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight mb-2">
                                    Quy trình đơn giản</h2>
                                <p className="text-slate-500 dark:text-slate-400">Tận hưởng bữa ăn trọn vẹn chỉ với vài thao tác</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div
                                    className="flex flex-col gap-6 rounded-2xl bg-primary p-8 shadow-2xl shadow-primary/30 relative overflow-hidden group">
                                    <div
                                        className="absolute -top-4 -right-4 size-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all">
                                    </div>
                                    <div
                                        className="size-20 rounded-2xl bg-white/20 qr-glow flex items-center justify-center text-white border border-white/30 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-5xl font-light">qr_code_2</span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-white text-2xl font-black">1. Quét mã</h3>
                                        <p className="text-white/90 text-base leading-relaxed font-medium">Sử dụng QR code tại bàn để
                                            bắt đầu truy cập menu điện tử ngay lập tức.</p>
                                        <button
                                            className="mt-4 flex items-center gap-2 text-white/90 text-sm font-bold border border-white/30 bg-white/10 w-fit px-4 py-2 rounded-xl hover:bg-white hover:text-primary transition-all">
                                            <span className="material-symbols-outlined text-lg">info</span>
                                            Hướng dẫn quét mã
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col gap-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">2. Chọn món</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">Duyệt menu đa dạng
                                            với hình ảnh sinh động và gọi món nhanh chóng.</p>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col gap-6 rounded-2xl border border-primary/10 bg-white dark:bg-slate-800/50 p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">local_cafe</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">3. Thưởng thức</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">Tận hưởng bữa ăn
                                            ngon miệng cùng người thân trong không gian ấm cúng.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-16">
                            <div className="flex items-end justify-between mb-10">
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">
                                        Thực đơn nổi bật</h2>
                                    <p className="text-slate-500 dark:text-slate-400">Những món ăn được yêu thích nhất tại Savory</p>
                                </div>
                                <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                                    Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
                                        <img alt="Salad Bowl"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Fresh healthy salmon salad bowl with avocado"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVhVLuhNNiIRLFsjqiPM7Ocooy4--FKwAnBFJsOhZUv_qcqSCU7eRKmpKY4dVgjNfggFnYlyGVWq7J8GkKCQVs6SqnjDOh9CH0JArb_W0qQ_1jbAfqeA4c6S6th1-lzH0ymAyVdWhCCz0ND0NhNvKYFlyACLkvj0v1xHE9RxhJvjtyB3C5QVe3iC4rmIaKpCJSYVRaPvpiYq7NnATh42FPHwcB1WvV4czdhFRoQGk8jZPyCQKuosjlVju9VZBRp132aHbo8qm3wIk" />
                                        <div
                                            className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-primary">
                                            Bán chạy</div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Salad Cá Hồi Áp Chảo
                                            </h4>
                                            <p className="text-slate-500 text-sm">Chế độ Eat Clean khỏe mạnh</p>
                                        </div>
                                        <span className="text-primary font-black text-lg">189k</span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
                                        <img alt="Pizza Supreme"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Delicious cheesy pizza with various toppings"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_k5O0uk--iYrEHED8EhVJnQU3-TyBPxahpnC0l27ZljOY74O76kJ4lHoByEJ2LZm96_lOpspnTL-Qs9LL-kmOCEPXZYUbLZ5pO8ySPvnGAEyc6mW1cl1anLob1mNQPzTyVfK1SAVuQ5NYGJwQW9LiZvhThz3xl5ehIs0dLPeYsN8HkBvd1W2KGBwOyuMeXYhA5Huas-W0TbuvDIGuVZ3t2swVo5-bdY4rflLODshwHuAVPZFB5K-dR_m9RtidY4sFW8FcSz3iXmo" />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Pizza Hải Sản Pesto
                                            </h4>
                                            <p className="text-slate-500 text-sm">Hải sản tươi cùng sốt đặc trưng</p>
                                        </div>
                                        <span className="text-primary font-black text-lg">245k</span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
                                        <img alt="Beef Steak"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Juicy premium beef steak with rosemary"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRUem6i0rDd7PVlJaGRYtekTbv0a7x9X-8L_k2-a2T18EfQfyhOBqlKhqUAQcsPGlazoIkF-vmRtGBziohZ26E8DzreIalgj4ZdDHu8D76MQFEoNA3-O3pqreDC4KESSFG-fXCeLTiVs8FN_9rotU2Kjarr2Iz7lDntRf8iS4YHn5Ie5M-jhCEzcpEHFKUUX7yWFZrEWgEUTJ83_lGwiUnWkYLN6TQUV2DsgDl1Ku2gdPyPPGTVyTEMibTfHw2Oc42ifDf6TMNPo" />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Bít Tết Bò Mỹ Ribeye
                                            </h4>
                                            <p className="text-slate-500 text-sm">Kèm sốt vang đỏ thượng hạng</p>
                                        </div>
                                        <span className="text-primary font-black text-lg">450k</span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
                                        <img alt="Burger"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Gourmet beef burger with fries on side"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVxXvHorbtLD7-bFXv1u4dVVV-7a3S4ckI4gY0_yNlZMBn1kbHC0930M1yllFVeNO8_X53sYiCqnmbs0VocwhPuESVR2ZepfXe-tteutX9AgcC4VMFmmcjmwEnHyAw5OMGLgNEUqMuqYl4IJWO7IAn4Pf4wcWGm5U_h_KUDuWtotfK8FKiryPCK5R0DbubRCglwkGy65T9IAigYtSHb5TkBCCLqaL1KcFng-Dc30swuNJJSlqV1Muger8RUUgXR3SF2eaxIcaJWfE" />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg">Savory Burger Special
                                            </h4>
                                            <p className="text-slate-500 text-sm">Phô mai tan chảy &amp; khoai tây</p>
                                        </div>
                                        <span className="text-primary font-black text-lg">155k</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </Container>
        </>
    )
}

export default Home