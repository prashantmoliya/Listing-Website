import type { Metadata } from "next";
import { featuredListings } from "@/data";
import {
  FeaturedHero,
  FeaturedContent,
  FeaturedBottomCta,
} from "@/components/features/featured";

export const metadata: Metadata = {
  title: "Featured Business Listings in India — Verified & Top Rated | IndianListingBucket",
  description:
    "Discover verified, top-rated featured businesses across India with reviews, contact details, photos, and direct phone links.",
};

export default function FeaturedPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Dark Hero Section */}
      <FeaturedHero totalCount={featuredListings.length} />

      {/* 2. Main 70/30 Content Section */}
      <FeaturedContent items={featuredListings} />

      {/* 3. Warm Amber Bottom CTA Banner */}
      <FeaturedBottomCta />
    </div>
  );
}
