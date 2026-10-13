"use client";

import Image from "next/image";
import { 
  Edit2, 
  Trash2, 
  Sparkles, 
  Briefcase, 
  Image as ImageIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import type { ListingServiceProductItem } from "@/data";

interface ListingServicesTableProps {
  items: ListingServiceProductItem[];
  onEdit: (item: ListingServiceProductItem) => void;
  onDelete: (item: ListingServiceProductItem) => void;
  onToggleActive: (id: string) => void;
}

function formatPrice(price?: number): string {
  if (price === undefined || price === null) return "Quote on Request";
  if (price === 0) return "Free";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function ListingServicesTable({
  items,
  onEdit,
  onDelete,
  onToggleActive,
}: ListingServicesTableProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/70 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <th className="py-3.5 px-4 w-12 text-center">#</th>
              <th className="py-3.5 px-4 min-w-[240px]">Offering &amp; Details</th>
              <th className="py-3.5 px-4 min-w-[130px]">Category</th>
              <th className="py-3.5 px-4 min-w-[120px]">Price</th>
              <th className="py-3.5 px-4 min-w-[120px]">Status</th>
              <th className="py-3.5 px-4 w-28 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {items.map((item, index) => {
              const isFree = item.price === 0;
              const hasPrice = item.price !== undefined && item.price !== null;

              return (
                <tr 
                  key={item.id} 
                  className="hover:bg-slate-50/60 transition-colors group"
                >
                  {/* Index */}
                  <td className="py-4 px-4 text-center font-semibold text-slate-400">
                    {index + 1}
                  </td>

                  {/* Offering Photo & Description */}
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-3 min-w-[220px]">
                      {item.image ? (
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/70 shadow-2xs">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-500">
                          <Briefcase size={18} />
                        </div>
                      )}

                      <div className="min-w-0 space-y-1">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate max-w-sm">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4">
                    <Badge 
                      variant="muted" 
                      className="font-semibold text-[11px] px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60 whitespace-nowrap"
                    >
                      {item.category || "General"}
                    </Badge>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4">
                    <div className="space-y-0.5">
                      <span className={`font-bold text-xs ${
                        isFree 
                          ? "text-emerald-600" 
                          : hasPrice 
                          ? "text-slate-900" 
                          : "text-slate-500 italic font-medium"
                      }`}>
                        {formatPrice(item.price)}
                      </span>
                      {hasPrice && !isFree && (
                        <span className="block text-[10px] text-slate-400 font-medium">
                          Fixed / Starting
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Status Toggle Switch */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 min-w-[110px]">
                      <Switch
                        checked={item.isActive !== false}
                        onCheckedChange={() => onToggleActive(item.id)}
                        className="cursor-pointer data-[checked]:bg-emerald-600"
                        title={
                          item.isActive !== false
                            ? "Active (Visible on public listing)"
                            : "Inactive (Hidden from public listing)"
                        }
                      />
                      <span
                        className={`text-xs font-semibold select-none ${
                          item.isActive !== false
                            ? "text-emerald-700"
                            : "text-slate-500"
                        }`}
                      >
                        {item.isActive !== false ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(item)}
                        className="h-8 w-8 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                        title="Edit Offering"
                      >
                        <Edit2 size={13} />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(item)}
                        className="h-8 w-8 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Delete Offering"
                      >
                        <Trash2 size={13} />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
