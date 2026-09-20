import Link from "next/link";
import { Plus } from "lucide-react";

export function CategoriesCta() {
  return (
    <div className="mt-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100/80 rounded-3xl p-8 sm:p-10 text-center shadow-xs">
      <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2 tracking-tight">
        Can&apos;t find your category?
      </h2>

      <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
        Submit your business listing and our moderation team will categorise it accurately for maximum visibility.
      </p>

      <Link
        href="/listings/create"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all hover:-translate-y-0.5"
      >
        <Plus size={16} className="stroke-[2.5]" />
        <span>Add Your Business Free</span>
      </Link>
    </div>
  );
}
