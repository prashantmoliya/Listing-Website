"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, AppBreadcrumb } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { ListingInquiryModal } from "./listing-inquiry-modal";
import { ListingServicesProducts } from "./listing-services-products";
import { ArrowLeft, SearchX, Store, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListingDetailContentProps {
  slug: string;
}

export function ListingDetailContent({ slug }: ListingDetailContentProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#services") {
      setActiveTab("services");
    }
  }, []);

  const handleOpenInquiry = (serviceName?: string) => {
    setSelectedService(serviceName || "");
    setIsInquiryOpen(true);
  };
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

  const offeringsCount =
    (listing.servicesAndProducts && listing.servicesAndProducts.length > 0)
      ? listing.servicesAndProducts.length
      : listing.servicesOffered?.length || 0;

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
          {/* Main Left Column (approx. 70% width on desktop) */}
          <main className="w-full lg:w-[70%] min-w-0 space-y-6">
            {/* 1. Header Card (Stays prominent at top of business details) */}
            <ListingDetailHeader listing={listing} />

            {/* 2. Navigation Tabs (Tab 1: Overview, Tab 2: Services & Products) */}
            <Tabs
              value={activeTab}
              onValueChange={(val) => setActiveTab(val as string)}
              className="w-full space-y-6"
            >
              {/* Tab Navigation Pill Bar */}
              <div className="bg-white rounded-2xl p-1.5 border border-slate-200/80 shadow-xs">
                <TabsList className="w-full flex items-center bg-slate-100/80 p-1 rounded-xl gap-1.5 h-auto">
                  <TabsTrigger
                    value="overview"
                    className={cn(
                      "flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border",
                      activeTab === "overview"
                        ? "bg-white text-indigo-600 shadow-xs border-slate-200/70 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60 border-transparent"
                    )}
                  >
                    <Store size={17} className={activeTab === "overview" ? "text-indigo-600" : "text-slate-500"} />
                    <span>Overview</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="services"
                    className={cn(
                      "flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border",
                      activeTab === "services"
                        ? "bg-white text-indigo-600 shadow-xs border-slate-200/70 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60 border-transparent"
                    )}
                  >
                    <Briefcase size={17} className={activeTab === "services" ? "text-indigo-600" : "text-slate-500"} />
                    <span>Services &amp; Products</span>
                    {offeringsCount > 0 && (
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-bold transition-colors ml-0.5",
                          activeTab === "services"
                            ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                            : "bg-slate-200/80 text-slate-600"
                        )}
                      >
                        {offeringsCount}
                      </span>
                    )}
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* TAB 1: Overview & General Details */}
              <TabsContent value="overview" className="space-y-6 mt-0">
                {/* Contact Cards & Social Links */}
                <ListingContactCards listing={listing} />

                {/* Quick Info (Established, Employees, Listed Date) */}
                <ListingQuickInfo listing={listing} />

                {/* About the Business Description */}
                <ListingAbout listing={listing} />

                {/* Photo Gallery */}
                <ListingGallery listing={listing} />

                {/* Location & Interactive Google Map */}
                <ListingLocationMap listing={listing} />

                {/* Business Hours */}
                <ListingBusinessHours listing={listing} />

                {/* Customer Reviews */}
                <ListingReviews listing={listing} />

                {/* Frequently Asked Questions */}
                <ListingFAQs listing={listing} />

                {/* Tags & Keywords */}
                <ListingTags listing={listing} />
              </TabsContent>

              {/* TAB 2: Services & Products */}
              <TabsContent value="services" className="space-y-6 mt-0">
                <ListingServicesProducts 
                  listing={listing} 
                  onInquire={handleOpenInquiry} 
                />

                {offeringsCount === 0 && (
                  <div className="bg-white rounded-3xl p-10 sm:p-12 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                      <Briefcase size={28} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900">No Direct Catalog Items Listed</h3>
                      <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                        {listing.name} has not published individual product or service items yet.
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </main>

          {/* Right Sidebar Column (approx. 30% width on desktop) */}
          <div className="w-full lg:w-[30%] lg:sticky lg:top-24">
            <ListingDetailSidebar listing={listing} onOpenInquiry={() => handleOpenInquiry()} />
          </div>
        </div>

        {/* Similar Businesses - Full Width */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-200/80">
          <ListingSimilarBusinesses currentListing={listing} />
        </div>
      </Container>

      {/* Customer Inquiry Modal */}
      <ListingInquiryModal
        listing={listing}
        open={isInquiryOpen}
        onOpenChange={setIsInquiryOpen}
        selectedService={selectedService}
      />
    </div>
  );
}
