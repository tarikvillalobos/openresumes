const navItems = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Depoimentos", href: "#depoimentos", tag: "Em breve" },
  { label: "Comunidade", href: "#comunidade", tag: "Em breve" },
  { label: "Criar Curriculo", href: "#criar", tag: "Em breve" },
  { label: "Modelos", href: "#modelos" },
];

const steps = [
  {
    number: "01",
    title: "Conte sua historia",
    description:
      "Preencha suas experiencias, formacao e habilidades em um fluxo simples, sem precisar brigar com formatacao.",
  },
  {
    number: "02",
    title: "Refine com IA",
    description:
      "Transforme descricoes soltas em conquistas claras, com verbos fortes, metricas e palavras-chave para cada vaga.",
  },
  {
    number: "03",
    title: "Exporte e envie",
    description:
      "Baixe um PDF profissional, compartilhe um link online e mantenha versoes diferentes para oportunidades diferentes.",
  },
];

const features = [
  "Otimizado para ATS e recrutadores humanos",
  "Modelos por area, senioridade e objetivo",
  "Sugestoes de texto baseadas na vaga",
  "Link publico para compartilhar seu perfil",
];

const templates = [
  { name: "Moderno", detail: "Terracota, editorial e direto", accent: "#c95c3a" },
  { name: "Executivo", detail: "Azul, limpo e corporativo", accent: "#2563eb" },
  { name: "Minimalista", detail: "Verde, tecnico e compacto", accent: "#059669" },
  { name: "Criativo", detail: "Grafite, portfolio e impacto", accent: "#6d5dfc" },
];

const testimonials = [
  {
    quote:
      "Consegui sair de um curriculo generico para uma versao com impacto real. Ficou muito mais facil explicar meu valor.",
    name: "Mariana Costa",
    role: "UX Designer",
  },
  {
    quote:
      "A estrutura deixou minhas experiencias mais claras e a versao para vaga especifica ficou pronta em poucos minutos.",
    name: "Rafael Mendes",
    role: "Desenvolvedor Backend",
    featured: true,
  },
  {
    quote:
      "O visual ficou profissional sem parecer exagerado. Recebi comentarios positivos logo nas primeiras candidaturas.",
    name: "Juliana Ramos",
    role: "Product Manager",
  },
];

