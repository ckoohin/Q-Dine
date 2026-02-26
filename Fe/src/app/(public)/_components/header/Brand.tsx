import Link from "next/link";

export default function     Brand() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary">
      <span className="material-symbols-outlined text-3xl font-bold">
        restaurant
      </span>
      <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-black leading-tight tracking-tight">
        Savory
      </h2>
    </Link>
  );
}