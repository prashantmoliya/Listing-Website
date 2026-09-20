"use client";

import { useState, useMemo } from "react";
import { Container, AppBreadcrumb } from "@/components/common";
import { categoriesList } from "@/data";
import { CategoriesHero } from "./categories-hero";
import { CategoriesGrid } from "./categories-grid";
import { CategoriesCta } from "./categories-cta";

export function CategoriesContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categoriesList;
    const query = searchQuery.toLowerCase().trim();
    return categoriesList.filter((cat) =>
      cat.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="w-full min-h-screen bg-slate-50/50">
      {/* 1. Header Hero with Live Search */}
      <CategoriesHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Sub-header Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5 shadow-2xs">
        <Container>
          <AppBreadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Categories" },
          ]} />
        </Container>
      </div>

      {/* 3. Main Grid & Bottom CTA */}
      <div className="py-10 md:py-14">
        <Container>
          <CategoriesGrid
            categories={filteredCategories}
            totalCount={categoriesList.length}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery("")}
          />
          
          <CategoriesCta />
        </Container>
      </div>
    </div>
  );
}
