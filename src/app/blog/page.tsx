import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPostsData, BlogPost } from "@/data/blog";
import BlogCard from "@/components/ui/BlogCard";
import DirectInquiriesCTA from "@/components/ui/DirectInquiriesCTA";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export const metadata: Metadata = {
  title: "Blog & Insights | Labelvista Solutions",
  description:
    "Practical guides and manufacturing insights on self-adhesive label materials, thermal barcode printing, packaging adhesives, and flexo printing from Surat, Gujarat.",
};

export default function BlogListingPage() {
  const featuredPost: BlogPost =
    blogPostsData.find((p) => p.featured) || blogPostsData[0];

  const gridPosts: BlogPost[] = blogPostsData.filter(
    (p) => p.id !== featuredPost.id
  );

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Blog Introduction Header */}
      <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
        <div className="site-container">
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-3.5 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-label-tag uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              BLOG &bull; INSIGHTS
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.14]">
              Knowledge for Better Labels.
            </h1>
            <p className="font-body-lg text-[16px] sm:text-[17px] lg:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em] max-w-4xl">
              Practical guides on label materials, barcode scannability, packaging adhesives, and flexo printing from our manufacturing facility in Surat, Gujarat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED ARTICLE SPOTLIGHT (Dominant Editorial Stage)                     */}
      {/* ========================================================================= */}
      {featuredPost && (
        <section className="w-full pb-12 sm:pb-16">
          <div className="site-container">
            <ScrollReveal direction="up" distance={24} delay={0.08}>
              <div className="relative group rounded-3xl overflow-hidden bg-white border border-cream-border hover:border-brand-navy/35 shadow-[0_8px_30px_rgba(12,35,64,0.06)] hover:shadow-xl transition-all duration-300">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read featured article: ${featuredPost.title}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Large Featured Image (7 cols on Desktop) */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F3ECE0]">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                      <span className="px-3 py-1 rounded-lg bg-brand-red text-white font-label-tag text-[11px] uppercase tracking-wider font-bold shadow-md">
                        FEATURED INSIGHT
                      </span>
                    </div>
                  </div>

                  {/* Story & Content Side (5 cols on Desktop) */}
                  <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between gap-6 bg-white">
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-2 font-label-mono text-xs text-brand-charcoal-muted font-medium">
                        <span className="text-brand-navy font-bold uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <span>&bull;</span>
                        <span>{featuredPost.publishedDate}</span>
                        <span>&bull;</span>
                        <span>{featuredPost.readingTime}</span>
                      </div>

                      <h2 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy group-hover:text-brand-red transition-colors tracking-tight font-extrabold leading-snug">
                        {featuredPost.title}
                      </h2>

                      <p className="font-body-md text-[15px] sm:text-[16px] text-brand-charcoal-muted leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-cream-border/70 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-label-tag text-[12.5px] text-brand-red uppercase tracking-wider font-bold group-hover:text-brand-red-hover transition-colors">
                        <span>Read Full Guide</span>
                        <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </span>
                      <span className="font-label-mono text-xs text-stone-400">
                        Editorial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* ARTICLES GRID (Clean 3 Columns on Desktop)                                */}
      {/* ========================================================================= */}
      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="site-container">
          <StaggerGroup
            threshold={0}
            rootMargin="60px 0px 0px 0px"
            staggerInterval={0.06}
            baseDelay={0.05}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {gridPosts.map((post, idx) => (
              <StaggerItem key={post.slug} index={idx} className="h-full">
                <BlogCard post={post} index={idx} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Direct Inquiries & Custom Orders CTA */}
      <DirectInquiriesCTA />
    </div>
  );
}
