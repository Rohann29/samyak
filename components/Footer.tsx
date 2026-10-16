"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pre-Footer CTA Card */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          {/* Subtle cyan glow gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> High-Performance B2B Label Engineering
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Need Reliable Label Solutions?
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Request on-press production samples, material spec charts, or our 30,000 sq. ft. plant capability deck.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto z-10">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-cyan-900/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              Request Samples
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quote#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-600 hover:border-slate-500 font-semibold text-sm px-6 py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Main Footer Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" className="h-10 md:h-12 w-auto object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Precision industrial &amp; commercial label engineering. Comprehensive self-adhesive label, shrink sleeve, and security packaging manufacturer.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                <Award className="w-3.5 h-3.5 text-[#00A8CC]" />
                <span>Cleanroom Standard</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A8CC]" />
                <span>Total Quality Management</span>
              </div>
            </div>
          </div>

          {/* 2. Industries Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              Industries We Serve
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/pharma" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Pharma Labels
                </Link>
              </li>
              <li>
                <Link href="/industries/fmcg" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  FMCG Labels
                </Link>
              </li>
              <li>
                <Link href="/industries/liquor" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Liquor Label Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries/automobile" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Automobile &amp; Industrial Labels
                </Link>
              </li>
              <li>
                <Link href="/industries/chemical" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Chemical &amp; Drum Labels (BS 5609)
                </Link>
              </li>
              <li>
                <Link href="/industries/ems" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Electronics &amp; EMS Labels
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-cyan-400 font-medium inline-flex items-center gap-1 text-xs pt-1">
                  View All Sectors <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. About Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Technology and Quality
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Quality &amp; Control
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Corporate Address:</strong>
                  <span>Samyak India Pvt Ltd, office no. 403, Ackruti Chamber, Satara Rd, Pune, Maharashtra</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">Factory Address:</strong>
                  <span>Plot No 1-3A, Chordia Industrial Park, Village Songvi(Shirwal), Tal Khandala, Dist Satara 412801</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="mailto:info@samyakgroup.com"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline font-medium text-xs"
                >
                  <Mail className="w-3.5 h-3.5" /> info@samyakgroup.com
                </a>
                <a
                  href="tel:+917219285605"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A8CC]" /> Ph: +91 72192 85605
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full transition-colors"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Samyak Group. All rights reserved. Samyak India Private Limited.</p>
          <div className="flex items-center space-x-6">
            <span>Shirwal Cleanroom Facility</span>
            <span className="hidden sm:inline">•</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
