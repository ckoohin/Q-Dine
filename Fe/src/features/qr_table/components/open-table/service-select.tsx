import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export default function ServiceTypeSelect() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Label
        className="relative flex items-center justify-center p-4 border-primary bg-savory-green/5 border-savory-green border-2 rounded-3xl cursor-pointer group transition-all">
        <input className="hidden" name="service" type="radio" />
        <div className="text-center">
          <span
            className="material-symbols-outlined text-savory-green text-3xl mb-1">
            menu_book
          </span>
          <p className="font-bold text-savory-green">À la carte</p>
          <p className="text-xs text-savory-green/70">Gọi món theo thực đơn</p>
        </div>
        <span
          className="absolute top-2 right-2 material-symbols-outlined text-savory-green text-xl">
          <CheckCircle />
        </span>
      </Label>
      <Label
        className="relative flex items-center justify-center p-4 border-2 border-slate-100 dark:border-slate-800 hover:border-savory-green/50 rounded-3xl cursor-pointer group transition-all">
        <input className="hidden" name="service" type="radio" />
        <div className="text-center">
          <span
            className="material-symbols-outlined text-slate-400 group-hover:text-savory-green transition-colors text-3xl mb-1">
            restaurant
          </span>
          <p className="font-bold text-slate-600 dark:text-slate-300">Buffet</p>
          <p className="text-xs text-slate-400">Trọn gói theo suất</p>
        </div>
      </Label>
    </div>
  )
}