/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function EMSPage() {
  useEffect(() => {
    // 1. Highlight "Industries We Serve" navigation link in global header
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
      const href = link.getAttribute('data-path') || link.getAttribute('href');
      if (href && (href.includes('industries-we-serve') || link.textContent?.trim().toLowerCase() === 'industries we serve')) {
        link.className = 'bg-primary-container text-on-primary font-bold rounded-full px-space-md py-space-xs shadow-sm';
      }
    });

    // 2. IntersectionObserver for Scrollytelling animations
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
      
      return () => {
        revealElements.forEach(el => observer.unobserve(el));
      };
    } else {
      // Fallback for non-supporting browsers
      revealElements.forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-12');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    }
  }, []);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
            <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumb & Status Indicator Bar */}
          <div className="w-full bg-surface-canvas py-space-sm border-b-0">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-md flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-pill text-label-pill text-text-muted whitespace-normal break-words">
                <Link className="hover:text-primary transition-colors text-text-muted" href="/quote?industry=ems">Home</Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors text-text-muted" href="/quote?industry=ems">Industries We Serve</Link>
                <span className="text-outline-variant">/</span>
                <span className="text-text-primary font-bold">EMS Labels</span>
              </nav>
              <div className="inline-flex items-center gap-space-xs bg-accent-cyan-light text-primary px-space-sm py-1 rounded-full font-label-pill text-label-pill whitespace-normal break-words shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                Solder &amp; Reflow Certified
              </div>
            </div>
          </div>
          {/* Main Container Wrapper */}
          <div className="max-w-7xl mx-auto px-margin md:px-margin-md w-full flex flex-col gap-space-3xl py-space-lg">
            {/* Section 1: Industry Hero */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center transition-all duration-700 ease-out opacity-0 translate-y-12" data-scroll-reveal="">
              {/* Left Column: Copy & Actions */}
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-1.5 font-subheading-eyebrow text-subheading-eyebrow text-primary-container tracking-wider uppercase bg-accent-cyan-light px-3 py-1 rounded-full whitespace-normal break-words">
                  <span className="text-primary-container font-bold">•</span> SPECIALIZED INDUSTRY FOCUS
                </span>
                <h1 className="font-display-hero text-headline-xl md:text-display-hero text-text-primary tracking-tight mt-3 mb-4 whitespace-normal break-words">
                  EMS Labels
                </h1>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-8 whitespace-normal break-words max-w-xl">
                  Engineered for thermal precision, barcode accuracy, and full compliance readiness in extreme electronic manufacturing assembly lines.
                </p>
                {/* Actions */}
                <div className="flex flex-wrap items-center gap-space-md mb-8">
                  <Link className="inline-flex items-center gap-2 font-button-text text-button-text bg-text-primary text-on-primary px-7 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-md group whitespace-normal break-words" href="/quote?industry=ems">
                    <span className="">Request Quote</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-surface-canvas text-text-primary px-7 py-3.5 rounded-full shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] hover:bg-surface-contrast transition-all whitespace-normal break-words" href="/quote?industry=ems">
                    Get Samples
                  </Link>
                </div>
                {/* Technical Specification Pills */}
                <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-subtle text-secondary px-3.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.04)] whitespace-normal break-words">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> 300°C Lead-Free Solder Resilient
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-subtle text-secondary px-3.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.04)] whitespace-normal break-words">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> ESD &amp; Anti-Static Compliant
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-pill text-label-pill bg-surface-subtle text-secondary px-3.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.04)] whitespace-normal break-words">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> High-Density Micro Barcodes
                  </span>
                </div>
              </div>
              {/* Right Column: Visual Media with Floating Verified Badge */}
              <div className="relative group rounded-3xl overflow-hidden shadow-xl bg-surface-canvas">
                <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Detailed micro-macro view of printed circuit board with polyimide QR identification labels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwff-J216zVAqtZKMVfvp5pU1Rvupkun7Cboah9bmri0mBWJsDjJYuX8MYei3W5uXXw6XJqbDWWPTM9iat-JeOZe1PZxE9m52McHLhHvInxmU6HulB9oTQgGURV4Sxd-6kQ_llVHyFfhCktVCGXF0cD47PnghNve951fcvsDJuTYSR-Lug_XnzYA1pgctK3go9DaitX6LHUCvqjIh-Au6i7qt6pjSuCMIMwjm-SHAm1CYIUSbvPsQH" />
                </div>
                {/* Overlay Badge at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-canvas/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                    <span className="material-symbols-outlined text-[22px]">verified_user</span>
                  </div>
                  <p className="font-label-pill text-label-pill text-text-primary whitespace-normal break-words leading-snug">
                    <span className="font-bold text-primary">100% Thermal &amp; Wave Solder Resilience Guaranteed</span> — Tested for High-Density PCB Reflow
                  </p>
                </div>
              </div>
            </section>
            {/* Section 2: Technology & Quality Overview */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch transition-all duration-700 ease-out opacity-0 translate-y-12" data-scroll-reveal="">
              {/* Left Column: Specs & Layer Breakdown */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-surface-canvas rounded-3xl p-8 md:p-10 shadow-md">
                <div>
                  <span className="inline-flex items-center gap-1 font-subheading-eyebrow text-subheading-eyebrow text-primary-container tracking-wider uppercase mb-3 whitespace-normal break-words">
                    • PRECISION ELECTRONICS MANUFACTURING PERFORMANCE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold mb-4 whitespace-normal break-words">
                    Technology &amp; Quality
                  </h2>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6 whitespace-normal break-words">
                    Electronic components demand durable and highly precise labeling solutions to ensure safety, traceability, and compliance. These labels are designed to withstand extreme temperatures, chemicals, and static-sensitive environments.
                  </p>
                  {/* Key Metrics Cards Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-8">
                    <div className="p-5 rounded-2xl bg-surface-subtle shadow-sm flex flex-col justify-between">
                      <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Up to +300°C</span>
                      <span className="font-body-sm text-body-sm text-text-muted mt-1 whitespace-normal break-words">Reflow &amp; Wave Solder Tolerance</span>
                    </div>
                    <div className="p-5 rounded-2xl bg-surface-subtle shadow-sm flex flex-col justify-between">
                      <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">UL 969 &amp; RoHS</span>
                      <span className="font-body-sm text-body-sm text-text-muted mt-1 whitespace-normal break-words">Global Electronic Compliance</span>
                    </div>
                  </div>
                </div>
                {/* Layer Stack Indicator */}
                <div className="mt-4 pt-4 bg-surface-contrast/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">layers</span>
                    <span className="font-label-pill text-label-pill text-text-primary whitespace-normal break-words">Substrate Tri-Layer Architecture:</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 font-label-pill text-[11px] font-semibold text-secondary">
                    <span className="bg-surface-canvas px-2.5 py-1 rounded-full shadow-sm whitespace-normal break-words">Top Anti-Static Polyimide Coating</span>
                    <span className="text-text-muted">/</span>
                    <span className="bg-surface-canvas px-2.5 py-1 rounded-full shadow-sm whitespace-normal break-words">Thermal Transfer Ribbon Layer</span>
                    <span className="text-text-muted">/</span>
                    <span className="bg-surface-canvas px-2.5 py-1 rounded-full shadow-sm whitespace-normal break-words">High-Tack Acrylic Adhesive</span>
                  </div>
                </div>
              </div>
              {/* Right Column: SOP & Cleanroom Highlights */}
              <div className="lg:col-span-5 bg-surface-subtle rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words flex items-center gap-2">
                      <span className="text-primary-container">•</span> Highlights
                    </h3>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">engineering</span>
                  </div>
                  <ul className="flex flex-col gap-4 font-body-md text-body-md text-secondary">
                    <li className="flex items-start gap-3 whitespace-normal break-words">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-text-primary font-medium">ISO 9001 / GMP-aligned SOPs</span>
                    </li>
                    <li className="flex items-start gap-3 whitespace-normal break-words">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-text-primary font-medium">Audit ready documentation</span>
                    </li>
                    <li className="flex items-start gap-3 whitespace-normal break-words">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-text-primary font-medium">Clean room workflows</span>
                    </li>
                    <li className="flex items-start gap-3 whitespace-normal break-words">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-text-primary font-medium">Secure serialisation</span>
                    </li>
                  </ul>
                </div>
                {/* Cleanroom Protocol Badge Strip */}
                <div className="bg-surface-canvas rounded-xl p-3.5 text-xs font-semibold text-text-primary shadow-sm mt-8 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[18px]">clean_hands</span>
                  </div>
                  <span className="font-label-pill text-label-pill whitespace-normal break-words">
                    Cleanroom Protocol: Class 10,000 Anti-Static Environment
                  </span>
                </div>
              </div>
            </section>
            {/* Section 3: Types of Labels */}
            <section className="flex flex-col transition-all duration-700 ease-out opacity-0 translate-y-12" data-scroll-reveal="">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="inline-flex items-center gap-1 font-subheading-eyebrow text-subheading-eyebrow text-primary-container tracking-wider uppercase mb-2 whitespace-normal break-words">
                  • SUBSTRATE &amp; CONVERTING PORTFOLIO
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold whitespace-normal break-words">
                  Types of Labels
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-3 whitespace-normal break-words">
                  Engineered solutions tailored to printed circuit boards, control panels, wiring assemblies, and electronic enclosures.
                </p>
              </div>
              {/* 4-Card Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col justify-between bg-surface-canvas rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-surface-container mb-4">
                      <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Amber polyimide barcode label affixed to PCB under reflow testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwkpNEE3btC6EOGw8baLk_XUNpYVZ5rvZNaKbGyFnybVINRK2L46IRF05GczWaGDWKPf-FgAIVwTmwvB0XCXan5hr8JZXwC1LAgHLz3a6oPCgs3dOjbeZ2z-g2oAWosB-9ijriU46HEB72czSuu-P8vD1EX5w601erN0tG82iwzZ4HEqs86ZQpoX9r3iYbs8gLvng5FA666rWbzmO2wYQiM2EMoRUN8R8MKo_3PwR_tQ_xXH9yGcqX" />
                      <span className="absolute top-3 left-3 bg-surface-canvas/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-pill text-label-pill text-text-primary shadow-sm whitespace-normal break-words">
                        High Temperature
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words mt-1">
                      Polyimide Labels (PCB Labels)
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary leading-relaxed mt-2 whitespace-normal break-words">
                      Withstand extreme heat during soldering and reflow processes, ideal for PCB tracking and identification.
                    </p>
                  </div>
                  <div>
                    <Link className="inline-flex items-center gap-1.5 font-button-text text-button-text text-primary-container hover:text-accent-cyan-hover mt-4 font-semibold whitespace-normal break-words" href="/quote?industry=ems">
                      <span className="">Thermal Specs</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col justify-between bg-surface-canvas rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-surface-container mb-4">
                      <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Circuit and schematic wiring label on an electrical enclosure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz5LBZDLbmbudW9MgsyIJ32r1g8pUBMITw_KifHvOowVLy3XKjJaLlAr0yyprySXdAeZtkw-a7PbS1i7HUDP1DPKKuOLYkPLpeJ1_oonq-rpONx92gr1oqA8q1wBSyVOqglM3NAYgx8Ci15y9bXLGQ8e6tnyDIGh3d8sj7J3FPLYMpxZ86bzekPqtaWcL2qCEpVnMuTfj5h5Crv0SwtwbwwyefiaN8Dv6Bl3jGHn1PgCjYuA8FoaVb" />
                      <span className="absolute top-3 left-3 bg-surface-canvas/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-pill text-label-pill text-text-primary shadow-sm whitespace-normal break-words">
                        Control Panels
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words mt-1">
                      Wire Diagram Labels
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary leading-relaxed mt-2 whitespace-normal break-words">
                      Ensure precise wiring layout and easy maintenance with clear circuit and schematic labeling.
                    </p>
                  </div>
                  <div>
                    <Link className="inline-flex items-center gap-1.5 font-button-text text-button-text text-primary-container hover:text-accent-cyan-hover mt-4 font-semibold whitespace-normal break-words" href="/quote?industry=ems">
                      <span className="">Schematic Substrates</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col justify-between bg-surface-canvas rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-surface-container mb-4">
                      <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Wrap-around flag identification label securely around industrial wire harness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_InlWOSzxBVEc2Nz7ZrAGGiwnz7d1b0wVwaiJgd959a3yFzozhk1W9TLYzqRbIdjmj7Cl95pK86aI_HnYRudNOOoSTbJ49jQA8AWWy6zyrhm6OnpH1yW8VY7rtZ6vnRSBipjtGZ6H5_DAWJ_5twgmNun4UW3ahPaExIBjlYDouj9gcOjskZ1rM6FNpFkI_JTmyknMQ0cGYy1QwGUDYUUkZL8evw6b-7oMG2IR1P93SXi4Uz7-IVEG" />
                      <span className="absolute top-3 left-3 bg-surface-canvas/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-pill text-label-pill text-text-primary shadow-sm whitespace-normal break-words">
                        Cable &amp; Harness
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words mt-1">
                      Wrap-Around/ Flag Labels
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary leading-relaxed mt-2 whitespace-normal break-words">
                      Provide quick, durable identification for wires, cables, and harnesses in high-density rack modules.
                    </p>
                  </div>
                  <div>
                    <Link className="inline-flex items-center gap-1.5 font-button-text text-button-text text-primary-container hover:text-accent-cyan-hover mt-4 font-semibold whitespace-normal break-words" href="/quote?industry=ems">
                      <span className="">Harness Solutions</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col justify-between bg-surface-canvas rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="h-48 w-full rounded-2xl overflow-hidden relative bg-surface-container mb-4">
                      <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="UL-recognized high-voltage caution warning label on brushed aluminum casing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXqJbUlYhc2bkbiB2pPzdiQI6tz2c9GwuRXAfqlCHYnTDssiFFWWx9uNqZnPiQwR_VdK9sFNgfP1JtbWruXMMc9u3nFANTSN2KQKOboRvm1PfUqDXrj0Q3_ghczJbApa49-dHkfywttVZng1WpSx5KlZ2Nz4X_r_fMsPy9-fKOjjSxkCMslQ2SUFiRVAEa_oSCEZwxicUEbjrckSaCeHNyn9Br_x-Zmy_bV1DGPNVDP6FVmEhTOK8R" />
                      <span className="absolute top-3 left-3 bg-surface-canvas/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-pill text-label-pill text-text-primary shadow-sm whitespace-normal break-words">
                        Compliance &amp; Safety
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words mt-1">
                      Compliance &amp; Warning
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary leading-relaxed mt-2 whitespace-normal break-words">
                      High-visibility hazard and caution labels to meet electrical safety compliance. UL-recognized materials for global standards.
                    </p>
                  </div>
                  <div>
                    <Link className="inline-flex items-center gap-1.5 font-button-text text-button-text text-primary-container hover:text-accent-cyan-hover mt-4 font-semibold whitespace-normal break-words" href="/quote?industry=ems">
                      <span className="">UL Certification</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 4: Features (Minimalist Grid Cards) */}
            <section className="flex flex-col opacity-0 translate-y-12 transition-all duration-700 ease-out" data-scroll-reveal="">
              <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold mb-10 text-center whitespace-normal break-words">
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="p-8 text-center bg-surface-canvas shadow-md rounded-2xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined text-[32px]">local_fire_department</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words">
                    Flame Retardant
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted mt-2 whitespace-normal break-words">
                    UL 94 V-0 and VTM-0 self-extinguishing polyimide substrate rating.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="p-8 text-center bg-surface-canvas shadow-md rounded-2xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined text-[32px]">bolt</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words">
                    Anti Static
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted mt-2 whitespace-normal break-words">
                    Low-triboelectric charge release meeting ESD S20.20 requirements during peel.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="p-8 text-center bg-surface-canvas shadow-md rounded-2xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined text-[32px]">verified</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words">
                    UL Compliant
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted mt-2 whitespace-normal break-words">
                    UL 969 marking &amp; labeling systems certified for indoor/outdoor permanence.
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="p-8 text-center bg-surface-canvas shadow-md rounded-2xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container mb-4">
                    <span className="material-symbols-outlined text-[32px]">center_focus_strong</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary whitespace-normal break-words">
                    High Precision Printing
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted mt-2 whitespace-normal break-words">
                    600 DPI thermal transfer sharpness for 2 mil 2D DataMatrix tracking codes.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 6: CTA Banner */}
            <section className="w-full bg-text-primary rounded-3xl p-8 md:p-14 shadow-xl text-on-primary flex flex-col lg:flex-row items-center justify-between gap-space-xl opacity-0 translate-y-12 transition-all duration-700 ease-out" data-scroll-reveal="">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary-container tracking-wider uppercase mb-2 inline-block whitespace-normal break-words">
                  • READY TO SCALE PRODUCTION?
                </span>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight whitespace-normal break-words">
                  Need reliable label solutions?
                </h2>
                <p className="font-body-md text-body-md text-slate-300 mt-2 whitespace-normal break-words">
                  Request on-press samples, material charts, or a plant capability deck. Our technical application engineers will audit your thermal transfer specs in 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
                <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-primary-container hover:bg-accent-cyan-hover text-on-primary px-7 py-3.5 rounded-full transition-all shadow-md whitespace-normal break-words" href="/quote?industry=ems">
                  Request Samples
                </Link>
                <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-transparent hover:bg-white/10 text-on-primary px-7 py-3.5 rounded-full border-0 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all whitespace-normal break-words" href="/quote?industry=ems">
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
          </div>
  );
}