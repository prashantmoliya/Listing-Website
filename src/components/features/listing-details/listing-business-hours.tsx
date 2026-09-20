import { Clock } from "lucide-react";
import type { ListingItem } from "@/data";

interface ListingBusinessHoursProps {
  listing: ListingItem;
}

export function ListingBusinessHours({ listing }: ListingBusinessHoursProps) {
  const defaultHours = [
    { day: "Monday", hours: "09:00 - 17:00" },
    { day: "Tuesday", hours: "09:00 - 17:00" },
    { day: "Wednesday", hours: "09:00 - 17:00" },
    { day: "Thursday", hours: "09:00 - 17:00" },
    { day: "Friday", hours: "09:00 - 17:00" },
    { day: "Saturday", hours: "CLOSED", isClosed: true },
    { day: "Sunday", hours: "CLOSED", isClosed: true },
  ];

  const hours = listing.businessHours && listing.businessHours.length > 0 
    ? listing.businessHours 
    : defaultHours;

  // Get current day name in English (e.g. "Monday")
  const currentDayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
          <Clock size={22} className="text-indigo-600" />
          <span>Business Hours</span>
        </h2>
      </div>

      <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/70 overflow-hidden">
        {hours.map((item) => {
          const isToday = item.day.toLowerCase() === currentDayName.toLowerCase();
          return (
            <div
              key={item.day}
              className={`flex items-center justify-between px-4 sm:px-5 py-3.5 text-sm transition-colors ${
                isToday ? "bg-indigo-50/60 font-semibold" : "bg-white hover:bg-slate-50/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={isToday ? "text-indigo-900 font-bold" : "text-slate-700 font-medium"}>
                  {item.day}
                </span>
                {isToday && (
                  <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-wider">
                    Today
                  </span>
                )}
              </div>

              {item.isClosed ? (
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                  CLOSED
                </span>
              ) : (
                <span className="text-slate-800 font-medium">
                  {item.hours}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
