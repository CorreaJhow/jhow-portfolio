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
  /** Logo do cliente (opcional). Quando ausente, o card usa só texto. */
  logoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CtaHighlight {
  title: string;
  description: string;
  items: string[];
}

export interface LinkItem {
  label: string;
  url: string;
}

export const profile: Profile = {
  name: "Jhow Corrêa",
  role: "Desenvolvedor",
  tagline:
    "Sites, sistemas e automações sob medida, pensados pra gerar resultado de verdade. Atendo negócios e profissionais da região 016 e, remoto, o Brasil inteiro. Você só decide depois de ver o trabalho quase pronto: sem lorem ipsum, sem risco.",
  pitch: "A ferramenta é só o meio. O resultado é o que importa.",
  bio: [
    "Sou desenvolvedor há aproximadamente 4 anos. Já atuei em sistemas de bancos e em soluções usadas por empresas do setor de aviação, e hoje aplico essa mesma bagagem em sites, sistemas e automações sob medida pra negócios e profissionais que precisam de presença online de verdade.",
    "Prefiro ser direto: gosto de processo enxuto, prévia real antes de fechar orçamento e comunicação sem intermediário. Fora do teclado, toco contrabaixo.",
  ],
  email: "jhonatasrcorrea@gmail.com",
  whatsapp: "5516988071129",
  whatsappMessage: "Olá! Vi seu site e quero saber mais sobre criar um site ou sistema pro meu negócio.",
  location: {
    region: "Região 016",
    remote: true,
  },
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
  {
    title: "Sistemas e automações sob medida",
    description:
      "Gestão, envio de arquivos, integrações: quando o negócio precisa de mais que um site, construo o sistema do jeito que seu processo pede.",
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

export const ctaHighlight: CtaHighlight = {
  title: "Quer ver como fica o seu?",
  description:
    "Me manda uma mensagem contando sobre o seu negócio. Eu te devolvo uma prévia real, sem compromisso.",
  items: [
    "Prévia gratuita antes de decidir",
    "SEO, LGPD e segurança inclusos",
    "Região 016 e remoto",
    "Suporte depois da entrega",
  ],
};

export const stats: Stat[] = [
  { label: "Prévia real antes de orçar" },
  { label: "SEO, LGPD e segurança inclusos" },
  { label: "Região 016 e remoto" },
  { label: "Resposta rápida por WhatsApp" },
  { label: "Direto comigo, sem intermediário" },
  { label: "Código aberto, sem caixa-preta" },
  { label: "Sites e sistemas rápidos" },
  { label: "Mais de 4 anos de experiência" },
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
      "Sistema de gerenciamento e envio de fotos, feito sob medida pra uma necessidade específica de impressão expressa.",
    link: "https://www.instagram.com/felipemartinsfoto/",
    tags: ["Sistema", "Gestão de fotos"],
  },
  {
    title: "Sorria Fotos Instantâneas",
    description:
      "Outro sistema de gerenciamento e impressão de fotos, com um fluxo próprio pensado pra uma necessidade específica diferente da do Felipe Fotos — mesma categoria, abordagem própria.",
    link: "https://www.instagram.com/sorriafotosinstantaneas/",
    tags: ["Sistema", "Gestão de fotos"],
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
