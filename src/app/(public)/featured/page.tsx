import type { Metadata } from "next";
import { Container } from "@/components/common";
import { featuredListings } from "@/data";
import {
  FeaturedHero,
  FeaturedList,
  FeaturedSidebar,
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

      {/* 2. Main 70/30 Content Layout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 70% Column: Featured Listings Cards & Pagination */}
            <main className="lg:col-span-8">
              <FeaturedList items={featuredListings} />
            </main>

            {/* Right 30% Column: Sticky Spotlight & Category Widget */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <FeaturedSidebar />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Warm Amber Bottom CTA Banner */}
      <FeaturedBottomCta />
    </div>
  );
}
