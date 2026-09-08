"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common";

const storyCategories = [
  { icon: "🏢", title: "SMEs & Startups" },
  { icon: "🏪", title: "Local Shops" },
  { icon: "🏥", title: "Healthcare" },
  { icon: "🎓", title: "Education" },
];

export function AboutStory() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <span className="text-primary font-bold text-xs tracking-wider uppercase">
              OUR STORY
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Started with a simple idea
            </h2>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                IndianListingBucket was born from a simple frustration — finding a trustworthy
                local business in India was harder than it should be. Yellow pages were
                outdated. Google results were cluttered. Local word-of-mouth wasn&apos;t enough.
              </p>

              <p>
                We built a platform where any business — a chai stall in Varanasi, a tech
                startup in Bangalore, a boutique in Jaipur — could list themselves and be
                discovered by customers who actually need them.
              </p>

              <p>
                Today, we&apos;re proud to be one of India&apos;s fastest-growing business
                directories, serving businesses from all 28 states and UTs.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/listings"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-3 rounded-[10px] inline-flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Listings</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Graphic 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {storyCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center gap-3 transition-all hover:shadow-md group"
              >
                <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground">
                  {cat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
