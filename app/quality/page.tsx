import SafeImage from "@/components/SafeImage";
import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  FileCheck2,
  Microscope,
  Layers,
  QrCode
} from "lucide-react";

export const metadata = {
  title: "Quality & Control | Samyak India Private Limited",
  description:
    "Explore our rigorous ISO 9001:2015, GMP, and BRC packaging standards. 100% camera vision inspection, raw material testing (GSM, tack, peel, shear), and batch traceability protocols.",
};

const qualityPillars = [
  {
    title: "Standardized Quality System",
    category: "Management System",
    desc: "Comprehensive Quality Management System governed by standardized operating procedures (SOPs), statistical process control (SPC), and strict compliance audits.",
    icon: Award,
  },
  {
    title: "Good Manufacturing Practices (GMP & Cleanroom)",
    category: "Hygiene & Cleanliness",
    desc: "Rigid contamination controls for pharmaceutical and food-grade packaging. Epoxy cleanroom floors, HEPA air filtration, pest exclusion barriers, and strict employee hygiene protocols.",
    icon: ShieldCheck,
  },
  {
    title: "Raw Material Laboratory Testing",
    category: "Incoming Inward QC",
    desc: "Every master roll of paper, film, adhesive, and ink is verified before loading on press. We test substrate GSM, caliper, initial tack, 180° peel adhesion, and static shear strength.",
    icon: Microscope,
  },
  {
    title: "100% Optical In-Line Defect Inspection",
    category: "In-Process Verification",
    desc: "Computerized line-scan vision systems inspect every printed label in real-time at up to 150 m/min, detecting hickeys, color variation (ΔE > 1.5), missing text, and slitting flaws.",
    icon: Layers,
  },
  {
    title: "GS1 Barcode Grade A/B Verification",
    category: "Scannability Compliance",
    desc: "Optical barcode analyzers certify ANSI/ISO parameters including symbol contrast, modulation, defects, and decodability for 1D barcodes and 2D GS1 DataMatrix codes.",
    icon: QrCode,
  },
  {
    title: "Full Batch Traceability Protocols",
    category: "Batch Tracking",
    desc: "Complete digital records trace every finished roll back to raw material master rolls, ink lot numbers, press operator ID, and ambient temperature records with archival retain samples.",
    icon: FileCheck2,
  },
];

const labTests = [
  { test: "Substrate Grammage & Caliper", standard: "ISO 536 / TAPPI T 410", parameter: "±2% GSM & thickness tolerance" },
  { test: "Initial Tack (Rolling Ball / Loop)", standard: "FINAT FTM 9 / FTM 8", parameter: "Instant wet bond strength measurement" },
  { test: "180° & 90° Peel Adhesion", standard: "FINAT FTM 1 / FTM 2", parameter: "N/25mm peel force on stainless steel & HDPE" },
  { test: "Static Shear Resistance", standard: "FINAT FTM 8", parameter: "High-temperature creep and cohesive strength" },
  { test: "Ink Rub & Abrasion Resistance", standard: "ASTM D5264 (Sutherland)", parameter: "500+ double rubs under dry, wet & solvent" },
  { test: "Color Consistency (Spectro)", standard: "ISO 13655 / CIELAB", parameter: "Spectrophotometric Delta E < 1.5 tolerance" },
];

export default function QualityPage() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-6 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] text-xs font-bold uppercase tracking-widest self-start">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TOTAL QUALITY MANAGEMENT (TQM)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
              Uncompromising Quality &amp; <br />
              <span className="text-[#00A8CC]">Zero-Defect Standards</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              In mission-critical enterprise supply chains, a single defective label can halt an entire production line or trigger costly product recalls. That is why Samyak Group enforces zero-tolerance inspection at every phase.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all text-sm"
              >
                Request Quality Assurance Deck
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-[#00A8CC]" />
                <span>Cleanroom Standard Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Plant Facility Showcase Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group aspect-21/9 max-h-[460px]">
          <SafeImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd1NeIP5_h8WdfY7IJWdT6sLmsrpUsaiTqu0QtMi7B77xOSs3g4QntF60BUgynWe8A4HxPcmLGCqIk7mr6V2wN8cCA1jxYspZaWLkWZHa6JPsTCQJkDVnMJpIuNFxCy72UwH-K1PBfu94S82Op3pFD--DzIIzOtCrvdrocbWM0sv6AsLsRhk2CDzszIsCsfOMedi_68KWPBIv0FalpIYDHRiQLiQPXb5dMjf_XHZqRCQT_ou9T4YKLRkfUVmPFe3rUdw"
            alt="Shirwal manufacturing plant exterior"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
            <div className="text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-cyan-300">Shirwal Unit — Pune</span>
              <h3 className="text-2xl font-bold font-heading">Integrated Precision Packaging Facility</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Quality Pillars Grid with Real Machinery Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="mb-12 space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
            FOUNDATIONAL PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Our Quality Assurance Framework
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every square meter produced at our Shirwal plant is validated through strict physical, chemical, and optical parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-7 shadow-xs hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {pillar.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-slate-700">QC PROTOCOL 0{idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Laboratory Testing Benchmarks Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
              QA LABORATORY INSTRUMENTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              FINAT &amp; ASTM Standard Testing Regimen
            </h2>
            <p className="text-slate-600 text-sm">
              Conducted in our climate-conditioned testing lab (23°C ± 2°C, 50% ± 5% RH) prior to batch release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {labTests.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-600">
                    TEST #{idx + 1}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                    {test.standard}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {test.test}
                </h4>
                <p className="text-xs text-slate-500">
                  {test.parameter}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate of Analysis (COA) CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading">
              Need Certificate of Analysis (COA) with Each Shipment?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Every production lot dispatched from Samyak Group includes verified batch release documentation, GSM test records, and optical vision inspection certificates.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold text-sm px-7 py-3.5 rounded-full shrink-0"
          >
            Request Sample COA Pack
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
