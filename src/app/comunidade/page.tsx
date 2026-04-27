import { PageHero, PageRevealEffects } from "@/components/sections";

const communityItems = [
  {
    title: "Revisões de currículo",
    description:
      "Espaço para receber feedback objetivo sobre estrutura, clareza e impacto do seu currículo.",
  },
  {
    title: "Exemplos reais",
    description:
      "Referências de bullets, seções e formatos para diferentes níveis de carreira e áreas.",
  },
  {
    title: "Conversas com recrutadores",
    description:
      "Discussões práticas sobre triagem, ATS, entrevistas e expectativas de cada processo seletivo.",
  },
];

export default function ComunidadePage() {
  return (
    <main className="page-main">
      <PageRevealEffects />
      <PageHero
        overline="Comunidade"
        title={
          <>
            Um espaço para melhorar sua busca com <em>feedback real</em>.
          </>
        }
      >
        A comunidade vai reunir candidatos, mentores e recrutadores em torno de
        exemplos concretos, revisões úteis e conversas sobre carreira.
      </PageHero>

      <section className="section page-section">
        <div className="page-card-grid reveal-stagger">
          {communityItems.map((item) => (
            <article className="step-card" key={item.title}>
              <h2 className="step-title">{item.title}</h2>
              <p className="step-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
