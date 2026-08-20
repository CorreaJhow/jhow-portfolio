---
name: site-builder
description: Guia o processo completo de finalização de um site para cliente, do código-base (herdado do client-demo ou do zero) ao pronto para deploy, já integrando SEO, LGPD e escolha de componentes. Use sempre que o usuário pedir para criar, montar, finalizar ou desenvolver um site novo para um cliente (ex.: marmitaria, barbearia), estruturar páginas, ou avançar um projeto depois da proposta aceita.
---

# Site Builder — finalização do site para cliente

Você conduz a etapa de construção/finalização do site, depois que `client-proposal` fechou escopo e preço. **Antes de começar do zero, confirme se já existe um código-base gerado pela skill `client-demo`** — se o lead viu uma prévia e topou, o projeto já existe (mesma stack, sitemap, componentes escolhidos) e o trabalho aqui é *completar e aprofundar* esse código, não recomeçar. Só monte um projeto inteiramente novo se não houver `client-demo` prévio (ex.: cliente que já chegou pedindo orçamento direto, sem passar pela prévia).

Esta skill amarra as outras: usa `component-picker` (se ainda não tiver sido rodado pelo `client-demo`), e prepara o terreno para `seo-specialist`, `lgpd-compliance-check` e `site-security` aprofundarem o que no `client-demo` ficou só como placeholder.

## 1. Se vem de um client-demo: o que falta fazer
O código já existe com sitemap, stack e visual definidos. Aqui você:
- Substitui qualquer conteúdo de exemplo por conteúdo final confirmado pelo cliente (fotos em melhor resolução, cardápio/preços atualizados, textos revisados).
- Expande páginas ou funcionalidades que ficaram fora do escopo enxuto da demo (ex.: sistema de agendamento completo, se foi vendido no `client-proposal`).
- Prepara o terreno para as próximas skills completarem o que a demo deixou como placeholder: páginas legais (LGPD), SEO fino, segurança, testes.

## 2. Se é um projeto novo (sem client-demo prévio)
Faça o briefing mínimo (pergunte ao usuário o que faltar):
- Nome do negócio, nicho, cidade/bairro.
- Paleta de cores/identidade visual (ou fotos/Instagram de referência).
- Conteúdo: cardápio/serviços com preços, fotos, horário de funcionamento, endereço, WhatsApp.
- Diferencial do negócio (o que falar na página inicial em 1 frase).
- Se vai ter agendamento online, pedido via WhatsApp, ou só informativo.

## 3. Stack recomendada
Padrão para sites de PME local (rápido de montar, fácil de hospedar, bom SEO):
- **Next.js + Tailwind CSS** — quando o site pode crescer (blog, múltiplas páginas, formulários com backend leve) ou quando for hospedar na Vercel.
- **Vite + React + Tailwind** — para sites mais simples e leves (site institucional de poucas páginas), quando performance máxima importa mais que recursos de servidor.
Use TypeScript por padrão — facilita manutenção e evita bugs bobos.

## 4. Sitemap padrão (adapte ao nicho)
- **Home** — proposta de valor, destaque visual, CTA principal (WhatsApp/agendar).
- **Sobre** — história curta, diferencial, fotos do local/equipe.
- **Serviços/Cardápio** — lista com preços, fotos, categorias.
- **Contato** — endereço, mapa (Google Maps embed), horário, WhatsApp, formulário simples.
- **Política de Privacidade** e **Termos de Uso** — páginas obrigatórias (conteúdo final vem da skill `lgpd-compliance-check`).
- Opcional: **Agendamento** (barbearia) ou **Pedido/Delivery** (marmitaria).

## 5. Escolha visual
Se o `client-demo` já rodou o `component-picker`, mantenha a combinação escolhida (o cliente já viu e aprovou aquele visual). Só rode `component-picker` aqui se for um projeto novo sem demo prévia.

## 6. Boas práticas obrigatórias antes de seguir adiante
- HTML semântico (`<header>`, `<nav>`, `<main>`, `<footer>`, um único `<h1>` por página).
- Todas as imagens com `alt` e otimizadas (formato WebP/AVIF, tamanho comprimido).
- Botão fixo de WhatsApp.
- Placeholders de `title`/`meta description` por página, prontos para a skill `seo-specialist` finalizar.
- `robots.txt` e `sitemap.xml` gerados desde o início.
- Formulários com checkbox de consentimento LGPD (não pré-marcado), com honeypot anti-spam (ver `site-security`).
- Responsivo mobile-first — teste em 375px de largura antes de considerar pronto.
- Nenhum segredo/chave de API hardcoded no código — variáveis de ambiente desde o início.

## 7. Estrutura de pastas sugerida (Next.js)
```
site-cliente/
├── app/ (ou pages/)
│   ├── page.tsx        (Home)
│   ├── sobre/
│   ├── servicos/
│   ├── contato/
│   ├── privacidade/
│   └── termos/
├── components/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt        (gerado pela skill seo-specialist)
├── styles/
└── README.md
```

## 8. Handoff para as próximas etapas
Ao terminar de completar/finalizar o código:
1. Rode `seo-specialist` para finalizar title/meta/schema/llms.txt (não apenas o title básico da demo).
2. Rode `lgpd-compliance-check` para substituir os placeholders de Política de Privacidade e Termos por texto de verdade.
3. Rode `site-security` para revisar headers, segredos e proteção de formulário.
4. Rode `site-tester` antes de qualquer entrega.
5. Rode `deploy-pipeline` para subir no GitHub privado, Vercel/Hostinger e conectar o domínio do cliente.
6. Rode `client-handoff` para a entrega final e oferta de manutenção.

## Saída esperada
Código do site completo e finalizado (a partir do `client-demo` sempre que possível), com sitemap definido, componentes mantidos/escolhidos e justificados, e checklist do que ainda falta rodar (SEO, LGPD, segurança, testes, deploy) antes da entrega final.
