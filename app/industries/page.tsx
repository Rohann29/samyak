"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Pill,
  ShoppingBag,
  Car,
  FlaskConical,
  Package,
  Cpu,
  Wine,
  SunMedium,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  href: string;
  icon: React.ElementType;
  category: string;
  image: string;
  alt: string;
  shortDesc: string;
  compliance: string;
  materials: string;
  badge: string;
}

const industries: IndustryItem[] = [
  {
    id: "pharma",
    title: "Pharma Labels",
    href: "/industries/pharma",
    icon: Pill,
    category: "Regulated",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA32vEw9P_Qe6RCsaZuJsYRUQMbxEDnJzXE6Cqdm_gikHIgfW227ocGjh83yxj70dZIoHF9DYZcpNlukUG8U3rqfKcutEw2-XOZkwqbM95OZj-UyG2wucvt22bhjDUfwm-YpQqSx9l3Z3Wvk1JnrQgrgT6yyDIPI53ItevatKN-iy0klipD1itmxO8JdGTqtDKwaJDmLoCji3_5h-anQXR8kYjY0PJE0_z6IKnTMP4shC1p4nHiorEX",
    alt: "Photorealistic commercial macro photography of sterile pharmaceutical glass vials and medical blister packs in a cleanroom environment, clean clinical lighting, sharp focus, medical label packaging",
    shortDesc: "Tamper-proof, compliant, sterile-ready.",
    compliance: "21 CFR Part 11, US & European Pharmacopoeia, ISO 15378",
    materials: "Pharma Cast Gloss, Clear BoPP, Low-migration Acrylics",
    badge: "Sterile Cleanroom Standard",
  },
  {
    id: "fmcg",
    title: "FMCG Labels",
    href: "/industries/fmcg",
    icon: ShoppingBag,
    category: "Consumer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAapV1PX45r3g-vYvW5CAeMk70EzI90P_h8L7G3GnV0pB8gulu7D-k1ZspJAplkFnTKuKtX0laPP62CR4dSJ6PN5S2GkE407ttAq_CtrEiF1P9ClY7r-kyblgSXbISzINrs063_-bTZdJFJTnLc58x1EsV3VDs0OG29ZenmBuTLsH_q_qHy2dWyXvSisJGOIyx-c3_diLczD-bFL_4TqLQeK41y00ZSSveFZlZI53e4TydNKaDe79EA",
    alt: "Photorealistic commercial photography of vibrant packaged grocery items, jars, and food pouches sitting on a well-lit retail supermarket shelf, colorful FMCG packaging labels",
    shortDesc: "Shelf-impact with speed & scale.",
    compliance: "FDA 175.105, EU 1935/2004 Direct Food Contact",
    materials: "White PE, Clear BoPP 'No-Label' Look, Metalized Paper",
    badge: "Shelf Appeal & Moisture Safe",
  },
  {
    id: "chemical",
    title: "Chemical Label Solutions",
    href: "/industries/chemical",
    icon: FlaskConical,
    category: "Regulated",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqmwq3x8pUYunQTyvlyHeSu89ovWxXFixSQa8gw1PDl6SauH0beljVyxYzbvaxYP46t2Xn5DSgueWtyH81ZxMzjfHIsJLIgClZq8QpIOzYpxbE3yRMO7cqBi_I5BqwMr9yosWjlvZO--7Tkj-yIj-HCYCVR0XGJGugHab0EvYDa4ffLHGiuNyF1sJ_Xdut2tTtUUil8GcAX-hm9M11LZ6Zm3U4JitVMaw7oyYxUnhn__96JtrhNf-K",
    alt: "Industrial photorealism of heavy-duty blue chemical drums and metal barrels featuring durable, high-visibility GHS hazard warning labels, industrial warehouse background",
    shortDesc: "Chemical, heat & abrasion resistant.",
    compliance: "BS 5609 Section 2 & 3 Certified, GHS/CLP Compliant",
    materials: "3.2 mil Synthetic Polyolefin, Cross-linked Acrylic",
    badge: "3-Month Seawater Immersion",
  },
  {
    id: "solar",
    title: "Solar Label Solutions",
    href: "/industries/solar",
    icon: SunMedium,
    category: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRGVJ5GT3ilcqrw4T9torW1Dj0VwR5X9iN2oe66ognbj4EpsmXCVryk_d9ewrX-xI_L4DwGUu4VuVlKj7BQn4vm-exvh6p09Q0XnruYlWYc8piWOqJN7ZeCwWurN-nlj10nf8XKmrDyzIZAqPZWoutQiHr1S2pyBfs26DdxT2FqpljGe1JWzAdWUmOqeOEhYfkuHdYVP7F5ZSxZ2CIOb7FBSP0nd5fhp_r1Keq2LMT_L2LSBoEVVJP",
    alt: "Close-up photorealistic shot of sleek, dark solar panels outdoors under bright sunlight, focusing on a highly durable, weather-resistant technical specification sticker on the aluminum frame",
    shortDesc: "Chemical, heat & abrasion resistant.",
    compliance: "IEC 61215 / 61730 Durability, UL 969 Outdoor Rated",
    materials: "UV-Stabilized PVDF, Tedlar Laminates, Acrylic Adhesive",
    badge: "25-Year Outdoor Weathering",
  },
  {
    id: "ecommerce",
    title: "E-Commerce / Logistics Label Solutions",
    href: "/industries/ecommerce",
    icon: Package,
    category: "Consumer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVqaRGeDEJzutdMYuaNnIrd_SMttd01WYEu53oCpSfAi_-WMuirOeFRGpK6fcCDiR7yn_0bDJ-Ca0bHyaLS59XD5uy5bBaamRwywrdlbFeMocUkUSiFBBEOpyz3lJKgnZI08WN_war1oTgniU8PSVuk3SvXcU2ppA4MVbRDCz1d8QubUM5AsDRjBcFB_ec8YpHYfCTmNxTe8ZG-rxUnzwS25eWVosBO8TCTOfKE44bdR2hamV6lGut",
    alt: "Depth-of-field photography of stacked corrugated cardboard shipping boxes in a modern logistics warehouse, clearly displaying crisp, scannable barcode shipping labels",
    shortDesc: "Shelf impact with speed & scale.",
    compliance: "GS1 Barcode Verification, ISO/IEC 15416 Grade A/B",
    materials: "Top-coated Direct Thermal, Thermal Transfer Vellum",
    badge: "High-Speed Scan Verified",
  },
  {
    id: "automobile",
    title: "Automobile Label Solutions",
    href: "/industries/automobile",
    icon: Car,
    category: "Industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv5sZIPV5ZCKXcPzvh3qgMZhOK8jdATXjNFTiFthgdCQwntYiiTQ4nWbPXRdszD-72Pr1EEuY6lN-x1VOSv68cSeiMFcm_0Vt00xKKi73lPBIApS3zRc65Xf2KMXGpYt9nXwGhv-OGBigfCoFOVQYxuraarI-MuZ_FoBxCmtd20sOWp-INlAA1yxeHuE6lfxVHVOYnJ3HsS3Ltk-Avi2TPq_MKNGl9aQxEHnJqVybeWSuROdWYbHEq",
    alt: "Clean, industrial macro photography of a metallic car engine block featuring a high-temperature resistant, silver polyimide barcode identification label, automotive engineering",
    shortDesc: "Chemical, heat & abrasion resistant.",
    compliance: "UL 969 Component Marking, IATF 16949, REACH/RoHS",
    materials: "Matte White Polyester, Cast Vinyl, High-Tack Solvents",
    badge: "Extreme Heat up to 180°C",
  },
  {
    id: "liquor",
    title: "Liquor Label Solutions",
    href: "/industries/liquor",
    icon: Wine,
    category: "Consumer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqMTJyP-K6RfGDEovpta6Kf3wDetNg-UXZzrDdbJzuFVDpdcfXM4koYdrR93S3cxQNJBkYLqGy4p1I-crJQrO8zzYb_NxHnToo0od_s_d6O4gm5ziCX3MULq47IljfXIpam3ps8rlplKtaBzROgkcpUhJe9foeINZw0J0tgu7z23PEUJxVAUuDtdy3ca_uneOoCgD7OMduluaByqn8VFJjvl17s05kTmaLaoe0BfVeypmL3udaaMnH",
    alt: "High-end commercial photography of premium glass liquor and whiskey bottles on an elegant dark background, featuring heavily textured labels with gold foil stamping and embossed details",
    shortDesc: "Durable, brand-focused labels maintaining clarity from bottling to consumers.",
    compliance: "FSSAI Guidelines, Wet-Strength Alkaline Wash-Off",
    materials: "Felt Wet-Strength Paper, Metalized Films, Ultra-Clear BoPP",
    badge: "Ice Bucket & Condensation Safe",
  },
  {
    id: "ems",
    title: "EMS Labels",
    href: "/industries/ems",
    icon: Cpu,
    category: "Regulated",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMFpUDI_V1f8zoba7aGDwB3CjcnplAVozOsrgWjWick_wauwKQ8KKp01pwtS_82k8BXY1b6qd1Xv6Up6-F7Z5hTc3adfH_pPZ-bCsOvJgk2ko9KDwelU8Id-JtgOtefxdz2UEBnjcxs1nebB1Vbivm4MncfbGxFL17T1Wa85E3U-cvJxp4DyNo4iK-_Hgt1Sh8aKqf6Rh-hWYZ6MMTyVJebSz3h3yFEf95Eoke4gRxUSYhIcaiy2FJ",
    alt: "Ultra-macro photorealism of a green printed circuit board (PCB) featuring tiny, precision-cut polyimide QR tracking labels resisting high solder heat, electronics manufacturing",
    shortDesc: "Engineered for thermal precision, barcode accuracy, and full compliance readiness.",
    compliance: "UL 969, IPC-TM-650, Halogen-Free, RoHS & WEEE",
    materials: "Polyimide (Kapton), Anti-Static Polyimide, Polycarbonate",
    badge: "Lead-Free Reflow to 300°C",
  },
];

