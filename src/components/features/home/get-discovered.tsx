"use client";

import { 
  TrendingUp, 
  Search, 
  Link2, 
  Code2, 
  Rocket, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Star,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/common";
import { featuresList } from "@/data";

const iconMap: Record<string, any> = {
  TrendingUp,
  Search,
  Link2,
  SearchCode: Code2,
  Rocket,
  Users,
  ShieldCheck,
  Sparkles,
};

export default function GetDiscovered() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden relative">
      {/* Background Radial Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-50 rounded-full blur-[100px] opacity-60 -translate-x-1/2 translate-y-1/4 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title, Subtitle, 8 Grid Features */}
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-indigo-700 mb-4 tracking-tight leading-none">
              Get Discovered!
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl font-medium leading-relaxed">
              List your business on India&apos;s growing Business Listing Platform and reach more customers every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {featuresList.map((item) => {
                const IconComp = iconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${item.bg}`}
                    >
                      <IconComp size={28} className={item.color} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-[1.05rem] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="lg:w-2/5 w-full relative pt-10 lg:pt-0 flex justify-center">
            <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 min-h-[460px] flex items-center justify-center border border-indigo-500/30 w-full max-w-[380px]">
              
              {/* Background glows inside frame */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500 rounded-full blur-3xl opacity-30" />

              {/* Smartphone Body */}
              <div className="relative mx-auto w-full max-w-[260px] aspect-[1/2.05] bg-slate-900 rounded-[2.5rem] shadow-2xl border-[6px] border-slate-900 overflow-hidden flex flex-col z-10 ring-4 ring-white/10">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 w-32 mx-auto z-20 rounded-b-2xl" />

                {/* Inner Screen */}
                <div className="flex-1 overflow-hidden flex flex-col bg-slate-50 pt-8 pb-4 relative">
                  {/* Search Bar inside Screen */}
                  <div className="px-4 mb-4 mt-2">
                    <div className="bg-white rounded-full p-2.5 flex items-center gap-2 shadow-xs border border-slate-100">
                      <Search size={14} className="text-slate-400" />
                      <div className="h-2 w-32 bg-slate-200 rounded-full" />
                      <div className="w-5 h-5 bg-indigo-100 rounded-full ml-auto flex items-center justify-center">
                        <Search size={10} className="text-indigo-600" />
                      </div>
                    </div>
                  </div>

                  {/* Business Card inside Screen */}
                  <div className="px-4 flex-1 flex flex-col gap-3">
                    <div className="bg-white rounded-xl shadow-xs overflow-hidden border border-slate-100">
                      <div className="h-28 w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-center gap-1 opacity-50">
                          <div className="w-6 h-10 bg-slate-300 rounded-t-xs" />
                          <div className="w-10 h-16 bg-slate-400 rounded-t-xs" />
                          <div className="w-8 h-12 bg-slate-300 rounded-t-xs" />
                        </div>
                      </div>

                      <div className="p-3 space-y-2.5">
                        <div className="flex items-center gap-1">
                          <div className="h-3.5 w-3/4 bg-slate-800 rounded-md" />
                          <CheckCircle2 size={12} className="text-indigo-600" />
                        </div>

                        <div className="flex gap-0.5 items-center">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={10} className="text-amber-400 fill-amber-400" />
                          ))}
                          <span className="text-[9px] text-slate-400 ml-1">(125)</span>
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <div className="w-3 h-3 bg-slate-200 rounded-full" />
                          <span>Delhi, India</span>
                        </div>

                        <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-[9px] font-bold mt-1 border border-emerald-100">
                          <CheckCircle2 size={10} />
                          <span>Verified Business</span>
                        </div>
                      </div>
                    </div>

                    {/* Category mini pills */}
                    <div className="flex justify-between items-center px-1">
                      {[
                        { l: "IT Services" },
                        { l: "Consulting" },
                        { l: "Digital Mkt" },
                        { l: "More" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div className="w-4 h-4 rounded bg-slate-200" />
                          <div className="text-[7px] text-slate-500 font-medium">{item.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pin Marker */}
              <div className="absolute top-1/2 right-4 translate-x-4 -translate-y-12 z-20 drop-shadow-xl hidden sm:block">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-t-full rounded-bl-full rounded-br-sm rotate-45 flex items-center justify-center border-2 border-white shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-full -rotate-45" />
                </div>
              </div>

              {/* Bottom Notification Strip */}
              <div className="absolute bottom-6 right-0 left-6 sm:left-10 bg-indigo-900 text-white p-3.5 rounded-l-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex gap-3 items-start border-y border-l border-indigo-700 z-20 backdrop-blur-md bg-opacity-95">
                <div className="bg-indigo-800 p-2 rounded-full shrink-0 border border-indigo-600">
                  <CheckCircle2 size={16} className="text-indigo-200" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm mb-0.5 text-white">Get Listed Within 24 Hours!</h4>
                  <p className="text-[10px] sm:text-xs text-indigo-200 leading-tight font-medium">
                    Our team verifies and publishes your business listing within 24 hours.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
