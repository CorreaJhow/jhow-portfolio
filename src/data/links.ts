// ============================================================
// Conteúdo da página de links (links.jhow.me) — edite tudo aqui.
// Pra publicar um item "Em breve": troque status por "live" e preencha a url.
// ============================================================

import { getWhatsappHref } from "../lib/whatsapp";

export type LinkIcon =
  | "whatsapp"
  | "globe"
  | "mail"
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "code"
  | "bass"
  | "prompts"
  | "course";

export interface HubLink {
  label: string;
  description?: string;
  /** Obrigatória quando status é "live". */
  url?: string;
  icon: LinkIcon;
  status: "live" | "soon";
  /** Destaque visual (botão principal). */
  featured?: boolean;
}

export interface HubSection {
  title: string;
  links: HubLink[];
}

export const hubProfile = {
  name: "Jhow Corrêa",
  tagline: "Dev de sites e sistemas. Fora do teclado, toco baixo.",
};

export const hubSections: HubSection[] = [
  {
    title: "Contrate",
    links: [
      {
        label: "Orçamento grátis de site ou sistema",
        description: "Você vê uma prévia real antes de decidir. Resposta rápida.",
        url: getWhatsappHref("Olá! Vim pelo seu Instagram e quero um orçamento grátis de site ou sistema."),
        icon: "whatsapp",
        status: "live",
        featured: true,
      },
      {
        label: "Ver portfólio",
        description: "Serviços, projetos e como eu trabalho.",
        url: "https://jhow.me",
        icon: "globe",
        status: "live",
      },
      {
        label: "Contato por e-mail",
        url: "mailto:jhonatasrcorrea@gmail.com",
        icon: "mail",
        status: "live",
      },
    ],
  },
  {
    title: "Pra estudar",
    links: [
      {
        label: "Skills do Claude Code",
        description: "Repositório aberto com skills pra a comunidade usar.",
        icon: "code",
        status: "soon",
      },
      {
        label: "Prompts e materiais",
        description: "Prompts prontos e conteúdo pra acelerar seus estudos.",
        icon: "prompts",
        status: "soon",
      },
      {
        label: "Estudos de baixo",
        description: "Material pra quem toca ou quer começar.",
        icon: "bass",
        status: "soon",
      },
    ],
  },
  {
    title: "Cursos e materiais",
    links: [
      {
        label: "Meus cursos",
        description: "Em produção. Entra aqui assim que sair.",
        icon: "course",
        status: "soon",
      },
    ],
  },
  {
    title: "Redes",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/jhow_correa/", icon: "instagram", status: "live" },
      { label: "GitHub", url: "https://github.com/CorreaJhow", icon: "github", status: "live" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jhonatas-r-correa/", icon: "linkedin", status: "live" },
      { label: "Facebook", url: "https://www.facebook.com/jhonatas.correa/", icon: "facebook", status: "live" },
    ],
  },
];
