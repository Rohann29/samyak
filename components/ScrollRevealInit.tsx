"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let animFrameId: number;

    // Defer observer setup until after React completes hydration pass
    animFrameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const elements = document.querySelectorAll(".scroll-reveal, .reveal-on-scroll");

        if (prefersReducedMotion) {
          elements.forEach((el) => {
            el.setAttribute("data-revealed", "true");
            el.classList.add("is-revealed", "is-visible");
          });
          return;
        }

        observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.setAttribute("data-revealed", "true");
                target.classList.add("is-revealed", "is-visible");
                obs.unobserve(target);
              }
            });
          },
          {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px",
          }
        );

        elements.forEach((el) => observer?.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(animFrameId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
