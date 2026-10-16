"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  Package,
  Sparkles,
  Clock,
  RotateCcw,
  Factory,
  MapPin,
  ShieldCheck,
  Check
} from "lucide-react";

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialIndustry = searchParams.get("industry") || "";
  const initialFeature = searchParams.get("feature") || "";

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: initialIndustry || "pharma",
    labelFormat: "Rolls for Automatic Applicator",
    annualVolume: "200,000 - 1,000,000 units",
    specialFinishes: initialFeature ? [initialFeature] : ["Drip-Off Varnish"],
    deliveryLocation: "Pune / Mumbai / Western India",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    if (initialIndustry) {
      setFormData((prev) => ({ ...prev, industry: initialIndustry }));
    }
  }, [initialIndustry]);

  const handleFinishToggle = (finish: string) => {
    setFormData((prev) => {
      const exists = prev.specialFinishes.includes(finish);
      return {
        ...prev,
        specialFinishes: exists
          ? prev.specialFinishes.filter((item) => item !== finish)
          : [...prev.specialFinishes, finish],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `RFQ-SIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      industry: "pharma",
      labelFormat: "Rolls for Automatic Applicator",
      annualVolume: "200,000 - 1,000,000 units",
      specialFinishes: ["Drip-Off Varnish"],
      deliveryLocation: "Pune / Mumbai / Western India",
      notes: "",
    });
  };

  return (
    <div className="flex flex-col space-y-16 pb-24">
      {/* SECTION 1: SPLIT CONTACT & QUOTE FORM */}
      <section className="pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-reveal" suppressHydrationWarning>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: 40% */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] text-xs font-bold uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00A8CC] animate-pulse" />
                Technical RFQ Desk
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading leading-tight">
                For any type of project, we offer full-service solutions
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Our packaging and labeling company has the people and resources to see your project through from concept to finished product.
              </p>
            </div>

            {/* Direct Contact Links Badge */}
            <div className="bg-cyan-50 border border-cyan-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-slate-800 shadow-sm">
              <a
                href="mailto:info@samyakgroup.com"
                className="inline-flex items-center gap-2 text-[#00A8CC] hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>info@samyakgroup.com</span>
              </a>
              <span className="hidden sm:inline text-slate-300">|</span>
              <a
                href="tel:+917219285605"
                className="inline-flex items-center gap-2 text-slate-800 hover:text-[#00A8CC]"
              >
                <Phone className="w-4 h-4 text-[#00A8CC]" />
                <span>Ph: +91 72192 85605</span>
              </a>
            </div>

            {/* Corporate Address with Real Location Photo */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#00A8CC] shrink-0 font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm font-heading">
                  Corporate Address
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Samyak India Pvt Ltd, office no. 403, Ackruti Chamber, Satara Rd, Pune, Maharashtra
              </p>
              <div className="h-44 w-full rounded-xl overflow-hidden shadow-xs relative group">
                <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnOeN19_bGSTh2CIt-cOfd0gxWrCjQLKN8zvUr31m8gnNYWHv6ncYXGySOhHjOUbSgUEzh74MYTC5u82wj34I_yx3VpnQkm-Ol40nkabYthf37LJrNxkRJfpRp2WrBeKnn0WK6Vep69a2UGI_bTqTaJ9b4WjQ3ZXf47NMMpqvoR795QZR4_W7bE__ev-93LE8GyvTsHcfMVSfoOv4RmjmkmHD4m15ZQt0GOXyNxjpYh4y5WqVkizu"
                  alt="Pune Corporate HQ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-3">
                  <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold px-3 py-1 bg-slate-900/80 rounded-full backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#00A8CC]" />
                    Pune Corporate HQ
                  </span>
                </div>
              </div>
            </div>

            {/* Factory Address with Real Plant Photo */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#00A8CC] shrink-0 font-bold">
                  <Factory className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm font-heading">
                  Factory Address
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plot No 1-3A, Chordia Industrial Park, Village Songvi(Shirwal), Tal Khandala, Dist Satara 412801
              </p>
              <div className="h-44 w-full rounded-xl overflow-hidden shadow-xs relative group">
                <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU8xBqCP842uxs7TImhuMVzPPoUot1X7f9nEIYptl9iItJ9zkX-6A7inYidMTAmKfk9sdrAaqgSwfjRxld93kXXPIR1Gbs_JQH-zI5ckES5NUQXBUmz8f8PsA84Sb9eF2R8aH2jxjWVCTDYCkgVoMfPdP58YaG3dXSSkGfO_qAFF8lkyQ0sD1IhpF2A5yOiA_fmeq0byOPt5aHz_7iLBZeHjILrD9yJp6J0_7Ro2titv2bjN7UUzcV"
                  alt="Shirwal Advanced Cleanroom Plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-3">
                  <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold px-3 py-1 bg-slate-900/80 rounded-full backdrop-blur-sm">
                    <Factory className="w-3.5 h-3.5 text-[#00A8CC]" />
                    Shirwal Cleanroom Plant
                  </span>
                </div>
              </div>
            </div>

            {/* Regulatory / Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                <span>ISO Class 7 Cleanroom</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Clock className="w-4 h-4 text-[#00A8CC]" />
                <span>24h Specification Turnaround</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 60% (Interactive RFQ Form) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">
                    REQUEST RECORDED SUCCESSFULLY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                    Thank You for Contacting Samyak Group
                  </h2>
                  <p className="text-slate-600 text-sm max-w-xl mx-auto">
                    Your technical Request for Quotation (RFQ) and physical sample kit ticket has been routed to our Pune plant engineering team.
                  </p>
                </div>

                {/* Reference Ticket Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-xs text-slate-500 font-medium">Ticket Reference ID:</span>
                    <span className="text-sm font-mono font-bold text-[#00A8CC]">{ticketId}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-semibold text-slate-800">{formData.companyName || "Enterprise Partner"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-xs">
                    <span className="text-slate-500">Industry:</span>
                    <span className="font-semibold text-slate-800 uppercase">{formData.industry}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Turnaround SLA:</span>
                    <span className="font-semibold text-emerald-600">Within 4 Business Hours</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-6 py-3 rounded-full transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="mb-6 border-b border-slate-100 pb-4">
                  <h2 className="text-2xl font-bold text-slate-900 font-heading">
                    Request a Quote &amp; Samples
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your packaging specifications for an immediate quotation and customized press trial swatch kit.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Pharma Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Official Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@acme.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98220 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Industry & Label Format */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Industry Sector</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm bg-white"
                      >
                        <option value="pharma">Pharmaceutical &amp; Healthcare</option>
                        <option value="fmcg">FMCG &amp; Food Packaging</option>
                        <option value="automobile">Automobile &amp; Heavy Industrial</option>
                        <option value="chemical">Chemical &amp; Drum Labels (BS 5609)</option>
                        <option value="ecommerce">E-Commerce &amp; Logistics Barcode</option>
                        <option value="ems">Electronics &amp; EMS (Polyimide)</option>
                        <option value="liquor">Liquor &amp; Beverage</option>
                        <option value="solar">Solar &amp; Outdoor Durable</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Estimated Annual Volume</label>
                      <select
                        value={formData.annualVolume}
                        onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm bg-white"
                      >
                        <option value="Below 50,000 units">&lt; 50,000 units</option>
                        <option value="50,000 - 200,000 units">50,000 - 200,000 units</option>
                        <option value="200,000 - 1,000,000 units">200,000 - 1,000,000 units</option>
                        <option value="1,000,000 - 5,000,000 units">1,000,000 - 5,000,000 units</option>
                        <option value="5,000,000+ units">5,000,000+ units (Enterprise Contract)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Finishes Checkboxes */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Special Finishes Required:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Gold/Silver Cold Foil",
                        "Hologram for Non-Duplicacy",
                        "Drip-Off Varnish",
                        "Micro-Text Printing",
                        "Touch-Me Tactile Texture",
                        "Braille Warning Symbol",
                        "Variable QR / DataMatrix",
                        "Food-Grade Low-Migration Adhesive",
                        "BS 5609 Marine Seawater Adhesion",
                      ].map((finish) => {
                        const isChecked = formData.specialFinishes.includes(finish);
                        return (
                          <button
                            type="button"
                            key={finish}
                            onClick={() => handleFinishToggle(finish)}
                            className={`text-left text-xs p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? "bg-cyan-50/80 border-[#00A8CC] text-[#00A8CC] font-semibold"
                                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span className="truncate pr-1">{finish}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 shrink-0 text-[#00A8CC]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Project Details */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Project Specifications or Dimensions</label>
                    <textarea
                      rows={3}
                      placeholder="Specify container material (glass, HDPE, PET), label size (W x H mm), and trial sample quantity required."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#00A8CC] hover:bg-[#008ba8] text-white font-bold py-3.5 rounded-full shadow-lg shadow-cyan-900/20 transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request for Quote &amp; Sample Kit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#00A8CC] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-600">Loading B2B RFQ Portal...</p>
        </div>
      }
    >
      <QuoteFormContent />
    </Suspense>
  );
}
