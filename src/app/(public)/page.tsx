import { 
  Hero, 
  GetDiscovered, 
  RegistrationStepsBanner, 
  BrowseCategory, 
  FeaturedListings, 
  RecentListings,
  BrowseCity, 
  GrowthCta,
  MarqueeCategories
} from "@/components/features/home";

export const metadata = {
  title: "Business Listing Sites in India — Free Business Directory | IndianListingBucket",
  description: "Find & list local businesses across India. Browse verified business listings, reviews & ratings. India's most trusted free business listing website covering 500+ cities.",
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Get Discovered & Value Props Section */}
      <GetDiscovered />

      {/* 3. Mobile Number Fast Registration Banner */}
      <RegistrationStepsBanner />

      {/* 4. Browse by Category Grid */}
      <BrowseCategory />

      {/* 5. Featured Listings Section (70/30 with Popular Tags) */}
      <FeaturedListings />

      {/* 6. Recent Listings Section */}
      <RecentListings />

      {/* 7. Browse by City Section */}
      <BrowseCity />

      {/* 8. Accelerate Business Growth Banner */}
      <GrowthCta />

      {/* 9. Popular Categories & Cities Marquee */}
      <MarqueeCategories />
    </div>
  );
}