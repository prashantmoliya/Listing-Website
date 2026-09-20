import type { Metadata } from "next";
import { Container, AppBreadcrumb } from "@/components/common";
import {
  BannerAdsForm,
  BannerAdsGuide,
  BannerAdsWhy,
} from "@/components/features/advertise";
import { Sparkles, BarChart2, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Banner Advertising — High Impact Display Ads | IndianListingBucket",
  description:
    "Promote your business with targeted banner ad placements on IndianListingBucket. Choose Header, Footer, Sidebar, or Blog banner positions with custom dimensions.",
};

export default function BannerAdsPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50/60 pb-20 pt-8 sm:pt-10">
      <Container>
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <AppBreadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Advertise", href: "/advertise" },
            { label: "Custom Banner Ads" },
          ]} />
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles size={13} />
            <span>CUSTOM DISPLAY ADVERTISING</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Custom Banner Ads Placement
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Position your brand directly in front of thousands of daily prospective clients with premium, high-converting banner placements.
          </p>

          {/* Quick Metrics / Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <BarChart2 size={16} className="text-indigo-600" />
              <span>50k+ Monthly Reach</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Verified Direct Clicks</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-amber-600" />
              <span>24hr Turnaround</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Form + Why (Left) & Guide (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form + Why Banner Ads */}
          <div className="lg:col-span-7 order-1 space-y-8">
            <BannerAdsForm />
            <BannerAdsWhy />
          </div>

          {/* Placement Guide & Specs on Right */}
          <div className="lg:col-span-5 order-2">
            <BannerAdsGuide />
          </div>
        </div>
      </Container>
    </div>
  );
}
