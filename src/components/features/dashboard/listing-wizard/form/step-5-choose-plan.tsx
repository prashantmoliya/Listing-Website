"use client";

import { Check, X } from "lucide-react";

interface Step5ChoosePlanProps {
  data: {
    selectedPlan: "free" | "featured";
    [key: string]: any;
  };
  onChange: (field: string, value: any) => void;
}

export function Step5ChoosePlan({ data, onChange }: Step5ChoosePlanProps) {
  const isFree = data.selectedPlan === "free";
  const isFeatured = data.selectedPlan === "featured";

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Step Header */}
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Choose Your Plan
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Select the listing package that best fits your business growth goals.
        </p>
      </div>

      {/* Centered, Well-Proportioned 2-Card Container (Eliminates excessive width) */}
      <div className="max-w-[760px] mx-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* PACKAGE 1: Free Listing */}
          <div
            onClick={() => onChange("selectedPlan", "free")}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer relative ${
              isFree
                ? "bg-white border-2 border-[#5c67f2] shadow-xl shadow-indigo-500/10 ring-4 ring-indigo-50/70"
                : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md"
            }`}
          >
            <div>
              {/* Icon & Selection Radio */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs bg-slate-100 border border-slate-200/80">
                  <span>🏢</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isFree
                      ? "bg-[#5c67f2] text-white shadow-xs"
                      : "border-2 border-slate-300"
                  }`}
                >
                  {isFree && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              {/* Tag & Plan Name */}
              <div className="mb-1">
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-500">
                  PACKAGE 1
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-3">
                Free Listing
              </h4>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                  ₹0
                </span>
                <span className="text-slate-500 font-semibold text-xs">
                  / forever
                </span>
              </div>

              {/* Headline & Description */}
              <div className="space-y-1 pb-5 border-b border-slate-100">
                <h5 className="font-bold text-xs text-slate-900">
                  Get Started for Free
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Add your business to our directory at absolutely no cost. Perfect for businesses just starting their online journey.
                </p>
              </div>

              {/* Features List */}
              <div className="py-5 space-y-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Features Included
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2.5 text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100 text-slate-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>Unlimited listing duration with a no-follow website link.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} strokeWidth={3} />
                    </div>
                    <span>No featured listing on the homepage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} strokeWidth={3} />
                    </div>
                    <span>No business highlighting on the category pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} strokeWidth={3} />
                    </div>
                    <span>No featured listing on the featured page.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} strokeWidth={3} />
                    </div>
                    <span>No business highlighting in search results.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Select Action */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  isFree
                    ? "bg-[#5c67f2] text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
                }`}
              >
                {isFree ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Selected Plan</span>
                  </>
                ) : (
                  <span>Choose Free Listing</span>
                )}
              </button>
            </div>
          </div>

          {/* PACKAGE 2: Featured Listing */}
          <div
            onClick={() => onChange("selectedPlan", "featured")}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer relative ${
              isFeatured
                ? "bg-white border-2 border-[#5c67f2] shadow-2xl shadow-indigo-500/15 ring-4 ring-indigo-50/70"
                : "bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md"
            }`}
          >
            {/* Top Badges */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center rounded-full shadow-md shadow-indigo-500/20 overflow-hidden whitespace-nowrap z-10 border border-white/60">
              <span className="bg-indigo-600 text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 whitespace-nowrap">
                MOST POPULAR
              </span>
              <span className="bg-emerald-600 text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 whitespace-nowrap flex items-center gap-1">
                <span>🎁</span> LIMITED FREE
              </span>
            </div>

            <div>
              {/* Icon & Selection Radio */}
              <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xs bg-amber-100 border border-amber-200/90">
                  <span>⭐</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isFeatured
                      ? "bg-[#5c67f2] text-white shadow-xs"
                      : "border-2 border-slate-300"
                  }`}
                >
                  {isFeatured && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              {/* Tag & Plan Name */}
              <div className="mb-1">
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-600">
                  PACKAGE 2
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-3">
                Featured Listing
              </h4>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                  ₹99
                </span>
                <span className="text-slate-500 font-semibold text-xs">
                  / forever
                </span>
              </div>

              {/* Headline & Description */}
              <div className="space-y-1 pb-5 border-b border-slate-100">
                <h5 className="font-bold text-xs text-amber-600">
                  Maximum Visibility for Your Business
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Featured Listing includes listing for unlimited days, Featured listing on homepage, Featured listing on featured page, and priority placement in category and search results.
                </p>
              </div>

              {/* Features List */}
              <div className="py-5 space-y-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Features Included
                </div>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2.5 text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-100 text-amber-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>
                      Unlimited listing duration with a{" "}
                      <strong className="text-indigo-600 font-bold">do-follow</strong>{" "}
                      website link.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-100 text-amber-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>Featured listing on the homepage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-100 text-amber-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>Business highlighting on the category pages.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-100 text-amber-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>Featured listing on the featured page.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-amber-100 text-amber-700">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span>Business highlighting in search results.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Select Action */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  isFeatured
                    ? "bg-[#5c67f2] text-white shadow-sm"
                    : "bg-amber-100 hover:bg-amber-200/90 text-amber-800 border border-amber-200"
                }`}
              >
                {isFeatured ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Selected Plan (Best Value)</span>
                  </>
                ) : (
                  <span>Choose Featured Listing</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
