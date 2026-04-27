"use client";

import { useEffect } from "react";

export function RevealEffects() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const revealNodes = document.querySelectorAll(".reveal, .reveal-stagger");
    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => revealObserver.disconnect();
  }, []);

  return null;
}
