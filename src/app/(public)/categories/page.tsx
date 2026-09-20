import type { Metadata } from "next";
import { CategoriesContent } from "@/components/features/categories";

export const metadata: Metadata = {
  title: "Business Categories in India — Browse All Business Types | IndianListingBucket",
  description:
    "Explore 25+ business categories on IndianListingBucket. Find restaurants, doctors, IT companies, real estate agents & more local businesses across India. Free business listing directory.",
  keywords: [
    "business categories india",
    "business listing categories",
    "local business types india",
    "business directory categories",
    "free business listing sites",
    "free business listing sites in india",
    "indian business directory",
  ],
};

export default function CategoriesPage() {
  return <CategoriesContent />;
}
