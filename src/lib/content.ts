import type { CSSProperties } from "react";

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Depoimentos", href: "/testimonials" },
  { label: "Comunidade", href: "/community" },
  { label: "Criar Currículo", href: "/create-resume" },
  { label: "Modelos", href: "/templates" },
];

export const brands = [
  { name: "LinkedIn", color: "#0077b5" },
  { name: "Gupy", color: "#ff6900" },
  { name: "Google", color: "#1a73e8" },
  { name: "iFood", color: "#e31837" },
  { name: "Nubank", color: "#8a2be2" },
  { name: "Mercado Livre", color: "#00bfff" },
];

export const steps = [
  {
    number: "01",
    icon: "✎",
    title: "Conte sua história",
    description:
      "Preencha suas experiências, habilidades e formação. Pode ser no braço ou importando direto do LinkedIn.",
  },
  {
    number: "02",
    icon: "✓",
    title: "Organize com clareza",
    description:
      "Escolha um modelo, revise cada seção e deixe o currículo pronto para leitura por recrutadores e sistemas ATS.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Baixe e aplique",
    description:
      "Exporte em PDF profissional ou compartilhe o link online. Adapte para cada vaga com um clique.",
  },
];

export const features = [
  {
    icon: "TXT",
    title: "Editor guiado",
    description:
      "Campos organizados ajudam você a escrever experiências, formação e habilidades sem perder o contexto.",
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

export const templates = [
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

export const testimonials: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  featured?: boolean;
  avatarStyle: CSSProperties;
}[] = [
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
      "Consegui reorganizar minhas experiências e destacar melhor os resultados. O currículo ficou direto e profissional.",
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
