import type { CSSProperties } from "react";
import {
  FeaturesSection,
  PageHero,
  PageRevealEffects,
} from "@/components/sections";
import { templates } from "@/lib/content";

export default function ModelosPage() {
  return (
    <main className="page-main">
      <PageRevealEffects />
      <PageHero
        overline="Modelos"
        title={
          <>
            Templates para apresentar sua carreira com <em>clareza</em>.
          </>
        }
      >
        Escolha entre modelos modernos, executivos e minimalistas, com estrutura
        pensada para leitura rápida e compatibilidade com sistemas ATS.
      </PageHero>

      <section className="section page-section">
        <div className="models-grid reveal-stagger">
          {templates.map((template) => (
            <article className="model-card" key={template.name}>
              <span className="template-preview model-preview">
                <span
                  className="tp-accent"
                  style={
                    { "--template-accent": template.color } as CSSProperties
                  }
                />
              </span>
              <h2 className="step-title">{template.name}</h2>
              <p className="step-desc">{template.description}</p>
              {template.badge ? (
                <span className="template-badge model-badge">
                  {template.badge}
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <FeaturesSection />
    </main>
  );
}
