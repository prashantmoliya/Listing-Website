"use client";

import { BlogCategory } from "@/data";
import { Button } from "@/components/ui/button";

interface BlogCategoriesProps {
  categories: BlogCategory[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function BlogCategories({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogCategoriesProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          return (
            <Button
              key={cat.slug}
              variant={isActive ? "default" : "outline"}
              onClick={() => onSelectCategory(cat.slug)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 border-transparent"
                  : "bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`ml-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
