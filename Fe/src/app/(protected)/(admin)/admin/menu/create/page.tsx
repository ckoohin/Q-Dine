import React from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
const CreateMenu = () => {
    return (
        <>
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                {/* Dialog Box  */}
                <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-xl custom-shadow overflow-hidden flex flex-col">
                    {/* Header  */}
                    <header className="flex items-center justify-between px-8 py-6 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <span className="material-symbols-outlined text-primary">restaurant_menu</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">Chỉnh sửa món ăn</h2>
                        </div>
                        <Link href={'/admin/menu'}
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500">
                            <span className="material-symbols-outlined">
                                <X />
                            </span>
                        </Link>
                    </header>
                    {/* Form Content */}
                    <div className="px-8 py-6 overflow-y-auto max-h-[75vh]">
                        <form className="space-y-6">
                            {/* Image Upload Section */}
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Hình ảnh món ăn</p>
                                <div
                                    className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <div
                                        className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <span
                                            className="material-symbols-outlined text-slate-400 group-hover:text-primary">add_a_photo</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Nhấn để tải ảnh lên
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">PNG, JPG tối đa 5MB</p>
                                    </div>
                                </div>
                            </div>
                            {/* Item Name & Category Row  */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tên món ăn</label>
                                    <input
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-primary focus:border-primary transition-all p-3"
                                        placeholder="Ví dụ: Phở Bò Tái Lăn" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Danh mục</label>
                                    <select
                                        className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-primary focus:border-primary transition-all p-3">
                                        <option>Món chính</option>
                                        <option>Khai vị</option>
                                        <option>Tráng miệng</option>
                                        <option>Đồ uống</option>
                                    </select>
                                </div>
                            </div>
                            {/* Description  */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mô tả chi tiết</label>
                                <textarea
                                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-primary focus:border-primary transition-all p-3"
                                    placeholder="Nhập mô tả về nguyên liệu, hương vị..." rows={3}></textarea>
                            </div>
                            {/* Price & Status Row  */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Giá bán
                                        (VNĐ)</label>
                                    <div className="relative">
                                        <span
                                            className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-lg">payments</span>
                                        <input
                                            className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-primary focus:border-primary transition-all p-3"
                                            placeholder="0.000" type="number" />
                                    </div>
                                </div>
                                {/* Status Toggle  */}
                                <div
                                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30">
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Trạng thái món
                                        ăn</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input checked={true} className="sr-only peer" type="checkbox" value="" />
                                        <div
                                            className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                                        </div>
                                        <span className="ms-3 text-xs font-medium text-slate-500 dark:text-slate-400">Đang
                                            bán</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Footer Actions  */}
                    <footer
                        className="px-8 py-6 border-t border-slate-100 dark:border-slate-800 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-900">
                        <button
                            className="w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            Hủy
                        </button>
                        <button
                            className="w-full sm:w-auto px-8 py-2.5 rounded-lg font-semibold bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-lg">save</span>
                            Lưu món ăn
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default CreateMenu