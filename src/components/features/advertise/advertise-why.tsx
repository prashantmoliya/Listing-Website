"use client";

import { Target, Coins, TrendingUp } from "lucide-react";
import { Container } from "@/components/common";

const whyFeatures = [
  {
    icon: Target,
    iconColor: "text-indigo-600 bg-indigo-50",
    title: "Targeted Reach",
    description:
      "Connect with customers in your specific city, state, or category — zero wasted impressions.",
  },
  {
    icon: Coins,
    iconColor: "text-amber-600 bg-amber-50",
    title: "Cost Effective",
    description:
      "Get more value per rupee vs. traditional advertising. Plans starting at just ₹99.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-600 bg-emerald-50",
    title: "Measurable Results",
    description:
      "Track views, clicks, and leads directly from your dashboard in real time.",
  },
];

export function AdvertiseWhy() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-border">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Why Advertise on IndianListingBucket?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            With over 1,000 monthly visitors actively searching for businesses
            across India, our platform gives your brand the exposure it deserves
            — right when customers are looking for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 text-center flex flex-col items-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
