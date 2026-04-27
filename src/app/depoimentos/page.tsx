import {
  PageHero,
  PageRevealEffects,
  TestimonialsGrid,
} from "@/components/sections";

export default function DepoimentosPage() {
  return (
    <main className="page-main">
      <PageRevealEffects />
      <PageHero
        overline="Depoimentos"
        title={
          <>
            Histórias de quem já deixou o currículo <em>mais competitivo</em>.
          </>
        }
      >
        Resultados reais de profissionais que organizaram melhor suas
        experiências, destacaram conquistas e chegaram com mais confiança nas
        entrevistas.
      </PageHero>

      <section className="section page-section">
        <TestimonialsGrid />
      </section>
    </main>
  );
}
