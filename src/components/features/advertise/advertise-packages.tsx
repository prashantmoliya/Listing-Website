"use client";

import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/common";

const packages = [
  {
    tag: "PACKAGE 1",
    name: "Free Listing",
    price: "₹0",
    period: "/ forever",
    highlight: false,
    headline: "Get Started for Free",
    description:
      "Add your business to our directory at absolutely no cost. Perfect for businesses just starting their online journey.",
    buttonText: "Add Free Listing",
    buttonHref: "/listings/create",
    buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    included: [
      "Unlimited listing duration with a no-follow website link.",
    ],
    excluded: [
      "No featured listing on the homepage.",
      "No business highlighting on the category pages.",
      "No featured listing on the featured page.",
      "No business highlighting in search results.",
    ],
  },
  {
    tag: "⭐ PACKAGE 2",
    name: "Featured Listing",
    price: "₹99",
    period: "/ forever",
    highlight: true,
    badges: ["MOST POPULAR", "🎁 LIMITED FREE"],
    headline: "Maximum Visibility for Your Business",
    description:
      "Featured Listing includes listing for unlimited days, Featured listing on homepage, Featured listing on featured page, and priority placement in category and search results.",
    buttonText: "Get Featured Now",
    buttonHref: "/listings/create",
    buttonStyle: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-indigo-500/25",
    included: [
      "Unlimited listing duration with a do-follow website link.",
      "Featured listing on the homepage.",
      "Business highlighting on the category pages.",
      "Featured listing on the featured page.",
      "Business highlighting in search results.",
    ],
    excluded: [],
  },
  {
    tag: "PACKAGE 3",
    name: "Banner Ads",
    price: "Custom",
    period: "Pricing",
    highlight: false,
    headline: "Instant Brand Recognition",
    description:
      "Banner ads target local customers and help to build brand recognition immediately. Your banner appears across relevant pages reaching thousands of daily visitors.",
    buttonText: "Enquire About Banners",
    buttonHref: "/contact",
    buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white",
    included: [
      "High-visibility banner placements",
      "Targeted to your city or category",
      "Homepage & category page banners",
      "Custom creative design support",
      "Flexible duration (7 / 30 / 90 days)",
      "Click-through tracking & reporting",
      "Mobile-responsive ad formats",
    ],
    excluded: [],
  },
];

export function AdvertisePackages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white scroll-mt-12">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-primary font-bold text-xs tracking-wider uppercase">
            OUR PACKAGES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Choose Your Advertising Package
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Three powerful ways to grow your business and reach customers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? "bg-white border-2 border-indigo-500 shadow-[0_12px_40px_rgba(99,102,241,0.18)] lg:-translate-y-3 p-8 sm:p-9"
                  : "bg-card border border-border shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-xl p-8"
              }`}
            >
              {/* Top Badges for Featured Package */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                  <span className="bg-emerald-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    🎁 LIMITED FREE
                  </span>
                </div>
              )}

              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-slate-500 tracking-wider">
                    {pkg.tag}
                  </span>
                  {pkg.highlight && <Sparkles size={18} className="text-indigo-600" />}
                </div>

                <h3 className="text-2xl font-extrabold text-foreground mb-4">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-slate-500 font-semibold text-sm">
                    {pkg.period}
                  </span>
                </div>

                <div className="space-y-2 pb-6 border-b border-border">
                  <h4 className="font-bold text-sm text-foreground">
                    {pkg.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3.5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Features Included
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {pkg.included.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {pkg.excluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-slate-400">
                        <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X size={11} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Link
                  href={pkg.buttonHref}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 ${pkg.buttonStyle}`}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