export default function IndustriesHubPage() {
  const [filter, setFilter] = useState("all");

  const filteredIndustries =
    filter === "all"
      ? industries
      : industries.filter((ind) => ind.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="flex flex-col space-y-16 pb-24">
      {/* Section 1: Page Header */}
      <section className="relative pt-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-4 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse"></span>
              <span>SPECIALIZED INDUSTRIAL SECTORS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
              Industries We Serve
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Innovative label solutions for regulated and high-growth sectors.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === "all"
                    ? "bg-[#00A8CC] text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Industries (8)
              </button>
              <button
                type="button"
                onClick={() => setFilter("Regulated")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === "Regulated"
                    ? "bg-[#00A8CC] text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Regulated & Compliance (Pharma, Chemical, EMS)
              </button>
              <button
                type="button"
                onClick={() => setFilter("Consumer")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === "Consumer"
                    ? "bg-[#00A8CC] text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Consumer & Retail (FMCG, Liquor, Logistics)
              </button>
              <button
                type="button"
                onClick={() => setFilter("Industrial")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === "Industrial"
                    ? "bg-[#00A8CC] text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Heavy Industrial (Automotive, Solar)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Industry Grid (3-Column Layout with Real Photography) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="scroll-reveal rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-6px_rgba(15,23,42,0.12)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col group"
              >
                {/* Real Sector Photograph */}
                <div className="h-56 w-full overflow-hidden bg-slate-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.image}
                    alt={ind.alt}
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback-label.svg";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md">
                      {ind.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold text-white px-2.5 py-1 rounded bg-[#00A8CC]/90 backdrop-blur-md shadow-sm">
                      {ind.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 font-heading">
                        {ind.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {ind.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                      <div>
                        <span className="font-semibold text-slate-800">Compliance: </span>
                        <span className="text-slate-500">{ind.compliance}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">Substrates: </span>
                        <span className="text-slate-500">{ind.materials}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 font-semibold text-sm text-[#00A8CC] hover:text-[#008ba8] group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Explore Sector Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/quote?industry=${ind.id}`}
                      className="text-xs text-slate-400 hover:text-slate-700 font-medium"
                    >
                      Sample Kit
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="scroll-reveal bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          {/* Ambient corner glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-100/50 blur-2xl pointer-events-none"></div>

          <div className="flex flex-col text-left max-w-xl z-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
              Need reliable label solutions?
            </h2>
            <p className="text-slate-600 text-base">
              Request on-press samples, material charts, or a plant capability deck.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 z-10 w-full sm:w-auto">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#00A8CC] hover:bg-[#008ba8] text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_4px_20px_-2px_rgba(14,165,233,0.35)] transition-all duration-200 hover:scale-[1.02] text-center text-sm"
            >
              Request Samples
            </Link>
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-100 text-slate-800 hover:bg-slate-200 px-8 py-3.5 rounded-full font-semibold transition-all duration-200 text-center text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
