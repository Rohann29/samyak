import SafeImage from "@/components/SafeImage";
import React from "react";
import Link from "next/link";
import {
  Factory,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Eye,
  Sliders,
  Settings,
  Flame,
  Award
} from "lucide-react";

export const metadata = {
  title: "Infrastructure & Technology | Samyak India Private Limited",
  description:
    "Tour Samyak Group's 30,000 sq. ft. precision manufacturing plant on NH4 Shirwal, Pune. Multi-station inline flexo presses, 100% camera inspection, in-house CTP pre-press studio, and cleanroom slitting units.",
};

const machineryFleet = [
  {
    title: "Multi-Station Inline UV Flexographic Lines",
    category: "Primary Printing Fleet",
    specs: "8 to 10 Color Stations • Web width up to 370mm • Speeds up to 150 m/min",
    description: "Equipped with chilled UV curing lamps, inline delam/relam units for reverse adhesive printing, cold foil stamping towers, rotary silkscreen integration, and dual die-cutting units.",
    highlight: "Inline Embellishment & Cold Foiling",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgOVuB8BA5KJDAqpJUfwbWZNE3qqbN_XSJ4yeKgjkg_i0gO0-RCb1Mt2b88XTh2YHtYnKTq0b2uwDEgfSzGvTud6_-SG36NUgN00I9D9meFrZT1XbXvhwkIXNH_WUXqZC4gHEo4TFlMm1H1zaPj4GFFRsvtQGDbOTFF7VC611GlUXD30ocmLoMescH4aDxLclxXRk6I0g-6UhtmfyGrm6rsbALLgsbJeyemdZHoZfsG0K1d6_mEmHayxWeavw0S65Pnw",
  },
  {
    title: "Rotary Letterpress & Intermittent Offset Presses",
    category: "High-Definition Short-to-Mid Run Fleet",
    specs: "6-Color + UV Varnish • Ultra-fine screen rulings up to 200 LPI",
    description: "Engineered for razor-sharp micro-typography, vibrant solid spot colors, and luxury cosmetic cartons requiring microscopic dot gain control and zero color shift.",
    highlight: "200 LPI High-Definition Screening",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv2gL4HKGoznXM1EV_bnLswHEe_aynYBjNj8sJyOiQXQYiZRuesrOiik6dKmtjtbZbepnfbwL1O9yPX1fCfQDO3T_Q7zvFMva2x4-ulw9PtwHz-bzjjYiQz-h0079LZvd2X3PBbfe5n2Q8CqRGjMXd_227qSeyBLOzYGH9wthgzGfWR2GdX9kZcWNG5X943TkmqGAR52jb0PxyQCwrVm-kftogBED759LJ-j-BEUSDFWb755v_eyMebUjm4-yhzCTwbA",
  },
  {
    title: "Variable Data Printing (VDP) Digital Engine",
    category: "Serialization & Smart Packaging",
    specs: "High-resolution DoD Inkjet • 600 DPI • Real-time database serialization",
    description: "Inline thermal and piezo inkjet heads jetting sequential serial numbers, randomized anti-counterfeit QR codes, GS1 DataMatrix codes, and encrypted alphanumeric scratch-off pins at full line speed.",
    highlight: "600 DPI DoD High-Speed Inkjet",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvcHThzrYCP7XojwVFr6donXEkp82DZaqrJb7rsx2_66dW1DFGTs7RIvcxU1BDQXRUKq9XP2-Ry4HyPYV9mYYqxGf-6Om6COb9N05v01ImIVLqxKCl-iqbMFaJny8hB43BRtTnvI73kH_IlypW1FaJqzOpfcXrqkpWDp3OeYz93IN7RbZcQaxCf6unFl6YPkb8235KGAJqiLV8O_c_l9_Zr56n7uMaDORekRQrzFwaf6kWQoKve_1f4i4-u4qp3bDFA",
  },
  {
    title: "100% Optical Vision Camera Inspection Units",
    category: "Quality Assurance & Slitting",
    specs: "High-speed line-scan cameras • Defect detection down to 0.05mm²",
    description: "Automated vision systems scanning 100% of the printed web in real time. Automatically halts or flags missing labels, color variations, text voids, die-strike depth defects, and unreadable barcodes.",
    highlight: "Zero-Defect Roll Guarantee",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQG7iCxU3VH7G67wOH7ju06Jfxxiq-gRBLzBEYC0CWeyy_JYeztbwU3_lA-D6zR6c-AnKhpH1SWLbyOP4gtxP5HGd45MT78X_WMSVS9zCdd8DUFawdmfeDwv1v3W_zVgpv4GawYqmbBU8-NCOFQCgxiu8LvPNvFgaAGNWLHqV3gk1tk1ceuxkqwH2aRuGG_mxpuNBhn8hHOCSgOjgceg3rgxy2ZC3KQ_kLsEJBJlItVY6uqtYUy757oqMpDzUoCDyGg",
  },
];

