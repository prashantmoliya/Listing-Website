"use client";

import { Badge } from "@/components/ui/badge";
import type { ListingItem } from "@/data";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Maximize2,
  X
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ListingGalleryProps {
  listing: ListingItem;
}

export function ListingGallery({ listing }: ListingGalleryProps) {
  // Combine main image and gallery images without duplicates
  const images = Array.from(
    new Set([
      listing.image,
      ...(listing.gallery || []),
    ].filter(Boolean))
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, nextImage, prevImage]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
            <ImageIcon size={22} className="text-indigo-600" />
            <span>Photo Gallery</span>
          </h2>

          <Badge variant="muted" className="px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100">
            {images.length} {images.length === 1 ? "Photo" : "Photos"}
          </Badge>
        </div>

        {/* Equal Grid of Square Cards (3 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="aspect-square relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300"
            >
              <Image
                src={img}
                alt={`${listing.name} photo ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs text-slate-900 p-2.5 rounded-xl shadow-md">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col h-screen w-screen overflow-hidden select-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Top Header (Strict Fixed Height) */}
          <div className="h-14 sm:h-16 shrink-0 flex items-center justify-between px-4 sm:px-6 border-b border-white/10 text-white bg-black/40">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-bold text-sm sm:text-base truncate max-w-[200px] sm:max-w-md">
                {listing.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 text-slate-200 font-semibold shrink-0">
                {currentIndex + 1} / {images.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Center Image & Navigation (Flex 1, never overflows) */}
          <div className="relative flex-1 min-h-0 w-full flex items-center justify-center p-3 sm:p-6">
            {images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer hover:scale-105 shadow-lg"
                title="Previous photo (Left arrow)"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`${listing.name} photo ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer hover:scale-105 shadow-lg"
                title="Next photo (Right arrow)"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnails Strip (Strict Fixed Height, Always in View) */}
          {images.length > 1 && (
            <div className="h-20 shrink-0 flex items-center justify-center px-4 border-t border-white/10 bg-black/60">
              <div className="flex items-center gap-2 overflow-x-auto max-w-3xl py-1 px-2 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      currentIndex === idx
                        ? "border-indigo-500 scale-105 ring-2 ring-indigo-500/50"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
