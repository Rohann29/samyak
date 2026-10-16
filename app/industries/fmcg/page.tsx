/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function FMCGPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });

    return () => {
      revealElements.forEach(el => {
        revealObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
            <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          {/* SECTION 1: Industry Hero (50/50 Split Container) */}
          <section className="w-full py-space-xl lg:py-space-3xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
                {/* Left Column */}
                <div className="flex flex-col items-start scroll-reveal transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-space-md">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-text-primary uppercase tracking-widest whitespace-normal break-words">SPECIALIZED INDUSTRY FOCUS</span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-text-primary font-bold tracking-tight mb-space-sm whitespace-normal break-words">
                    FMCG Label Solutions
                  </h1>
                  <p className="font-body-lg text-body-lg text-text-muted mb-space-lg whitespace-normal break-words">
                    Shelf impact with speed &amp; scale.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-space-xl">
                    <Link className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-text-primary hover:bg-on-surface text-on-primary font-button-text text-button-text tracking-wide shadow-md hover:scale-[1.02] transition-all whitespace-normal break-words" href="/quote?industry=fmcg">
                      <span className="">Request Quote</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                    <Link className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-surface-container-lowest text-text-primary hover:bg-surface-container-high font-button-text text-button-text tracking-wide shadow-sm hover:scale-[1.02] transition-all whitespace-normal break-words" href="/quote?industry=fmcg">
                      <span className="">Get Samples</span>
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-text-muted font-body-sm text-body-sm whitespace-normal break-words">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      High-Speed Dispensing Ready
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      Food Grade Adhesives
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      Multi-Substrate Compatibility
                    </span>
                  </div>
                </div>
                {/* Right Column */}
                <div className="relative scroll-reveal transition-all duration-700 ease-out delay-200 will-change-transform opacity-100 translate-y-0">
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Photorealistic commercial photography of vibrant packaged grocery items" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQnKu1M-BazT3lVQ36idx1LSk6OpKPH_fBNvGwkdXFToeNQ_Ya2-CbkiFanDSvOdQeT0QR0zu8gs8rqNBGsvK5pWEX8kSnpl3RyqZuzuy3B9NIkEkN35UMK79EB1StVZuQO2oG9Rkye0ZTE1LKuKeST0YntpjImYmUnC0drGB40CD1CZo8F5BxgGl3vpkz95O7Q2Odcx6pI79LEM2iS6bBp4TLxUCx9Bq0n5Z7jTFHBwLAMREgGPp" />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-transparent to-transparent"></div>
                    {/* Floating Badge Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary-container text-[22px]">verified</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-button-text text-button-text text-text-primary whitespace-normal break-words">100% Shelf Impact Guaranteed</span>
                        <span className="font-body-sm text-body-sm text-text-muted whitespace-normal break-words">High-Resolution HD Flexo Printing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: Technology & Quality Overview (60/40 Split Container) */}
          <section className="w-full py-space-2xl bg-surface-contrast">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Left Column (Description - 60%) */}
                <div className="lg:col-span-7 flex flex-col items-start scroll-reveal transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm mb-space-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-text-primary uppercase tracking-widest whitespace-normal break-words">UNCOMPROMISING SPEED &amp; APPEAL</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight mb-space-md whitespace-normal break-words">
                    Technology &amp; Quality
                  </h2>
                  <p className="font-body-lg text-body-lg text-text-muted leading-relaxed whitespace-normal break-words">
                    FMCG products need attractive, durable, and compliant labels that enhance brand appeal and withstand varied storage conditions. Designed for fast application, these labels maintain clarity and adhesion across bottles, pouches, and containers.
                  </p>
                </div>
                {/* Right Column (Highlights Card - 40%) */}
                <div className="lg:col-span-5 scroll-reveal transition-all duration-700 ease-out delay-150 will-change-transform opacity-100 translate-y-0">
                  <div className="bg-surface-subtle rounded-3xl p-8 shadow-md">
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold whitespace-normal break-words">Highlights</h3>
                    </div>
                    <ul className="space-y-4 font-body-md text-body-md text-text-primary">
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                        </div>
                        <span className="whitespace-normal break-words font-medium">ISO 9001 / GMP-aligned SOPs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                        </div>
                        <span className="whitespace-normal break-words font-medium">Audit ready documentation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                        </div>
                        <span className="whitespace-normal break-words font-medium">Clean room workflows</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[18px]">check</span>
                        </div>
                        <span className="whitespace-normal break-words font-medium">Secure serialisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: Types of Labels (Card Grid) */}
          <section className="w-full py-space-3xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl scroll-reveal transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0">
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight mb-space-xs whitespace-normal break-words">
                  Types of Labels
                </h2>
                <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words">
                  Engineered solutions tailored to high-speed lines and consumer shelf impact.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-100 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Product Labels packaging overview" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCumiaJA96ObyBinEScgurrdw08XjvWqRs7cfXm-8KJ4nWKaVAuIpm-gCU3FW4SS6KD__qTgPqycPPLWG6NqlSBY4KN7FdKukpOtG6pI5-iUtKusOG6SeCH4LZP5dDYrorueLiBKaCpFWKEKLZ5fJYJa0PiR7XGhtPwnMbMpa3Hfg_KBly9yZqQM9VUKSSalLYpTn_qOj1AI-hRTO4SzLbm8LCq25caF9RT-pneKGOOGRsSmtSdsD1V" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Product Labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">High-quality primary packaging labels built for bottles, pouches, tubes, and jars — enhancing shelf presence and brand recognition.</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-150 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Decorative metallic and embossed label styling" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjLSIPn9KiW5c14YV2mcJrYOd4JI4TLHCu-x05CcO3NMZlAyRedqFmn7oJwsa_yA8aBcOOVSfzfOseym1F7naDPaTRILPKaUu6zeXMt6ysgNht97CjLt74lDvxR9HkPZMHDESzSUdqCGCkg0a2g5q2WyLP7kA6tuNbH5otrQgFtNLkfNvYYBlm8VBhzhMwpwMOMQQW6MbM2UX3HCtxZcrlbUlXIfX0HwePKhLQrmiUXa_GONqcT2Vr" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Decorative Labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">Premium finishes that elevate brand perception and create tactile, visually rich packaging experiences.</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-200 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Reclosure resealable label system" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSXRwwga1oZlmVqdJG69w1CYAaVf6plD6VQm_qsg1VxSLFWMV12aMKFn980egibyL3TXUWmMeEhASRvItSZ_efijr15T-SRurvOCi7gsXQa0JgqiYzCuvKxoPCS33H2tSRnKWz0p5Wu7uEug-7KldTnDHaULq_pPtv-qVJi3EgaAv-Z3JiDNV35YVROB5hufxvqLRq2dATHnGrdnBqvurKDU_O2ckU90J5275bWyZaubCs0ggGuAmJ" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Reclosure labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">Reclosure labels provide a secure seal that can be opened and closed multiple times, ensuring product freshness,protection, and user convenience.</p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-100 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Double sided printed bottle labels" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsklsymww0uTWSqL3_pgUbQdufFCF8TD0LRIIgU3LesbRWNpv2TQH8o_-3lk31ajz7LYwBb5oB-ummus-Xowxt9h_bdhRSnaCqDT-2MUWjMi5DJ5uqHan3KAttcYInZriW-788vKFOpD_Sp8-c0lqjZb3UO_rTbdZtTVbW-Z6AYyG4GygMmCSsDVnRIWhB4PaxDl8gyCX-C0Jdt71e-_hYhjc5AppojJBbsVG44I5SMrpGOlfc1Dm1" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Both Side Printing Labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">Maximize communication space with high-quality reverse side printing for promotions, usage info, or ingredient details.</p>
                  </div>
                </div>
                {/* Card 5 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-150 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Peel and reveal multilayer expanded content label" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHus-L6j6MSXKH_l0wvqrME2Jm_7iZcKklT7x9IJhxMAFW22hhjJ1JS1qAAn8TgBjnTH3lWQEI-D5u2DNOrjWGwAt2hpeGYMjBqfkFrpMv8fdk4SiOW3qSmS9VuUYHxI12OPjuHShbODDQjKTNKq-fZx9FLwmlTgTvxsZNOpKdmTtubVK41JdK-6V1MZD-kNMIbMJ7v5_CwVKwsZIrE1GrvTf6vSQI_h-X3Yu5XmQ5YXx7PISA7sQ" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Peel &amp; Reveal / Multi-Layer Labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">For additional product info, multilingual text, or regulatory content in compact packaging.</p>
                  </div>
                </div>
                {/* Card 6 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col scroll-reveal duration-700 ease-out delay-200 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Wash off clean detachment label on bottle" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjRCqU7xd8AJDF3wyniLB1eQ4Bs5Khm8OGNWayPJAQK7hsh2bNfgHbCrjYHJbU-wov3Z_sBBHYm9dwATja9ab-1VvapL78_NnX9uNfw12MAzikpCuondgSvtgC6SNBcMYlIHANlQ_i7dPTKNDBdXkvq2GcH5J3TvM_A8J4YnW-5IGoLnRPzVBzDR6YzSt77Ze0wp3pyyEYsNr69Duu0eLLYEluXhjD542fuy--Gym3N58oniLPUcok" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">Wash Off labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">Wash-off labels are designed to be easily removed with water, allowing a clean separation from containers for reuse or recycling without leaving any residue.</p>
                  </div>
                </div>
                {/* Card 7 */}
                <div className="group bg-surface-container-lowest rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1 scroll-reveal duration-700 ease-out delay-250 will-change-transform opacity-100 translate-y-0">
                  <div className="h-52 overflow-hidden rounded-t-3xl bg-surface-container">
                    <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Clear on clear invisible label on glass" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEA4OnsS7MuYeOgZCBk1V4qAP6RJywJYQzeNBxnoKJwcDVWpX-tRRkXPqHTFmLzagp8KxeiIyEC-j2y9iU6AWe8MZ9ccV6AIZFJOJLl91gjbyWSLBUFYs2iThu2bGfZZD4CG5yMoe4JC_ggQT2ZrsXIQZp88_5FrmuPkXX-XO-SNDxBB3J_uXCYCpM7d1t9u769ZJz4ChYmCojaXZ_uKbAbfw9AF_v3NUz8QxqGuR0-40UJP_9pPZo" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold mb-2 whitespace-normal break-words">No look / clear-on-clear labels</h3>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">Provide a minimalist, premium glass like appearance for ultramodern bottle designs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: Features */}
          <section className="w-full py-space-2xl bg-surface-contrast">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-space-xl scroll-reveal transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0">
                <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight whitespace-normal break-words">
                  Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center text-center scroll-reveal transition-all duration-700 ease-out delay-100 will-change-transform opacity-100 translate-y-0">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold whitespace-normal break-words">Trusted by 50+ Brands</h3>
                </div>
                {/* Feature 2 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center text-center scroll-reveal transition-all duration-700 ease-out delay-150 will-change-transform opacity-100 translate-y-0">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold whitespace-normal break-words">Touch and Feel Finishes</h3>
                </div>
                {/* Feature 3 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center text-center scroll-reveal transition-all duration-700 ease-out delay-200 will-change-transform opacity-100 translate-y-0">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold whitespace-normal break-words">Premium look</h3>
                </div>
                {/* Feature 4 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col items-center text-center scroll-reveal transition-all duration-700 ease-out delay-250 will-change-transform opacity-100 translate-y-0">
                  <div className="w-14 h-14 rounded-full bg-accent-cyan-light flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary font-bold whitespace-normal break-words">Value Addition</h3>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: CTA Banner */}
          <section className="w-full pb-space-3xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 scroll-reveal transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0">
                <div className="max-w-xl">
                  <h3 className="font-headline-md text-headline-md text-text-primary font-bold mb-2 whitespace-normal break-words">
                    Need reliable label solutions?
                  </h3>
                  <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words">
                    Request on-press samples, material charts, or a plant capability deck.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container hover:bg-accent-cyan-hover text-on-primary font-button-text text-button-text tracking-wide shadow-[0_4px_20px_-2px_rgba(14,165,233,0.35)] hover:scale-[1.02] transition-all whitespace-normal break-words" href="/quote?industry=fmcg">
                    Request Samples
                  </Link>
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-container-lowest text-text-primary hover:bg-surface-container-high font-button-text text-button-text tracking-wide shadow-sm hover:scale-[1.02] transition-all whitespace-normal break-words" href="/quote?industry=fmcg">
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