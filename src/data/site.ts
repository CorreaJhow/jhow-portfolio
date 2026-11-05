// ============================================================
// Conteúdo do site — edite tudo aqui, sem mexer nos componentes.
// ============================================================

export interface Profile {
  name: string;
  role: string;
  /** Título grande do Hero, falando com o dono do negócio. A palavra entre * * sai em vermelho. */
  headline: string;
  /** Frases do anel que gira em volta da foto. */
  ring: string[];
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
  headline: "Sites que trazem *cliente* pro seu negócio.",
  ring: ["sites", "sistemas", "automações", "café"],
  tagline:
    "Site, agendamento online e Google Meu Negócio pra barbearia, restaurante, loja e clínica. Eu monto uma demonstração do seu site antes de você pagar qualquer coisa.",
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

export interface Produto {
  nome: string;
  pra: string;
  itens: string[];
  /** Mensagem pré-preenchida do WhatsApp quando a pessoa clica em "Quero esse". */
  mensagem: string;
  destaque?: string;
}

// Produtos: sem preço nem % publicados. O desconto da Black Friday é passado no WhatsApp, só pra quem chamar.
export const produtos: Produto[] = [
  {
    nome: "Site profissional",
    pra: "Pra ser achado no Google e chamado no WhatsApp.",
    itens: [
      "Páginas do seu negócio: serviços ou cardápio, fotos, horário e endereço",
      "Botão de WhatsApp em todas as páginas",
      "Pronto pro Google e pras IAs (ChatGPT, Gemini)",
      "Domínio e contas no seu nome",
    ],
    mensagem: "Oi Jhow! Vi a Black Friday e quero o Site profissional com desconto. Meu negócio é: ",
  },
  {
    nome: "Site + agendamento",
    pra: "Pra barbearia, salão, clínica e estúdio.",
    itens: [
      "Tudo do Site profissional",
      "Cliente escolhe o horário sozinho, 24h por dia",
      "Cada marcação cai direto no seu Google Agenda",
      "Menos tempo respondendo \"tem horário hoje?\"",
    ],
    mensagem: "Oi Jhow! Vi a Black Friday e quero o Site + agendamento com desconto. Meu negócio é: ",
    destaque: "ideal pra quem trabalha com horário",
  },
  {
    nome: "Google Meu Negócio",
    pra: "Pra aparecer no Maps quando procuram perto.",
    itens: [
      "Perfil criado ou arrumado do jeito certo",
      "Fotos, horário, telefone e link pro site",
      "Categoria e descrição pra busca da sua cidade",
      "De bônus pra quem fechar site até 30/11",
    ],
    mensagem: "Oi Jhow! Vi a Black Friday e quero arrumar meu Google Meu Negócio. Meu negócio é: ",
  },
];

/** Números públicos com fonte. Nada inventado: se trocar, mantenha o link da fonte. */
export const numeros = [
  {
    valor: 97,
    sufixo: "%",
    texto: "dos brasileiros que usam internet pesquisam online antes de comprar numa loja física.",
    fonte: "CNDL/SPC Brasil, 2019",
    url: "https://www.moneytimes.com.br/internautas-buscam-informacoes-online-antes-de-comprar-em-lojas-fisicas-diz-pesquisa/",
  },
  {
    valor: 81,
    sufixo: "%",
    texto: "das pessoas usaram o Google pra avaliar um negócio local.",
    fonte: "BrightLocal, pesquisa 2022 (dado de 2021)",
    url: "https://www.brightlocal.com/research/local-consumer-review-survey-2022/",
  },
  {
    valor: 2.7,
    sufixo: "x",
    texto: "mais chance de o cliente achar seu negócio confiável quando o perfil no Google está completo.",
    fonte: "Google",
    url: "https://support.google.com/business/answer/10515606",
  },
];

/** Demonstrações no ar (prints da página inteira em assets/demos, rolam dentro do celular). */
export const demos = [
  { nome: "Marmitaria São Bento", tipo: "marmitaria · delivery", url: "https://marmitaria-sao-bento.vercel.app", img: "saobento" },
] as const;

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

// ============================================================
// Black Friday 2026 — "veja primeiro, depois decida". Desconto sem valor publicado (o Jhow passa no WhatsApp)
// (vale pra quem chamar até `ate`; propostas já enviadas seguem como estão). Some sozinho depois de `ate`.
// ============================================================
export const blackFriday = {
  ate: "2026-11-30",
  barra: "desconto especial + demonstração grátis pra quem me chamar até 30/11",
  titulo: "seu site pronto pra ver antes de pagar.",
  subtitulo:
    "Na Black Friday eu monto uma demonstração real do site do seu negócio e te mando o orçamento, de graça. Gostou, fechamos. Não gostou, não paga nada.",
  beneficios: [
    { titulo: "Demonstração grátis", texto: "Site de verdade, com a cara do seu negócio. Nada de modelo genérico ou lorem ipsum." },
    { titulo: "Orçamento grátis e claro", texto: "Preço e prazo por escrito, sem letra miúda." },
    { titulo: "Só paga se aprovar", texto: "Não gostou da demonstração? Tudo bem. Sem cobrança e sem chateação." },
    { titulo: "Aparece no Google", texto: "Google Meu Negócio configurado de bônus e SEO local pra ser achado na sua cidade." },
    { titulo: "Recomendado pela IA", texto: "Estrutura pensada pra ChatGPT e Gemini indicarem seu negócio." },
    { titulo: "Botão de WhatsApp", texto: "Cliente clica e já cai na sua conversa, pronto pra pedir ou agendar." },
    { titulo: "Perfeito no celular", texto: "Testado em celular, tablet e computador antes de ir ao ar." },
    { titulo: "Tudo no seu nome", texto: "Domínio e contas são seus. Você não fica preso a mim." },
    { titulo: "Dentro da LGPD", texto: "Política de privacidade e proteção contra spam inclusas." },
    { titulo: "Sistemas pequenos", texto: "Agenda, cardápio, painel: 1º mês de suporte grátis de bônus." },
  ],
  passos: [
    { titulo: "Você me chama", texto: "Nome do negócio e o que você vende. Só isso. Foto e texto não são obrigatórios." },
    { titulo: "Eu monto a demonstração", texto: "Em poucos dias você recebe o link do site funcionando + o orçamento." },
    { titulo: "Você decide", texto: "Gostou, a gente fecha e coloca no ar. Não gostou, fica por isso mesmo." },
  ],
  faq: [
    { q: "É grátis mesmo?", a: "É. A demonstração e o orçamento não custam nada e não te obrigam a nada." },
    { q: "E se eu não gostar?", a: "Você não paga. Se quiser, eu ajusto a ideia e mando outra versão." },
    { q: "Atende fora de Araraquara?", a: "Sim. Atendo a região 016 e o Brasil inteiro, por WhatsApp e chamada." },
  ],
  rodape: "Demonstrações por ordem de chegada. Desconto e bônus valem pra quem me chamar até 30/11 e fechar o projeto.",
  whatsappMessage: "Oi Jhow! Vi a Black Friday no seu site e quero a demonstração grátis do meu site. Meu negócio é: ",
};
