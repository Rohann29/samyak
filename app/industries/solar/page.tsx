/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function SolarPage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el) => observer!.observe(el));
    } else {
      // Fallback
      revealElements.forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-12');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    }

    return () => {
      if (observer) {
        revealElements.forEach(el => observer!.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface">
            <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top decorative glow containment */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-accent-cyan-light/60 to-transparent blur-3xl pointer-events-none -z-10"></div>
            {/* Section 1: Industry Hero (50/50 Split) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Content */}
                <div className="lg:col-span-6 flex flex-col items-start scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan-light shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-text-primary tracking-widest uppercase">Specialized Industry Focus</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight font-bold break-words whitespace-normal leading-tight">
                    Solar Label Solutions
                  </h1>
                  <p className="font-body-lg text-body-lg text-text-muted mt-4 mb-8 break-words whitespace-normal">
                    Chemical, heat &amp; abrasion resistant.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                    <Link className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-text-primary text-on-primary font-button-text text-button-text shadow-md hover:bg-slate-800 transition-all transform hover:scale-[1.02]" data-path="request-quote" href="/quote?industry=solar">
                      <span className="">Request Quote</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                    <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-canvas text-text-primary font-button-text text-button-text shadow-sm hover:shadow-md hover:bg-surface-subtle transition-all" href="/quote?industry=solar">
                      <span className="">Get Samples</span>
                    </Link>
                  </div>
                  {/* Value bullet tags */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-primary-container text-[16px]">wb_sunny</span>
                      <span className="font-label-pill text-label-pill text-text-primary whitespace-normal">High UV &amp; Weather Resistance</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-primary-container text-[16px]">find_replace</span>
                      <span className="font-label-pill text-label-pill text-text-primary whitespace-normal">25-Year Outdoor Lifespan</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm">
                      <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                      <span className="font-label-pill text-label-pill text-text-primary whitespace-normal">UL 969 Certified</span>
                    </div>
                  </div>
                </div>
                {/* Right Column: Visual Hero Media */}
                <div className="lg:col-span-6 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 delay-150 ease-out">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Photovoltaic solar energy farm under bright daylight with industrial precision infrastructure" className="w-full h-[420px] lg:h-[480px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnHrPcalS2WHMh32RG_48axj_rMVTT_gjyji3MaqbYf3N0wAC22c2kaev5JZxOzMoaQ8ruLhghmJjQGwFmeaHOsGCbLJwnGz-XGUMV4F4b_X5shdRACh0Li6CBGnBs4Tu67k9t8L7E47ew3ZNgeXxaLpblKU2WG0_isn5q2NlTYDjloOhGnln7yUE5Rg2r9Z0jtf78V382xYJ4DTY_HFWHiNfHiFzZgHOqudulsDINoW_svG55HuxQ" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
                    {/* Overlay Floating Verification Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-canvas/95 backdrop-blur-md shadow-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary-container text-[22px]">verified_user</span>
                      </div>
                      <p className="font-label-pill text-label-pill text-text-primary whitespace-normal break-words leading-snug">
                        <span className="font-bold text-primary-container">100% UV &amp; Weather Resistance Guaranteed</span> — Tested for 25+ Years Outdoor Durability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 2: Technology & Quality Overview (60/40 Split) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                {/* Left Column: Narrative (60%) */}
                <div className="lg:col-span-7 flex flex-col justify-center scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary-container uppercase tracking-widest">Renewable Infrastructure Reliability</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight mb-5 break-words whitespace-normal">
                    Technology &amp; Quality
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed break-words whitespace-normal">
                    Solar energy systems require robust and weather resistant labeling solutions to ensure long-term durability and compliance. These labels are engineered to endure harsh outdoor conditions such as UV exposure, heat, moisture, and abrasion — providing critical identification, safety warnings, and traceability across panels, junction boxes, and inverters.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="p-4 rounded-2xl bg-surface-container-low shadow-sm flex items-center gap-3 flex-1 min-w-[200px]">
                      <span className="material-symbols-outlined text-primary-container text-[24px]">thermostat</span>
                      <div>
                        <p className="font-headline-sm text-headline-sm text-text-primary font-bold">-40°C to +150°C</p>
                        <p className="font-body-sm text-body-sm text-text-muted">Thermal Range Compliance</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-container-low shadow-sm flex items-center gap-3 flex-1 min-w-[200px]">
                      <span className="material-symbols-outlined text-primary-container text-[24px]">shield</span>
                      <div>
                        <p className="font-headline-sm text-headline-sm text-text-primary font-bold">MIL-STD 810H</p>
                        <p className="font-body-sm text-body-sm text-text-muted">Accelerated Weathering</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Column: Highlights Card (40%) */}
                <div className="lg:col-span-5 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 delay-150 ease-out flex">
                  <div className="w-full bg-surface-subtle rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-text-primary"></span>
                        <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">Highlights</h3>
                      </div>
                      <ul className="flex flex-col gap-5">
                        <li className="flex items-start gap-3.5">
                          <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-text-primary font-semibold text-[16px] leading-tight break-words whitespace-normal">ISO 9001 / GMP-aligned SOPs</span>
                            <span className="font-body-sm text-body-sm text-text-muted mt-0.5 break-words whitespace-normal">Strict quality gates ensuring zero-defect batch production.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3.5">
                          <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-text-primary font-semibold text-[16px] leading-tight break-words whitespace-normal">Audit ready documentation</span>
                            <span className="font-body-sm text-body-sm text-text-muted mt-0.5 break-words whitespace-normal">Full raw material certificates of analysis and compliance dossiers.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3.5">
                          <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-text-primary font-semibold text-[16px] leading-tight break-words whitespace-normal">Clean room workflows</span>
                            <span className="font-body-sm text-body-sm text-text-muted mt-0.5 break-words whitespace-normal">Particulate-free coating and substrate precision converting.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3.5">
                          <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-text-primary font-semibold text-[16px] leading-tight break-words whitespace-normal">Secure serialisation</span>
                            <span className="font-body-sm text-body-sm text-text-muted mt-0.5 break-words whitespace-normal">High-contrast 2D DataMatrix and barcode permanence under extreme UV.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-8 pt-6 bg-surface-canvas rounded-2xl p-4 shadow-sm flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-text-muted">Durability Rating</span>
                      <span className="font-headline-sm text-headline-sm text-primary-container font-bold">Grade-A Photovoltaic</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 3: Types of Labels (Card Grid: 3 Top, 2 Bottom) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
              <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight mb-3 break-words whitespace-normal">
                  Types of Labels
                </h2>
                <p className="font-body-lg text-body-lg text-text-muted break-words whitespace-normal">
                  Engineered solutions tailored to withstand extreme UV, high temperatures, and outdoor exposure.
                </p>
              </div>
              {/* Grid layout: 3 on top row, 2 centered on bottom row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: Branding Labels */}
                <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group scroll-reveal opacity-0 translate-y-12">
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="High durability manufacturer branding label on solar panel aluminum frame" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV3orQyJx6FkLiEB_SvtseMwZxuasdmYHmHaX-MX0upP4OldlvtN7avMYgkxvz2z8ghT_fOHCXHbnTGtC4C-EO7xcUKwsl_lY67P0Tn4RFsfI6sq-nGNJQr3W4tCiZ36jfhBxjvl6BWiY-hKVUxA_4BiOVjzo4QhAIkcsmIDbTo--R1yr2jAcAKSeF657-JcT37e9q-4yn9MEpO2WOinHD_p3EUDcdK5AE4eLyw1mWlKzm3ms-eyCL" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-primary font-label-pill text-label-pill shadow-sm">Exterior Brand</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2.5 break-words whitespace-normal">
                        Branding Labels
                      </h3>
                      <p className="font-body-md text-body-md text-text-muted break-words whitespace-normal">
                        Durable, fade-resistant graphics that maintain brand identity under harsh sunlight and environmental conditions.
                      </p>
                    </div>
                    <div className="pt-6 mt-4 flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-primary-container font-semibold">Sunlight Resistant</span>
                      <div className="w-8 h-8 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 2: UL Compliance Labels */}
                <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group scroll-reveal opacity-0 translate-y-12 delay-100">
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Silver weather-resistant UL compliance certification sticker on solar hardware" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVNQn8iRtpNDtviXy153ft4-PczXOJP30CuD6H8LnC5oh4QCWlGHtx_ce2WvnthI70AsQ8ZYYOb_Cfj4UeCINYC5-pf-3Lq68cgjeUF1mAAvAVpANW-VlhtDruWPXNEeck_US71lH3FHk-J5bi8BVoDrEVKunXReMmoasqDcprCuiA1ZVb5gicQIiwIJrr121RvtY2V2NqfpyXUcJZiXLFvIWCXxFzfM4Wb53c0PYPHJ2Gbw5bn9WB" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-primary font-label-pill text-label-pill shadow-sm">UL 969 Standard</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2.5 break-words whitespace-normal">
                        UL Compliance Labels
                      </h3>
                      <p className="font-body-md text-body-md text-text-muted break-words whitespace-normal">
                        Certified material meeting UL standards for long-term outdoor durability and safety compliance.
                      </p>
                    </div>
                    <div className="pt-6 mt-4 flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-primary-container font-semibold">Certified Safety</span>
                      <div className="w-8 h-8 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 3: Back Panel Labels */}
                <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group scroll-reveal opacity-0 translate-y-12 delay-200">
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Back of photovoltaic solar panel barcode specification label and junction box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi7gCZqShs-BkL1Gd5mHCTneg65Dgv_CnIMolKfYDmCeVq26vjNh6TuYZ9FK7H1vCoQta9Zdyc6T5O_myTPxBt9-mYVMC0PGLzEC6jTBbUk7e3T5Dap3qaKBcTZOPv88rNpDIAt6kFYwnQQ7Y7po-v-jC4FunGaCbb9y-EJhF8dXZu9Kc81SYneXXyupfg7AqQ8XtCHPkt5cNRGx9aQnGV_WQGjN_dwjR9K2W4imuAplnrWqXuYZ-J" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-primary font-label-pill text-label-pill shadow-sm">Module Specs</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2.5 break-words whitespace-normal">
                        Back Panel Labels
                      </h3>
                      <p className="font-body-md text-body-md text-text-muted break-words whitespace-normal">
                        High UV and weather resistant labels that provide system data and installation details on solar modules.
                      </p>
                    </div>
                    <div className="pt-6 mt-4 flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-primary-container font-semibold">Technical Specs</span>
                      <div className="w-8 h-8 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom row: 2 centered cards with wider span on large viewports */}
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mt-8">
                {/* Card 4: Asset Tracking */}
                <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group scroll-reveal opacity-0 translate-y-12">
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Durable QR code asset tracking sticker on heavy-duty outdoor solar power inverter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG_9_TQqvH_NjSB4xVDCR8VXy5l1gz6G3DXWPNYD7WpW2VVJg45i0yBOfhC6HO43uB2jyq_RdaPGo6Z0C3NuNoZJHb8zOauO_VIXmRrP4qaInO8p8fJzPzpZPrvArC528yo32ruRngcYQddrFippr0pLTeIy80hIMv978F3I16lYT7VjVd6SU-IhJqEfIFhhRgjz3mvq43dOsU0VJ4OaKjO6BmCAM20aX6_SE1R7bfHVeghTqHyOa3" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-primary font-label-pill text-label-pill shadow-sm">Inverters &amp; Modules</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2.5 break-words whitespace-normal">
                        Asset Tracking and maintenance record labels
                      </h3>
                      <p className="font-body-md text-body-md text-text-muted break-words whitespace-normal">
                        Labels for module, inverters and equipment traceability and information storing purpose.
                      </p>
                    </div>
                    <div className="pt-6 mt-4 flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-primary-container font-semibold">Lifetime Serialisation</span>
                      <div className="w-8 h-8 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card 5: Cable Route Markers */}
                <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group scroll-reveal opacity-0 translate-y-12 delay-100">
                  <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Macro shot of wrap-around wire markers attached to black photovoltaic solar power cables" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgKk7eW785Kh-WaIL7Ov_cM7O00ePdBml3SY7uTwawCeRTOR89UZoHeweN9_Xe7egolTTraH1sVgyZ_8ejWwAOIMS3p6kXk0s3cRLXa-PVM1la7WyE56_KcYXBK3_iS755o5m3iGp5tiDe41rjom6GgxIMJiUTj9dco2Jc9aMYXMFMdBRwNF54Csp3pLqosz6T5dycu6Nwp6xd0zlFz7jyNp7mRJypExN7kU5EjMhs_rNIhTNj7Ror" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-surface-canvas/90 backdrop-blur-sm text-text-primary font-label-pill text-label-pill shadow-sm">Cable &amp; Harness</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2.5 break-words whitespace-normal">
                        Cable Route Markers / Wrap-around Labels and maintenance
                      </h3>
                      <p className="font-body-md text-body-md text-text-muted break-words whitespace-normal">
                        Provide quick, durable identification for wires, cables, and harnesses.
                      </p>
                    </div>
                    <div className="pt-6 mt-4 flex items-center justify-between">
                      <span className="font-label-pill text-label-pill text-primary-container font-semibold">High-Tack Wrap</span>
                      <div className="w-8 h-8 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 4: Features */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
              <div className="text-center max-w-xl mx-auto mb-10 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight break-words whitespace-normal">
                  Features
                </h2>
              </div>
              {/* 4 Uniformly Sized Minimalist Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">wb_sunny</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary font-semibold break-words whitespace-normal">
                    High UV Resistant
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted mt-1 break-words whitespace-normal">Tested against prolonged photodegradation</span>
                </div>
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">visibility</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary font-semibold break-words whitespace-normal">
                    Long-Term Legibility
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted mt-1 break-words whitespace-normal">High-contrast thermal transfer inks</span>
                </div>
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">policy</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary font-semibold break-words whitespace-normal">
                    Regulatory Compliance
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted mt-1 break-words whitespace-normal">Conforming to UL 969 &amp; IEC standards</span>
                </div>
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">storm</span>
                  </div>
                  <span className="font-headline-sm text-headline-sm text-text-primary font-semibold break-words whitespace-normal">
                    Weather and Environmental Resistance
                  </span>
                  <span className="font-body-sm text-body-sm text-text-muted mt-1 break-words whitespace-normal">Immune to moisture, hail, and extreme sand</span>
                </div>
              </div>
            </section>
            {/* Section 6: CTA Banner */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full mb-12 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out" id="samples-overview">
              <div className="w-full bg-surface-subtle rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="max-w-2xl flex flex-col text-center lg:text-left">
                  <h3 className="font-headline-md text-headline-md text-text-primary font-bold mb-2 break-words whitespace-normal">
                    Need reliable label solutions?
                  </h3>
                  <p className="font-body-md text-body-md text-secondary break-words whitespace-normal">
                    Request on-press samples, material charts, or a plant capability deck.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container text-on-primary font-button-text text-button-text font-semibold hover:bg-accent-cyan-hover transition-all shadow-sm hover:scale-[1.02]" data-path="request-samples" href="/quote?industry=solar">
                    Request Samples
                  </Link>
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-canvas text-text-primary font-button-text text-button-text font-semibold hover:bg-surface-container-high transition-all shadow-sm" data-path="contact-us" href="/quote?industry=solar">
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
          </div>
  );
}