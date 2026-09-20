import type { Metadata } from "next";
import {
  AboutHero,
  AboutStats,
  AboutStory,
  AboutValues,
  AboutCta,
} from "@/components/features/about";

export const metadata: Metadata = {
  title: "About Us — India's Premier Business Listing Directory | IndianListingBucket",
  description:
    "Learn about IndianListingBucket, India's most trusted free business listing platform connecting local businesses with millions of customers across 500+ cities and 28 states.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Key Stats Bar */}
      <AboutStats />

      {/* 3. Our Story Section */}
      <AboutStory />

      {/* 4. What Drives Us (Mission, Vision, Values) */}
      <AboutValues />

      {/* 5. Bottom CTA Banner */}
      <AboutCta />
    </div>
  );
}
