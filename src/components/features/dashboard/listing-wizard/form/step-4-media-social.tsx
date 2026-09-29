"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/common";

interface Step4MediaSocialProps {
  data: {
    logo: string;
    cover: string;
    gallery: string[];
    newPhotoUrl: string;
    facebook: string;
    instagram: string;
  };
  onChange: (field: string, value: any) => void;
  onAddPhoto: () => void;
  onRemovePhoto: (index: number) => void;
}

export function Step4MediaSocial({
  data,
  onChange,
  onAddPhoto,
  onRemovePhoto,
}: Step4MediaSocialProps) {
  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Step 4: Media, Photos & Social Media
        </h3>
        <p className="text-xs text-slate-500">
          High quality photos boost user engagement by up to 300%.
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputWithLabel
            id="biz-logo"
            label="Business Logo URL"
            placeholder="https://example.com/logo.png"
            value={data.logo}
            onChange={(e) => onChange("logo", e.target.value)}
          />

          <InputWithLabel
            id="biz-cover"
            label="Cover Banner Photo URL"
            placeholder="https://example.com/banner.jpg"
            value={data.cover}
            onChange={(e) => onChange("cover", e.target.value)}
          />
        </div>

        {/* Gallery Photos */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold text-slate-700 block">
            Gallery Photos
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="Paste Image URL to add to gallery..."
              value={data.newPhotoUrl}
              onChange={(e) => onChange("newPhotoUrl", e.target.value)}
              className="flex-1 h-10 px-3.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
            <Button
              type="button"
              onClick={onAddPhoto}
              variant="outline"
              className="h-10 px-4 rounded-[10px] text-xs font-semibold border-slate-200 cursor-pointer"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>

          {/* Photo Thumbnails */}
          {data.gallery.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {data.gallery.map((url, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100"
                >
                  <img
                    src={url}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onRemovePhoto(idx)}
                    className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Profiles */}
        <div className="pt-2 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-bold text-slate-900">
            Social Media Profiles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputWithLabel
              id="biz-fb"
              label="Facebook Profile / Page"
              placeholder="https://facebook.com/yourbusiness"
              value={data.facebook}
              onChange={(e) => onChange("facebook", e.target.value)}
            />
            <InputWithLabel
              id="biz-insta"
              label="Instagram Handle"
              placeholder="https://instagram.com/yourbusiness"
              value={data.instagram}
              onChange={(e) => onChange("instagram", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
