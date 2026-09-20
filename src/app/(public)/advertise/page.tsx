import type { Metadata } from "next";
import {
  AdvertiseHero,
  AdvertiseWhy,
  AdvertisePackages,
  AdvertiseCta,
} from "@/components/features/advertise";

export const metadata: Metadata = {
  title: "Advertise With Us — Business Promotion & Featured Listings | IndianListingBucket",
  description:
    "Promote your business on IndianListingBucket. Reach thousands of local customers across India with Featured Listings and targeted banner advertising packages.",
};

export default function AdvertisePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section with Metrics */}
      <AdvertiseHero />

      {/* 2. Why Advertise Features */}
      <AdvertiseWhy />

      {/* 3. 3 Pricing Packages */}
      <AdvertisePackages />

      {/* 4. Bottom CTA Banner */}
      <AdvertiseCta />
    </div>
  );
}
