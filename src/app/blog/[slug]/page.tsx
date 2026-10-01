import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPostsData, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import BlogCard from "@/components/ui/BlogCard";
import DirectInquiriesCTA from "@/components/ui/DirectInquiriesCTA";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Labelvista Solutions",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.seoTitle} | Labelvista`,
    description: post.seoDescription,
    alternates: {
      canonical: `https://labelvista.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://labelvista.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <article className="flex flex-col w-full bg-[#FAF6F0] min-h-screen">
      {/* ========================================================================= */}
      {/* ARTICLE HEADER & BREADCRUMB                                              */}
      {/* ========================================================================= */}
      <section className="w-full pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
        <div className="site-container max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-body-sm text-[13px] text-brand-charcoal-muted">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-brand-charcoal-muted hover:text-brand-navy font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-stone-400">home</span>
                  <span>Home</span>
                </Link>
              </li>
              <li className="inline-flex items-center text-stone-400 select-none" aria-hidden="true">
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </li>
              <li className="inline-flex items-center">
                <Link
                  href="/blog"
                  className="text-brand-charcoal-muted hover:text-brand-navy font-medium transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="inline-flex items-center text-stone-400 select-none" aria-hidden="true">
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </li>
              <li className="inline-flex items-center">
                <span className="text-brand-navy font-semibold line-clamp-1" aria-current="page">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Category Tag */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-label-tag uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              {post.category}
            </span>
          </div>

          {/* Large Article Title */}
          <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.18] mb-6">
            {post.title}
          </h1>

          {/* Short Excerpt */}
          <p className="font-body-lg text-[17px] sm:text-[19px] text-brand-charcoal-muted leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-cream-border/80 font-label-mono text-xs text-brand-charcoal-muted">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
                LV
              </div>
              <div className="flex flex-col">
                <span className="text-brand-navy font-bold">{post.author.name}</span>
                <span className="text-[11px] text-stone-500">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span>{post.publishedDate}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">schedule</span>
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED BANNER IMAGE                                                    */}
      {/* ========================================================================= */}
      <section className="w-full pb-10 sm:pb-14">
        <div className="site-container max-w-4xl">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F3ECE0] border border-cream-border shadow-md aspect-[16/9]">
            <img
              src={post.featuredImage}
              alt={post.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="text-center font-label-mono text-[11.5px] text-brand-charcoal-muted mt-2.5">
            {post.imageAlt}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLE BODY & SECTIONS                                                  */}
      {/* ========================================================================= */}
      <section className="w-full pb-14 sm:pb-20">
        <div className="site-container max-w-3xl">
          <div className="flex flex-col gap-8 text-[17px] leading-[1.8] text-brand-charcoal">
            {/* Introduction Paragraph */}
            <p className="font-body-lg text-[18px] sm:text-[19px] leading-relaxed text-brand-charcoal font-medium">
              {post.content.introduction}
            </p>

            {/* Sections */}
            {post.content.sections.map((sec, idx) => (
              <div key={idx} className="flex flex-col gap-4 pt-4">
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
                  {sec.heading}
                </h2>

                {sec.body.map((pText, pIdx) => (
                  <p key={pIdx} className="text-brand-charcoal/90">
                    {pText}
                  </p>
                ))}

                {sec.listItems && (
                  <ul className="my-2 space-y-2.5 pl-2">
                    {sec.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-brand-red text-[18px] shrink-0 mt-1">
                          check_circle
                        </span>
                        <span className="text-[16px] text-brand-charcoal leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.callout && (
                  <div className="my-3 p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-brand-red border-cream-border shadow-xs">
                    <p className="text-brand-navy font-medium italic text-[16px] leading-relaxed">
                      &ldquo;{sec.callout}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion */}
            <div className="pt-6 border-t border-cream-border">
              <h3 className="font-headline-md text-xl sm:text-2xl text-brand-navy font-bold mb-3">
                Summary & Next Steps
              </h3>
              <p className="text-brand-charcoal/90">
                {post.content.conclusion}
              </p>
            </div>

            {/* Key Takeaways Box */}
            {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
              <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-brand-navy text-white shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-brand-red text-2xl">
                    fact_check
                  </span>
                  <h4 className="font-headline-sm text-lg sm:text-xl font-bold tracking-tight text-white">
                    Key Technical Takeaways
                  </h4>
                </div>
                <ul className="space-y-3 font-body-md text-stone-200 text-[15px]">
                  {post.content.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                      <span className="text-brand-red font-bold font-label-mono">&bull;</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}


          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* RELATED ARTICLES SECTION                                                 */}
      {/* ========================================================================= */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-[#F5EFE6]/60 border-t border-cream-border">
          <div className="site-container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-label-tag text-label-tag uppercase tracking-wider text-brand-red font-bold">
                  Recommended Reading
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight mt-1">
                  Related Manufacturing Guides
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 font-label-tag text-xs uppercase tracking-wider font-bold text-brand-navy hover:text-brand-red transition-colors"
              >
                <span>Explore All</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {relatedPosts.map((rPost, idx) => (
                <BlogCard key={rPost.slug} post={rPost} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Inquiries & Custom Orders CTA */}
      <DirectInquiriesCTA />
    </article>
  );
}
