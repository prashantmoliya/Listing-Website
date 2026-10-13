import type { Metadata } from "next";
import { ListingServicesManagerView } from "@/components/features/dashboard/listing-services-manager";

export const metadata: Metadata = {
  title: "Manage Services & Products | Dashboard",
  description:
    "Add, edit, and organize offerings and pricing for your featured business listing on IndianListingBucket.",
};

export default async function ListingServicesProductsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ListingServicesManagerView listingId={id} />;
}
