"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Briefcase, 
  IndianRupee, 
  Image as ImageIcon, 
  Sparkles,
  Tag,
  AlertCircle
} from "lucide-react";
import { Modal } from "@/components/common/modal";
import { InputWithLabel, TextareaWithLabel } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import type { ListingServiceProductItem } from "@/data";

interface ManageServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: ListingServiceProductItem | null;
  onSave: (item: ListingServiceProductItem) => void;
  suggestedCategories?: string[];
}

export function ManageServiceModal({
  open,
  onOpenChange,
  initialData,
  onSave,
  suggestedCategories = [],
}: ManageServiceModalProps) {
  const isEditing = Boolean(initialData);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [popular, setPopular] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset or fill form when modal opens or initialData changes
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setCategory(initialData.category || "");
      setPriceInput(
        initialData.price !== undefined && initialData.price !== null
          ? String(initialData.price)
          : ""
      );
      setDescription(initialData.description || "");
      setImage(initialData.image || "");
      setPopular(Boolean(initialData.popular));
      setIsActive(initialData.isActive !== false);
    } else {
      setName("");
      setCategory(suggestedCategories[0] || "");
      setPriceInput("");
      setDescription("");
      setImage("");
      setPopular(false);
      setIsActive(true);
    }
    setErrors({});
  }, [initialData, open, suggestedCategories]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Please enter an offering name.";
    if (!category.trim()) newErrors.category = "Please specify a category.";
    if (!description.trim()) {
      newErrors.description = "Please provide a brief description.";
    } else if (description.trim().length < 5) {
      newErrors.description = "Description should be at least 5 characters.";
    }

    let parsedPrice: number | undefined = undefined;
    if (priceInput.trim() !== "") {
      const num = Number(priceInput.trim());
      if (isNaN(num) || num < 0) {
        newErrors.price = "Price must be a valid positive number.";
      } else {
        parsedPrice = Math.round(num);
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload: ListingServiceProductItem = {
      id: initialData?.id || `sp-${Date.now()}`,
      name: name.trim(),
      category: category.trim(),
      description: description.trim(),
      price: parsedPrice,
      image: image.trim() || undefined,
      popular,
      isActive,
    };

    onSave(payload);
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      maxWidth="sm:max-w-xl"
      headTitle={isEditing ? "Edit Service / Product" : "Add New Service / Product"}
      headDescription={
        isEditing
          ? "Update details, pricing, and category for this offering."
          : "Add an offering to showcase on your business listing for direct customer leads."
      }
      headerIcon={
        <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
          <Briefcase className="size-5" />
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4.5 pt-1">
        {/* Offering Title */}
        <div className="space-y-1">
          <InputWithLabel
            label="Offering Name *"
            placeholder="e.g. 3 BHK Luxury Villa, Deluxe Suite, Legal Advisory..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            error={errors.name}
          />
        </div>

        {/* Category with suggestions */}
        <div className="space-y-2">
          <InputWithLabel
            label="Category *"
            placeholder="e.g. Residential, Dining, Consultation, Suites..."
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
            }}
            error={errors.category}
          />

          {/* Quick Suggestions */}
          {suggestedCategories.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                <Tag size={10} /> Suggestions:
              </span>
              {suggestedCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    if (errors.category) setErrors((prev) => ({ ...prev, category: "" }));
                  }}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                    category === cat
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pure Number Price */}
        <div className="space-y-1">
          <InputWithLabel
            label="Price (₹ INR)"
            type="number"
            min="0"
            step="1"
            placeholder="e.g. 25000 (Enter 0 for Free, or leave empty for Quote on Request)"
            value={priceInput}
            onChange={(e) => {
              setPriceInput(e.target.value);
              if (errors.price) setErrors((prev) => ({ ...prev, price: "" }));
            }}
            error={errors.price}
          />
          <p className="text-[11px] text-slate-400 pl-0.5">
            Tip: Pure number only. Leave blank if pricing is customized / on-request.
          </p>
        </div>

        {/* Image URL with Preview */}
        <div className="space-y-2">
          <InputWithLabel
            label="Image URL"
            type="url"
            placeholder="https://images.unsplash.com/..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {image.trim() && (
            <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                <Image
                  src={image}
                  alt="Preview"
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div className="text-xs text-slate-600 truncate">
                <span className="font-semibold text-slate-900 block truncate">Image Preview</span>
                <span className="text-[11px] text-slate-400">Photo will appear cleanly without text overlays</span>
              </div>
            </div>
          )}
        </div>

        {/* Short Description */}
        <div className="space-y-1">
          <TextareaWithLabel
            label="Short Description *"
            rows={3}
            placeholder="Briefly describe what this offering includes (features, duration, specifications)..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description) setErrors((prev) => ({ ...prev, description: "" }));
            }}
            error={errors.description}
          />
        </div>

        {/* Status Toggle (Active / Inactive) */}
        <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-emerald-500" : "bg-slate-400"}`} />
              <span>Status ({isActive ? "Active" : "Inactive"})</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Visible to customers on your public listing details page when active.
            </p>
          </div>
          <Switch
            checked={isActive}
            onCheckedChange={setIsActive}
            className="data-[state=checked]:bg-emerald-600"
          />
        </div>

        {/* Popular / Featured Offering Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <Sparkles className="size-3.5 text-amber-500" />
              <span>Mark as Popular Offering</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Showcases a special highlight on your public listing page.
            </p>
          </div>
          <Switch
            checked={popular}
            onCheckedChange={setPopular}
            className="data-[state=checked]:bg-indigo-600"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-xl font-semibold text-xs h-10 px-4 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-xl font-bold text-xs h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-500/20 cursor-pointer"
          >
            {isEditing ? "Save Changes" : "Add Offering"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
