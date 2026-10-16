"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Factory,
  RotateCcw,
  ChevronRight,
  Play
} from "lucide-react";
import InteractiveJar3D from "@/components/InteractiveJar3D";

// 7 Interactive finish pills technical specifications
const labelFeatures = [
  {
    id: "micro-printing",
    title: "Micro Printing for Security",
    category: "Anti-Counterfeit",
    desc: "Sub-millimeter resolution text (0.4pt) visible only under 10x magnification or optical verification, neutralizing black-market counterfeit cloning.",
    spec: "Precision Plate CTP @ 4800 DPI",
    tagPosition: "left",
  },
  {
    id: "food-adhesive",
    title: "Food Grade Adhesive",
    category: "Compliance",
    desc: "FDA 175.105 & EU 1935/2004 certified low-migration, solvent-free emulsion adhesives engineered for direct and indirect food contact packaging.",
    spec: "Certified ISO 22000 & Migration Tested",
    tagPosition: "left",
  },
  {
    id: "hologram",
    title: "Hologram for Non Duplicacy",
    category: "Brand Protection",
    desc: "High-security 2D/3D kinetic optical diffraction patterns with holographic void patterns for instant visual authenticity verification in retail supply chains.",
    spec: "Custom Origination & Tamper-Evident VOID",
    tagPosition: "left",
  },
  {
    id: "variable-printing",
    title: "Variable Printing",
    category: "Serialization",
    desc: "High-speed inkjet serialization of sequential QR codes, GS1 DataMatrix, batch numbers, and alphanumeric PINs for end-to-end track and trace.",
    spec: "100% Optical Camera Verified at 150 m/min",
    tagPosition: "left",
  },
  {
    id: "tactile-texture",
    title: "Touch Me Feel the Texture",
    category: "Tactile Finish",
    desc: "High-build screen varnishes creating tactile grip textures, sand-touch coatings, and Braille tactile warning symbols complying with EN ISO 17351.",
    spec: "UV Rotary Silk Screen up to 80µm build",
    tagPosition: "right",
  },
  {
    id: "drip-off",
    title: "Drip Off Effect",
    category: "Specialty Varnish",
    desc: "Selective contrast finish combining super-matte primer with high-gloss UV varnish in a single inline pass, generating hyper-premium visual depth.",
    spec: "Dual-coat Inline Flexo Chemistry",
    tagPosition: "right",
  },
  {
    id: "foiling",
    title: "Gold/Silver Foiling",
    category: "Luxury Embellishment",
    desc: "Ultra-sharp hot and cold foil transfers delivering mirror-finish metallic brilliance resistant to abrasion, scuffing, and condensation in humid environments.",
    spec: "Cold Foil Inline / Rotary Hot Stamping",
    tagPosition: "right",
  },
];

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(labelFeatures[0]);

  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* 1. HERO SECTION & INTERACTIVE 3D PRODUCT SHOWCASE */}
      <section className="relative overflow-hidden pt-4 pb-12 lg:pb-20 scroll-reveal">
        {/* Ambient background glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-[#00A8CC] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INNOVATIVE</span>
              <span className="w-1 h-1 rounded-full bg-[#00A8CC]" />
              <span className="text-slate-600 font-medium">ESTD. 2009</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-none font-heading">
              B2B LABELS <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#00A8CC] bg-clip-text text-transparent">
                FOR EVERY INDUSTRY
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Pharma, FMCG, IML, Electronics &amp; Industrial Security labels—delivered with precision, compliance and speed at scale from our 30,000 sq. ft. Pune facility.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95 text-sm"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 shadow-sm transition-all text-sm"
              >
                Explore Industries
              </Link>
            </div>
          </div>

          {/* Interactive 3D Packaging Showcase Container */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden backdrop-blur-sm scroll-reveal">
            {/* Top Bar inside Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] block">
                  Interactive Precision Packaging Inspector
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Samyak 3D Nutraceutical Packaging Jar Studio
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600 font-medium shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse" />
                  360° Real-time Inertia Physics
                </span>
              </div>
            </div>

            {/* Showcase Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
              {/* 3D Interactive Studio Model Viewport */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[460px]">
                <InteractiveJar3D
                  activeFeatureId={activeFeature.id}
                  onFeatureSelect={(id) => {
                    const feat = labelFeatures.find((f) => f.id === id);
                    if (feat) setActiveFeature(feat);
                  }}
                />
              </div>

              {/* Interactive Feature Pills & Active Detail Card */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Click to Inspect Label Finish &amp; Security Zones:
                </span>

                {/* 7 Clickable Interactive Pills */}
                <div className="flex flex-wrap gap-2">
                  {labelFeatures.map((feat) => {
                    const isSelected = activeFeature.id === feat.id;
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => setActiveFeature(feat)}
                        className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? "bg-[#00A8CC] text-white border-[#00A8CC] shadow-md scale-102"
                            : "bg-white text-slate-700 border-slate-200 hover:border-cyan-400 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? "bg-white" : "bg-cyan-500"
                          }`}
                        />
                        <span>{feat.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Detailed Callout Card */}
                <div className="bg-white border-2 border-cyan-500/40 rounded-2xl p-5 shadow-lg space-y-3 mt-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-50 text-[#00A8CC] border border-cyan-100 font-mono">
                      {activeFeature.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ID: {activeFeature.id}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    {activeFeature.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeFeature.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Technical Spec:</span>
                    <span className="font-semibold text-slate-800">
                      {activeFeature.spec}
                    </span>
                  </div>

                  <Link
                    href={`/quote?feature=${encodeURIComponent(activeFeature.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8CC] hover:text-[#008ba8] pt-1"
                  >
                    Request Sample with this Finish <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE PROPOSITION & SCROLLYTELLING CAPABILITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
            ENGINEERING VALUE MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Fail-Safe Label Production at Scale
          </h2>
          <p className="text-slate-600 text-base">
            Engineered to eliminate downtime on your automated packaging lines with guaranteed tolerances, adhesive strength, and zero-defect vision inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group flex flex-col justify-between scroll-reveal">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Multi-Station Inline Flexo
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Up to 10-color UV flexographic printing with inline cold foiling, rotary screen, delam/relam back printing, and dual die-cutting stations.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span>Speeds up to 150 m/min</span>
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group flex flex-col justify-between scroll-reveal">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Anti-Counterfeit Security
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Multi-layer optical security: microtext, covert UV inks, tamper-evident VOID films, destructible vinyls, and registered holographic foils.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span>Zero-Duplication Guaranteed</span>
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group flex flex-col justify-between scroll-reveal">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                High-Speed Dispensing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tear-resistant PET release liners and precision edge matrix stripping engineered for seamless application at over 600 bottles per minute.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span>Zero Line Web Breaks</span>
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group flex flex-col justify-between scroll-reveal">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                Custom Adhesive R&amp;D
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Engineered for extreme sub-zero cold chains (-40°C), oily automotive drums, low-surface-energy HDPE, and removable clean-peel surfaces.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span>Tack, Shear &amp; Peel Tested</span>
              <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE VIDEO SHOWCASE SECTION (REAL SIPL YOUTUBE VIDEO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="bg-gradient-to-br from-slate-900 via-[#1E1B4B] to-slate-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>PLANT TOUR &amp; CAPABILITY REEL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight">
                SIPL Corporate Video | <br />
                <span className="text-[#00A8CC]">Labeling Perfection</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take an inside look at our 30,000 sq. ft. precision manufacturing plant on NH4, Shirwal, near Pune. Witness our multi-station flexo printing lines, computerized vision inspection systems, and automated slitting units in continuous operation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#00A8CC] pl-3">
                  <div className="text-2xl font-bold text-white">30,000 sq.ft.</div>
                  <div className="text-xs text-slate-400">Modern Production Facility</div>
                </div>
                <div className="border-l-2 border-[#00A8CC] pl-3">
                  <div className="text-2xl font-bold text-white">100% In-House</div>
                  <div className="text-xs text-slate-400">Pre-Press to Slitting</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Explore Plant Infrastructure Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Real YouTube Corporate Video Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-video shadow-2xl">
                <iframe
                  className="w-full h-full object-cover rounded-2xl"
                  src="https://www.youtube.com/embed/maSRGmuzVrs"
                  title="SIPL Corporate Video | Labeling Perfection | Short Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUSTED BY LEADING BRANDS - FULL COLOR CLIENT LOGOS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
            GLOBAL SUPPLY PARTNERSHIPS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            Trusted by Leading Brands
          </h2>
          <p className="text-slate-600 text-sm">
            Engineering compliant, high-speed automated packaging runs for the world&apos;s most demanding enterprises.
          </p>
        </div>

        {/* Full 24 Partner Master Logos Grid from Original Source */}
        <div className="w-full rounded-2xl bg-white p-6 md:p-10 shadow-lg border border-slate-200/80 flex items-center justify-center overflow-hidden">
          <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full max-w-5xl h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
            alt="Grid layout of leading industrial and FMCG enterprise partner client logos including Amazon, DMart, Honeywell, Bosch, Supreme, ACG, Volkswagen, Tata Motors, Fiat, Indo Count, General Motors, Datwyler, ArcelorMittal, Haier, Karnataka Bank, POSCO, Kirloskar, DHL Express, Star Bazaar, HB Fuller, Mahindra, and Aditya Birla Group on pure white background."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTYifYMaZjZl9dfYbmrmUzajnFBNTvFUSV8DS1n3JNfZlopqzgBwOocGkSQZBf7BXE91k22dW_-7k5RN2RyiW2hDZ1KGuhn1FbHwlWmGtaHBY6hfaICUZy1nSkOwQHI6jOo4ax0l6_UH24V3i1sRV-rfjhDhCYG6KcbLUWJnCHhpX5cIEpHJGFPYRShs2F32yAMkL-90InRxPxwqK0wiBI-r8Pxd9TD7EKQ9UbTNjGefmWsSXwd5cnkBPvHDDaNz2-VA"
          />
        </div>


      </section>
    </div>
  );
}
