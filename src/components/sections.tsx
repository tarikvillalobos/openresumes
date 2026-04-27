import Link from "next/link";
import type { ReactNode } from "react";
import { brands, features, steps, testimonials } from "@/lib/content";
import { RevealEffects } from "./reveal-effects";
import { ResumePreview } from "./resume-preview";
import { TemplateSelector } from "./template-selector";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Novo · Currículos online
          </div>

          <h1>
            Seu currículo,
            <br />
            <em>impecável</em> em
            <br />
            <span className="line-stroke">minutos</span>
          </h1>

          <p className="hero-desc">
            Crie currículos profissionais que se destacam com modelos elegantes,
            edição guiada e exportação pronta para cada vaga que você quiser.
          </p>

          <div className="hero-actions">
            <Link className="btn-hero" href="/create-resume">
              ✦ Criar meu currículo
            </Link>
            <Link className="btn-ghost-hero" href="/templates">
              <span className="play-btn" aria-hidden="true">
                <svg width="10" height="12" viewBox="0 0 10 12">
                  <path d="M0 0v12l10-6L0 0Z" />
                </svg>
              </span>
              Ver modelos
            </Link>
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

        <ResumePreview />
      </div>
    </section>
  );
}

export function BrandsStrip() {
  return (
    <section className="brands" aria-label="Currículos aprovados em">
      <span className="brands-label">Currículos aprovados em</span>
      {brands.map((brand) => (
        <div className="brand-pill" key={brand.name}>
          <span className="brand-dot" style={{ background: brand.color }} />
          {brand.name}
        </div>
      ))}
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="section">
      <div className="reveal">
        <div className="overline">Como funciona</div>
        <h2 className="section-title">
          Três passos para o
          <br />
          <em>currículo perfeito</em>
        </h2>
        <p className="section-sub">
          Sem complicação. Você preenche as informações, escolhe um modelo e
          mantém tudo pronto para exportar.
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
  );
}

export function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-inner">
        <div className="features-left reveal">
          <div className="overline">Funcionalidades</div>
          <h2 className="section-title">
            Tudo que você
            <br />
            precisa para <em>se destacar</em>
          </h2>
          <p className="section-sub">
            Ferramentas pensadas para quem quer resultado de verdade na busca
            por emprego.
          </p>

          <div className="feature-list">
            {features.map((feature) => (
              <div className="feature-item" key={feature.title}>
                <div className="feature-icon-box">{feature.icon}</div>
                <div>
                  <div className="feature-text-title">{feature.title}</div>
                  <div className="feature-text-desc">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TemplateSelector />
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="reveal">
          <div className="overline">Depoimentos</div>
          <h2 className="section-title">
            Quem já usou,
            <br />
            <em>aprovou</em>
          </h2>
        </div>

        <TestimonialsGrid />
      </div>
    </section>
  );
}

export function TestimonialsGrid() {
  return (
    <div className="testimonials-grid reveal-stagger">
      {testimonials.map((testimonial) => (
        <article
          className={
            testimonial.featured ? "testimonial-card featured" : "testimonial-card"
          }
          key={testimonial.name}
        >
          <div className="test-stars">★★★★★</div>
          <p className="test-text">&quot;{testimonial.quote}&quot;</p>
          <div className="test-author">
            <div className="test-avatar" style={testimonial.avatarStyle}>
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
  );
}

export function CommunitySection() {
  return (
    <section className="community-section">
      <div className="community-inner reveal">
        <div className="overline">Comunidade</div>
        <h2 className="section-title">
          Feedback, exemplos reais e conversas para melhorar sua busca.
        </h2>
        <p className="section-sub">
          Em breve, a comunidade vai reunir revisões de currículo, benchmarks de
          candidatos, repertório de bullets e conversas com recrutadores.
        </p>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-section">
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
        <Link className="btn-cta" href="/create-resume">
          ✦ Criar meu currículo grátis
        </Link>
        <Link className="btn-cta-outline" href="/templates">
          Ver exemplos
        </Link>
      </div>
    </section>
  );
}

export function PageHero({
  overline,
  title,
  children,
}: {
  overline: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="overline">{overline}</div>
        <h1 className="page-title">{title}</h1>
        <p className="page-desc">{children}</p>
      </div>
    </section>
  );
}

export function PageRevealEffects() {
  return <RevealEffects />;
}
