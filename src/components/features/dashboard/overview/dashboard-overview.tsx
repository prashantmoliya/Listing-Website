"use client";

import { DashboardWelcomeBanner } from "./dashboard-welcome-banner";
import { DashboardStatsGrid } from "./dashboard-stats-grid";
import { DashboardListingsPreview } from "./dashboard-listings-preview";
import { DashboardReviewsPreview } from "./dashboard-reviews-preview";

export function DashboardOverview() {
  return (
    <div className="space-y-7">
      {/* 1. Welcome Banner */}
      <DashboardWelcomeBanner />

      {/* 2. KPI Stats Cards */}
      <DashboardStatsGrid />

      {/* 3. Main Split View: Listings Preview & Recent Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
        <div className="lg:col-span-2">
          <DashboardListingsPreview />
        </div>
        <div>
          <DashboardReviewsPreview />
        </div>
      </div>
    </div>
  );
}
