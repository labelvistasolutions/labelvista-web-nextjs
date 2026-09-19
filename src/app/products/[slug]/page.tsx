import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product Not Found | Labelvista Solutions" };
  }
  return {
    title: `${product.name} | Labelvista Solutions`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 3);

  const badgeBg =
    product.badgeType === "green"
      ? "bg-brand-green/90"
      : product.badgeType === "red"
      ? "bg-brand-red/90"
      : "bg-brand-navy/90";

  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Breadcrumb & Header */}
      <section className="w-full bg-[#FAF6F0] border-b border-cream-border py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-5">
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
                  href="/products"
                  className="text-brand-charcoal-muted hover:text-brand-navy font-medium transition-colors"
                >
                  Products
                </Link>
              </li>
              <li className="inline-flex items-center text-stone-400 select-none" aria-hidden="true">
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </li>
              <li className="inline-flex items-center">
                <span className="text-brand-navy font-semibold" aria-current="page">
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>

          <ScrollReveal direction="up" distance={16} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#FFFDF9] text-brand-navy border border-cream-border shadow-xs w-fit">
                <span className={`w-2 h-2 rounded-full ${product.badgeType === "green" ? "bg-brand-green" : product.badgeType === "red" ? "bg-brand-red" : "bg-brand-navy"}`}></span>
                <span className="font-label-tag text-label-tag uppercase tracking-wider font-bold">
                  {product.categoryName}
                </span>
              </div>
              <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-tight">
                {product.name}
              </h1>
            </div>

            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="btn-primary px-7 py-3.5 rounded-lg font-label-tag text-label-tag uppercase tracking-wider font-bold shrink-0"
            >
              <span>Get Quote for This Label</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Product Overview */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Image & Badges */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <ImageReveal
                delay={0.1}
                duration={1.1}
                zoomScale={1.05}
                containerClassName="rounded-2xl bg-cream-card aspect-[4/3] shadow-xl ring-1 ring-cream-border"
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-4 left-4 px-3.5 py-1 rounded-md ${badgeBg} backdrop-blur-sm text-[#FAF6F0] font-label-tag text-[11px] uppercase tracking-wider font-bold shadow`}
                >
                  {product.badge}
                </span>
              </ImageReveal>

              {/* Manufacturing Assurance Card */}
              <ScrollReveal direction="up" distance={16} delay={0.2}>
                <div className="p-6 rounded-xl bg-[#FFFDF9] border border-cream-border flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-brand-green-subtle flex items-center justify-center text-brand-green shrink-0 shadow-inner">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div>
                      <span className="font-headline-sm text-[15px] sm:text-[16px] text-brand-navy block font-extrabold">
                        Surat Manufacturing Line
                      </span>
                      <span className="font-body-sm text-[13px] text-brand-charcoal-muted tracking-wide">
                        ISO Certified &amp; Tested for High Quality
                      </span>
                    </div>
                  </div>
                  <span className="font-label-tag text-[11px] text-brand-red font-bold uppercase tracking-wider">
                    Factory Direct
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Details */}
            <ScrollReveal direction="up" distance={22} delay={0.15} className="lg:col-span-6 flex flex-col gap-8">
              <div>
                <h2 className="font-headline-sm text-2xl text-brand-navy mb-3 font-bold tracking-tight">
                  Product Overview
                </h2>
                <p className="font-body-lg text-[17px] sm:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-cream-border shadow-xs flex flex-col gap-4">
                <h3 className="font-label-tag text-xs text-brand-navy uppercase tracking-widest font-bold">
                  Key Engineering Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-brand-green text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-md text-[15px] text-brand-charcoal leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="font-label-tag text-xs text-brand-navy uppercase tracking-widest font-bold mb-3.5">
                  Recommended Applications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.applications.map((app, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F8F4EC] border border-cream-border/60 font-body-sm text-[14px] font-semibold text-brand-charcoal flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customisation Options */}
              <div>
                <h3 className="font-label-tag text-xs text-brand-navy uppercase tracking-widest font-bold mb-3.5">
                  Customisation Parameters
                </h3>
                <div className="flex flex-col gap-2.5">
                  {product.customisationOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FFFDF9] border border-cream-border font-body-sm text-[14px] text-brand-charcoal flex items-center gap-2.5 shadow-2xs"
                    >
                      <span className="material-symbols-outlined text-brand-navy text-[18px]">
                        tune
                      </span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Specifications Table */}
          <ScrollReveal direction="up" distance={20} className="mt-20">
            <div className="flex flex-col items-start mb-6">
              <span className="font-label-tag text-label-tag uppercase tracking-widest text-brand-red font-bold mb-1">
                Product Details
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
                Verified Product Specifications
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-cream-border bg-[#FFFDF9] shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-cream-border last:border-b-0 ${
                        idx % 2 === 0 ? "bg-[#FFFDF9]" : "bg-[#FAF6F0]"
                      }`}
                    >
                      <td className="py-4 px-6 font-label-tag text-[12px] uppercase tracking-wider text-brand-navy font-bold w-1/3">
                        {spec.label}
                      </td>
                      <td className="py-4 px-6 font-body-md text-[15px] sm:text-[16px] text-brand-charcoal">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* A4 Label Sheet Sizes & Codes (If applicable) */}
          {product.a4Codes && (
            <ScrollReveal direction="up" distance={20} className="mt-20">
              <div className="flex flex-col items-start mb-4">
                <span className="font-label-tag text-label-tag uppercase tracking-widest text-brand-green font-bold mb-1">
                  Standard Sizes
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
                  Available A4 Sheet Sizes
                </h2>
                <p className="font-body-md text-[16px] text-brand-charcoal-muted max-w-2xl mt-1 leading-relaxed">
                  Standard sheet sizes ready to order. We can also cut custom sizes on request.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-cream-border bg-[#FFFDF9] shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-navy-dark text-white">
                      <th className="py-3.5 px-6 font-label-tag text-[12px] uppercase tracking-wider font-bold">
                        Size Code
                      </th>
                      <th className="py-3.5 px-6 font-label-tag text-[12px] uppercase tracking-wider font-bold">
                        Label Size (mm)
                      </th>
                      <th className="py-3.5 px-6 font-label-tag text-[12px] uppercase tracking-wider text-right font-bold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.a4Codes.map((item, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-cream-border last:border-b-0 ${
                          idx % 2 === 0 ? "bg-[#FFFDF9]" : "bg-[#FAF6F0]"
                        }`}
                      >
                        <td className="py-3.5 px-6 font-label-tag text-[12px] font-bold text-brand-navy">
                          {item.code}
                        </td>
                        <td className="py-3.5 px-6 font-body-md text-[15px] text-brand-charcoal">
                          {item.size}
                        </td>
                        <td className="py-3.5 px-6 font-label-tag text-[11px] text-right text-brand-green font-bold uppercase tracking-wider">
                          In Stock
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 sm:mt-24">
              <ScrollReveal direction="up" distance={16} className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-label-tag text-label-tag uppercase tracking-widest text-brand-red font-bold block mb-1">
                    More Products
                  </span>
                  <h3 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
                    Other {product.categoryName}
                  </h3>
                </div>
                <Link
                  href="/products"
                  className="font-label-tag text-label-tag text-brand-navy hover:text-brand-red uppercase tracking-wider font-bold transition-colors"
                >
                  View All Products →
                </Link>
              </ScrollReveal>

              <StaggerGroup staggerInterval={0.08} baseDelay={0.05} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((p, idx) => (
                  <StaggerItem key={p.slug} index={idx} className="h-full">
                    <ProductCard product={p} index={idx} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
