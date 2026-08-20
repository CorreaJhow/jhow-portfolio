// ============================================================
// Conteúdo do site — edite tudo aqui, sem mexer nos componentes.
// ============================================================

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  /** Número em formato E.164 sem "+", pronto pra montar link wa.me. */
  whatsapp: string;
  whatsappMessage: string;
  location: {
    city: string;
    state: string;
    country: string;
    remote: boolean;
  };
}

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export const profile: Profile = {
  name: "Jhow Corrêa",
  role: "Desenvolvedor de sites para negócios locais",
  tagline:
    "Crio sites rápidos e sob medida pra pequenos negócios — de Ribeirão Preto (SP) pra qualquer lugar do Brasil, remoto. Você vê o site quase pronto antes de decidir: sem lorem ipsum, sem risco.",
  bio: [
    "Sou desenvolvedor e crio sites para pequenos negócios locais — marmitarias, barbearias e afins — do zero até o ar: estrutura, conteúdo, SEO básico, LGPD e hospedagem.",
    "Trabalho com processo enxuto: prévia real antes de fechar orçamento, entrega rápida e comunicação direta comigo, sem intermediário e sem enrolação.",
  ],
  email: "jhonatasrcorrea@gmail.com",
  whatsapp: "5516988071129",
  whatsappMessage: "Olá! Vi seu site e quero saber mais sobre criar um site pro meu negócio.",
  location: {
    city: "Ribeirão Preto",
    state: "SP",
    country: "BR",
    remote: true,
  },
};

export const services: Service[] = [
  {
    title: "Site institucional",
    description:
      "Site completo pro seu negócio: home, sobre, serviços/cardápio e contato. Rápido, responsivo e pronto pra converter.",
  },
  {
    title: "Prévia antes de orçar",
    description:
      "Você vê o site quase pronto antes de decidir. Sem risco, sem lorem ipsum — só depois de aprovar é que fechamos escopo e preço.",
  },
  {
    title: "SEO, LGPD e segurança",
    description:
      "Todo site sai com SEO básico, páginas legais em conformidade com a LGPD e proteção contra spam em formulários.",
  },
];

export const howItWorks: ProcessStep[] = [
  {
    title: "Prévia real",
    description: "Você vê o site quase pronto antes de decidir — sem lorem ipsum, sem compromisso.",
  },
  {
    title: "Escopo e orçamento",
    description: "Só depois de aprovar a prévia fechamos escopo e preço, sem letra miúda.",
  },
  {
    title: "Build completo",
    description: "SEO básico, LGPD e segurança entram no pacote — não são extras escondidos no orçamento.",
  },
  {
    title: "No ar + suporte",
    description: "Publico, confirmo que tudo funciona e fico disponível pra ajustes depois da entrega.",
  },
];

export const stats: Stat[] = [
  { label: "Prévia real antes de orçar" },
  { label: "SEO, LGPD e segurança inclusos" },
  { label: "Ribeirão Preto (SP) e remoto" },
  { label: "Resposta rápida por WhatsApp" },
];

// TODO: assim que os próximos projetos forem ao ar, troque o card "Em breve".
export const projects: Project[] = [
  {
    title: "Kefa Barbearia",
    description: "Site institucional para barbearia local: serviços, horário de funcionamento e contato direto.",
    link: "https://kefa-barbearia.vercel.app",
    tags: ["Site institucional", "Barbearia"],
  },
  {
    title: "Felipe Fotos",
    description:
      "Software simples feito de presente para um fotógrafo — fora do escopo de site institucional, só pra ajudar no dia a dia do trabalho dele.",
    link: "",
    tags: ["Presente", "Software"],
  },
  {
    title: "Em breve",
    description: "Novos projetos entram aqui assim que forem publicados.",
    link: "",
    tags: [],
  },
];

export const faq: FaqItem[] = [
  {
    question: "Quanto custa um site?",
    answer:
      "Depende do escopo, mas todo projeto começa com uma prévia real antes de qualquer cobrança — você só decide o valor depois de ver o site quase pronto.",
  },
  {
    question: "Quanto tempo leva pra ficar pronto?",
    answer:
      "Sites institucionais simples costumam sair em poucas semanas após você aprovar a prévia e enviar o conteúdo final (textos, fotos, horários).",
  },
  {
    question: "Vocês atendem só Ribeirão Preto?",
    answer:
      "Atendo presencialmente em Ribeirão Preto (SP) e remoto pra qualquer lugar do Brasil — todo o processo (prévia, ajustes, entrega) funciona bem à distância.",
  },
  {
    question: "O site sai pronto pra aparecer no Google?",
    answer:
      "Sim — todo projeto sai com SEO básico, conformidade com a LGPD e proteção de segurança inclusos, sem custo extra escondido.",
  },
];

export const links: LinkItem[] = [
  { label: "GitHub", url: "https://github.com/CorreaJhow" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jhonatas-r-correa/" },
  { label: "Instagram", url: "https://www.instagram.com/jhow_correa/" },
  { label: "Facebook", url: "https://www.facebook.com/jhonatas.correa/" },
  { label: "WhatsApp", url: "https://wa.me/5516988071129" },
  { label: "E-mail", url: "mailto:jhonatasrcorrea@gmail.com" },
];
