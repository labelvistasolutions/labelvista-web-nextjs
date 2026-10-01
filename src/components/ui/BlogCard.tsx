import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article className="relative group rounded-2xl overflow-hidden bg-white border border-cream-border hover:border-brand-navy/35 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full">
      {/* Stretched link */}
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Read article: ${post.title}`}
      />

      {/* Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F3ECE0] shrink-0">
        <img
          src={post.featuredImage}
          alt={post.imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Category Pill Tag */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-navy/90 backdrop-blur-xs text-white font-label-tag text-[10px] uppercase tracking-wider font-bold shadow-2xs border border-white/10 z-20">
          {post.category}
        </span>
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 bg-white">
        <div className="flex flex-col gap-2.5 flex-1">
          {/* Metadata Row */}
          <div className="flex items-center gap-2 font-label-mono text-[11px] text-brand-charcoal-muted font-medium">
            <span>{post.publishedDate}</span>
            <span>&bull;</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Article Title */}
          <h3 className="font-headline-sm text-[17px] sm:text-[18px] text-brand-navy group-hover:text-brand-red transition-colors tracking-tight font-bold leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body-sm text-[13.5px] text-brand-charcoal-muted leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Action */}
        <div className="flex items-center justify-between pt-3.5 border-t border-cream-border/70 mt-auto">
          <span className="inline-flex items-center gap-1.5 font-label-tag text-[11.5px] text-brand-red uppercase tracking-wider font-bold group-hover:text-brand-red-hover transition-colors">
            <span>Read Article</span>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </span>
          {index !== undefined && (
            <span className="font-label-mono text-[11px] text-stone-400 font-semibold">
              0{index + 1}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
