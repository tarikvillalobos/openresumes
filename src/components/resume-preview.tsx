"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef } from "react";

export function ResumePreview() {
  const resumeWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (event: globalThis.MouseEvent) => {
      const resumeWrap = resumeWrapRef.current;
      if (!resumeWrap) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 5;
      resumeWrap.style.transform = `perspective(1200px) rotateY(${
        -6 + x
      }deg) rotateX(${3 - y}deg)`;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleResumeMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform =
      "perspective(1200px) rotateY(-6deg) rotateX(3deg)";
  };

  return (
    <div className="hero-visual" aria-label="Prévia de currículo">
      <div
        className="resume-wrap"
        ref={resumeWrapRef}
        onMouseLeave={handleResumeMouseLeave}
      >
        <div className="float-badge b1">
          <span className="badge-icon">✓</span>
          Revisão em andamento
        </div>

        <div className="float-badge b3">ATS-Friendly</div>

        <div className="resume-card">
          <div className="rc-header">
            <div className="rc-name">Ana Beatriz Silva</div>
            <div className="rc-role">Product Designer</div>
            <div className="rc-contact">
              <span>ana@email.com</span>
              <span>São Paulo, SP</span>
            </div>
          </div>

          <div className="rc-divider" />

          <div className="rc-section">
            <div className="rc-section-title">
              <span className="rc-section-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              Experiência
            </div>
            <div className="rc-job">
              <div className="rc-job-title">Senior Product Designer</div>
              <div className="rc-job-meta">
                Nubank · São Paulo · 2022 – Presente
              </div>
              <div className="rc-bullet">
                Redesenhou o fluxo de onboarding, aumentando conversão em 34%
              </div>
              <div className="rc-bullet">
                Liderou equipe de 5 designers em projetos core
              </div>
            </div>
            <div className="rc-job">
              <div className="rc-job-title">UX Designer</div>
              <div className="rc-job-meta">iFood · São Paulo · 2019 – 2022</div>
              <div className="rc-bullet">
                Criou sistema de design utilizado por 3 produtos
              </div>
            </div>
          </div>

          <div className="rc-divider" />

          <div className="rc-section">
            <div className="rc-section-title">
              <span className="rc-section-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              Habilidades
            </div>
            <div className="rc-tags">
              <span className="rc-tag">Figma</span>
              <span className="rc-tag">Design Systems</span>
              <span className="rc-tag">Prototipagem</span>
              <span className="rc-tag">Pesquisa UX</span>
              <span className="rc-tag">Liderança</span>
            </div>
          </div>
        </div>

        <div className="float-badge b2">Pronto para download</div>
      </div>
    </div>
  );
}
