import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Samyak Group | Samyak India Private Limited - Precision Industrial & Commercial Labels",
  description:
    "Leading B2B manufacturer of custom self-adhesive labels, shrink sleeves, IML, and anti-counterfeit security packaging. 30,000 sq. ft. plant on NH4 Shirwal, Pune. Certified ISO 9001:2015 & BRC.",
  keywords: [
    "Samyak Group",
    "Samyak India Private Limited",
    "B2B labels",
    "pharmaceutical labels",
    "FMCG packaging",
    "automotive labels",
    "chemical drum labels",
    "BS 5609",
    "Shirwal Pune label manufacturer",
    "anti-counterfeit labels",
    "flexographic printing"
  ],
  authors: [{ name: "Samyak India Private Limited" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Samyak India Private Limited | Precision B2B Label Engineering",
    description: "Fail-safe label solutions for Pharma, FMCG, Automotive, Chemical, and Electronics enterprises worldwide.",
    type: "website",
    locale: "en_IN",
    siteName: "Samyak Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Google Material Symbols Outlined stylesheet for high-precision vector iconography */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#00A8CC]/20 selection:text-slate-900 flex flex-col">
        {/* Global Scroll-Reveal Animation Observer */}
        <ScrollRevealInit />

        {/* Global Single-Instance Floating Header */}
        <Navbar />

        {/* Global Page Container */}
        <main className="min-h-screen pt-24 grow flex flex-col">
          {children}
        </main>

        {/* Global Single-Instance Footer */}
        <Footer />
      </body>
    </html>
  );
}