const plantSpecs = [
  { metric: "30,000 Sq. Ft.", label: "Facility Footprint", detail: "Purpose-built clean industrial layout on NH4 Highway, Shirwal" },
  { metric: "150 M/Min", label: "Max Press Speed", detail: "High-throughput inline multi-color UV flexography" },
  { metric: "100%", label: "Vision Inspected", detail: "Automated optical defect detection on all finishing lines" },
  { metric: "Class 100k", label: "Controlled Atmosphere", detail: "Pharma and food-grade hygiene compliant environment" },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-6 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] text-xs font-bold uppercase tracking-widest self-start">
              <Factory className="w-3.5 h-3.5" />
              <span>ADVANCED MANUFACTURING INFRASTRUCTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
              World-Class Technology &amp; <br />
              <span className="text-[#00A8CC]">Production Capabilities</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Located on NH4, Shirwal, near Pune, our 30,000 sq. ft. integrated facility unites in-house pre-press, high-speed multi-station inline printing, automated inspection, and precision finishing under one roof.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all text-sm"
              >
                Schedule Plant Audit / Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                <span>Shirwal Cleanroom Plant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Plant Facility Showcase Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group aspect-16/10">
            <SafeImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjokJYzIU1UjpF5zOrT7RfTUnJZml2wlrUhsrozK0jhg7IxAhnxuIq5p2J6dU-PjfdFCZuk8SYq6nLSDVobZnpCSNcsEHhkTKFe6RM7oI1frOO0gfHfC2Joyld9s4_V1_ZSkHznOpL_fsCaKnKCod_VYtkdDFyJJQHdcOFlQQH3k__Va1OgPXIhmcdoJ-2SaAv2kRa4JYVvVR_kL3K4mKU89F4l7ce9QYFhzIBBhqOq1fE_Z-G8Zx2SHIALvdBrpuyag"
              alt="Samyak Plant Exterior Facility"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-cyan-300">Exterior View</p>
                <h4 className="text-lg font-bold text-white font-heading">30,000 Sq. Ft. Shirwal NH4 Plant</h4>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group aspect-16/10">
            <SafeImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkVEMzNI5ciZgb8QpqE5Sl6QOxnJGYJlIPFWpDL4oVB4wcSCFhWX05GnVXXpCRJtdPwXXn3asOGBXap_T7vAK9MJtTz-Rvm5Pdw_Tbjb9eLNyxvx6dCrtMyIaGLwSasghz_Y0WGf0AwajtoL_2WPL5d56nlr9-AC8baTN9RN3KpN4aXa34T2rvyfHQ_6479fsLjs-aUlaQvx5hMrQROLh9QldfH47jrZa2z1GeYidnS86Mz46RvJGisgOj32TpecesAA"
              alt="Clean Hall and Facility Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-cyan-300">Cleanroom Standards</p>
                <h4 className="text-lg font-bold text-white font-heading">Controlled Clean Environment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {plantSpecs.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-heading">
                  {stat.metric}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Technology Breakdown with Real Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="mb-12 space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
            HARDWARE SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            State-of-the-Art Production Machinery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Engineered for high volume, tight register accuracy (±0.1mm), and rapid job changeovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {machineryFleet.map((machine, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              {machine.image && (
                <div className="h-56 w-full overflow-hidden relative">
                  <SafeImage src={machine.image}
                    alt={machine.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-900/80 text-white backdrop-blur-sm">
                      {machine.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#00A8CC] transition-colors">
                  {machine.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-mono">
                  {machine.specs}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {machine.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="text-cyan-600 font-semibold">{machine.highlight}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#00A8CC]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Visit Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-heading">
              Planning a Vendor Quality Audit?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              We welcome client technical evaluation audits at our Shirwal plant. Contact our operations team to schedule a plant walkthrough.
            </p>
          </div>
          <Link
            href="/quote#contact"
            className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold text-sm px-7 py-3.5 rounded-full shrink-0"
          >
            Contact Plant Administration
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
