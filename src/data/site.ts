// ============================================================
// Conteúdo do site — edite tudo aqui, sem mexer nos componentes.
// ============================================================

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  /** Frase de efeito curta, exibida em destaque logo abaixo da tagline. */
  pitch: string;
  bio: string[];
  email: string;
  /** Número em formato E.164 sem "+", pronto pra montar link wa.me. */
  whatsapp: string;
  whatsappMessage: string;
  location: {
    region: string;
    remote: boolean;
  };
  /** Link do repositório deste site, usado como prova de trabalho no About/Footer. */
  repoUrl: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface IncludedItem {
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
  role: "Desenvolvedor",
  tagline:
    "Crio sites, sistemas e automações sob medida pra negócios e profissionais da região 016, ou remoto pra qualquer lugar do Brasil. Você vê o resultado quase pronto antes de decidir, sem lorem ipsum e sem risco.",
  pitch: "Eu não entrego sites. Entrego resultados.",
  bio: [
    "Sou desenvolvedor há mais de 4 anos e crio sites, sistemas e automações sob medida pra negócios e profissionais que precisam de presença online de verdade.",
    "Fora do teclado, toco contrabaixo. No trabalho, gosto de processo enxuto: prévia real antes de fechar orçamento, entrega rápida e comunicação direta comigo, sem intermediário.",
  ],
  email: "jhonatasrcorrea@gmail.com",
  whatsapp: "5516988071129",
  whatsappMessage: "Olá! Vi seu site e quero saber mais sobre criar um site pro meu negócio.",
  location: {
    region: "Região 016",
    remote: true,
  },
  repoUrl: "https://github.com/CorreaJhow/jhow-portfolio",
};

export const services: Service[] = [
  {
    title: "Site que gera resultado",
    description:
      "Página inicial, sobre, serviços ou cardápio e contato: tudo pensado pra transformar visita em cliente, não só pra existir.",
  },
  {
    title: "Você decide vendo, não arriscando",
    description:
      "Antes de qualquer cobrança, você vê o site quase pronto. Sem lorem ipsum, sem letra miúda: só fecha quando gostar do que viu.",
  },
  {
    title: "Tudo incluso, nada escondido",
    description:
      "SEO básico, conformidade com a LGPD e proteção contra spam já vêm no pacote, sem custo extra depois.",
  },
];

export const included: IncludedItem[] = [
  {
    title: "Prévia gratuita antes de decidir",
    description: "Você só assume compromisso depois de ver o site quase pronto, sem pagar nada antes.",
  },
  {
    title: "Orçamento sem letra miúda",
    description: "Preço e prazo claros desde o início, sem surpresa na hora de fechar.",
  },
  {
    title: "Pensado pra aparecer no Google e na IA",
    description:
      "SEO básico e estrutura pensada pra ferramentas como ChatGPT e Perplexity recomendarem seu negócio.",
  },
  {
    title: "Dentro da LGPD",
    description: "Política de privacidade e termos de uso adequados à lei, sem dor de cabeça jurídica.",
  },
  {
    title: "Testado antes de ir ao ar",
    description:
      "Revisão em celular, tablet e desktop, headers de segurança e proteção contra spam configurados antes do lançamento.",
  },
  {
    title: "Suporte depois da entrega",
    description: "Fico disponível pra ajustes e te ensino o básico, sem te deixar dependente de mim pra tudo.",
  },
];

export const stats: Stat[] = [
  { label: "Prévia real antes de orçar" },
  { label: "SEO, LGPD e segurança inclusos" },
  { label: "Região 016 e remoto" },
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
      "Software de gerenciamento e envio de fotos, feito sob medida pra uma necessidade específica de impressão expressa.",
    link: "",
    tags: ["Software"],
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
      "Depende do escopo, mas todo projeto começa com uma prévia real antes de qualquer cobrança. Você só decide o valor depois de ver o site quase pronto.",
  },
  {
    question: "Quanto tempo leva pra ficar pronto?",
    answer:
      "Sites institucionais simples costumam sair em poucas semanas após você aprovar a prévia e enviar o conteúdo final (textos, fotos, horários).",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Como você só decide depois de ver a prévia pronta, não tem risco. Se não fizer sentido pra você, não rola cobrança nenhuma.",
  },
  {
    question: "O site sai pronto pra aparecer no Google?",
    answer:
      "Sim. Todo projeto sai com SEO básico, conformidade com a LGPD e proteção de segurança inclusos, sem custo extra escondido.",
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
