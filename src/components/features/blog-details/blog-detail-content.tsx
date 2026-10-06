"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb
} from "lucide-react";
import { BlogPost } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogDetailContentProps {
  post: BlogPost;
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  return (
    <article className="space-y-10">
      {/* 1. Lead Highlight Quote */}
      <div className="p-6 sm:p-7 rounded-2xl bg-indigo-50/60 border-l-4 border-indigo-600 text-slate-800 text-lg sm:text-xl font-medium leading-relaxed italic">
        &ldquo;{post.excerpt}&rdquo;
      </div>

      {/* 2. Article Paragraphs */}
      <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* 3. Key Takeaways Box */}
      <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/80 space-y-4">
        <div className="flex items-center gap-2.5 text-indigo-700">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
          <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">
            Key Takeaways from This Guide
          </h3>
        </div>
        <ul className="space-y-3 text-sm sm:text-base text-slate-600">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>Keep your business Name, Address, and Phone number (NAP) 100% consistent across every directory.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>High DA directory listings grant valuable do-follow backlinks that enhance Google domain authority.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>Complete profiles with photos and working hours receive 3.5x higher conversion rates from local buyers.</span>
          </li>
        </ul>
      </div>

      {/* 4. In-Article Free Business Listing CTA */}
      <div className="my-10 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free Forever • No Credit Card Required</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Ready to Get Your Business Listed in India?
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Join 5,000+ local businesses. Complete instant OTP registration, gain a free do-follow backlink, and get discovered by thousands of customers.
          </p>

          <div className="pt-2 flex items-center gap-3.5 flex-wrap">
            <Link href="/listings/create">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-fuchsia-600 hover:from-indigo-600 hover:to-fuchsia-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30 cursor-pointer border-0"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                <span>Submit Your Free Listing</span>
              </Button>
            </Link>

            <Link href="/featured">
              <Button
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold text-sm px-5 py-3 rounded-xl cursor-pointer"
              >
                <span>Explore Featured</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Tags Cloud */}
      <div className="pt-6 border-t border-slate-100 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-slate-400 mr-1">Tags:</span>
        {post.tags.map((tag) => (
          <Link key={tag} href={`/blog`}>
            <Badge
              variant="outline"
              className="bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 font-semibold text-xs px-3 py-1 rounded-lg border-slate-200 transition-colors cursor-pointer"
            >
              #{tag}
            </Badge>
          </Link>
        ))}
      </div>

      {/* 6. Author Bio Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-5">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 ring-2 ring-indigo-100 shrink-0">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2.5">
            <h4 className="font-extrabold text-slate-900 text-lg">
              {post.author.name}
            </h4>
            <Badge variant="indigo" className="text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              Author
            </Badge>
          </div>

          <p className="text-xs font-bold text-indigo-600">
            {post.author.role}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Covers local SEO strategies, citation audits, directory optimization, and digital growth frameworks for Indian startups and MSMEs.
          </p>
        </div>
      </div>
    </article>
  );
}
