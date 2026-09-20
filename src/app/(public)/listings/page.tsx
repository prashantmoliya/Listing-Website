import type { Metadata } from "next";
import { Suspense } from "react";
import { ListingsContent } from "@/components/features/listings";

export const metadata: Metadata = {
  title: "Business Listings in India — Free Local Business Directory | IndianListingBucket",
  description:
    "Browse verified business listings in India. Find top restaurants, doctors, IT services, real estate, hotels, and local businesses across 500+ Indian cities with reviews and contact details.",
  keywords: [
    "business listing india",
    "business listing website",
    "local business listing india",
    "free business listing",
    "free business listing sites in india",
    "indian business directory",
  ],
};

export default function ListingsPage() {
  return (
    <Suspense fallback={null}>
      <ListingsContent />
    </Suspense>
  );
}
