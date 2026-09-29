"use client";

import { Upload, X, Trash2 } from "lucide-react";
import { InputWithLabel } from "@/components/common";
import { Button } from "@/components/ui/button";

interface Step3PhotosSocialProps {
  data: {
    logo: string;
    gallery: string[];
    whatsapp: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  onChange: (field: string, value: any) => void;
  onAddPhoto?: (url: string) => void;
  onRemovePhoto?: (index: number) => void;
}

export function Step3PhotosSocial({
  data,
  onChange,
  onAddPhoto,
  onRemovePhoto,
}: Step3PhotosSocialProps) {
  const remainingSlots = Math.max(0, 5 - data.gallery.length);

  const handleAddSamplePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && data.gallery.length < 5) {
      const url = URL.createObjectURL(file);
      onChange("gallery", [...data.gallery, url]);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onChange("logo", url);
    }
  };

  const handleRemoveGalleryItem = (idx: number) => {
    if (onRemovePhoto) {
      onRemovePhoto(idx);
    } else {
      onChange(
        "gallery",
        data.gallery.filter((_, i) => i !== idx)
      );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Photos & Social Links
        </h3>
      </div>

      <div className="space-y-6">
        {/* 1. Business Logo */}
        <div>
          <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block mb-2">
            Business Logo
          </label>
          <div className="flex items-center gap-4">
            <label className="relative flex flex-col items-center justify-center w-36 h-28 border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-2xl cursor-pointer bg-slate-50/50 hover:bg-indigo-50/20 transition-colors p-3 text-center group">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              <div className="w-8 h-8 rounded-xl bg-white shadow-2xs border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:text-indigo-600 mb-1.5 transition-colors">
                <Upload className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600">
                Upload Logo
              </span>
            </label>

            <div className="flex-1">
              {data.logo ? (
                <div className="relative inline-block">
                  <img
                    src={data.logo}
                    alt="Logo preview"
                    className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shadow-2xs"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => onChange("logo", "")}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 shadow-xs cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </div>
              ) : (
                <p className="text-[11px] text-slate-400">
                  PNG, JPG up to 5MB. Square format recommended.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 2. Photo Gallery (Max 5 Images) */}
        <div>
          <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block mb-2">
            Photo Gallery (Max 5 Images)
          </label>
          <div className="space-y-3">
            <label
              className={`relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl transition-colors p-4 text-center group ${
                remainingSlots === 0
                  ? "border-slate-200 bg-slate-50 cursor-not-allowed opacity-60"
                  : "border-slate-200 hover:border-indigo-400 bg-slate-50/50 hover:bg-indigo-50/20 cursor-pointer"
              }`}
            >
              <input
                type="file"
                accept="image/*"
                disabled={remainingSlots === 0}
                onChange={handleAddSamplePhoto}
                className="hidden"
              />
              <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200/80 flex flex-col items-center justify-center text-slate-500 group-hover:text-indigo-600 mb-1 transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-[9px] font-bold text-slate-400">
                  {remainingSlots} left
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                Upload images of your business, products, or services.
              </p>
              <p className="text-[11px] text-slate-400">
                PNG, JPG up to 5MB.
              </p>
            </label>

            {/* Gallery Previews */}
            {data.gallery.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                {data.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveGalleryItem(idx)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity p-0 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3. Social Media Links - 2 Columns (Baju Baju Me) */}
        <div className="pt-2">
          <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block mb-3">
            Social Media Links
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Number */}
            <InputWithLabel
              id="biz-whatsapp"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                    <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </div>
                  <span>WhatsApp Number</span>
                </div>
              }
              type="tel"
              placeholder="+91 92438 37806"
              value={data.whatsapp}
              onChange={(e) => onChange("whatsapp", e.target.value)}
            />

            {/* Facebook Page */}
            <InputWithLabel
              id="biz-facebook"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-[#1877F2] text-white flex items-center justify-center">
                    <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>Facebook Page</span>
                </div>
              }
              type="url"
              placeholder="https://facebook.com/..."
              value={data.facebook}
              onChange={(e) => onChange("facebook", e.target.value)}
            />

            {/* Instagram */}
            <InputWithLabel
              id="biz-instagram"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center">
                    <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span>Instagram</span>
                </div>
              }
              type="url"
              placeholder="https://instagram.com/..."
              value={data.instagram}
              onChange={(e) => onChange("instagram", e.target.value)}
            />

            {/* Twitter/X */}
            <InputWithLabel
              id="biz-twitter"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-black text-white flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span>Twitter/X</span>
                </div>
              }
              type="url"
              placeholder="https://twitter.com/..."
              value={data.twitter}
              onChange={(e) => onChange("twitter", e.target.value)}
            />

            {/* LinkedIn */}
            <InputWithLabel
              id="biz-linkedin"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-[#0A66C2] text-white flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </div>
              }
              type="url"
              placeholder="https://linkedin.com/company/..."
              value={data.linkedin}
              onChange={(e) => onChange("linkedin", e.target.value)}
            />

            {/* YouTube Channel */}
            <InputWithLabel
              id="biz-youtube"
              label={
                <div className="flex items-center gap-2">
                  <div className="w-4.5 h-4.5 rounded-md bg-[#FF0000] text-white flex items-center justify-center">
                    <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span>YouTube Channel</span>
                </div>
              }
              type="url"
              placeholder="https://youtube.com/..."
              value={data.youtube}
              onChange={(e) => onChange("youtube", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
