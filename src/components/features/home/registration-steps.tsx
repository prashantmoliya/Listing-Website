"use client";

import { 
  Smartphone, 
  FileText, 
  Send, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/common";

export default function RegistrationStepsBanner() {
  return (
    <section className="py-8 bg-white">
      <Container>
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-8 flex flex-col xl:flex-row items-center gap-8 xl:gap-12 relative overflow-hidden z-10">
          
          {/* Left Gradient Strip */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-indigo-500 to-indigo-700" />

          {/* Left Title & Mobile Icon */}
          <div className="flex items-center gap-5 xl:w-2/5 shrink-0 pl-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/30 ring-8 ring-indigo-50">
              <Smartphone size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                Register with your <span className="text-indigo-600">Mobile Number</span> <br className="hidden md:block" />
                and List Your Business in just a few minutes!
              </h3>
            </div>
          </div>

          {/* 3 Step Flow */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-2">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center gap-2.5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-200 text-slate-700 shadow-xs transition-transform hover:-translate-y-1">
                <FileText size={24} />
              </div>
              <p className="font-semibold text-[13px] sm:text-sm text-slate-700 leading-snug">
                Add Your <br />
                Business Details
              </p>
            </div>

            <ArrowRight className="hidden sm:block text-indigo-300" size={20} />
            <div className="sm:hidden w-px h-6 bg-slate-200" />

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center gap-2.5">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-200 text-indigo-600 shadow-xs transition-transform hover:-translate-y-1">
                <Send size={24} />
              </div>
              <p className="font-semibold text-[13px] sm:text-sm text-slate-700 leading-snug">
                Submit Your <br />
                Listing
              </p>
            </div>

            <ArrowRight className="hidden sm:block text-indigo-300" size={20} />
            <div className="sm:hidden w-px h-6 bg-slate-200" />

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center gap-2.5">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-200 text-amber-500 shadow-xs transition-transform hover:-translate-y-1">
                <CheckCircle2 size={24} className="fill-amber-500 text-white" />
              </div>
              <p className="font-semibold text-[13px] sm:text-sm text-slate-800 leading-snug">
                Get Listed Within <br />
                24 Hours!
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
