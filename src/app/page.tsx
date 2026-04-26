"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Depoimentos", href: "#depoimentos", tag: "Em breve" },
  { label: "Comunidade", href: "#comunidade", tag: "Em breve" },
  { label: "Criar Currículo", href: "#criar", tag: "Em breve" },
  { label: "Modelos", href: "#modelos" },
];

const brands = [
  { name: "LinkedIn", color: "#0077b5" },
  { name: "Gupy", color: "#ff6900" },
  { name: "Google", color: "#1a73e8" },
  { name: "iFood", color: "#e31837" },
  { name: "Nubank", color: "#8a2be2" },
  { name: "Mercado Livre", color: "#00bfff" },
];

const steps = [
  {
    number: "01",
    icon: "✎",
    title: "Conte sua história",
    description:
      "Preencha suas experiências, habilidades e formação. Pode ser no braço ou importando direto do LinkedIn.",
  },
  {
    number: "02",
    icon: "✦",
    title: "IA otimiza tudo",
    description:
      "Nossa IA reescreve suas conquistas com linguagem de impacto e otimiza para sistemas ATS automaticamente.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Baixe e aplique",
    description:
      "Exporte em PDF profissional ou compartilhe o link online. Adapte para cada vaga com um clique.",
  },
];

const features = [
  {
    icon: "IA",
    title: "Reescrita por IA",
    description:
      "Transforma descrições simples em bullets de impacto com métricas e linguagem profissional.",
  },
  {
    icon: "ATS",
    title: "Otimização ATS",
    description:
      "Garante que seu currículo passe pelos filtros automáticos das grandes empresas.",
  },
  {
    icon: "UI",
    title: "Templates exclusivos",
    description:
      "Designs profissionais para cada área: tech, marketing, finanças, design e muito mais.",
  },
  {
    icon: "URL",
    title: "Link de portfólio",
    description:
      "Compartilhe um link personalizado com seu currículo online, acessível de qualquer lugar.",
  },
];

const templates = [
  {
    name: "Moderno",
    description: "Terracota · Elegante",
    color: "var(--terra)",
    badge: "Popular",
  },
  {
    name: "Executivo",
    description: "Azul · Corporativo",
    color: "#2563eb",
    badge: "Novo",
  },
  {
    name: "Minimalista",
    description: "Verde · Clean",
    color: "#059669",
  },
  {
    name: "Creative",
    description: "Roxo · Criativo",
    color: "#7c3aed",
    badge: "Em breve",
  },
];

