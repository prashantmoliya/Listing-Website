"use client";

import {
  InputWithLabel,
  SelectWithLabel,
  TextareaWithLabel,
} from "@/components/common";
import { Button } from "@/components/ui/button";
import {
  bannerAdsFormSchema,
  bannerTypeOptions,
  type BannerAdsFormValues,
} from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ruler, Send, Sparkles } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const sizePresets = [
  { label: "728 × 90 px (Leaderboard)", width: "728px", height: "90px", type: "Header Banner" },
  { label: "300 × 250 px (Medium Box)", width: "300px", height: "250px", type: "Side Banner" },
  { label: "300 × 600 px (Half Page)", width: "300px", height: "600px", type: "Side Banner" },
  { label: "728 × 300 px (In-Article)", width: "728px", height: "300px", type: "Blog Page Banner" },
  { label: "970 × 250 px (Billboard)", width: "970px", height: "250px", type: "Header Banner" },
  { label: "All Slots (Bundle)", width: "Responsive", height: "Multi-size", type: "All in One" },
];

export function BannerAdsForm() {

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BannerAdsFormValues>({
    resolver: zodResolver(bannerAdsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      bannerType: "",
      width: "",
      height: "",
      notes: "",
    },
  });

  const onSubmit = async (_data: BannerAdsFormValues) => {
    // Simulate network API submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset();
  };

  const applyPreset = (preset: (typeof sizePresets)[number]) => {
    setValue("width", preset.width, { shouldValidate: true });
    setValue("height", preset.height, { shouldValidate: true });
    if (preset.type) {
      setValue("bannerType", preset.type, { shouldValidate: true });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      <div className="mb-6 pb-6 border-b border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles size={13} />
          <span>Custom Ad Campaign</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Banner Ads Enquiry
        </h2>
        <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
          Provide your preferred ad specifications and our team will get in touch with placement availability and pricing options.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="banner-name"
                label="Contact Name"
                placeholder="Rahul Sharma"
                error={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="banner-email"
                label="Email Address"
                type="email"
                placeholder="rahul@business.com"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* Row 2: Mobile Number & Banner Placement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="banner-mobile"
                label="Mobile Number"
                type="tel"
                placeholder="+91 98765 43210"
                error={errors.mobile?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="bannerType"
            control={control}
            render={({ field }) => (
              <SelectWithLabel
                id="banner-type"
                label="Banner Placement"
                placeholder="Select Banner Type"
                value={field.value}
                onValueChange={field.onChange}
                options={[...bannerTypeOptions]}
                error={errors.bannerType?.message}
              />
            )}
          />
        </div>

        {/* Quick Preset Selector */}
        <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/70">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-2.5">
            <Ruler size={13} className="text-indigo-600" />
            <span>Standard Dimension Presets (Click to autofill):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizePresets.map((preset) => (
              <Button
                key={preset.label}
                type="button"
                variant="outline"
                size="xs"
                onClick={() => applyPreset(preset)}
                className="h-7 text-xs px-2.5 rounded-lg border-slate-200 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 shadow-none font-medium cursor-pointer"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Row 3: Width and Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Controller
            name="width"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="banner-width"
                label="Ad Width"
                placeholder="e.g. 728px or 100%"
                error={errors.width?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="height"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                id="banner-height"
                label="Ad Height"
                placeholder="e.g. 90px or 250px"
                error={errors.height?.message}
                {...field}
              />
            )}
          />
        </div>

        {/* Row 4: Additional Notes / Requirements */}
        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <TextareaWithLabel
              id="banner-notes"
              label="Campaign Details or Specific Requirements (Optional)"
              rows={4}
              placeholder="Share your landing page URL, target city/categories, planned duration (e.g., 30 days), or creative design assistance needs..."
              error={errors.notes?.message}
              {...field}
            />
          )}
        />

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5 h-11"
          >
            <Send size={16} />
            <span>{isSubmitting ? "Submitting Campaign Details..." : "Submit Banner Ads Enquiry"}</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
