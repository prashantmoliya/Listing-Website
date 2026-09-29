"use client";

import { InputWithLabel } from "@/components/common";
import { daysOfWeek } from "@/data";

interface Step3TimingHoursProps {
  data: {
    is24x7: boolean;
    openTime: string;
    closeTime: string;
    closedDays: string[];
  };
  onChange: (field: string, value: any) => void;
}

export function Step3TimingHours({ data, onChange }: Step3TimingHoursProps) {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Step 3: Business Timing & Working Schedule
        </h3>
        <p className="text-xs text-slate-500">
          Inform visitors about your working hours and weekly off days.
        </p>
      </div>

      {/* 24x7 Toggle */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold text-slate-900">
            Open 24 Hours / 7 Days a Week?
          </h4>
          <p className="text-[11px] text-slate-500">
            Ideal for hospitals, hotels, emergency services, or 24/7 pharmacies.
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            checked={data.is24x7}
            onChange={(e) => onChange("is24x7", e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
        </label>
      </div>

      {!data.is24x7 && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <InputWithLabel
                id="biz-opentime"
                label="Daily Opening Time"
                type="time"
                value={data.openTime}
                onChange={(e) => onChange("openTime", e.target.value)}
              />
            </div>
            <div>
              <InputWithLabel
                id="biz-closetime"
                label="Daily Closing Time"
                type="time"
                value={data.closeTime}
                onChange={(e) => onChange("closeTime", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-2">
              Weekly Off Days (Closed Days)
            </label>
            <div className="flex flex-wrap gap-2">
              {daysOfWeek.map((day) => {
                const isOff = data.closedDays.includes(day);
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => {
                      if (isOff) {
                        onChange(
                          "closedDays",
                          data.closedDays.filter((d) => d !== day)
                        );
                      } else {
                        onChange("closedDays", [...data.closedDays, day]);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                      isOff
                        ? "bg-red-50 border-red-200 text-red-700"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {day} {isOff && "(Closed)"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
