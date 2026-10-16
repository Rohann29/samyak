/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function AutomobilePage() {
  useEffect(() => {
    // 1. Sync App Shell Nav Active State
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
      const path = link.getAttribute('data-path');
      if (path === 'industries-we-serve') {
        link.className = "bg-primary-container text-on-primary font-bold rounded-full px-space-md py-space-xs shadow-sm transition-all";
      } else {
        link.className = "px-space-sm py-space-xs font-button-text text-button-text text-on-surface-variant hover:text-on-surface transition-colors";
      }
    });

    // 2. IntersectionObserver for Scrollytelling Animations
    const revealElements = document.querySelectorAll('.scroll-reveal');
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer!.observe(el));
    } else {
      // Fallback for older browsers
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
    <div className="bg-background font-body-md text-on-surface antialiased">
            <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* SECTION 1: Industry Hero (50/50 Split Container) */}
          <section className="w-full py-16 px-margin-md max-w-7xl mx-auto scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
              {/* Left Column: Hero Text & Actions */}
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-space-xs bg-accent-cyan-light text-primary font-subheading-eyebrow text-subheading-eyebrow px-space-md py-1.5 rounded-full mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  SPECIALIZED INDUSTRY FOCUS
                </span>
                <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight leading-tight mb-4 whitespace-normal break-words">
                  Automobile Label Solutions
                </h1>
                <p className="font-body-lg text-body-lg text-text-muted font-medium mb-8 whitespace-normal break-words">
                  Chemical, heat &amp; abrasion resistant.
                </p>
                {/* Actions */}
                <div className="flex flex-wrap items-center gap-space-md">
                  <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-text-primary hover:bg-slate-800 text-on-primary px-7 py-3.5 rounded-full shadow-md transition-all gap-space-xs group" href="/quote?industry=automobile">
                    <span className="">Request Quote</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-surface-canvas text-text-primary hover:bg-surface-contrast px-7 py-3.5 rounded-full shadow-sm transition-all" href="/quote?industry=automobile">
                    Get Samples
                  </Link>
                </div>
                {/* Feature Tags */}
                <div className="flex flex-wrap items-center gap-space-md mt-6 font-body-sm text-body-sm text-text-muted font-medium">
                  <span className="inline-flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">bolt</span>
                    Under-the-Hood Certified
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">local_fire_department</span>
                    Extreme Heat &amp; Oil Resistant
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                    EU Compliant Tyre Specs
                  </span>
                </div>
              </div>
              {/* Right Column: Visual Container */}
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-2xl relative bg-surface-container-high">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-[420px] object-cover" data-alt="High angle commercial studio shot of durable automotive fluid bottles and lubricants including engine oil, coolant, brake fluid and transmission cans arranged on a brushed metal workstation with clean industrial lighting and crisp graphic labeling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6QpKYZXZtyw4BTp2uZJjOJJUefkuFWxApf5Te3n0ePQIC_d90b1nRKwfWFP0np2LhKOU-PsI4IeJuuC38WaN9GDxFypd9fFk6y9fhvsM6K2d8ID8ONlbz8BAkI7FjaezZMEz5ZYveFRSi8nnSlJwiFbnyl6vPBBJQwpKHgQLVV6pyOel7uILe8JO3Cj75bAk1a-1Hzb9PNgHU0xevMNnADRVWoIm-LX7YgNWVru0ihuvozGhSuDR3" />
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-surface-canvas/95 backdrop-blur-md p-3.5 rounded-lg shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                    </div>
                    <p className="font-label-pill text-label-pill text-text-primary leading-tight whitespace-normal break-words">
                      100% Automotive Grade Durability Guaranteed — Tested for High Temp &amp; Harsh Solvent Exposure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: Technology & Quality Overview (60/40 Split Container) */}
          <section className="w-full py-16 px-margin-md max-w-7xl mx-auto scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left Column (60% / 7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="inline-flex items-center gap-space-xs text-primary font-subheading-eyebrow text-subheading-eyebrow uppercase mb-2 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  RESILIENT AUTOMOTIVE FORMULATIONS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary mb-4 whitespace-normal break-words">
                  Technology &amp; Quality
                </h2>
                <p className="font-body-md text-body-md text-text-muted leading-relaxed mb-6 whitespace-normal break-words">
                  Automotive labels are designed to meet the industry's demanding performance standards. They withstand heat, oil, abrasion, and outdoor exposure while ensuring reliable identification, traceability, and compliance across vehicle parts and components.
                </p>
                {/* Specs Pill Cards Row */}
                <div className="flex flex-wrap sm:flex-nowrap gap-space-md w-full">
                  <div className="flex-1 bg-surface-canvas p-space-md rounded-lg shadow-md flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">thermostat</span>
                    <div>
                      <span className="block font-headline-sm text-headline-sm text-text-primary">-40°C to +150°C</span>
                      <span className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">Continuous Thermal Tolerance</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-surface-canvas p-space-md rounded-lg shadow-md flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary-container text-[24px]">verified_user</span>
                    <div>
                      <span className="block font-headline-sm text-headline-sm text-text-primary">OEM Spec</span>
                      <span className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">Automotive Tier-1 Qualified</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column (40% / 5 cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-xl p-8 bg-surface-container-low shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-headline-md text-headline-md text-text-primary">Highlights</h3>
                    <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                  </div>
                  <ul className="flex flex-col gap-space-sm mb-6">
                    <li className="flex items-center gap-3 font-body-md text-body-md text-text-primary">
                      <span className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container flex-shrink-0">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <span className="whitespace-normal break-words">ISO 9001 / GMP-aligned SOPs</span>
                    </li>
                    <li className="flex items-center gap-3 font-body-md text-body-md text-text-primary">
                      <span className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container flex-shrink-0">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <span className="whitespace-normal break-words">Audit ready documentation</span>
                    </li>
                    <li className="flex items-center gap-3 font-body-md text-body-md text-text-primary">
                      <span className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container flex-shrink-0">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <span className="whitespace-normal break-words">Clean room workflows</span>
                    </li>
                    <li className="flex items-center gap-3 font-body-md text-body-md text-text-primary">
                      <span className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container flex-shrink-0">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </span>
                      <span className="whitespace-normal break-words">Secure serialisation</span>
                    </li>
                  </ul>
                  <div className="bg-surface-canvas rounded-full px-space-md py-2.5 shadow-sm flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-label-pill text-label-pill text-text-primary font-semibold whitespace-normal break-words text-center">
                      OEM Grade Compliance: 100% Zero-Defect Inspection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: Types of Labels (Full-width grid) */}
          <section className="w-full py-16 px-margin-md max-w-7xl mx-auto scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-headline-lg text-headline-lg text-text-primary mb-3 whitespace-normal break-words">
                Types of Labels
              </h2>
              <p className="font-body-md text-body-md text-text-muted max-w-2xl whitespace-normal break-words">
                Engineered solutions tailored to withstand extreme automotive environments and long-term vehicle lifecycles.
              </p>
            </div>
            {/* Uniform Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Card 1: Tyre Labels */}
              <div className="bg-surface-canvas rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Macro close up of a brand new high performance automobile tire tread with official multi-colored EU regulatory energy efficiency and grip label adhered firmly to the rubber surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP9xDu7angxMLNV8bIpSAIymIvRnAd2kR0eUYKY_Mb2bN5xdKmTNpytcEi4koK6LqiquL0h3_dhORygvG05hYPDPdpOzo8ECX4cv0T4qFZz0_vxkPX1Hze8vccZ2J8t26zNdZ3QRlNKEd8Mq0uU8ntGUk2JMoqr-9G-UqAdT4mUiif_3pfweKmrmVmIBLgCef7VLV-1EawArbcRuQcDLp60YXpciF_72P1ROLvL1jomvMXivnWDC_f" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">Tyre Labels</h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-4 flex-1 whitespace-normal break-words">
                    (EU Compliant / Performance info) Used by manufacturers and retailers for displaying product info and tire specifications
                  </p>
                  <Link className="inline-flex items-center gap-1 font-label-pill text-label-pill text-primary-container hover:text-accent-cyan-hover mt-auto" href="/quote?industry=automobile">
                    <span className="">EU Spec Compliant</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Card 2: Battery Labels */}
              <div className="bg-surface-canvas rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Heavy duty AGM commercial automotive car battery with bold warning decals and technical ratings labels resting on a mechanic workbench inside an engineering workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZelfUr_swMgS5VDG92K1Z7Vc7arvKluqFXH97R7cHZ1xKsCU9m-GhjXH2dACNlu8GKCCVXIUbv57s8f-k91ez5AfI5dROo-oLAL6tVsrM_1zcOrilXzWTL_aEsON-sMdaDS7qIdyUZSLad2Nku2sya9A14651PykAtZI1Xco1tjRSx8VL7ZsJCbfO3qOLq0k8LjJwNwZBh2SJuCGJGQoMOdkcTjK8asL-Uv03SF9wGBGn4xE2x_fw" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">Battery Labels</h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-4 flex-1 whitespace-normal break-words">
                    Heat, chemical, and abrasion resistant labels designed to endure harsh engine environments
                  </p>
                  <Link className="inline-flex items-center gap-1 font-label-pill text-label-pill text-primary-container hover:text-accent-cyan-hover mt-auto" href="/quote?industry=automobile">
                    <span className="">Acid &amp; Heat Resistant</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Card 3: Under the Hood Labels */}
              <div className="bg-surface-canvas rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up photograph of a modern car engine cylinder head showing high heat resistant silver metallic safety warning and engine coolant specification plate label" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQbg7vlTBTTk_eu8YCivab6FyH8vvF8SWlzotkuTYKjmaqTtgd4R9r0hSTmD5pUAhiofg2tscwQqtx6kpD4Myu2v7Xn6y-nG4jdF4FOEVu4Dx69B1sz5iLlBlZtEtmzFkgEe4aXbBx4sm6BvpVJGTZNdYx4Ep_jBwmXvveJw49z_hFQl7d0QqyyhJbntlxEUGc70AyOEZpFrM1DjOT3ffKwe9kRhprufa451l6FjRsWaJbhvoudCsV" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">Under the Hood Labels</h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-4 flex-1 whitespace-normal break-words">
                    Heat and Chemical resistant labels for engine components and emission information
                  </p>
                  <Link className="inline-flex items-center gap-1 font-label-pill text-label-pill text-primary-container hover:text-accent-cyan-hover mt-auto" href="/quote?industry=automobile">
                    <span className="">Polyimide Substrates</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Card 4: Track and Trace labels */}
              <div className="bg-surface-canvas rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Industrial automotive cast steel suspension wishbone component on an assembly fixture featuring high resolution 2D DataMatrix barcode track and trace label" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp58OxiNgIkyP_nNuIi_jbI418kpUP49qHXDL_XOH1dp3BeLtDhV5WdYSuCtKrCaWAGtsFKqx8ie707k6V8Sjq_Bb5f9hlC7yBqzyY2v6LFw8IePrfwgWJ6OuK936oJlZnBEFZBwA1UIJI7h0wTkrW78X5YizLbr0u9Wu2Cfz_448Sk0KG_ENdJbF5NUwoMrF2hLsg2EoBy__y6VmVTaWQ5waYdv74DWtr9-uWM1v5GaksOswnfcSI" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">Track and Trace labels</h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed mb-4 flex-1 whitespace-normal break-words">
                    These are blank labels applied on auto parts during manufacturing with a printed barcode encoding all the necessary part details
                  </p>
                  <Link className="inline-flex items-center gap-1 font-label-pill text-label-pill text-primary-container hover:text-accent-cyan-hover mt-auto" href="/quote?industry=automobile">
                    <span className="">GS1 Traceability</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: Features (Minimalist 4-card display) */}
          <section className="w-full py-16 px-margin-md max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg text-headline-lg text-text-primary whitespace-normal break-words">
                Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Feature 1 */}
              <div className="bg-surface-canvas p-8 rounded-xl shadow-md flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">thermostat</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">
                  High Temperature and Chemical resistant
                </h4>
                <p className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">
                  Endures aggressive brake fluids, engine oils, and up to 150°C
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface-canvas p-8 rounded-xl shadow-md flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">visibility</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">
                  Long-Term Legibility
                </h4>
                <p className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">
                  High-contrast thermal transfer resin print guaranteed for vehicle lifetime
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface-canvas p-8 rounded-xl shadow-md flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">layers</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">
                  Specialized adhesives
                </h4>
                <p className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">
                  Ultra-high tack acrylic adhesives engineered for oily metals and vulcanized rubber
                </p>
              </div>
              {/* Feature 4 */}
              <div className="bg-surface-canvas p-8 rounded-xl shadow-md flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary-container text-[24px]">verified</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary mb-2 whitespace-normal break-words">
                  Regulatory Compliance
                </h4>
                <p className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">
                  Conforming to IMDS, RoHS, REACH, and global OEM labeling standards
                </p>
              </div>
            </div>
          </section>
          {/* SECTION 6: CTA Banner */}
          <section className="w-full py-12 px-margin-md max-w-7xl mx-auto mb-16 scroll-reveal transition-all duration-700 ease-out opacity-0 translate-y-12">
            <div className="rounded-xl bg-text-primary text-on-primary p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
              {/* Decorative ambient gradient */}
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col items-start relative z-10">
                <h3 className="font-headline-lg text-headline-lg text-on-primary mb-2 whitespace-normal break-words">
                  Need reliable label solutions?
                </h3>
                <p className="font-body-md text-body-md text-slate-400 whitespace-normal break-words">
                  Request on-press samples, material charts, or a plant capability deck.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md relative z-10">
                <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-primary-container hover:bg-accent-cyan-hover text-on-primary px-7 py-3.5 rounded-full shadow-lg transition-all" href="/quote?industry=automobile">
                  Request Samples
                </Link>
                <Link className="inline-flex items-center justify-center font-button-text text-button-text bg-transparent hover:bg-white/10 text-on-primary px-7 py-3.5 rounded-full transition-all" href="/quote?industry=automobile">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
          </div>
  );
}