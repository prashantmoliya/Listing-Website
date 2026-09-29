"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  InputWithLabel,
  SelectWithLabel,
  TextareaWithLabel,
} from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categoryOptions } from "@/data";

interface Step1BasicInfoProps {
  data: {
    name: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    established: string;
    employees: string;
    gstin: string;
    tags: string[];
  };
  onChange: (field: string, value: any) => void;
}

export function Step1BasicInfo({ data, onChange }: Step1BasicInfoProps) {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() && data.tags.length < 20) {
      const clean = tagInput.trim().replace(/^#/, "");
      if (!data.tags.includes(clean)) {
        onChange("tags", [...data.tags, clean]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onChange(
      "tags",
      data.tags.filter((t) => t !== tagToRemove)
    );
  };

  const wordCount = data.fullDescription
    ? data.fullDescription.trim().split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Basic Information
        </h3>
      </div>

      <div className="space-y-4">
        {/* Business Name */}
        <InputWithLabel
          id="biz-name"
          label="Business Name"
          required
          placeholder="Enter your business name"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />

        {/* Single Category */}
        <SelectWithLabel
          id="biz-category"
          label="Category"
          required
          placeholder="Select a category..."
          value={data.category}
          onValueChange={(val) => onChange("category", val)}
          options={categoryOptions.map((cat) => ({ value: cat, label: cat }))}
        />

        {/* Short Description */}
        <InputWithLabel
          id="biz-short-desc"
          label="Short Description"
          maxLength={160}
          placeholder="One-line summary of your business (max 160 chars)"
          value={data.shortDescription}
          onChange={(e) => onChange("shortDescription", e.target.value)}
          description={
            <span className="flex justify-end text-[11px] text-slate-400">
              {data.shortDescription.length}/160
            </span>
          }
        />

        {/* Full Description */}
        <TextareaWithLabel
          id="biz-full-desc"
          label="Full Description"
          rows={4}
          placeholder="Describe your business, services, specialties..."
          value={data.fullDescription}
          onChange={(e) => onChange("fullDescription", e.target.value)}
          description={
            <span className="flex justify-end text-[11px] text-slate-400">
              {wordCount}/200 words
            </span>
          }
        />

        {/* Year Established & No. of Employees (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputWithLabel
            id="biz-established"
            label="Year Established"
            placeholder="e.g. 2015"
            value={data.established}
            onChange={(e) => onChange("established", e.target.value)}
          />

          <SelectWithLabel
            id="biz-employees"
            label="No. of Employees"
            placeholder="Select"
            value={data.employees}
            onValueChange={(val) => onChange("employees", val)}
            options={[
              { value: "1-5", label: "1-5 Employees" },
              { value: "6-20", label: "6-20 Employees" },
              { value: "21-50", label: "21-50 Employees" },
              { value: "51-200", label: "51-200 Employees" },
              { value: "200+", label: "200+ Employees" },
            ]}
          />
        </div>

        {/* GST Number */}
        <InputWithLabel
          id="biz-gstin"
          label="GST Number"
          placeholder="GSTIN (optional)"
          value={data.gstin}
          onChange={(e) => onChange("gstin", e.target.value)}
        />

        {/* Keywords / Tags (Max 20) */}
        <div>
          <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block mb-2">
            Keywords / Tags (Max 20)
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a keyword and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
              disabled={data.tags.length >= 20}
              className="flex-1 h-11 px-4 rounded-[10px] border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-600 text-sm font-medium"
            />
            <Button
              type="button"
              size="icon"
              onClick={handleAddTag}
              disabled={!tagInput.trim() || data.tags.length >= 20}
              className="h-11 w-11 rounded-[10px] bg-[#5c67f2] hover:bg-[#4f59e0] text-white shrink-0 cursor-pointer shadow-2xs"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          {/* Tags Pills */}
          {data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2.5">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100"
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-rose-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
