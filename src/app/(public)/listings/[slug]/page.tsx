import type { Metadata } from "next";
import { Suspense } from "react";
import { ListingDetailContent } from "@/components/features/listing-details";
import { getListingBySlug } from "@/data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).toLowerCase().trim().replace(/\s+/g, "-");
  const listing = getListingBySlug(slug) || getListingBySlug(decodedSlug);

  if (!listing) {
    return {
      title: "Listing Not Found — IndianListingBucket",
      description: "The requested business listing was not found on IndianListingBucket.",
    };
  }

  return {
    title: `${listing.name} — ${listing.city} | IndianListingBucket`,
    description: listing.description.slice(0, 160),
    keywords: [
      listing.name,
      listing.category,
      listing.city,
      ...listing.tags,
      "business listing india",
      "free business directory",
    ],
    openGraph: {
      title: `${listing.name} — ${listing.city} | IndianListingBucket`,
      description: listing.description.slice(0, 160),
      images: [{ url: listing.image }],
    },
  };
}

export default async function ListingDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={null}>
      <ListingDetailContent slug={slug} />
    </Suspense>
  );
}
