import { Utensils } from 'lucide-react'
import React from 'react'

const LogoAdmin = () => {
    return (
        <div className="flex items-center gap-3">
            <div
                className="size-10 bg-gradient-to-br from-savory-green to-savory-dark rounded-xl flex items-center justify-center text-white shadow-lg shadow-savory-green/30">
                <span className="material-symbols-outlined font-bold">
                    <Utensils />
                </span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Savory</h1>
        </div>
    )
}

export default LogoAdmin