"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { productCategories } from "@/data/categories";
import ScrollReveal from "@/components/motion/ScrollReveal";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get("product") || "";
  const defaultIndustry = searchParams.get("industry") || "";
  const defaultSubject = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    category: defaultProduct ? "custom" : defaultIndustry ? "industry" : "barcode-labels",
    productName: defaultProduct || defaultSubject || "",
    quantity: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastDraftUrls, setLastDraftUrls] = useState<{ gmail: string; mailto: string }>({
    gmail: "",
    mailto: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const recipient = "labelvistasolutions@gmail.com";
    const selectedCategoryName =
      productCategories.find((c) => c.slug === formData.category)?.name ||
      (formData.category === "custom"
        ? "Custom Size"
        : formData.category === "industry"
          ? "Industry Specific"
          : formData.category);

    const subject = `Quote Request: ${formData.productName ? `${formData.productName} - ` : ""}${formData.fullName}${formData.company ? ` (${formData.company})` : ""}`;

    const body = `Hello Labelvista Solutions Team,\n\nI would like to request a quote with the following requirements:\n\n` +
      `----------------------------------------\n` +
      `CUSTOMER DETAILS\n` +
      `----------------------------------------\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Company Name: ${formData.company || "N/A"}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone / WhatsApp: ${formData.phone}\n\n` +
      `----------------------------------------\n` +
      `PRODUCT & ORDER SPECIFICATIONS\n` +
      `----------------------------------------\n` +
      `• Label Type / Category: ${selectedCategoryName}\n` +
      `• Specific Product: ${formData.productName || "N/A"}\n` +
      `• Estimated Quantity / Rolls: ${formData.quantity || "N/A"}\n\n` +
      `----------------------------------------\n` +
      `REQUIREMENTS & APPLICATION DETAILS\n` +
      `----------------------------------------\n` +
      `${formData.requirements || "Standard specifications"}\n\n` +
      `Looking forward to your quotation and timeline.\n\n` +
      `Thank you,\n${formData.fullName}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setLastDraftUrls({ gmail: gmailUrl, mailto: mailtoUrl });

    // Open Gmail web compose in a new tab
    window.open(gmailUrl, "_blank");

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Contact Details Left */}
      <ScrollReveal direction="up" distance={22} delay={0.1} className="lg:col-span-5 flex flex-col gap-8">
        <div>
          <span className="font-label-tag text-label-tag uppercase tracking-widest text-brand-red font-bold block mb-2">
            Factory Location
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
            Talk to Our Team
          </h2>
          <p className="font-body-md text-[15px] sm:text-[16px] text-brand-charcoal-muted mt-3 leading-relaxed tracking-[0.012em]">
            Our team in Surat, Gujarat is here to help you choose the right labels, adhesives, and sizes for your business.
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-cream-border flex flex-col gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[22px]">location_on</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-tag text-xs text-brand-navy uppercase font-bold tracking-wider">
                Manufacturing Hub &amp; Office
              </span>
              <p className="font-body-sm text-[14px] text-brand-charcoal leading-relaxed">
                1st Floor, Plot No 40 to 41, Shivdhara Raschel Park, Nr. Torrent Power Gaypagla, Dhoranpardi Kamrej, Surat, Gujarat – 394155
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[22px]">mail</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-tag text-xs text-brand-navy uppercase font-bold tracking-wider">
                Email Us
              </span>
              <a
                href="mailto:labelvistasolutions@gmail.com"
                className="font-body-sm text-[14px] text-brand-red font-semibold hover:underline"
              >
                labelvistasolutions@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-[22px]">call</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-tag text-xs text-brand-navy uppercase font-bold tracking-wider">
                Call or WhatsApp (Partners)
              </span>
              <div className="flex flex-col gap-0.5 font-body-sm text-[14px] text-brand-charcoal font-semibold">
                <a href="tel:+919898706129" className="hover:text-brand-navy transition-colors">
                  +91 98987 06129
                </a>
                <a href="tel:+919924592000" className="hover:text-brand-navy transition-colors">
                  +91 99245 92000
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-cream-border/60 flex flex-col gap-1.5 font-label-mono text-[11px] text-brand-charcoal-muted uppercase tracking-wider">
            <div className="flex items-center justify-between">
              <span>Certification:</span>
              <span className="font-bold text-brand-navy">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>

        {/* Quality Assurance Box */}
        <div className="p-7 sm:p-8 rounded-2xl bg-gradient-navy-red text-white border border-brand-navy-light/40 shadow-lg flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5 text-brand-green">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span className="font-label-tag text-xs uppercase tracking-wider font-bold">
              Quality Guaranteed
            </span>
          </div>
          <h3 className="font-headline-sm text-lg sm:text-xl text-white font-bold tracking-tight">
            Accurate Cutting &amp; Clean Printing
          </h3>
          <p className="font-body-sm text-[14px] text-cream-border/85 leading-relaxed tracking-wide">
            We test every batch for strong glue, neat edges, and easy barcode scanning before shipping.
          </p>
        </div>
      </ScrollReveal>

      {/* Inquiry / Quote Form Right */}
      <ScrollReveal direction="up" distance={24} delay={0.2} className="lg:col-span-7 bg-[#FFFDF9] rounded-2xl border border-cream-border p-8 sm:p-10 lg:p-12 shadow-xl">
        {submitted ? (
          <div className="text-center py-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-green-subtle text-brand-green flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-4xl">mark_email_read</span>
            </div>
            <h3 className="font-headline-lg text-2xl sm:text-3xl text-brand-navy font-extrabold tracking-tight">
              Gmail Draft Opened!
            </h3>
            <p className="font-body-md text-[16px] text-brand-charcoal-muted max-w-md leading-relaxed">
              We have pre-filled your quote request into Gmail. Simply hit <strong>Send</strong> in the opened Gmail tab to reach us directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-3 w-full max-w-md">
              <a
                href={lastDraftUrls.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3 px-4 bg-brand-navy text-white rounded-lg font-label-tag text-xs uppercase tracking-wider font-bold hover:bg-brand-navy-light text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Re-open Gmail</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
              <a
                href={lastDraftUrls.mailto}
                className="w-full sm:w-1/2 py-3 px-4 bg-[#FAF6F0] border border-cream-border text-brand-charcoal hover:text-brand-navy hover:bg-white rounded-lg font-label-tag text-xs uppercase tracking-wider font-bold text-center transition-colors"
              >
                Open Default Mail App
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  company: "",
                  category: "barcode-labels",
                  productName: "",
                  quantity: "",
                  requirements: "",
                });
              }}
              className="mt-4 text-xs font-label-tag uppercase tracking-wider font-bold text-stone-500 hover:text-brand-navy transition-colors underline cursor-pointer"
            >
              Fill another request form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5 pb-2 border-b border-cream-border/60">
              <h2 className="font-headline-sm text-2xl text-brand-navy font-extrabold tracking-tight">
                Request a Free Quote
              </h2>
              <p className="font-body-sm text-[14px] text-brand-charcoal-muted leading-relaxed">
                Fill in your details below to get factory pricing and fast assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Industries"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Label Type
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                >
                  {productCategories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="custom">Custom Size</option>
                  <option value="industry">Industry Specific Labels</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body-md text-[14px] text-brand-navy font-bold">
                  Estimated Quantity or Roll Count
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50,000 labels / 200 rolls"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
                />
              </div>
            </div>

            {formData.productName && (
              <div className="p-4 bg-brand-navy/5 border border-brand-navy/10 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-brand-red text-[18px]">bookmark</span>
                  <span className="font-body-md text-[14px] text-brand-navy">
                    Selected Product: <strong className="font-bold">{formData.productName}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, productName: "" })}
                  className="font-body-sm text-[13px] text-stone-400 hover:text-stone-700 transition-colors font-medium"
                >
                  Clear
                </button>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="font-body-md text-[14px] text-brand-navy font-bold">
                Tell Us About Your Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us the label size (in mm), paper type, glue strength, printer model, and how you will use the labels."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="px-4 py-3 bg-[#FAF6F0] border border-cream-border rounded-lg text-sm text-brand-charcoal placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 leading-relaxed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary mt-2 w-full py-4 rounded-lg font-label-tag text-label-tag uppercase tracking-wider font-bold gap-2"
            >
              {loading ? (
                <span>Opening Gmail...</span>
              ) : (
                <>
                  <span>Send Quote Request via Gmail</span>
                  <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
                </>
              )}
            </button>
          </form>
        )}
      </ScrollReveal>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#FAF6F0]">
      {/* Page Header */}
      <section className="relative w-full bg-[#FAF6F0] border-b border-cream-border py-14 lg:py-20">
        <div className="site-container">
          <ScrollReveal direction="up" distance={20} className="flex flex-col items-start gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-label-tag text-label-tag uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Contact &amp; Quotes
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight font-extrabold leading-[1.12]">
              Get in Touch with Us.
            </h1>
            <p className="font-body-lg text-[17px] sm:text-[18px] text-brand-charcoal-muted leading-relaxed tracking-[0.012em]">
              Contact our team for price quotes, sample labels, and custom orders.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form Section wrapped in Suspense for useSearchParams */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <Suspense fallback={<div className="text-center py-12 font-body-md text-brand-charcoal-muted">Loading quote form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
