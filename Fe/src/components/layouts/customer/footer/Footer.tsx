import React from 'react'

const Footer = () => {
  return (
      <>
          <footer className="bg-white border-t border-gray-100 py-4 px-8 shadow-2xl relative z-50">
        <div className="max-w-full mx-auto flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-[var(--text-muted)] text-sm">
                <div className="flex -space-x-2">
                    <img alt="User" className="size-8 rounded-full border-2 border-white"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlYiL-B3Oi31xIkDqwN6OfTEqLzNW9WvLmO1ysVMb9iuZP6ukPgXmhTr0tBg2kWPlGrj9cwJzt70Y7cYX5Nm3lrZD7cMcJtOuA_GYHkj1itlR20BM0_9N9sZwV3ggVKgbNyAhrpJCXloKde7m1mx5_spuGnyMgAptyzVEK_R9EPIXbTTaffiS0m__BG9HLbKMdoPOeGIrMpZrRJjsO8JOzNwTDY6nb1xYtJ6FilvsUTMNLN9HGzzwHlKiIzXxQEUsmhJ0hTu6TYwE" />
                    <img alt="User" className="size-8 rounded-full border-2 border-white"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNv3JeRwiNB4rQFwwNnXyxYYJY-0msLRiVIPFTPCzgUAOrhf4vwkRp04nnJEfv1A3y7Mo2xaTne-XX6S-pmB-lR9Jmaf4Ps94uidrTL1DKcQ7CTMBgWka49_Vfr5Bwz3P-gCyYgSCDybJqhcKM94XFsSQ4bEqdS-ZJ0tWyILh7cEqGKqT4JYG4KU3bkF1ajTFihMIG3HJIvCL2DuwT9WwIwrpYiVtJC7UFacyJzd7sMw5F_LpfTauneCNsHi0DpXsx-zdNKM1go8" />
                </div>
                <p><b>3 người</b> khác cũng đang đặt món...</p>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="flex items-center gap-2 px-6 py-4 rounded-xl-custom border-2 border-gray-100 text-[var(--text-main)] font-bold hover:bg-gray-50 transition-all active:scale-95">
                    <span className="material-symbols-outlined">notifications_active</span>
                    Gọi nhân viên
                </button>
                <button
                    className="flex items-center gap-2 px-8 py-4 rounded-xl-custom bg-savory-green text-white font-black shadow-lg shadow-green-200 hover:brightness-105 transition-all active:scale-95">
                    <span className="material-symbols-outlined">receipt_long</span>
                    Yêu cầu thanh toán
                </button>
            </div>
        </div>
    </footer>
      </>
  )
}

export default Footer
