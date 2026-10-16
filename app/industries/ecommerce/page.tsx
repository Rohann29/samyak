/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function EcommercePage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    };

    let observer: IntersectionObserver | null = null;
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      revealElements.forEach(el => {
        observer!.observe(el);
      });
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
    <div className="bg-surface font-body-md text-on-surface antialiased">
            <main className="w-full pt-20 max-w-7xl mx-auto px-4 lg:px-space-2xl min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 1: INDUSTRY HERO */}
          <section className="reveal-on-scroll transition-all duration-700 ease-out pt-6 pb-space-2xl opacity-0 translate-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-6 flex flex-col items-start gap-5">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan-light text-primary-container font-label-pill text-label-pill shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  <span className="">SPECIALIZED INDUSTRY FOCUS</span>
                </div>
                {/* H1 */}
                <h1 className="font-headline-xl text-headline-xl text-text-primary whitespace-normal break-words tracking-tight">
                  E-Commerce / Logistics Label Solutions
                </h1>
                {/* Subtitle */}
                <p className="font-body-lg text-body-lg text-text-muted whitespace-normal break-words max-w-xl">
                  Shelf impact with speed &amp; scale.
                </p>
                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link className="inline-flex items-center justify-center bg-text-primary hover:bg-slate-900 text-on-primary font-button-text text-button-text px-7 py-3 rounded-full shadow-md transition-all hover:scale-[1.02]" data-path="request-quote" href="/quote?industry=ecommerce">
                    Request Quote <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center bg-surface-canvas text-text-primary font-button-text text-button-text px-7 py-3 rounded-full shadow-sm hover:bg-surface-container-low transition-all" href="/quote?industry=ecommerce">
                    Get Samples
                  </Link>
                </div>
                {/* Spec Pills */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-canvas shadow-sm text-text-primary font-label-pill text-label-pill">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">savings</span>
                    Ultra Cost-Effective
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-canvas shadow-sm text-text-primary font-label-pill text-label-pill">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">speed</span>
                    High-Speed Thermal Dispensing
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-canvas shadow-sm text-text-primary font-label-pill text-label-pill">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">verified_user</span>
                    Tamper-Proof Traceability
                  </span>
                </div>
              </div>
              {/* Right Column: Warehouse Logistics Media */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-surface-canvas">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="w-full h-[400px] lg:h-[460px] object-cover object-center" data-alt="Commercial photograph showing automated conveyor belt transporting corrugated cardboard shipping cartons with high resolution barcode and QR code logistics labels in a modern fulfillment facility with high ceilings and industrial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmTc0pGZY-aMrSWsdVPoaExoyZpSu5rP6GppTURYNaMEdNv2lH__2T1xseAJipG3WxBjEpGozz1TEx74xDJA444XYuPHK8pzDOeJ_FfDKlYjWm_X5zDpU3TzGQOshZhmsmGSWDgnGtYT0mmnXkjt9f1it5ANbpfiS4XcvNsEodQ5a-KAPzDsBs8SyulMvlL9BqKCsJUxEXx11aSHp1dNPBCrhzs-ZntpptD2UJ_9QZq97NK0x7uO9" />
                  {/* Overlaid verified badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-surface-canvas/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                      <span className="material-symbols-outlined text-[22px]">qr_code_scanner</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-headline-sm text-button-text text-text-primary font-semibold whitespace-normal break-words">
                        100% Barcode Scannability Guaranteed
                      </p>
                      <p className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">
                        High-Speed Automated Fulfillment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: TECHNOLOGY & QUALITY OVERVIEW */}
          <section className="reveal-on-scroll transition-all duration-700 ease-out py-space-xl opacity-0 translate-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column (60%): Description & Specs */}
              <div className="lg:col-span-7 flex flex-col justify-center gap-5 bg-surface-canvas rounded-3xl p-8 lg:p-10 shadow-md">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-text-muted font-label-pill text-label-pill w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  HIGH-VOLUME FULFILLMENT RELIABILITY
                </div>
                <h2 className="font-headline-lg text-headline-lg text-text-primary whitespace-normal break-words">
                  Technology &amp; Quality
                </h2>
                <p className="font-body-md text-body-md text-text-muted leading-relaxed whitespace-normal break-words">
                  E-commerce, Quick commerce and Food Delivery sector requires labels for various purposes like identification, storing information and preventing tampering with the shipment. Labels are designed to be ultra cost effective due to the large volumes while maintaining quality.
                </p>
                {/* Spec Badges Row */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-subtle text-text-primary font-button-text text-button-text shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">print</span>
                    Variable Data Thermal Printing
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-subtle text-text-primary font-button-text text-button-text shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">bolt</span>
                    Instant-Tack Hot Melt Adhesives
                  </div>
                </div>
              </div>
              {/* Right Column (40%): Highlights Card */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low rounded-3xl p-8 lg:p-10 shadow-sm">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-text-primary whitespace-normal break-words">
                      • Highlights
                    </h3>
                    <span className="material-symbols-outlined text-primary-container">verified</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span className="font-body-md text-body-md text-text-primary font-medium whitespace-normal break-words">ISO 9001 / GMP-aligned SOPs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span className="font-body-md text-body-md text-text-primary font-medium whitespace-normal break-words">Audit ready documentation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span className="font-body-md text-body-md text-text-primary font-medium whitespace-normal break-words">Clean room workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent-cyan-light flex items-center justify-center flex-shrink-0 text-primary-container">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <span className="font-body-md text-body-md text-text-primary font-medium whitespace-normal break-words">Secure serialisation</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6">
                  <div className="flex items-center justify-between bg-surface-canvas rounded-full px-5 py-3 shadow-sm">
                    <span className="font-label-pill text-label-pill text-text-muted uppercase">Throughput Rating</span>
                    <span className="font-button-text text-button-text text-primary-container font-bold">500,000+ Units/Day</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: TYPES OF LABELS (CARD GRID) */}
          <section className="reveal-on-scroll transition-all duration-700 ease-out py-space-xl opacity-0 translate-y-12">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-headline-lg text-headline-lg text-text-primary whitespace-normal break-words">
                Types of Labels
              </h2>
              <p className="font-body-md text-body-md text-text-muted mt-2 whitespace-normal break-words">
                Engineered solutions tailored to high-volume shipping, quick commerce, and food delivery packaging.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Shipper Labels */}
              <div className="flex flex-col bg-surface-canvas rounded-3xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-56 w-full overflow-hidden bg-surface-container-high">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Close-up photorealistic shot of a large thermal printed shipping label with barcodes and QR codes affixed to a brown shipping carton in a logistics sorting center." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHnX1PhEupNpB5-UH7r-F3MAbIbwKt_29v2h6O3ZxHq8nKHxufGr9XaC55_1MLjMcTaSSsiAgnDL8oQNX4rgWtNRTUv-hCTot3HjxFnjsJR7VOWPRaQ6YudPD8EffbuqkZR-W2HUhebJf-aeAdvPESRuwXGOY048M6J4p_exwmtXpWFJU35GNEXperjazXVHW40wSEXVkqgB07rA9ist8H66uoens8QF38AckVEwC2taRiGjBJDhT" />
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2.5">
                    <span className="inline-flex w-fit px-3 py-1 rounded-full bg-accent-cyan-light text-primary-container font-label-pill text-label-pill">
                      Logistics &amp; Cartons
                    </span>
                    <h3 className="font-headline-md text-headline-md text-text-primary whitespace-normal break-words">
                      Shipper Labels
                    </h3>
                    <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words leading-relaxed">
                      Durable logistics labels designed for cartons and bulk packaging - ensuring clear identification, traceability, and smooth handling across the supply chain
                    </p>
                  </div>
                  <Link className="inline-flex items-center text-primary-container font-button-text text-button-text font-semibold hover:text-accent-cyan-hover transition-colors pt-2" href="/quote?industry=ecommerce">
                    Thermal Printing <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Card 2: Tamper Evident Seal Labels */}
              <div className="flex flex-col bg-surface-canvas rounded-3xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-56 w-full overflow-hidden bg-surface-container-high">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Macro photography of a branded, destructible paper tamper-evident seal securing a brown paper food delivery bag on a wooden table, emphasizing food safety and parcel security." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApuIP6Zj5Ts4LFv27kC12wZM7cZb88Hyslcwo7QxvJBIHbzne-bq6v7DnuZ0MRjNPow37HruyC6z7oM_VtMfPsUW-N_uB6Rb09QwoD0Qac3x-iRZQWu0xMaqy8qBNi_bfc4-dgPZEsK0XWHSSl5MN6NNe1g3GeyODHwuLrHtK8__3eRUuk1niqzsE8nK3b0LJdXEc6yc4DhawxjD0qQRb4FgBIhvaBz6-uVbrr991QfoRcX0TTSAp4" />
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2.5">
                    <span className="inline-flex w-fit px-3 py-1 rounded-full bg-accent-cyan-light text-primary-container font-label-pill text-label-pill">
                      Anti-Tamper &amp; Security
                    </span>
                    <h3 className="font-headline-md text-headline-md text-text-primary whitespace-normal break-words">
                      Tamper Evident Seal Labels
                    </h3>
                    <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words leading-relaxed">
                      Security labels that reveal visible signs of tampering - protecting product integrity and building consumer trust at every touchpoint
                    </p>
                  </div>
                  <Link className="inline-flex items-center text-primary-container font-button-text text-button-text font-semibold hover:text-accent-cyan-hover transition-colors pt-2" href="/quote?industry=ecommerce">
                    Security Features <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Card 3: Custom Branding Labels */}
              <div className="flex flex-col bg-surface-canvas rounded-3xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-56 w-full overflow-hidden bg-surface-container-high">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" data-alt="Commercial photography of fresh grocery produce wrapped in sustainable transparent packaging with a clean, brightly colored custom branding label displayed in a store aisle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbmiMbMlNb1TcP8CJs3H4k8Ad04HoozbEKVr4zOeFxvCqxDwWkPodd2FZJbjB7b8MgUoHIlfchTV8UROW0cy46AdNz6MLI45Ywk1njBHYNIfEINEcbb77QdWTzS0MCdujZUfvS2YNUQwBhCL2uenzVS4mYki9_eawAw3lFL99gzN_HO6Hcce6ZWP7I_G9fQJ2F8WtMq_NyF8FZkMHsOT6W2WrEHSsmu1sEvVxfgJfHNugAu5RHHOCX" />
                </div>
                <div className="p-6 lg:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2.5">
                    <span className="inline-flex w-fit px-3 py-1 rounded-full bg-accent-cyan-light text-primary-container font-label-pill text-label-pill">
                      Quick Commerce &amp; Retail
                    </span>
                    <h3 className="font-headline-md text-headline-md text-text-primary whitespace-normal break-words">
                      Custom Branding Labels
                    </h3>
                    <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words leading-relaxed">
                      End-to-end private branding labels that empower - quick commerce platforms transform fresh produce and general goods into their own branded offerings
                    </p>
                  </div>
                  <Link className="inline-flex items-center text-primary-container font-button-text text-button-text font-semibold hover:text-accent-cyan-hover transition-colors pt-2" href="/quote?industry=ecommerce">
                    Custom Packaging <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: FEATURES */}
          <section className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out py-space-xl">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10">
              <h2 className="font-headline-lg text-headline-lg text-text-primary whitespace-normal break-words">
                Features
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center justify-center p-8 bg-surface-canvas rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]">payments</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary font-semibold whitespace-normal break-words">
                  Cost effective
                </h4>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center justify-center p-8 bg-surface-canvas rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]">lock_open</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary font-semibold whitespace-normal break-words">
                  Tamper evident
                </h4>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center justify-center p-8 bg-surface-canvas rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary font-semibold whitespace-normal break-words">
                  Trusted by Major Logistics, E-commerce and Quick commerce companies
                </h4>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center justify-center p-8 bg-surface-canvas rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center text-primary-container mb-4">
                  <span className="material-symbols-outlined text-[28px]">print</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary font-semibold whitespace-normal break-words">
                  Thermal Printing
                </h4>
              </div>
            </div>
          </section>
          {/* SECTION 6: CTA BANNER */}
          <section className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out py-space-xl" id="samples">
            <div className="bg-gradient-to-r from-text-primary via-slate-900 to-text-primary rounded-3xl p-8 lg:p-12 shadow-xl text-on-primary flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left side */}
              <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
                <h3 className="font-headline-lg text-headline-lg text-on-primary whitespace-normal break-words">
                  Need reliable label solutions?
                </h3>
                <p className="font-body-md text-body-md text-surface-container-highest whitespace-normal break-words">
                  Request on-press samples, material charts, or a plant capability deck.
                </p>
              </div>
              {/* Right side actions */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link className="inline-flex items-center justify-center bg-primary-container hover:bg-accent-cyan-hover text-on-primary font-button-text text-button-text px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-[1.02]" href="/quote?industry=ecommerce">
                  Request Samples
                </Link>
                <Link className="inline-flex items-center justify-center bg-transparent border-2 border-surface-container-highest text-on-primary hover:bg-surface-container-highest/20 font-button-text text-button-text px-8 py-3.5 rounded-full transition-all" href="/quote?industry=ecommerce">
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