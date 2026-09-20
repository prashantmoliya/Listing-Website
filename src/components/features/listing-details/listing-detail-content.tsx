import Link from "next/link";
import { Container, AppBreadcrumb } from "@/components/common";
import { Button } from "@/components/ui/button";
import { getListingBySlug } from "@/data";
import { ListingDetailHeader } from "./listing-detail-header";
import { ListingContactCards } from "./listing-contact-cards";
import { ListingQuickInfo } from "./listing-quick-info";
import { ListingAbout } from "./listing-about";
import { ListingGallery } from "./listing-gallery";
import { ListingTags } from "./listing-tags";
import { ListingLocationMap } from "./listing-location-map";
import { ListingBusinessHours } from "./listing-business-hours";
import { ListingReviews } from "./listing-reviews";
import { ListingFAQs } from "./listing-faqs";
import { ListingSimilarBusinesses } from "./listing-similar-businesses";
import { ListingDetailSidebar } from "./listing-detail-sidebar";
import { ArrowLeft, SearchX } from "lucide-react";

interface ListingDetailContentProps {
  slug: string;
}

export function ListingDetailContent({ slug }: ListingDetailContentProps) {
  const decodedSlug = decodeURIComponent(slug).toLowerCase().trim().replace(/\s+/g, "-");
  const listing = getListingBySlug(slug) || getListingBySlug(decodedSlug);

  if (!listing) {
    return (
      <div className="bg-slate-50/60 min-h-[70vh] py-16 flex items-center justify-center">
        <Container>
          <div className="max-w-md mx-auto bg-white rounded-3xl p-10 text-center border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <SearchX size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Listing Not Found</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We couldn&apos;t find the listing you were looking for. It may have been removed or the URL might be incorrect.
            </p>
            <div className="pt-2">
              <Link href="/listings">
                <Button className="rounded-xl px-5 h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">
                  <ArrowLeft size={16} className="mr-2" />
                  <span>Back to Listings</span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: listing.category, href: `/listings?category=${listing.categorySlug}` },
    { label: listing.name },
  ];

  return (
    <div className="bg-slate-50/60 min-h-screen pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/70 py-3.5">
        <Container>
          <AppBreadcrumb items={breadcrumbs} />
        </Container>
      </div>

      {/* Main Content & Sidebar Grid */}
      <Container className="pt-6 sm:pt-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Main Left Column (approx. 68% width on desktop) */}
          <main className="w-full lg:w-[70%] min-w-0 space-y-6">
            {/* 1. Header Card */}
            <ListingDetailHeader listing={listing} />

            {/* 2. Contact Cards & Social Links */}
            <ListingContactCards listing={listing} />

            {/* 3. Quick Info (Established, Employees) */}
            <ListingQuickInfo listing={listing} />

            {/* 5. About the Business Description */}
            <ListingAbout listing={listing} />

            {/* 6. Photo Gallery */}
            <ListingGallery listing={listing} />

            {/* 7. Tags & Keywords */}
            <ListingTags listing={listing} />

            {/* 8. Location & Interactive Google Map */}
            <ListingLocationMap listing={listing} />

            {/* 8. Business Hours */}
            <ListingBusinessHours listing={listing} />

            {/* 9. Customer Reviews */}
            <ListingReviews listing={listing} />

            {/* 10. Frequently Asked Questions */}
            <ListingFAQs listing={listing} />
          </main>

          {/* Right Sidebar Column (approx. 32% width on desktop) */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-24">
            <ListingDetailSidebar listing={listing} />
          </div>
        </div>

        {/* 11. Similar Businesses - Full Width */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200/80">
          <ListingSimilarBusinesses currentListing={listing} />
        </div>
      </Container>
    </div>
  );
}
