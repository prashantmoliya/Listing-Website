"use client";

import { CheckCircle2, Info } from "lucide-react";
import { InputWithLabel } from "@/components/common";
import { availableAmenities } from "@/data";

interface Step5FeaturesReviewProps {
  data: {
    name: string;
    amenities: string[];
    description: string;
    tags: string;
  };
  onChange: (field: string, value: any) => void;
  onToggleAmenity: (amenity: string) => void;
}

export function Step5FeaturesReview({
  data,
  onChange,
  onToggleAmenity,
}: Step5FeaturesReviewProps) {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Step 5: Features, Amenities & Final Review
        </h3>
        <p className="text-xs text-slate-500">
          Select available amenities and provide an engaging business description.
        </p>
      </div>

      {/* Amenities Grid */}
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-2">
          Select Available Amenities & Facilities
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {availableAmenities.map((amenity) => {
            const isSelected = data.amenities.includes(amenity);
            return (
              <button
                key={amenity}
                type="button"
                onClick={() => onToggleAmenity(amenity)}
                className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? "bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{amenity}</span>
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
          Detailed Business Description *
        </label>
        <textarea
          rows={4}
          placeholder="Provide an overview of your products, specialities, customer experience, and history..."
          value={data.description}
          onChange={(e) => onChange("description", e.target.value)}
          className="w-full p-3.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 leading-relaxed"
          required
        />
      </div>

      {/* Search Keywords */}
      <div>
        <InputWithLabel
          id="biz-tags"
          label="Search Keywords / Tags (comma separated)"
          placeholder="e.g. hotel, luxury suites, wedding venue, fine dining"
          value={data.tags}
          onChange={(e) => onChange("tags", e.target.value)}
        />
      </div>

      {/* Summary Review Disclaimer Card */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
          <Info className="w-4 h-4" />
          <span>Ready to submit?</span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          By submitting this listing, you confirm that you are the authorized
          representative of <strong>{data.name || "this business"}</strong> and that
          all details provided are accurate.
        </p>
      </div>
    </div>
  );
}
