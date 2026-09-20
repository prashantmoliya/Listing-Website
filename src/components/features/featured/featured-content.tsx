"use client";

import { Container } from "@/components/common";
import { FeaturedList } from "./featured-list";
import { FeaturedSidebar } from "./featured-sidebar";
import { featuredListings, type ListingItem } from "@/data";

interface FeaturedContentProps {
  items?: ListingItem[];
}

export function FeaturedContent({ items = featuredListings }: FeaturedContentProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 70% Column: Featured Listings Cards & Pagination */}
          <main className="lg:col-span-8">
            <FeaturedList items={items} />
          </main>

          {/* Right 30% Column: Sticky Spotlight & Category Widget */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <FeaturedSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { FeaturedContent as FeaturedSection };
