"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Eye, Calendar } from "lucide-react";
import { BlogPost } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogDetailHeaderProps {
  post: BlogPost;
}

export function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Top Nav: Back button & Breadcrumbs */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link href="/blog">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl border-slate-200 text-slate-700 hover:text-indigo-600 hover:bg-white font-bold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>All Articles</span>
          </Button>
        </Link>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-800 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-800 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-indigo-600 truncate max-w-[200px]">
            {post.category}
          </span>
        </nav>
      </div>

      {/* Badges & Meta info */}
      <div className="flex items-center gap-3 flex-wrap">
        <Badge variant="indigo" className="font-bold px-3 py-1 rounded-full text-xs">
          {post.category}
        </Badge>
        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{post.readTime}</span>
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Eye className="w-3.5 h-3.5 text-slate-400" />
          <span>{post.views.toLocaleString()} views</span>
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>{post.date}</span>
        </span>
      </div>

      {/* Article Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        {post.title}
      </h1>

      {/* Author Bar */}
      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 ring-2 ring-indigo-100 shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">
              {post.author.name}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {post.author.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
