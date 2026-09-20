import type { ListingItem } from "@/data";

interface ListingAboutProps {
  listing: ListingItem;
}

export function ListingAbout({ listing }: ListingAboutProps) {
  // Split description by double newlines into clean paragraphs
  const paragraphs = (listing.description || "").split("\n\n").filter(Boolean);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-4">
      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
        About the Business
      </h2>

      <div className="text-sm sm:text-[15px] text-slate-600 leading-relaxed space-y-4 font-normal">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
