import Link from "next/link";
import {
  PageHero,
  PageRevealEffects,
  StepsSection,
} from "@/components/sections";
import { features } from "@/lib/content";

export default function CriarCurriculoPage() {
  return (
    <main className="page-main">
      <PageRevealEffects />
      <PageHero
        overline="Criar currículo"
        title={
          <>
            Monte seu currículo com um fluxo <em>simples e guiado</em>.
          </>
        }
      >
        Preencha os dados essenciais, escolha um modelo profissional e deixe o
        arquivo pronto para exportar quando quiser aplicar para uma vaga.
      </PageHero>

      <section className="section page-section">
        <div className="feature-list page-feature-list reveal">
          {features.map((feature) => (
            <div className="feature-item page-feature-item" key={feature.title}>
              <div className="feature-icon-box">{feature.icon}</div>
              <div>
                <div className="feature-text-title">{feature.title}</div>
                <div className="feature-text-desc">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="page-actions reveal">
          <Link className="btn-hero" href="/templates">
            Escolher modelo
          </Link>
          <Link className="btn-ghost-light" href="/testimonials">
            Ver depoimentos
          </Link>
        </div>
      </section>

      <StepsSection />
    </main>
  );
}
