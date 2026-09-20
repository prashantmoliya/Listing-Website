import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { ListingCard } from "@/components/common";
import { allListings, type ListingItem } from "@/data";

interface ListingSimilarBusinessesProps {
  currentListing: ListingItem;
}

export function ListingSimilarBusinesses({
  currentListing,
}: ListingSimilarBusinessesProps) {
  // Find similar listings in the same category first, followed by other listings
  const sameCategory = allListings.filter(
    (l) => l.slug !== currentListing.slug && l.categorySlug === currentListing.categorySlug
  );
  const otherListings = allListings.filter(
    (l) => l.slug !== currentListing.slug && l.categorySlug !== currentListing.categorySlug
  );
  const similar = [...sameCategory, ...otherListings].slice(0, 4);

  if (similar.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight flex items-center gap-2.5">
            <Building2 size={24} className="text-indigo-600" />
            <span>Similar Businesses</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Discover other popular and verified businesses in {currentListing.city || "this category"}
          </p>
        </div>

        <Link
          href={`/listings?category=${currentListing.categorySlug}`}
          className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm hover:underline transition-colors w-fit"
        >
          <span>View All in {currentListing.category}</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {similar.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
