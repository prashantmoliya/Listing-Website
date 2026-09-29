"use client";

import {
  InputWithLabel,
  TextareaWithLabel,
} from "@/components/common";

interface Step4SeoDetailsProps {
  data: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
  };
  onChange: (field: string, value: any) => void;
}

export function Step4SeoDetails({ data, onChange }: Step4SeoDetailsProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          SEO Details
        </h3>
      </div>

      {/* Pro Tip Banner */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100/80 flex items-start gap-3">
        <span className="text-base leading-none mt-0.5">💡</span>
        <p className="text-xs text-indigo-950 font-medium leading-relaxed">
          <strong className="font-bold text-indigo-900">Pro Tip:</strong> Good SEO details help your listing rank higher on Google and get more organic traffic.
        </p>
      </div>

      <div className="space-y-4">
        {/* Meta Title */}
        <InputWithLabel
          id="biz-meta-title"
          label="Meta Title"
          required
          maxLength={60}
          placeholder="e.g. Best Pizza Restaurant in Delhi | MyBusiness"
          value={data.metaTitle}
          onChange={(e) => onChange("metaTitle", e.target.value)}
          description={
            <span className="flex justify-end text-[11px] text-slate-400">
              {data.metaTitle.length}/60 chars (ideal: 50-60)
            </span>
          }
        />

        {/* Meta Description */}
        <TextareaWithLabel
          id="biz-meta-desc"
          label="Meta Description"
          required
          maxLength={160}
          rows={4}
          placeholder="One-line summary for search results..."
          value={data.metaDescription}
          onChange={(e) => onChange("metaDescription", e.target.value)}
          description={
            <span className="flex justify-end text-[11px] text-slate-400">
              {data.metaDescription.length}/160 chars (ideal: 140-160)
            </span>
          }
        />

        {/* Meta Keywords */}
        <InputWithLabel
          id="biz-meta-keywords"
          label="Meta Keywords (Max 5)"
          placeholder="keyword1, keyword2, keyword3"
          value={data.metaKeywords}
          onChange={(e) => onChange("metaKeywords", e.target.value)}
        />
      </div>
    </div>
  );
}
