/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function PharmaPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
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
          {/* SECTION 1: INDUSTRY HERO */}
          <section className="w-full py-space-2xl lg:py-space-3xl px-6 lg:px-12 max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan-light/70 text-primary font-subheading-eyebrow text-subheading-eyebrow mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="">SPECIALIZED INDUSTRY FOCUS</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl font-extrabold text-text-primary tracking-tight mb-6 whitespace-normal break-words">
                  Pharma Label Solutions
                </h1>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-8 whitespace-normal break-words max-w-xl">
                  Tamper-proof, compliant, and built for sterile, cold-chain environments.
                </p>
                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-text-primary hover:bg-slate-800 text-on-primary font-button-text text-button-text shadow-[0_4px_20px_-2px_rgba(15,23,42,0.18)] transition-all hover:scale-[1.02] text-center" data-path="request-quote" href="/quote?industry=pharma">
                    <span className="">Request Quote</span>
                    <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-container-lowest text-text-primary border-2 border-border-subtle hover:border-primary-container font-button-text text-button-text transition-all hover:scale-[1.02] text-center shadow-sm" href="/quote?industry=pharma">
                    Get Samples
                  </Link>
                </div>
                {/* Trust Tags Row */}
                <div className="pt-6 border-t border-border-subtle w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-text-muted font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    <span className="font-medium text-text-primary whitespace-normal break-words">ISO 15378 Compliant</span>
                  </div>
                  <span className="hidden sm:inline text-border-subtle">•</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">ac_unit</span>
                    <span className="font-medium text-text-primary whitespace-normal break-words">Class 10,000 Cleanroom</span>
                  </div>
                  <span className="hidden sm:inline text-border-subtle">•</span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">water_drop</span>
                    <span className="font-medium text-text-primary whitespace-normal break-words">Low Migration Inks</span>
                  </div>
                </div>
              </div>
              {/* Right Column Hero Visual */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-container-lowest">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="High-end commercial photography of assorted pharmaceutical packaging, including clean white plastic supplement bottles, amber glass syrup medicine bottles, and sterile pill blister packs, arranged neatly on a clean bright clinical surface, studio lighting, depth of field" className="w-full h-auto max-h-[520px] object-cover scale-[1.01] hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXFTA6mk2BJVA_bqbHeAvF3wyDUaU1Y5nT4ZIUVPlkMhhXKilmE_I0HIKFOFh7-IVPcajw441IifFN32id2slz020i6kT5QrzTj_uKDqQEJOJRNnnEDyExBYQC4reOtxGpgyrGtqFpJ0zFCOL87yaY6x91YjQh-79DlWtjdPKjSWhVZan0T5vPGjFs7gacec-IWw03MTp-WU5Spvh1zejT4-PCt99I-O8ZeNaWmVYRb_-LR7BYD0gn" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/90 backdrop-blur-md shadow-lg border border-border-subtle/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">shield</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-text-primary">100% Validated Substrates</span>
                        <span className="font-body-sm text-body-sm text-text-muted">USP Class VI &amp; FDA 21 CFR Grade</span>
                      </div>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: TECHNOLOGY & QUALITY OVERVIEW */}
          <section className="w-full py-space-2xl bg-surface-container-low scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column (60%) */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-border-subtle text-primary font-subheading-eyebrow text-subheading-eyebrow mb-4 w-max">
                    <span className="">UNCOMPROMISING PRECISION</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary tracking-tight mb-6 whitespace-normal break-words">
                    Technology &amp; Quality
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed whitespace-normal break-words">
                    Pharma labels demand uncompromising accuracy and safety. Our range covers unit-dose, vial, ampoule, and carton applications with anti-tamper features and GS1-compliant serialisation. Materials and adhesives are validated for cold storage and sterile environments.
                  </p>
                </div>
                {/* Right Column (40%) */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl p-8 bg-surface-container-lowest border border-border-subtle shadow-md">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                      <h3 className="font-headline-md text-headline-md font-bold text-text-primary">Highlights</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-surface-subtle border border-border-subtle/50">
                        <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                        <span className="font-body-md text-body-md font-semibold text-text-primary whitespace-normal break-words">ISO 9001 / GMP-aligned SOPs</span>
                      </li>
                      <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-surface-subtle border border-border-subtle/50">
                        <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                        <span className="font-body-md text-body-md font-semibold text-text-primary whitespace-normal break-words">Audit-ready documentation</span>
                      </li>
                      <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-surface-subtle border border-border-subtle/50">
                        <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                        <span className="font-body-md text-body-md font-semibold text-text-primary whitespace-normal break-words">Clean-room workflows</span>
                      </li>
                      <li className="flex items-start gap-3.5 p-3 rounded-2xl bg-surface-subtle border border-border-subtle/50">
                        <div className="w-6 h-6 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                        <span className="font-body-md text-body-md font-semibold text-text-primary whitespace-normal break-words">Secure serialisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: TYPES OF LABELS (CARD GRID) */}
          <section className="w-full py-space-3xl px-6 lg:px-12 max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary mb-4 whitespace-normal break-words">
                Types of Labels
              </h2>
              <p className="font-body-lg text-body-lg text-secondary whitespace-normal break-words">
                Engineered solutions tailored to stringent regulatory specifications.
              </p>
            </div>
            {/* 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-3xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-60 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Clean macro photography shot of a sleek branding label on a medical vial box, pristine pharmaceutical packaging, clinical lighting, razor sharp typography and logo details" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2nD6kDyQcotQ84rfAvmF_CqKlF7kqicag8vq4ZEQLUpwpk-1SvGel-_qfH4Xqo5W7GmqMy-o5qGXNFCSEiirnJiuVwT7i7znYsfK-2drgIA7GVEhbGBkEV-m5ZOuCt-FQuB3C1ohEqUe-AQMH1hXBDjFEAf-WAGxnnHnbRSlrMQQrxZ95gF05GHtLNrOf8z4DccAoIKM7shp0MfmPmmzrPtl34dx3CG24FfKnjVMSSTqfQsNLFb8N" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-3 whitespace-normal break-words">
                    Branding Labels
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">
                    Premium, print-safe labels designed to maintain clarity and integrity under refrigeration and sterilization conditions.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="rounded-3xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-60 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Close up macro photography of a folded multi-page multi-layer booklet label peeling slightly open off a pharmaceutical medicine bottle, displaying detailed dosage chart and text, clean studio shot" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ja4qyUR-PBTzrNxG0h98lFINFrr21rDCi8sT9gLZod9XBUz6E7auVo_2wIZOYMxVed0MEF_LUdLmzt947cKfPwSuH5yJsHN9YG3mi7SoNwIFTwi5nf01bTF_XL1hW31R43cHycPnKWBun2W0C3JNBasmaxLzRtaP8-SgBNDsXGi7U-YOwtr_Epn6C1Vf_63sJcyhqWMRhMHHaes9AfJT5Vu10bd6TaUstWH9rTrCrJYVmWItMIjN" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-3 whitespace-normal break-words">
                    Booklet Labels
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">
                    Multi-page labels offering extended space for dosage, multilingual information, and regulatory details.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="rounded-3xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-60 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Macro photography of an iridescent holographic tamper-evident security seal label on an authentic pharmaceutical medicine carton, optical security reflections, pristine lighting" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCib8pVbGrF-wvDYkVgm-wJvUuavZSH3rineVFMWV4D7e4gdeHWOSPIShmPKEA5DJ-xYeIwPtdu6JyOEWMxyyMz_HOS2P-15xypubhBr0JiHXpgQE67G_6JA_QENgEfSgL4RGotCeH4HP4w3CBHp1r2DLvi3cZTNc0gu00fH5-UZuuOPE0XJFmJ9i4tqpYknD1HqPy8K3XsoX11XH251cnlwbVYM0YcL6Thseds9PP2LAVbeSAg9UON" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-3 whitespace-normal break-words">
                    Security / Anti-Counterfeit Labels
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">
                    Tamper-evident, holographic and various other security features to safeguard against product duplication and ensure brand authenticity.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="rounded-3xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="h-60 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Close up macro shot of a medical sterilization pouch with a dual color-changing thermochromic chemical indicator strip, showing heat sterilization verification, clean medical lab lighting" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsdxk4CehqECu9KBAbFolFWyGhSZqkgYNUlTdteV2dQ-4Edo4himEoQ_B2bP8ur2Z5LoEDTEeG4gFhYLoRB3eye0GJzsW6yI9FL53RSQ2z_-vim5_i9KqDPH3uYpzfapbiZT9QhOKecdStaLEDPjcFFg9QNxB6Bu68GteGtAgq70Zo2Ac0uRDRPJRNM9UcjwHBpz18BVzYLbadbe1gAbWHpbVrZuwF-3MtkFmTNkB9l1TaM9Jg0ACp" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-3 whitespace-normal break-words">
                    Thermochromic / Colour Changing Labels
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">
                    Color-changing indicators that visually confirms whether medical instruments, vials or packaging have been sterilized or exposed to heat.
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="rounded-3xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group lg:col-span-1 md:col-span-2 lg:col-start-2">
                <div className="h-60 w-full overflow-hidden bg-surface-container-high relative">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="High contrast macro photography of crisp printed dosage text and GS1 barcodes on the silver aluminum foil backing of a pharmaceutical pill blister pack, clinical industrial environment" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzexNThInGQ4_tWWcwWBhIikqc5Pzt1QatjjZ3d67a9oGybS4OXZgFD6TIMrp_9OoTKv8ma0MrcqJyMiPRkjhhpSSQRtbePVbK7WEjntC9EbKQEeZj7kwrjTO3DEtWJCCsHQ_sjknnTR2nKOGHyLreamKjDo4dadEbHkx5zkBPUm5mMYaC4ZWV-LfZ7XEhPb9-ZXfinsZrFBrXJY0wft0zxc6xxe7eOp999lfHlJ2ipJWhFbkbzOYO" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-3 whitespace-normal break-words">
                    Blister Foil Printing
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed whitespace-normal break-words">
                    Printing High-precision printed foils compatible with heat sealing, offering clear dosage identification and anti-tamper protection and various security features.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: FEATURES */}
          <section className="w-full py-space-2xl bg-surface-container-low scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary text-center mb-10 whitespace-normal break-words">
                Features
              </h2>
              {/* 4-Column Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="rounded-2xl p-6 bg-surface-container-lowest border border-border-subtle shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">science</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-text-primary whitespace-normal break-words">
                    Low Migration Ink
                  </h3>
                </div>
                {/* Feature 2 */}
                <div className="rounded-2xl p-6 bg-surface-container-lowest border border-border-subtle shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">lock</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-text-primary whitespace-normal break-words">
                    Security Features
                  </h3>
                </div>
                {/* Feature 3 */}
                <div className="rounded-2xl p-6 bg-surface-container-lowest border border-border-subtle shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">tag</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-text-primary whitespace-normal break-words">
                    Back Side Numbering
                  </h3>
                </div>
                {/* Feature 4 */}
                <div className="rounded-2xl p-6 bg-surface-container-lowest border border-border-subtle shadow-sm text-center flex flex-col items-center justify-center min-h-[140px] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">clean_hands</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-text-primary whitespace-normal break-words">
                    Pharma-Safe Manufacturing Environment
                  </h3>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: CTA BANNER */}
          <section className="w-full pb-space-3xl px-6 lg:px-12 max-w-7xl mx-auto scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out" id="samples">
            <div className="w-full rounded-3xl bg-surface-container-low border border-border-subtle p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex flex-col text-center lg:text-left">
                <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary mb-2 whitespace-normal break-words">
                  Need reliable label solutions?
                </h2>
                <p className="font-body-md text-body-md text-text-muted whitespace-normal break-words">
                  Request on-press samples, material charts, or a plant capability deck.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
                <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container hover:bg-accent-cyan-hover text-on-primary font-button-text text-button-text shadow-[0_4px_20px_-2px_rgba(14,165,233,0.35)] transition-all hover:scale-[1.02]" href="/quote?industry=pharma">
                  Request Samples
                </Link>
                <Link className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-container-lowest text-text-primary border-2 border-border-subtle hover:border-primary-container font-button-text text-button-text transition-all hover:scale-[1.02] shadow-sm" href="/quote?industry=pharma">
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