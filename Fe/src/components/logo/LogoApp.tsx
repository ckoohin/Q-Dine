import { Link } from 'lucide-react'
import React from 'react'

interface TLogoAppProps {
    href?: string;
    className?: string;
}
const LogoApp = ({ href = "/home", className }: TLogoAppProps) => {
  return (
    <Link href="/home" className="flex items-center gap-2 text-primary">
      <span className="material-symbols-outlined text-3xl font-bold">
        restaurant
      </span>
      <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-black leading-tight tracking-tight">
        Savory
      </h2>
    </Link>
  )
}

export default LogoApp