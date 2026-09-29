import type { Metadata } from "next";
import { ListingFormWizard } from "@/components/features/dashboard/listing-wizard";

export const metadata: Metadata = {
  title: "Edit Business Listing",
  description: "Update your business operating hours, photos, and contact information.",
};

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ListingFormWizard mode="edit" listingId={id} />;
}
