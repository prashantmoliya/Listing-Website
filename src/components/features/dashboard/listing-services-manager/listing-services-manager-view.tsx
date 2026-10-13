"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Plus, 
  Briefcase, 
  Search, 
  X, 
  Crown, 
  ExternalLink,
  Sparkles,
  Lock,
  Layers,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { initialUserListings, type UserListingItem, type ListingServiceProductItem } from "@/data";
import { ListingServicesTable } from "./listing-services-table";
import { ManageServiceModal } from "./manage-service-modal";
import { DeleteServiceDialog } from "./delete-service-dialog";

interface ListingServicesManagerViewProps {
  listingId: string;
}

const STORAGE_KEY_PREFIX = "app_listing_services_";

export function ListingServicesManagerView({
  listingId,
}: ListingServicesManagerViewProps) {
  // Find listing from initial data
  const baseListing = useMemo(() => {
    return initialUserListings.find((l) => l.id === listingId) || null;
  }, [listingId]);

  // Offerings state with local storage fallback
  const [items, setItems] = useState<ListingServiceProductItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${listingId}`);
        if (stored) return JSON.parse(stored);
      } catch (err) {
        // fallback
      }
    }
    return baseListing?.servicesAndProducts || [];
  });

  // Save changes to localStorage
  const saveItems = (updated: ListingServiceProductItem[]) => {
    setItems(updated);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}${listingId}`, JSON.stringify(updated));
      } catch (err) {
        // fallback
      }
    }
  };

  // Filter & Search state
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ListingServiceProductItem | null>(null);
  const [deletingItem, setDeletingItem] = useState<ListingServiceProductItem | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => {
      if (i.category) set.add(i.category);
    });
    return Array.from(set);
  }, [items]);

  const allTabs = useMemo(() => ["All", ...categories], [categories]);

  // Filtered items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  // Handlers for Add/Edit/Delete
  const handleOpenAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: ListingServiceProductItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleSaveItem = (savedItem: ListingServiceProductItem) => {
    if (editingItem) {
      // Update
      const updated = items.map((i) => (i.id === savedItem.id ? savedItem : i));
      saveItems(updated);
    } else {
      // Create new
      const updated = [savedItem, ...items];
      saveItems(updated);
    }
  };

  const handleDeleteConfirm = () => {
    if (!deletingItem) return;
    const updated = items.filter((i) => i.id !== deletingItem.id);
    saveItems(updated);
    setDeletingItem(null);
  };

  const handleToggleActive = (id: string) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        const currentActive = item.isActive !== false;
        return { ...item, isActive: !currentActive };
      }
      return item;
    });
    saveItems(updated);
  };

  if (!baseListing) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-4 max-w-xl mx-auto my-8">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <AlertCircle size={28} />
        </div>
        <h3 className="font-bold text-lg text-slate-900">Listing Not Found</h3>
        <p className="text-xs text-slate-500">
          The requested listing could not be found or you do not have permission to edit it.
        </p>
        <Link href="/dashboard/my-listings">
          <Button variant="outline" className="rounded-xl text-xs font-semibold cursor-pointer">
            Back to My Listings
          </Button>
        </Link>
      </div>
    );
  }

  const isFeatured = baseListing.plan === "Featured";

  // If listing is Free plan, show locked upgrade state
  if (!isFeatured) {
    return (
      <div className="space-y-6">
        {/* Back breadcrumb */}
        <div>
          <Link
            href="/dashboard/my-listings"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to My Listings</span>
          </Link>
        </div>

        {/* Upgrade Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200/90 shadow-sm text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600 shadow-xs">
            <Lock size={32} />
          </div>

          <div className="space-y-2">
            <Badge variant="amber" className="px-3 py-1 text-xs font-bold gap-1 rounded-full">
              <Crown size={12} className="fill-amber-500" />
              <span>Featured Plan Exclusive Feature</span>
            </Badge>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Services &amp; Products Catalog Locked
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              <span className="font-bold text-slate-900">{baseListing.name}</span> is currently on the{" "}
              <span className="font-semibold text-slate-800">Free Plan</span>. Direct Services &amp; Products showcasing and customer lead inquiries are exclusive benefits of the Featured Plan.
            </p>
          </div>

          {/* Benefits list */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 max-w-md mx-auto text-left space-y-2.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Upgrade to Featured Plan to unlock:
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Showcase unlimited services and products on your listing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Direct customer inquiries per offering with WhatsApp/call leads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Homepage and priority category search ranking</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href={`/dashboard/edit-listing/${baseListing.id}`}>
              <Button className="h-11 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 cursor-pointer">
                Upgrade Listing to Featured
              </Button>
            </Link>
            <Link href="/dashboard/my-listings">
              <Button variant="outline" className="h-11 px-5 rounded-xl font-semibold text-xs cursor-pointer">
                Return to My Listings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back breadcrumb */}
      <div>
        <Link
          href="/dashboard/my-listings"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to My Listings</span>
        </Link>
      </div>

      {/* Listing Overview Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-sm">
            <Image
              src={baseListing.image}
              alt={baseListing.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="amber" className="text-[10px] font-extrabold gap-1 px-2.5 py-0.5 rounded-full">
                <Crown size={11} className="fill-amber-500" />
                <span>Featured Listing</span>
              </Badge>
              <span className="text-[11px] font-semibold text-slate-500">
                {baseListing.category} • {baseListing.city}
              </span>
            </div>

            <h1 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
              {baseListing.name}
            </h1>

            <p className="text-xs text-slate-500 max-w-xl">
              Manage your services and products catalog. Offerings are displayed directly on your public listing with &quot;Enquire Now&quot; lead capture.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
          <Button
            type="button"
            onClick={handleOpenAdd}
            className="h-11 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus size={16} strokeWidth={2.5} />
            <span>Add Offering</span>
          </Button>
        </div>
      </div>

      {/* Controls: Category Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Dynamic Category Tabs using UI Tabs component */}
        {allTabs.length > 1 ? (
          <Tabs
            value={activeCategory}
            onValueChange={(val) => setActiveCategory(val as string)}
            className="w-full sm:w-auto"
          >
            <TabsList className="h-10 p-1 bg-slate-50/90 rounded-xl flex items-center gap-1 overflow-x-auto w-full sm:w-auto border border-slate-200/70">
              {allTabs.map((cat) => {
                const count =
                  cat === "All"
                    ? items.length
                    : items.filter((i) => i.category === cat).length;
                const isActive = activeCategory === cat;

                return (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className={cn(
                      "text-xs font-semibold px-3.5 py-1.5 rounded-[9px] transition-all flex items-center gap-2 cursor-pointer border whitespace-nowrap",
                      isActive
                        ? "bg-white text-indigo-600 shadow-xs border-slate-200/70 font-bold"
                        : "text-slate-500 hover:text-slate-800 hover:bg-white/60 border-transparent"
                    )}
                  >
                    <span>{cat}</span>
                    <span
                      className={cn(
                        "px-1.5 py-0.2 rounded-full text-[10px] font-bold transition-colors",
                        isActive
                          ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                          : "bg-slate-200/60 text-slate-500"
                      )}
                    >
                      {count}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        ) : (
          <div className="text-xs font-bold text-slate-700 flex items-center gap-2">
            <Briefcase size={16} className="text-indigo-600" />
            <span>Catalog Items ({items.length})</span>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search offerings..."
            className="pl-8.5 pr-8 h-9 text-xs rounded-xl bg-slate-50 border-slate-200 focus-visible:bg-white focus-visible:border-indigo-600 font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Services Table or Empty State */}
      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
            <Briefcase size={26} />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="font-bold text-slate-900 text-base">
              No Services or Products Added Yet
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Add offerings to showcase on your business listing page. Customers will be able to inquire directly about each item.
            </p>
          </div>
          <Button
            type="button"
            onClick={handleOpenAdd}
            className="h-10 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm cursor-pointer"
          >
            <Plus size={14} className="mr-1" /> Add Your First Offering
          </Button>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-slate-200/80 space-y-3">
          <p className="text-xs text-slate-500">
            No offerings match your search &quot;<span className="font-semibold text-slate-800">{searchQuery}</span>&quot;.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="rounded-xl text-xs font-semibold cursor-pointer"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <ListingServicesTable
          items={filteredItems}
          onEdit={handleOpenEdit}
          onDelete={(item) => setDeletingItem(item)}
          onToggleActive={handleToggleActive}
        />
      )}

      {/* Modals */}
      <ManageServiceModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        initialData={editingItem}
        onSave={handleSaveItem}
        suggestedCategories={categories.length > 0 ? categories : [baseListing.category]}
      />

      <DeleteServiceDialog
        open={Boolean(deletingItem)}
        onOpenChange={(open) => !open && setDeletingItem(null)}
        item={deletingItem}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
