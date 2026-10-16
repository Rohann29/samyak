"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  ChevronDown,
  Menu,
  X,
  Pill,
  ShoppingBag,
  Car,
  FlaskConical,
  Package,
  Cpu,
  Wine,
  SunMedium,
  ArrowRight,
} from "lucide-react";

const industriesList = [
  {
    name: "Pharmaceutical Labels",
    href: "/industries/pharma",
    desc: "21 CFR & pharmacopoeia compliant, tamper-evident",
    icon: Pill,
  },
  {
    name: "FMCG & Food Labels",
    href: "/industries/fmcg",
    desc: "High-yield, direct food-contact & moisture proof",
    icon: ShoppingBag,
  },
  {
    name: "Automobile & Industrial",
    href: "/industries/automobile",
    desc: "UL 969 rated, high heat, oil & solvent resistant",
    icon: Car,
  },
  {
    name: "Chemical & Drum Labels",
    href: "/industries/chemical",
    desc: "GHS & BS 5609 certified marine-grade durability",
    icon: FlaskConical,
  },
  {
    name: "E-Commerce & Logistics",
    href: "/industries/ecommerce",
    desc: "High-speed direct thermal, barcode scannability",
    icon: Package,
  },
  {
    name: "Electronics & EMS",
    href: "/industries/ems",
    desc: "ESD-safe, polyimide extreme solder reflow heat",
    icon: Cpu,
  },
  {
    name: "Liquor & Beverages",
    href: "/industries/liquor",
    desc: "Embossed, cold foil, ice-bucket wet strength",
    icon: Wine,
  },
  {
    name: "Solar & Outdoor Durable",
    href: "/industries/solar",
    desc: "25-year UV stabilization & weatherized films",
    icon: SunMedium,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isNavActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Floating Pill Nav Bar */}
      <nav className="bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(15,23,42,0.08)] rounded-full px-6 py-3 flex items-center justify-between gap-4 transition-all">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Logo className="h-9 md:h-11 w-auto object-contain" />
        </div>

        {/* Center Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-700 shrink-0">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              isNavActive("/") && pathname === "/"
                ? "bg-[#00A8CC] text-white font-semibold shadow-sm"
                : "text-slate-700 hover:text-[#00A8CC] hover:bg-slate-50 font-medium"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              isNavActive("/about")
                ? "bg-[#00A8CC] text-white font-semibold shadow-sm"
                : "text-slate-700 hover:text-[#00A8CC] hover:bg-slate-50 font-medium"
            }`}
          >
            About Us
          </Link>

          {/* Industries We Serve with Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/industries"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                isNavActive("/industries")
                  ? "bg-[#00A8CC] text-white font-semibold shadow-sm"
                  : "text-slate-700 hover:text-[#00A8CC] hover:bg-slate-50 font-medium"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Industries We Serve</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                } ${isNavActive("/industries") ? "text-white" : "text-slate-400"}`}
              />
            </Link>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="col-span-2 px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Industrial Application Sectors
                  </span>
                  <Link
                    href="/industries"
                    className="text-xs font-semibold text-[#00A8CC] hover:underline flex items-center gap-1"
                  >
                    View All Hub <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {industriesList.map((ind) => {
                  const Icon = ind.icon;
                  const isActive = pathname === ind.href;
                  return (
                    <Link
                      key={ind.href}
                      href={ind.href}
                      className={`flex items-start gap-3 p-2.5 rounded-2xl transition-all ${
                        isActive
                          ? "bg-cyan-50 text-[#00A8CC] border border-cyan-200"
                          : "hover:bg-slate-50 text-slate-800 hover:text-[#00A8CC]"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl shrink-0 ${
                          isActive
                            ? "bg-[#00A8CC] text-white"
                            : "bg-slate-100 text-slate-600 group-hover:bg-[#00A8CC] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-tight">{ind.name}</span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {ind.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/infrastructure"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              isNavActive("/infrastructure")
                ? "bg-[#00A8CC] text-white font-semibold shadow-sm"
                : "text-slate-700 hover:text-[#00A8CC] hover:bg-slate-50 font-medium"
            }`}
          >
            Infrastructure &amp; Technology
          </Link>

          <Link
            href="/quality"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              isNavActive("/quality")
                ? "bg-[#00A8CC] text-white font-semibold shadow-sm"
                : "text-slate-700 hover:text-[#00A8CC] hover:bg-slate-50 font-medium"
            }`}
          >
            Quality &amp; Control
          </Link>
        </div>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/quote"
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-[#00A8CC] to-[#0284C7] hover:from-[#008ba8] hover:to-[#0369a1] text-white font-semibold px-5 py-2.5 rounded-full shadow-md shadow-cyan-500/25 transition-all whitespace-nowrap hover:scale-[1.02] active:scale-95"
          >
            Request Quote
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === "/" ? "bg-[#00A8CC] text-white font-semibold" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === "/about" ? "bg-[#00A8CC] text-white font-semibold" : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === "/industries"
                  ? "bg-[#00A8CC] text-white font-semibold"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Industries We Serve (Overview Hub)
            </Link>

            {/* Mobile Sub-industries accordion list */}
            <div className="pl-4 pr-1 py-1 grid grid-cols-1 gap-1 border-l-2 border-slate-200 ml-3">
              {industriesList.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs py-1.5 px-3 rounded-lg flex items-center justify-between transition-all ${
                    pathname === item.href
                      ? "text-[#00A8CC] font-semibold bg-cyan-50"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              ))}
            </div>

            <Link
              href="/infrastructure"
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === "/infrastructure"
                  ? "bg-[#00A8CC] text-white font-semibold"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Infrastructure &amp; Technology
            </Link>
            <Link
              href="/quality"
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                pathname === "/quality"
                  ? "bg-[#00A8CC] text-white font-semibold"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              Quality &amp; Control
            </Link>

            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/quote"
                className="w-full text-center block bg-gradient-to-r from-[#00A8CC] to-[#0284C7] hover:from-[#008ba8] hover:to-[#0369a1] text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-md shadow-cyan-500/25 transition-all"
              >
                Request Quote / Sample Kit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