export default function Home() {
  return (
    <main className="landing-shell">
      <nav className="site-nav" aria-label="Navegacao principal">
        <a className="brand" href="#inicio" aria-label="OpenResumes inicio">
          <span className="brand-mark" aria-hidden="true">
            OR
          </span>
          <span className="brand-name">
            open<span>resumes</span>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={item.active ? "active" : undefined}
              href={item.href}
            >
              {item.label}
              {item.tag ? <span>{item.tag}</span> : null}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-login" href="#depoimentos">
            Ver prova social
          </a>
          <a className="nav-cta" href="#criar">
            Comecar gratis
          </a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Curriculos online com IA</p>
          <h1>
            Seu curriculo pronto para competir pelas melhores vagas.
          </h1>
          <p className="hero-description">
            Crie, refine e publique um curriculo profissional em minutos. O
            OpenResumes ajuda voce a transformar experiencia em narrativa clara,
            visual elegante e versoes adaptadas para cada candidatura.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#criar">
              Criar meu curriculo
            </a>
            <a className="secondary-button" href="#modelos">
              Ver modelos
            </a>
          </div>
          <dl className="hero-stats" aria-label="Indicadores da plataforma">
            <div>
              <dt>3 min</dt>
              <dd>para gerar uma primeira versao</dd>
            </div>
            <div>
              <dt>ATS</dt>
              <dd>estrutura pronta para filtros automaticos</dd>
            </div>
            <div>
              <dt>PDF</dt>
              <dd>download e link compartilhavel</dd>
            </div>
          </dl>
        </div>

        <div className="resume-stage" aria-label="Previa de curriculo">
          <div className="resume-note note-top">IA revisando impacto</div>
          <div className="resume-card">
            <div className="resume-header">
              <div>
                <p className="resume-name">Ana Beatriz Silva</p>
                <p className="resume-role">Product Designer</p>
              </div>
              <div className="resume-score">92%</div>
            </div>
            <div className="resume-contact">
              <span>Sao Paulo</span>
              <span>ana@email.com</span>
              <span>portfolio.dev</span>
            </div>
            <div className="resume-section">
              <p className="resume-section-title">Experiencia</p>
              <div className="resume-job">
                <strong>Senior Product Designer</strong>
                <span>Nubank · 2022 - atual</span>
                <p>
                  Redesenhou o onboarding e elevou a conversao em 34% com
                  pesquisa, prototipagem e testes A/B.
                </p>
              </div>
              <div className="resume-job">
                <strong>UX Designer</strong>
                <span>iFood · 2019 - 2022</span>
                <p>
                  Criou componentes reutilizaveis para tres times de produto e
                  reduziu retrabalho de design.
                </p>
              </div>
            </div>
            <div className="resume-section">
              <p className="resume-section-title">Habilidades</p>
              <div className="resume-tags">
                <span>Figma</span>
                <span>Pesquisa UX</span>
                <span>Design Systems</span>
                <span>Metricas</span>
              </div>
            </div>
          </div>
          <div className="resume-note note-bottom">Pronto para download</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Onde usar o curriculo">
        <span>Feito para candidaturas em</span>
        <strong>LinkedIn</strong>
        <strong>Gupy</strong>
        <strong>Greenhouse</strong>
        <strong>Lever</strong>
        <strong>Indeed</strong>
      </section>

      <section className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Tres passos para sair do rascunho e chegar no envio.</h2>
          <p>
            A experiencia foi pensada para quem quer resultado rapido sem abrir
            mao de um curriculo bem escrito e bem apresentado.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="modelos">
        <div className="feature-copy">
          <p className="eyebrow">Modelos</p>
          <h2>Layouts profissionais sem cara de template generico.</h2>
          <p>
            Comece com um estilo pronto e ajuste o tom para tech, produto,
            operacoes, marketing ou carreira executiva.
          </p>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="template-list">
          {templates.map((template, index) => (
            <article className="template-row" key={template.name}>
              <div
                className="template-preview"
                style={{ "--accent": template.accent } as React.CSSProperties}
              >
                <span />
                <i />
              </div>
              <div>
                <h3>{template.name}</h3>
                <p>{template.detail}</p>
              </div>
              {index === 0 ? <strong>Popular</strong> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="depoimentos">
        <div className="section-heading">
          <p className="eyebrow">Depoimentos</p>
          <h2>Historias de quem transformou experiencia em oportunidade.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className={
                testimonial.featured
                  ? "testimonial-card featured"
                  : "testimonial-card"
              }
              key={testimonial.name}
            >
              <p>&quot;{testimonial.quote}&quot;</p>
              <div>
                <span>{testimonial.name.charAt(0)}</span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="community-band" id="comunidade">
        <div>
          <p className="eyebrow">Comunidade</p>
          <h2>Aprenda com outras pessoas em transicao, crescimento e recolocacao.</h2>
        </div>
        <p>
          Em breve, a comunidade vai reunir feedbacks de curriculo, exemplos
          reais, conversas com recrutadores e trilhas para melhorar sua busca.
        </p>
      </section>

      <section className="final-cta" id="criar">
        <p className="eyebrow">Comece agora</p>
        <h2>Seu proximo curriculo pode nascer hoje.</h2>
        <p>
          A primeira versao da plataforma esta chegando. Por enquanto, esta
          landing abre o caminho para o criador, modelos e comunidade.
        </p>
        <a className="primary-button" href="#inicio">
          Entrar na lista de espera
        </a>
      </section>
    </main>
  );
}
