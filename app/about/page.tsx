import SafeImage from "@/components/SafeImage";
import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Check,
  Factory,
  Target,
  Compass,
  ArrowRight,
  Award,
  Sparkles,
  Users,
  Building2,
  Globe2,
  Play
} from "lucide-react";

export const metadata = {
  title: "About Us | Samyak India Private Limited (Samyak Group)",
  description:
    "Learn about Samyak Group's 17+ years of engineering leadership, 30,000 sq. ft. manufacturing facility on NH4 Shirwal near Pune, our dedicated team, and our mission to provide the best solutions and services.",
};

const milestones = [
  "Established since 2009 and having an experience of more than a decade.",
  "Our speciality printing & packaging technology produces innovative Labels, Sticker, Shrink Sleeves etc required for multiple industrial applications as per customer need.",
  "We believe in innovation hence invest in R&D, new systems and product applications.",
  "Highly qualified & experienced team including Designers & skilled staff in plant.",
  "We provide end to end service which includes in-house creation of Artwork and Design to smooth execution of each order till delivery to customer.",
  "Since inception, we take ownership of consistent Quality, Execution, Service, financials and importantly understand our customers need.",
  "Corporate office at the heart of the Pune city & biggest manufacturing facility of 30000 sq ft at prime & centralized place on NH4, in a town Shirwal, near Pune.",
  "In process of getting all necessary Certifications like ISO, GMP and Total Quality Management.",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* SECTION 1 — HERO & CORPORATE OVERVIEW WITH REAL VIDEO */}
      <section className="relative pt-6 overflow-hidden scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-[#00A8CC] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT SAMYAK GROUP</span>
              </div>

              <div className="space-y-1">
                <span className="text-xl sm:text-2xl font-bold text-slate-500 font-heading block">
                  Our goal is to provide
                </span>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight font-heading">
                  the best <span className="text-[#00A8CC]">Solution</span> and <span className="text-[#0F172A]">Service</span>
                </h1>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                For more than 17 years, our expertise, experience, passion, and commitment to service in the field of labeling and packaging are unrivaled. And we do it all in-house to ensure consistent quality and smooth project delivery.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 bg-[#00A8CC] hover:bg-[#008ba8] text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-95 text-sm"
                >
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                  <span>Precision-Engineered In-House</span>
                </div>
              </div>
            </div>

            {/* Right Column: Real Corporate Video Embed */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video shadow-2xl">
                <iframe
                  className="w-full h-full object-cover rounded-3xl"
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

      {/* SECTION 2 — EXPERIENCE & EXPERTISE (INDUSTRY BENCHMARKS) WITH REAL PRESS PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card: Real Plant Machinery Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 group">
              <SafeImage className="w-full h-[380px] md:h-[500px] object-cover group-hover:scale-102 transition-transform duration-500"
                alt="Industrial continuous web flexographic label converting machine with multi-station inline printing units digital control console screen and printed foil film rolls in modern Indian packaging plant."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRteYJ5Lroo2v9lfZCj0xrLeFAe5uWqXHvhnQelm7vz5p4QtmO5iFsf4i_wvAnRugu90Cpf7cJUZh6qxItB_zwPxJdTOy_gntwVMjnlZDoHw2-YfEteKhaXGdryLh3xMif61KmqwhFdfHrAVMJihfEXH45PfSLfvaPnMuS1SeaSa-WOc7d5HTmvDv2tqs2zqGsYjKFALPNiQ6j7MD68gq5rVjOeJ9_K1ltL-n6j_jQjOS_2ZYNNYyKbju3lnJ9TmPW8w"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-cyan-300">
                    High Capacity Production
                  </p>
                  <p className="text-lg md:text-xl font-bold font-heading text-white">
                    Multi-Station Inline Press Fleet
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#00A8CC] text-white flex items-center justify-center shadow-lg">
                  <Factory className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 100% Verbatim Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#00A8CC] text-xs font-bold uppercase tracking-wider w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Industry Benchmarks</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
              A Custom Label Manufacturer with Experience &amp; Expertise
            </h2>

            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Every Design has it&apos;s Persona, far beyond colours &amp; appearance. It includes Values, Culture, what Brand stands for and Emotions that will evoke customer Desire. Researches states that, Innovative packaging draws consumer attention and ensure competitive advantage of a Brand.
              </p>
              <p>
                It is so important to ensure that the product is protected well enough to preserve it&apos;s characteristics, extend it&apos;s shelf life and encourage consumers to grab it. We, SIPL, are well equipped with innovative &amp; unique design printing &amp; packaging facility in our State-of-Art plant, to protect Brand of our valuable customers and to serve mainly Pharmaceutical, Food, Healthcare, Agro &amp; entire FMCG sector by following SOP while maintaining Quality Standards.
              </p>
              <p>
                Choosing a right Label, suitable Packaging material and perfect finishing is the wisest and most economical start to Product Brand building. We always keep ourselves updated with the latest trends in industries across the Globe and guide our customers in developing the right solution for their product.
              </p>
              <p>
                We provide the solutions having combination of multiple printing options, print processes, suitable materials, perfect finishing, specialty inks, specially designed Die Punch sizes and security features which helps our customers to differentiate their product from others on a crowded shelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CORE CAPABILITIES & MILESTONES */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
              CORE CAPABILITIES &amp; MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Foundations of Engineering Excellence
            </h2>
            <p className="text-slate-600 text-base">
              A continuous track record of technological investment, quality accreditations, and long-term customer partnerships.
            </p>
          </div>

          {/* 2-Column Grid of 8 Verbatim Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-cyan-500/50 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-50 text-[#00A8CC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider font-mono">
                    Milestone 0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    {milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PURPOSE & DIRECTION (OUR GUIDING NORTH STAR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
            PURPOSE &amp; DIRECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Guiding North Star
          </h2>
          <p className="text-slate-600 text-base">
            Anchoring our operations in uncompromising quality, relentless innovation, and collaborative partner success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* OUR VISION */}
          <div className="bg-gradient-to-br from-slate-900 to-[#1E1B4B] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-[#00A8CC] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase block">
                STRATEGIC HORIZON
              </span>
              <h3 className="text-2xl font-bold font-heading">OUR VISION</h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
                “Ultimate customer satisfaction by providing Quality Printing &amp; Packaging products, best Services &amp; solutions. Satisfaction of our associates as well.”
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-cyan-300 font-medium">
              Samyak Group Core Pillar • Quality &amp; Associate Focus
            </div>
          </div>

          {/* OUR MISSION */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-[#00A8CC] flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase block">
                OPERATIONAL COMMITMENT
              </span>
              <h3 className="text-2xl font-bold font-heading">OUR MISSION</h3>
              <ul className="space-y-3 pt-1 text-slate-200 text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC] shrink-0 mt-2" />
                  <span>
                    We are committed to Quality and Services with Value addition by keeping innovative approach.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC] shrink-0 mt-2" />
                  <span>
                    Continual Improvement in the Quality work of all associates &amp; develop a motivated team of professionals which helps to achieve desired Goal of an organization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC] shrink-0 mt-2" />
                  <span>
                    Build &amp; develop, safe &amp; high-quality products for betterment of environment.
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-cyan-300 font-medium">
              Samyak Group Core Pillar • Continual Innovation &amp; Environmental Stewardship
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — RESTORED "OUR TEAM" SECTION WITH VERBATIM TEXT & REAL GROUP PHOTO */}
      <section className="w-full py-16 bg-slate-50 border-y border-slate-200/80 overflow-visible scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Verbatim Team Narrative */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-[#00A8CC] text-xs font-bold uppercase tracking-wider w-fit">
                <Users className="w-4 h-4" />
                <span>The People Behind Precision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading uppercase">
                OUR TEAM
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Our team owns in-depth industry knowledge in manufacturing of all types of Industrial Labels and always give their best to enhance the Quality and Standard of our products. High dedication to the work takes us to the next level of success. Each member of our team is passionate to respective work and give his 100% to fulfil the task assigned. Entire team give their best contribution for ultimate goal of organization.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                  <span className="text-2xl font-black text-[#00A8CC] font-heading block">100%</span>
                  <p className="text-xs text-slate-500 font-medium mt-1">Commitment to QA SOPs</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                  <span className="text-2xl font-black text-[#0F172A] font-heading block">In-House</span>
                  <p className="text-xs text-slate-500 font-medium mt-1">Design &amp; Pre-Press Studio</p>
                </div>
              </div>
            </div>

            {/* Right Column: Actual Uploaded Team Photo */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200 group">
                <SafeImage className="w-full h-auto object-cover group-hover:scale-101 transition-transform duration-500"
                  alt="A wide group photograph of 20 Indian factory engineers, operators, and leadership staff standing proudly in a single row across a pristine white manufacturing plant floor with cyan safety floor stripes."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHECLNkp3ehQPwXLZAv0qM6ihzbVH814WgdcP3Z3tL-LYeuqJU7fRAxBV_MokUe0IGzjpx0xCF8dNO_fGJfFUicqAK-x3COvnvZmU-YsvB3YAEH5dpNMZ3CFCbAk09vbvvp3O2fO0jChQ0OZ-5eehT7UXCRbPAzYRakGzJzp-4KMS-Jb0nYPXUTqDnO1uhmhKA4r7U9TNChzwUPkkIGeIhCQShwnOaqqY7JocJw_50-clEgf_vY4LTlNiUgxE2HWl5iw"
                />
                <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC]" />
                    <span className="text-xs font-bold text-slate-800">
                      Samyak Technical Production &amp; Operational Crew at Shirwal Unit
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Pune Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — STATISTICS & TRUST SIGNALS (WITH REAL PARTNER LOGO GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 scroll-reveal">
        {/* 4 Stat Cards in a responsive row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:border-cyan-400 hover:-translate-y-1 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-[#0F172A] font-heading tracking-tight">
              15+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mt-2">
              years of experience
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:border-cyan-400 hover:-translate-y-1 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-[#0F172A] font-heading tracking-tight">
              100+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mt-2">
              enterprise clients
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:border-cyan-400 hover:-translate-y-1 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-[#0F172A] font-heading tracking-tight">
              50+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mt-2">
              label types
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs hover:border-cyan-400 hover:-translate-y-1 transition-all">
            <div className="text-4xl sm:text-5xl font-black text-[#0F172A] font-heading tracking-tight">
              8+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#00A8CC] mt-2">
              countries served
            </div>
          </div>
        </div>

        {/* Global Supply Partnerships - Actual Client Logos Image Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A8CC]">
              Global Supply Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
              Trusted by Leading Brands
            </h2>
            <p className="text-slate-600 text-sm">
              Engineering compliant, high-speed automated packaging runs for the world&apos;s most demanding enterprises.
            </p>
          </div>

          {/* Real Full Color Client Logos Display Container */}
          <div className="w-full rounded-2xl bg-white p-6 md:p-10 shadow-lg border border-slate-200/80 flex items-center justify-center overflow-hidden">
            <SafeImage className="w-full max-w-5xl h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
              alt="Grid layout of leading industrial and FMCG enterprise partner client logos including Amazon, DMart, Honeywell, Bosch, Supreme, ACG, Volkswagen, Tata Motors, Fiat, Indo Count, General Motors, Datwyler, ArcelorMittal, Haier, Karnataka Bank, POSCO, Kirloskar, DHL Express, Star Bazaar, HB Fuller, Mahindra, and Aditya Birla Group on pure white background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTYifYMaZjZl9dfYbmrmUzajnFBNTvFUSV8DS1n3JNfZlopqzgBwOocGkSQZBf7BXE91k22dW_-7k5RN2RyiW2hDZ1KGuhn1FbHwlWmGtaHBY6hfaICUZy1nSkOwQHI6jOo4ax0l6_UH24V3i1sRV-rfjhDhCYG6KcbLUWJnCHhpX5cIEpHJGFPYRShs2F32yAMkL-90InRxPxwqK0wiBI-r8Pxd9TD7EKQ9UbTNjGefmWsSXwd5cnkBPvHDDaNz2-VA"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
