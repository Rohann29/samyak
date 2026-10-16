/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function LiquorPage() {
  useEffect(() => {
    // Set active nav class styling on 'Industries We Serve' link if present in shell
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
      if (link.getAttribute('data-path') === 'industries-we-serve' || link.textContent?.trim().toLowerCase().includes('industries')) {
        link.className = 'px-space-md py-space-xs font-button-text text-button-text bg-primary-container text-on-primary font-bold rounded-full shadow-sm transition-all';
      }
    });

    // Intersection Observer for scroll-triggered reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
            <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full whitespace-normal break-words overflow-x-hidden">
          {/* Top Breadcrumb & Status Bar */}
          <section className="w-full bg-surface-canvas py-space-sm border-b-0 shadow-sm">
            <div className="max-w-7xl mx-auto px-margin-md flex flex-wrap items-center justify-between gap-space-xs text-text-muted font-body-sm text-body-sm">
              <div className="flex items-center gap-space-xs">
                <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
                <span className="">/</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Industries We Serve</span>
                <span className="">/</span>
                <span className="text-text-primary font-semibold">Liquor Label Solutions</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-pill text-label-pill bg-accent-cyan-light px-space-sm py-0.5 rounded-full text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  Certified Ice-Bath Resilient
                </span>
              </div>
            </div>
          </section>
          {/* Section 1: Industry Hero */}
          <section className="w-full py-space-xl lg:py-space-3xl bg-surface-canvas">
            <div className="max-w-7xl mx-auto px-margin-md grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col gap-space-md scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                <div className="inline-flex items-center gap-space-xs self-start">
                  <span className="font-subheading-eyebrow text-subheading-eyebrow tracking-widest text-primary uppercase bg-surface-container px-space-md py-space-xs rounded-full">
                    • SPECIALIZED INDUSTRY FOCUS
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-text-primary font-bold tracking-tight">
                  Liquor Label Solutions
                </h1>
                <p className="font-body-lg text-body-lg text-text-muted leading-relaxed">
                  Durable, brand-focused labels maintaining clarity from bottling to consumers. Engineered with pristine resistance against cold-chain humidity, mechanical bottling friction, and ice-bucket submersion.
                </p>
                {/* CTA Actions */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <Link className="inline-flex items-center justify-center gap-space-xs bg-text-primary hover:bg-on-primary-container text-on-primary font-button-text text-button-text px-space-xl py-space-md rounded-full shadow-md hover:scale-[1.02] transition-all" href="/quote?industry=liquor">
                    Request Quote
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center gap-space-xs bg-surface-canvas hover:bg-surface-contrast text-text-primary font-button-text text-button-text px-space-xl py-space-md rounded-full shadow-sm hover:scale-[1.02] transition-all" href="/quote?industry=liquor">
                    Get Samples
                  </Link>
                </div>
                {/* Value tags */}
                <div className="flex flex-wrap items-center gap-space-xs pt-space-sm">
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-container-low text-text-primary px-space-md py-space-xs rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">water_drop</span>
                    Moisture &amp; Condensation Proof
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-container-low text-text-primary px-space-md py-space-xs rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">auto_awesome</span>
                    Luxury Foil &amp; Embossed
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-container-low text-text-primary px-space-md py-space-xs rounded-full shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">speed</span>
                    High-Speed Bottling Ready
                  </span>
                </div>
              </div>
              {/* Right Column */}
              <div className="lg:col-span-6 relative scroll-reveal transition-all duration-700 ease-out delay-150 opacity-0 translate-y-12">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-contrast group">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="High-end luxury glass spirits bottles arranged in warm studio lighting, featuring pristine tactile foil stamping and premium embossed paper labels for fine scotch, aged cognac, and wine with rich amber liquid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE9Ws9Fuwybx9xbmxZm4FdXnZ10G_Y79UpVcbPDPcgzHcgLNfNaQ9oazKRMO3zTJ_TH60xJJSmIBtdjORACjQ_eQKFGgngpLbCEKOIpnKBv6cfzafAhM5p5EL4cbUDemNGmjgSo4_0ZfOiDoVPRXXQkf2wuSgB0asUgIdaAgoPBYz9VCCsS7wv4o7vByW3H9zKZDzoGsRQO7OMxFJQ01zCmTM_L8662bAW4N-omspvPevXO4b8bRGQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-transparent to-transparent"></div>
                  {/* Overlaid floating badge */}
                  <div className="absolute bottom-space-lg left-space-lg right-space-lg bg-surface-canvas/95 backdrop-blur-md p-space-md rounded-2xl shadow-lg flex items-center gap-space-md">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[24px]">verified</span>
                    </div>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-text-primary leading-tight">100% Brand Elegance Guaranteed</p>
                      <p className="font-body-sm text-body-sm text-text-muted">Tested for Cold-Chain &amp; Ice Bucket Submersion</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Floating Accent Node */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg animate-bounce hidden sm:flex">
                  <span className="material-symbols-outlined text-[28px] rotate-45">wine_bar</span>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2: Technology & Quality Overview */}
          <section className="w-full py-space-2xl lg:py-space-3xl bg-surface-subtle">
            <div className="max-w-7xl mx-auto px-margin-md grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left Column (60%) */}
              <div className="lg:col-span-7 flex flex-col gap-space-md scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary uppercase">
                  • PREMIUM CRAFT &amp; BOTTLING PERFORMANCE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
                  Technology &amp; Quality
                </h2>
                <p className="font-body-lg text-body-lg text-text-muted leading-relaxed">
                  Crafted to reflect sophistication and brand identity, these labels are made to perform under refrigeration, moisture, and handling. Perfect for wine and liquor bottles, they maintain their beauty and legibility from bottling to the consumer's hands.
                </p>
                {/* Metric Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="bg-surface-canvas p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">ac_unit</span>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-text-primary">-20°C to +40°C</p>
                      <p className="font-body-sm text-body-sm text-text-muted">Ice Bucket &amp; Cold Tolerance</p>
                    </div>
                  </div>
                  <div className="bg-surface-canvas p-space-md rounded-2xl shadow-sm flex items-start gap-space-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">stars</span>
                    <div>
                      <p className="font-headline-sm text-headline-sm text-text-primary">Luxury Embellishment</p>
                      <p className="font-body-sm text-body-sm text-text-muted">Hot/Cold Foil &amp; Deep Embossing</p>
                    </div>
                  </div>
                </div>
                {/* Inline Visual: Substrate Multi-Layer Architecture Mini SVG */}
                <div className="mt-space-sm p-space-md bg-surface-canvas rounded-2xl shadow-sm">
                  <p className="font-label-pill text-label-pill text-text-muted mb-space-xs uppercase tracking-wider">Barrier Substrate Micro-Layer Breakdown</p>
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-semibold text-text-primary">
                    <div className="bg-accent-cyan-light text-primary py-2 px-1 rounded-lg">Top Coat / Varnish</div>
                    <div className="bg-primary-fixed text-on-primary-fixed-variant py-2 px-1 rounded-lg">Tactile Foil Layer</div>
                    <div className="bg-surface-container-high py-2 px-1 rounded-lg">Poly / Fiber Core</div>
                    <div className="bg-secondary-fixed text-on-secondary-fixed-variant py-2 px-1 rounded-lg">Hydro-Proof Adhesive</div>
                  </div>
                </div>
              </div>
              {/* Right Column (Highlights Card 40%) */}
              <div className="lg:col-span-5 scroll-reveal transition-all duration-700 ease-out delay-150 opacity-0 translate-y-12">
                <div className="bg-surface-canvas rounded-3xl p-space-xl shadow-lg flex flex-col gap-space-md relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-text-primary font-bold">• Highlights</span>
                    <span className="material-symbols-outlined text-primary-container">verified_user</span>
                  </div>
                  <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-text-primary">
                    <li className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-subtle transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                      <span className="">ISO 9001 / GMP-aligned SOPs</span>
                    </li>
                    <li className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-subtle transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                      <span className="">Audit ready documentation</span>
                    </li>
                    <li className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-subtle transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                      <span className="">Clean room workflows</span>
                    </li>
                    <li className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-subtle transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                      <span className="">Secure serialisation</span>
                    </li>
                  </ul>
                  <div className="mt-space-sm p-space-md rounded-2xl bg-surface-container flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-semibold">
                      Premium Spirits Protocol: 100% Precision Registration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 3: Types of Labels */}
          <section className="w-full py-space-2xl lg:py-space-3xl bg-surface-canvas">
            <div className="max-w-7xl mx-auto px-margin-md flex flex-col gap-space-2xl">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary uppercase">
                  • SUBSTRATE &amp; CONVERTING PORTFOLIO
                </span>
                <h2 className="font-headline-xl text-headline-xl text-text-primary font-bold">
                  Types of Labels
                </h2>
                <p className="font-body-lg text-body-lg text-text-muted">
                  Engineered solutions tailored to luxury spirits, craft breweries, and fine wines.
                </p>
              </div>
              {/* Top Row (3 Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-xl">
                {/* Card 1: Decorative labels */}
                <div className="bg-surface-subtle rounded-3xl overflow-hidden shadow-md flex flex-col group scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                  <div className="h-60 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Macro close-up detail of luxurious gold foil stamping and high-relief embossing on an artisanal grand cru wine label, showing tactile paper texture and shimmering crest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9h6Nuayfwfa6KmnB4oH3CPfsAvzSWl2SPqu_WIv9Mkxvh-DSqHd9pXXv64TqHFj1ya2RO2_PxnMU1omEeCIvDx4NsUFySgGY4jWzkFoHA8FmVPSqvDvqh0dyIbCSzrcaRSDDTfAcqjxZXdQo2SkwRTRiW9nRN1Wbdmj44eOOtS13wS1B7yTeD8CPR0mdR_I_x-6eWQGbvlVHSLkUu6EQg8rcBY373g3gjvtWcq9sKLAYkHWZ839_" />
                    <div className="absolute top-space-sm left-space-sm bg-text-primary/80 backdrop-blur-sm text-on-primary font-label-pill text-label-pill px-space-sm py-0.5 rounded-full">
                      Prestige
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-grow gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-bold">Decorative labels</h3>
                      <p className="font-body-md text-body-md text-text-muted">
                        Luxury finishes with foiling, embossing, and textured substrates that embody craftsmanship and prestige.
                      </p>
                    </div>
                    <Link className="inline-flex items-center gap-space-xs font-button-text text-button-text text-primary hover:text-accent-cyan-hover transition-colors font-semibold self-start group/btn" href="/quote?industry=liquor">
                      <span className="">Luxury Finishes</span>
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 2: Wash off labels */}
                <div className="bg-surface-subtle rounded-3xl overflow-hidden shadow-md flex flex-col group scroll-reveal transition-all duration-700 ease-out delay-100 opacity-0 translate-y-12">
                  <div className="h-60 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Clean commercial shot of a glass beer bottle under a gentle stream of warm water, with the label cleanly peeling away in one piece, recycling wash-off label concept" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIIvxCUdzwIlvwX1k3q1anF0vdfwnD9eFIXuxYldBZrKqzS8WL4fHkMRdRnpLoUdGwsOwE3ij5xLYNDNnnP4FIGljiVtlGcqIh5oidkQVntBjtqRwMC1LRo8rtoukfsSoiJ1G1de51Rln9oLBoCCo4N_xDSDUPU1MAzuPLFyw8gL5it1wW-xH6qWJRHVXwdcWkfJtdqvIBN3p1Q8tkqpzKl5ajPCfkaHg0PiTpMFQ5Lb8gn3SF3oxj" />
                    <div className="absolute top-space-sm left-space-sm bg-primary text-on-primary font-label-pill text-label-pill px-space-sm py-0.5 rounded-full">
                      Sustainable
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-grow gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-bold">Wash off labels</h3>
                      <p className="font-body-md text-body-md text-text-muted">
                        Wash-off labels are designed to be easily removed with water, allowing clean separation from containers for reuse or recycling without leaving residue.
                      </p>
                    </div>
                    <Link className="inline-flex items-center gap-space-xs font-button-text text-button-text text-primary hover:text-accent-cyan-hover transition-colors font-semibold self-start group/btn" href="/quote?industry=liquor">
                      <span className="">Eco Recycling</span>
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 3: No look / clear-on-clear labels */}
                <div className="bg-surface-subtle rounded-3xl overflow-hidden shadow-md flex flex-col group scroll-reveal transition-all duration-700 ease-out delay-200 opacity-0 translate-y-12">
                  <div className="h-60 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Close-up of a sleek, modern, clear glass vodka bottle showcasing a completely transparent, invisible clear-on-clear label that makes the printed text look painted directly onto the glass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7IerQXNpRZZfOsk-Xq0AyjGUTaHijQRvGUlAadla4CKjNI4p4Ke2Ra8EJJVxAfn2tDGnBthywI4Ru35CYqFiOSBcw5fLfhaDAaVAYoKmwtNKSJAvwIIwdyzmfud9dKIF030t7bke5V51WX5-sbrC-7LEkMpFPNDVqF-HKjxk9FnixJfWaxwu3vpogfEq-g6MPqWMyb8m4k_cjFS89RMmZ_FF95hXA_ZjGWbWk8OS04sPE7L7imNp6" />
                    <div className="absolute top-space-sm left-space-sm bg-text-primary/80 backdrop-blur-sm text-on-primary font-label-pill text-label-pill px-space-sm py-0.5 rounded-full">
                      Minimalist
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-grow gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-bold">No look / clear-on-clear labels</h3>
                      <p className="font-body-md text-body-md text-text-muted">
                        Provide a minimalist, premium glass like appearance for ultramodern bottle designs.
                      </p>
                    </div>
                    <Link className="inline-flex items-center gap-space-xs font-button-text text-button-text text-primary hover:text-accent-cyan-hover transition-colors font-semibold self-start group/btn" href="/quote?industry=liquor">
                      <span className="">Ultra-Clear Substrates</span>
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Bottom Row (2 Centered Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto w-full gap-space-xl">
                {/* Card 4: Anti counterfeit labels */}
                <div className="bg-surface-subtle rounded-3xl overflow-hidden shadow-md flex flex-col group scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                  <div className="h-60 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Macro photography of a shimmering holographic tamper-evident security strip label securing the cork neck of an expensive aged whiskey bottle, luxury spirits anti-counterfeit packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJRNzJElKtarPDiHVPo-r2K5bMTeorqpJF6dGxn0SS4KOeRHJZNz2xZ6q_m4TSb6kjzvRTVZwCL5J0AGtEep5oo8fGVrFhbR1c6Fyouypiv4jaTzXscuVxf1BsNabBx_Pz-vEF9rBWe3sQs5R1oY_Hn0lHJVjroLneXXzyw3gp9al-clDyTVO_k2FZQy7XJNJkBTYsBnInb3DRT7JtYSJG7CkItDLVDhpqdf8vwNUH60fQJRyc-ct" />
                    <div className="absolute top-space-sm left-space-sm bg-error text-on-error font-label-pill text-label-pill px-space-sm py-0.5 rounded-full">
                      Security
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-grow gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-bold">Anti counterfeit labels</h3>
                      <p className="font-body-md text-body-md text-text-muted">
                        Incorporate holograms, QR authentication or tamper-proof materials to safeguard genuine products and brand reputation.
                      </p>
                    </div>
                    <Link className="inline-flex items-center gap-space-xs font-button-text text-button-text text-primary hover:text-accent-cyan-hover transition-colors font-semibold self-start group/btn" href="/quote?industry=liquor">
                      <span className="">Brand Protection</span>
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 5: Textured/ speciality paper labels */}
                <div className="bg-surface-subtle rounded-3xl overflow-hidden shadow-md flex flex-col group scroll-reveal transition-all duration-700 ease-out delay-100 opacity-0 translate-y-12">
                  <div className="h-60 overflow-hidden relative">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Shallow depth of field shot focusing on the rough, organic texture of a thick, off-white specialty paper label applied to an artisanal craft gin bottle, studio lighting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR1ahqxm7QyGUwSQHsmnjueuGlcT_NS438vaYbSGNSPdIkQBNRda5soB7qpsRMnE4ObAV3H-L52SbtVJSp1HS8oz9CGBN3xx0ftkC9aTq0BHEKNhTW-T1VlMRRhuSlEhIq1kklWsdrfVrCnx5QG1lmMYJRYNkIuz_tNfELTx30aS5J4d7FSdyqOVlbH2kyAumm01GIl9bX6SqnbLf58zWmoK4Mhgsc78ipI8pCqXRfzFKHhRUwi_Q5" />
                    <div className="absolute top-space-sm left-space-sm bg-tertiary text-on-tertiary font-label-pill text-label-pill px-space-sm py-0.5 rounded-full">
                      Tactile
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-grow gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-md text-headline-md text-text-primary font-bold">Textured/ speciality paper labels</h3>
                      <p className="font-body-md text-body-md text-text-muted">
                        High-tactile papers that convey exclusivity and enhance bottle shelf appeal.
                      </p>
                    </div>
                    <Link className="inline-flex items-center gap-space-xs font-button-text text-button-text text-primary hover:text-accent-cyan-hover transition-colors font-semibold self-start group/btn" href="/quote?industry=liquor">
                      <span className="">Artisanal Papers</span>
                      <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: Features (Horizontal 4-card minimalist grid) */}
          <section className="w-full py-space-2xl bg-surface-contrast">
            <div className="max-w-7xl mx-auto px-margin-md flex flex-col gap-space-xl">
              <div className="text-center scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold">
                  Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                <div className="bg-surface-canvas p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-space-sm scroll-reveal duration-700 ease-out opacity-0 translate-y-12">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">handshake</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">Trusted by 50+ Brands</h3>
                  <p className="font-body-sm text-body-sm text-text-muted">Partnered with global craft distillers and high-volume breweries.</p>
                </div>
                <div className="bg-surface-canvas p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-space-sm scroll-reveal duration-700 ease-out delay-100 opacity-0 translate-y-12">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">touch_app</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">Touch and Feel Finishes</h3>
                  <p className="font-body-sm text-body-sm text-text-muted">Multi-level embossed patterns and soft-touch tactile varnishes.</p>
                </div>
                <div className="bg-surface-canvas p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-space-sm scroll-reveal duration-700 ease-out delay-200 opacity-0 translate-y-12">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">diamond</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">Premium look</h3>
                  <p className="font-body-sm text-body-sm text-text-muted">High-luster hot foiling and micro-registered screen printing.</p>
                </div>
                <div className="bg-surface-canvas p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-space-sm scroll-reveal duration-700 ease-out delay-300 opacity-0 translate-y-12">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">trending_up</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold">Value Addition</h3>
                  <p className="font-body-sm text-body-sm text-text-muted">Elevates shelf price realization and shelf standout velocity.</p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 6: CTA Banner */}
          <section className="w-full py-space-2xl bg-surface-canvas">
            <div className="max-w-7xl mx-auto px-margin-md">
              <div className="bg-text-primary text-on-primary rounded-3xl p-space-xl lg:p-space-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
                <div className="flex flex-col gap-space-xs max-w-xl text-center lg:text-left">
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary">
                    Need reliable label solutions?
                  </h2>
                  <p className="font-body-md text-body-md text-outline-variant">
                    Request on-press samples, material charts, or a plant capability deck.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-space-md shrink-0">
                  <Link className="inline-flex items-center justify-center bg-primary-container hover:bg-accent-cyan-hover text-on-primary font-button-text text-button-text px-space-xl py-space-md rounded-full shadow-md hover:scale-[1.02] transition-all" href="/quote?industry=liquor">
                    Request Samples
                  </Link>
                  <Link className="inline-flex items-center justify-center bg-transparent hover:bg-surface-canvas/10 text-on-primary font-button-text text-button-text px-space-xl py-space-md rounded-full shadow-sm hover:scale-[1.02] transition-all" href="/quote?industry=liquor">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
          </div>
  );
}