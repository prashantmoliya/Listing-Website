import type { ListingItem } from "@/data";

interface ListingQuickInfoProps {
  listing: ListingItem;
}

export function ListingQuickInfo({ listing }: ListingQuickInfoProps) {
  const established = listing.established || "2020";
  const employees = listing.employees || "1-5";

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] grid grid-cols-2 gap-6 divide-x divide-slate-100">
      <div className="space-y-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Established
        </span>
        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight block">
          {established}
        </span>
      </div>

      <div className="pl-6 space-y-1">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Employees
        </span>
        <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight block">
          {employees}
        </span>
      </div>
    </div>
  );
}
