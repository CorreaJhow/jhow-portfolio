---
name: client-demo
description: Constrói o site quase completo (multi-página, stack de verdade — Next.js/Vite + Tailwind, componentes escolhidos) pra usar como isca de vendas antes do orçamento: um preview forte, que já parece o produto final, sem ainda passar pelas camadas pesadas de SEO profundo, LGPD, segurança e QA. Use sempre que o usuário pedir uma demo, preview, mockup avançado, "monta o site pra mostrar pro cliente antes de orçar", ou quiser capturar/esquentar um lead depois do client-prospector e antes do client-proposal. Se o lead topar, o mesmo código vira a base do site final — não se reconstrói do zero.
---

# Client Demo — site quase pronto como isca de vendas

Esta skill fica entre `client-prospector` e `client-proposal`. A ideia: **construir o site de verdade, na mesma stack e qualidade do produto final, só que sem as camadas de validação que ainda não fazem sentido antes de o cliente confirmar** (SEO profundo, conformidade LGPD, hardening de segurança, QA formal). Quando a pessoa abre o link, ela navega entre páginas de verdade e sente que aquilo já é o site dela — é isso que converte.

**Princípio central: leve não é "menos site", é "menos camadas depois do build".** Você constrói o site completo (mesma stack, sitemap, qualidade visual do `site-builder`), mas pula deliberadamente:
- Auditoria e otimização fina de SEO (`seo-specialist`) — use só um title básico por página, sem pesquisa de palavra-chave, schema, ou `llms.txt`.
- Conformidade LGPD (`lgpd-compliance-check`) — as páginas de Política de Privacidade/Termos existem como estrutura, mas com texto placeholder, não auditado.
- Segurança (`site-security`) — sem headers, sem revisão de dependências, sem hardening.
- QA formal (`site-tester`) — sem Lighthouse, sem checklist de acessibilidade/responsividade ponto a ponto (só um olhar rápido, não uma auditoria).

Isso é o que faz o processo ser rápido: você não gasta tempo/token auditando e endurecendo algo que 70% das vezes não vira cliente. Mas o que a pessoa **vê** é o site completo, não um esboço.

## 1. Dados necessários
Reaproveite o que já tiver do `client-prospector`: nome do negócio, nicho, cidade/bairro, telefone/WhatsApp, fotos públicas do Instagram/Google Perfil da Empresa (ou placeholder de boa qualidade coerente com o nicho se não houver foto disponível), cardápio/serviços com preço se der pra achar publicamente.

## 2. Construir o site (mesma stack do site-builder)
Use a stack e o sitemap padrão — é o mesmo ponto de partida do `site-builder`, não um projeto à parte:
- **Next.js + Tailwind** (ou Vite + React + Tailwind para algo mais simples) — a escolha aqui já é a escolha real, porque este código vai virar o site final se o lead topar.
- Sitemap padrão: Home, Sobre, Serviços/Cardápio, Contato, e stubs de Política de Privacidade/Termos (só estrutura, texto genérico — serão preenchidos de verdade depois pelo `lgpd-compliance-check`).
- Rode o `component-picker` normalmente para escolher a combinação visual — isso não é uma etapa que vale pular, é o que faz o preview parecer produto de verdade e não um template genérico.
- Conteúdo real do lead: nome, fotos, endereço, horário, WhatsApp — nada de lorem ipsum. Cardápio/preços reais se encontrados publicamente, ou um exemplo plausível claramente editável se não houver dado suficiente.
- Botão de WhatsApp funcional com o número real do negócio, e Google Maps embed com o endereço real — pequenos detalhes assim são o que faz o dono do negócio sentir "isso já é meu".

## 3. O que deliberadamente pular nesta fase
Não rode ainda (ficam para depois de `client-proposal`, sobre este mesmo código):
- `seo-specialist` completo — apenas um `<title>` básico por página.
- `lgpd-compliance-check` — páginas legais existem como placeholder, não auditadas.
- `site-security` — sem revisão de headers/segredos/dependências.
- `site-tester` — sem Lighthouse nem checklist formal, só uma checagem visual rápida de que nada está visivelmente quebrado.

## 4. Entregar como link, não como print
Como agora é um site de verdade com várias páginas, um print de uma tela só não faz jus ao trabalho — o ideal é subir um link clicável e deixar a pessoa navegar pelo celular:
- Faça um deploy rápido e descartável (ex.: Vercel, sem domínio próprio ainda, sem repositório privado do cliente — isso só entra depois, no `deploy-pipeline`, quando o projeto for confirmado).
- Se não for possível publicar rápido, um vídeo curto de tela (rodando `npm run dev` local e navegando pelas páginas) é o segundo melhor formato — mais forte que um print único.

## 5. Mensagem de envio

**Marmitaria:**
> "Oi [nome]! Vi sua marmitaria no Google e já montei uma prévia de como ficaria o site de vocês, com cardápio e tudo — dá uma navegada: [link]. Ficou com a cara do negócio? Se curtir, te mostro os próximos passos (e uns outros sites que já fiz, se quiser ver mais exemplos)."

**Barbearia:**
> "Fala [nome]! Reparei na barbearia de vocês e já montei uma prévia do site, com agendamento pelo WhatsApp direto — dá uma olhada: [link]. O que achou? Se fizer sentido, te mando um portfólio com outros projetos e como seguimos."

## 6. Mandar o portfólio junto
Sempre que possível, anexe 2–3 exemplos de projetos já entregues (links reais) junto com a prévia. Mantenha uma lista simples de portfólio atualizada a cada site finalizado (via `client-handoff`):

```
| Cliente | Nicho | Link do site | Pode usar como portfólio? |
|---|---|---|---|
| Barbearia do Zé | Barbearia | https://barbeariadoze.com.br | Sim |
```

## 7. Registrar a resposta
Atualize a tabela de leads do `client-prospector` com o status: Demo enviada / Gostou, quer orçamento / Não respondeu / Não interessado.

## 8. Próximo passo — o código não se joga fora
- **Se o lead topar:** siga para `client-proposal` para formalizar escopo e preço — depois, ao invés do `site-builder` começar do zero, ele **continua a partir deste mesmo código**, agora sim rodando `seo-specialist`, `lgpd-compliance-check` e `site-security` a fundo, refinando conteúdo com qualquer material adicional que o cliente mandar, e passando pelo `site-tester` antes do `deploy-pipeline`.
- **Se não responder:** aplique a mesma lógica de follow-up do `client-prospector` (1–2 tentativas gentis).
- **Se recusar:** registre o motivo se disser — útil para refinar a abordagem com o próximo lead do mesmo nicho. O código pode ser descartado ou guardado como referência de portfólio interno (nunca reaproveitado para outro cliente sem adaptar).

## Saída esperada
Um site multi-página funcional na stack real (Next.js/Vite + Tailwind), com conteúdo verdadeiro do lead e link clicável para navegação — pronto para impressionar antes de qualquer conversa de preço — deixando claro que SEO fino, LGPD, segurança e QA formal ainda virão, só depois da confirmação do cliente.