const testimonials = [
  {
    quote:
      "Em menos de 5 minutos meu currículo ficou irreconhecível, do bom. Fui chamada para entrevista na semana seguinte.",
    name: "Mariana Costa",
    role: "UX Designer · Contratada no Itaú",
    avatar: "M",
    avatarStyle: { background: "#fde8d8", color: "var(--terra)" },
  },
  {
    quote:
      "A IA transformou minhas experiências em bullets com números reais. Parecia que eu tinha um redator profissional.",
    name: "Rafael Mendes",
    role: "Dev Backend · Contratado na Loft",
    avatar: "R",
    featured: true,
    avatarStyle: { background: "rgba(255,255,255,0.2)", color: "white" },
  },
  {
    quote:
      "Finalmente um currículo que parece feito por designer. Recebi elogios dos recrutadores antes mesmo da entrevista.",
    name: "Juliana Ramos",
    role: "Product Manager · Contratada no iFood",
    avatar: "J",
    avatarStyle: { background: "#e8f5e9", color: "#2e7d32" },
  },
];

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const resumeWrapRef = useRef<HTMLDivElement>(null);

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

    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

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

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleResumeMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform =
      "perspective(1200px) rotateY(-6deg) rotateX(3deg)";
  };

  return (
    <>
      <nav className={navScrolled ? "nav nav-scrolled" : "nav"}>
        <a href="#inicio" className="nav-logo" aria-label="OpenResumes início">
          <span className="nav-logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="nav-logo-text">
            open<span>resumes</span>
          </span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className={item.active ? "active" : undefined} href={item.href}>
                {item.label}
                {item.tag ? <span className="coming">{item.tag}</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a className="btn-nav-ghost" href="#depoimentos">
            Entrar
          </a>
          <a className="btn-nav-primary" href="#criar">
            Começar grátis →
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />

          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Novo · Powered by IA
              </div>

              <h1>
                Seu currículo,
                <br />
                <em>impecável</em> em
                <br />
                <span className="line-stroke">minutos</span>
              </h1>

              <p className="hero-desc">
                Crie currículos profissionais que se destacam. Nossa IA analisa
                sua experiência e monta um currículo personalizado para cada vaga
                que você quiser.
              </p>

              <div className="hero-actions">
                <a className="btn-hero" href="#criar">
                  ✦ Criar meu currículo
                </a>
                <a className="btn-ghost-hero" href="#como-funciona">
                  <span className="play-btn" aria-hidden="true">
                    <svg width="10" height="12" viewBox="0 0 10 12">
                      <path d="M0 0v12l10-6L0 0Z" />
                    </svg>
                  </span>
                  Ver como funciona
                </a>
              </div>

              <div className="hero-stats" aria-label="Números da plataforma">
                <div className="stat-block">
                  <div className="stat-num">48k+</div>
                  <div className="stat-label">Currículos criados</div>
                </div>
                <div className="stat-block">
                  <div className="stat-num">92%</div>
                  <div className="stat-label">Taxa de aprovação</div>
                </div>
                <div className="stat-block">
                  <div className="stat-num">3 min</div>
                  <div className="stat-label">Tempo médio</div>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Prévia de currículo">
              <div
                className="resume-wrap"
                ref={resumeWrapRef}
                onMouseLeave={handleResumeMouseLeave}
              >
                <div className="float-badge b1">
                  <span className="badge-icon">✦</span>
                  IA otimizando...
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
                      <div className="rc-job-title">
                        Senior Product Designer
                      </div>
                      <div className="rc-job-meta">
                        Nubank · São Paulo · 2022 – Presente
                      </div>
                      <div className="rc-bullet">
                        Redesenhou o fluxo de onboarding, aumentando conversão
                        em 34%
                      </div>
                      <div className="rc-bullet">
                        Liderou equipe de 5 designers em projetos core
                      </div>
                    </div>
                    <div className="rc-job">
                      <div className="rc-job-title">UX Designer</div>
                      <div className="rc-job-meta">
                        iFood · São Paulo · 2019 – 2022
                      </div>
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
          </div>
        </section>

        <section className="brands" aria-label="Currículos aprovados em">
          <span className="brands-label">Currículos aprovados em</span>
          {brands.map((brand) => (
            <div className="brand-pill" key={brand.name}>
              <span
                className="brand-dot"
                style={{ background: brand.color }}
              />
              {brand.name}
            </div>
          ))}
        </section>

        <section className="section" id="como-funciona">
          <div className="reveal">
            <div className="overline">Como funciona</div>
            <h2 className="section-title">
              Três passos para o
              <br />
              <em>currículo perfeito</em>
            </h2>
            <p className="section-sub">
              Sem complicação. Nossa IA cuida de toda a formatação e otimização
              por você.
            </p>
          </div>

          <div className="steps-grid reveal-stagger">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-num">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="features-section" id="modelos">
          <div className="features-inner">
            <div className="features-left reveal">
              <div className="overline">Funcionalidades</div>
              <h2 className="section-title">
                Tudo que você
                <br />
                precisa para <em>se destacar</em>
              </h2>
              <p className="section-sub">
                Ferramentas pensadas para quem quer resultado de verdade na
                busca por emprego.
              </p>

              <div className="feature-list">
                {features.map((feature) => (
                  <div className="feature-item" key={feature.title}>
                    <div className="feature-icon-box">{feature.icon}</div>
                    <div>
                      <div className="feature-text-title">{feature.title}</div>
                      <div className="feature-text-desc">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="templates-panel reveal">
              <div className="templates-kicker">Templates disponíveis</div>
              {templates.map((template, index) => (
                <button
                  className={
                    activeTemplate === index
                      ? "template-thumb active"
                      : "template-thumb"
                  }
                  key={template.name}
                  onClick={() => setActiveTemplate(index)}
                  type="button"
                >
                  <span className="template-preview">
                    <span
                      className="tp-accent"
                      style={
                        { "--template-accent": template.color } as CSSProperties
                      }
                    />
                  </span>
                  <span className="template-info">
                    <span className="template-info-name">{template.name}</span>
                    <span className="template-info-desc">
                      {template.description}
                    </span>
                  </span>
                  {template.badge ? (
                    <span className="template-badge">{template.badge}</span>
                  ) : null}
                </button>
              ))}

              <div className="templates-note">+ 12 templates a caminho</div>
            </div>
          </div>
        </section>

        <section className="testimonials-section" id="depoimentos">
          <div className="testimonials-inner">
            <div className="reveal">
              <div className="overline">Depoimentos</div>
              <h2 className="section-title">
                Quem já usou,
                <br />
                <em>aprovou</em>
              </h2>
            </div>

            <div className="testimonials-grid reveal-stagger">
              {testimonials.map((testimonial) => (
                <article
                  className={
                    testimonial.featured
                      ? "testimonial-card featured"
                      : "testimonial-card"
                  }
                  key={testimonial.name}
                >
                  <div className="test-stars">★★★★★</div>
                  <p className="test-text">&quot;{testimonial.quote}&quot;</p>
                  <div className="test-author">
                    <div
                      className="test-avatar"
                      style={testimonial.avatarStyle}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="test-name">{testimonial.name}</div>
                      <div className="test-role">{testimonial.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-section" id="comunidade">
          <div className="community-inner reveal">
            <div className="overline">Comunidade</div>
            <h2 className="section-title">
              Feedback, exemplos reais e conversas para melhorar sua busca.
            </h2>
            <p className="section-sub">
              Em breve, a comunidade vai reunir revisões de currículo,
              benchmarks de candidatos, repertório de bullets e conversas com
              recrutadores.
            </p>
          </div>
        </section>

        <section className="cta-section" id="criar">
          <div className="cta-glow" />
          <div className="overline">Comece agora</div>
          <h2 className="section-title">
            Pronto para decolar
            <br />
            na sua <em>carreira?</em>
          </h2>
          <p className="section-sub">
            Crie seu primeiro currículo gratuitamente. Sem cartão de crédito.
          </p>
          <div className="cta-actions">
            <a className="btn-cta" href="#inicio">
              ✦ Criar meu currículo grátis
            </a>
            <a className="btn-cta-outline" href="#modelos">
              Ver exemplos
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          open<span>resumes</span>
        </div>
        <p className="footer-copy">© 2026 OpenResumes · Feito no Brasil</p>
        <div className="footer-links">
          <a href="#inicio">Privacidade</a>
          <a href="#inicio">Termos</a>
          <a href="#inicio">Contato</a>
        </div>
      </footer>
    </>
  );
}
