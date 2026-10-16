/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ChemicalPage() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
            <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: INDUSTRY HERO */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy & Actions */}
              <div className="flex flex-col items-start scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan-light shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary tracking-widest uppercase">SPECIALIZED INDUSTRY FOCUS</span>
                </div>
                {/* H1 Title */}
                <h1 className="font-headline-xl text-headline-xl lg:text-[52px] lg:leading-[60px] font-extrabold text-text-primary tracking-tight mb-4 whitespace-normal break-words">
                  Chemical Label Solutions
                </h1>
                {/* Subtitle */}
                <p className="font-headline-md text-headline-md font-medium text-text-muted mb-8 whitespace-normal break-words">
                  Chemical, heat &amp; abrasion resistant.
                </p>
                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link className="inline-flex items-center justify-center gap-2 bg-on-surface text-on-primary px-7 py-3.5 rounded-full font-button-text text-button-text shadow-md hover:bg-inverse-surface transition-all duration-200" data-path="request-quote" href="/quote?industry=chemical">
                    <span className="">Request Quote</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link className="inline-flex items-center justify-center bg-surface-canvas shadow-sm text-text-primary px-7 py-3.5 rounded-full font-button-text text-button-text hover:bg-surface-contrast transition-all duration-200" data-path="request-samples" href="/quote?industry=chemical">
                    Get Samples
                  </Link>
                </div>
                {/* Feature Badges */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2">
                  <div className="flex items-center gap-2 font-label-pill text-label-pill text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="">High Chemical Resistance</span>
                  </div>
                  <div className="flex items-center gap-2 font-label-pill text-label-pill text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="">GHS / Hazchem Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 font-label-pill text-label-pill text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                    <span className="">Harsh Environment Adhesion</span>
                  </div>
                </div>
              </div>
              {/* Right Column: Hero Visual Container */}
              <div className="relative w-full scroll-reveal opacity-0 translate-y-12 transition-all duration-700 delay-150 ease-out">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-surface-container">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Chemical cleaning products with high durability print labels" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFl9Wbu0huj2cSb6yBCFaBvD8SoPKz-LcfX-lRIJ_4JCu_jkDotDY_OpAETaKwtl8BFmsQ77rxIQAZqgCGI7X15zZhoamOvb5Hhy7AfAejsYAZdA8GdRJJu2pItaN_OJBGjeU0Qy7rzebeIkfloqTrPX_kZUGB2RacmsdDTmYKH32yN3vaXaznt2HwBKTMVN21yYsQpgmUNwDlrZTPp4sGx1cKwhN3ZONXV1ON7ok2BVOnS14vqNah" />
                  {/* Overlaid Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 md:right-auto max-w-md bg-surface-canvas/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-[15px] leading-tight font-bold text-text-primary">100% GHS &amp; Solvent Resistance Guaranteed</span>
                      <span className="font-body-sm text-body-sm text-text-muted mt-0.5">Industrial High-Durability Print &amp; Coating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 2: TECHNOLOGY & QUALITY OVERVIEW */}
          <section className="w-full bg-surface-subtle py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Description (60% ~ 7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-start scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-cyan-light shadow-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-primary tracking-widest uppercase">RESILIENT FORMULATIONS &amp; SUBSTRATES</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary mb-4 whitespace-normal break-words">
                    Technology &amp; Quality
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed whitespace-normal break-words">
                    The chemical sector demands labels that combine durability with chemical resistance. Designed for drums, containers, and lab packaging, these labels remain legible and securely affixed even when exposed to acids, solvents, or outdoor conditions, ensuring safety and regulatory accuracy.
                  </p>
                </div>
                {/* Right Column: Highlights Card (40% ~ 5 cols) */}
                <div className="lg:col-span-5 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 delay-150 ease-out">
                  <div className="bg-surface-canvas rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-6">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary">Highlights</h3>
                    </div>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                        </div>
                        <span className="font-body-md text-body-md font-medium text-text-primary">ISO 9001 / GMP-aligned SOPs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                        </div>
                        <span className="font-body-md text-body-md font-medium text-text-primary">Audit ready documentation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                        </div>
                        <span className="font-body-md text-body-md font-medium text-text-primary">Clean room workflows</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-accent-cyan-light flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                        </div>
                        <span className="font-body-md text-body-md font-medium text-text-primary">Secure serialisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 3: TYPES OF LABELS */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="text-center max-w-3xl mx-auto mb-10 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
              <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary mb-2 whitespace-normal break-words">
                Types of Labels
              </h2>
              <p className="font-body-md text-body-md text-secondary whitespace-normal break-words">
                Engineered solutions tailored to withstand harsh chemical, solvent, and environmental exposures.
              </p>
            </div>
            {/* 4-Column Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col scroll-reveal opacity-0 translate-y-12 delay-[100ms]">
                <div className="h-48 w-full overflow-hidden bg-surface-container shrink-0">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Heavy-duty blue chemical drums with GHS warning labels" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="/images/drum-labels.png" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-2 whitespace-normal break-words">Drum Labels</h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed whitespace-normal break-words">
                    Large format, chemical-resistant labels for barrels and containers ensuring GHS and regulatory compliance
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col scroll-reveal opacity-0 translate-y-12 delay-[200ms]">
                <div className="h-48 w-full overflow-hidden bg-surface-container shrink-0">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="High-gloss packaging labels on automotive coolant jugs" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtWbTRdvY3LAoaND7TPOpvzP1Wg8CAmiYkyd5XG3PwLhsERfRw6Tf17Yrj8ZYFj1hapZUroi3v6lsC0zjwxhRkmtma8rnzG7g1awRPci-hHnIW0sMvytVkA-cC5L65QfAyeE-KOziOOdbGBCArFbcc5Bsxry4klqo8FdV2O0kTUgTjt2lGkLpldlni_u1XmDVv-7Zrn_MI6Fucal6OtkF7uSxmzT85FNaj7_FolL8fXscItemR0SL7" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-2 whitespace-normal break-words">Branding Labels</h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed whitespace-normal break-words">
                    High gloss, solvent-resistant labels that enhance brand presentation even on challenging surfaces
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col scroll-reveal opacity-0 translate-y-12 delay-[300ms]">
                <div className="h-48 w-full overflow-hidden bg-surface-container shrink-0">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Fractured tamper-evident security seal on chemical bottle" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBWK3tp3fc_5R83mo6Jh8UAX8buAWSfVOrKZ4cRSDhvUmhUa7ZqlkgUFdPey0gj6mK44qDCCy0lAW15kAVOusPDMmMPj8JbZt7ywUzFTwJXEkxZbWpa6Kol72V_m36trc_6UWcLcr8WlgvN3ATLYRi9M0K7TtZEImQTohVefeHzKv1nAk168BKaoC7X-upMV8pgSW43w-HTDxjnZtgjLJ12FsyatrMofI58LQ2ZYxzfqwRMqttXhwC" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-2 whitespace-normal break-words">Security Seal / Tamper-Evident Labels</h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed whitespace-normal break-words">
                    Protect product integrity and indicate any unauthorized access using various security features like void seal design and destructible labels
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-surface-canvas rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col scroll-reveal opacity-0 translate-y-12 delay-[400ms]">
                <div className="h-48 w-full overflow-hidden bg-surface-container shrink-0">
                  <img onError={(e) => { e.currentTarget.src = '/images/fallback-label.svg'; }} alt="Industrial GHS chemical hazard warning labels" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtBPORO5Dbz7aN4kfJ5tHPmEwfRJ6oXdn5KGd1whgYq2jY0S4dshYBtR6OzFgiPb-hYIIgSDnjAw1JovIOoErkZ47foe8TrzHTHtfl--R-9vDB8Y8QMn5fyi5hbyhYLFXj49W6JkR6z-Pg_LhyksvKBKF5GsKJ7X2L_TcCE_q4xazzwuqjI5GCiCmrx_VtGPexCqVxopw4rdVvuigdux2DUPWTOFUa4hy1Pi8loUV5nrwIgIzYtudr" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-text-primary mb-2 whitespace-normal break-words">GHS / CLP Labels</h3>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed whitespace-normal break-words">
                    Mandatory under global chemical labelling standards for hazard communication for safe handling and transportation
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4: FEATURES */}
          <section className="w-full bg-surface-contrast/50 py-14">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-8 scroll-reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <h2 className="font-headline-lg text-headline-lg font-bold text-text-primary whitespace-normal break-words">
                  Features
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center gap-3.5 hover:shadow-md transition-shadow scroll-reveal opacity-0 translate-y-12 delay-[100ms]">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">thermostat</span>
                  </div>
                  <span className="font-headline-sm text-[16px] leading-snug font-semibold text-text-primary whitespace-normal break-words">
                    Temperature and Solvent Resistance
                  </span>
                </div>
                {/* Feature 2 */}
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center gap-3.5 hover:shadow-md transition-shadow scroll-reveal opacity-0 translate-y-12 delay-[200ms]">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">shield</span>
                  </div>
                  <span className="font-headline-sm text-[16px] leading-snug font-semibold text-text-primary whitespace-normal break-words">
                    High Durability
                  </span>
                </div>
                {/* Feature 3 */}
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center gap-3.5 hover:shadow-md transition-shadow scroll-reveal opacity-0 translate-y-12 delay-[300ms]">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <span className="font-headline-sm text-[16px] leading-snug font-semibold text-text-primary whitespace-normal break-words">
                    Meets Compliance standards
                  </span>
                </div>
                {/* Feature 4 */}
                <div className="bg-surface-canvas rounded-2xl p-6 shadow-sm text-center flex flex-col items-center justify-center gap-3.5 hover:shadow-md transition-shadow scroll-reveal opacity-0 translate-y-12 delay-[400ms]">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan-light flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">layers</span>
                  </div>
                  <span className="font-headline-sm text-[16px] leading-snug font-semibold text-text-primary whitespace-normal break-words">
                    Strong Adhesion
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 6: CTA BANNER */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 mb-16">
            <div className="bg-surface-subtle p-10 md:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 scroll-reveal transition-all duration-700 ease-out opacity-100 translate-y-0">
              <div className="flex flex-col items-start text-left">
                <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg font-bold text-text-primary mb-1 whitespace-normal break-words">
                  Need reliable label solutions?
                </h2>
                <p className="font-body-md text-body-md text-secondary whitespace-normal break-words">
                  Request on-press samples, material charts, or a plant capability deck.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <Link className="inline-flex items-center justify-center bg-primary-container text-on-primary hover:bg-accent-cyan-hover px-7 py-3 rounded-full font-button-text text-button-text shadow-sm transition-all duration-200" data-path="request-samples" href="/quote?industry=chemical">
                  Request Samples
                </Link>
                <Link className="inline-flex items-center justify-center bg-surface-canvas shadow-sm text-text-primary px-7 py-3 rounded-full font-button-text text-button-text hover:bg-surface-contrast transition-all duration-200" data-path="contact-us" href="/quote?industry=chemical">
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