import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Labelvista Solutions | Custom Label Manufacturer & Printing",
  description: "High-quality self-adhesive labels, thermal rolls, A4 label sheets, and custom color printing. Made with care in Surat, Gujarat, India.",
  keywords: ["Label manufacturing", "Barcode labels", "Thermal paper rolls", "A4 label sheets", "Flexo UV printing", "Jewellery tags", "Labelvista", "Surat Gujarat India"],
  icons: {
    icon: "/brand/labelvista-mark.png",
    shortcut: "/brand/labelvista-mark.png",
    apple: "/brand/labelvista-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brand/labelvista-mark.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/brand/labelvista-mark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF6F0] font-body-md text-body-md text-brand-charcoal antialiased flex flex-col min-h-screen">
        <Header />
        <main className="w-full pt-20 bg-[#FAF6F0] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
