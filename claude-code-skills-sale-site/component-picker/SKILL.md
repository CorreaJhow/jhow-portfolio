---
name: component-picker
description: Recomenda quais bibliotecas de UI, animação e visualização de dados usar em cada site de cliente, evitando repetir sempre o mesmo conjunto de componentes entre projetos diferentes. Use sempre que o usuário estiver planejando o visual/interações de um novo site, pedir sugestão de componentes animados, hover effects, transições, gráficos, ou mencionar anime.js, motion.dev, kokonut ui, bklit ui, manu.im, originkit, skiper-ui, reactbits ou three.js.
---

# Component Picker — escolha de bibliotecas de UI e animação por projeto

Você ajuda a escolher, para cada site novo, uma combinação de bibliotecas de componentes/animação diferente da usada nos projetos anteriores. O objetivo é que cada cliente tenha uma "digital fingerprint" própria — sites de nichos parecidos (ex.: duas barbearias) não podem parecer clones um do outro, tanto por qualidade de entrega quanto porque o Google e os próprios clientes notam sites "templates".

## Catálogo de referência

**Motores de animação (comportamento/interação):**
- **anime.js** — biblioteca de animação leve e flexível para animar qualquer coisa na web (transforms, SVG, timelines complexas). Boa opção quando se precisa de controle fino sobre uma sequência específica de animação.
- **motion.dev** — referência para hover effects suaves, interações de arrastar (drag) e transições de layout. Ideal para microinterações modernas (cards que reagem ao mouse, painéis que deslizam).
- **three.js** (threejs.org) — mais de 100 componentes/exemplos 3D animados. Use para heros 3D, backgrounds imersivos ou destaque visual forte — pesa mais, então reserve para sites onde o "uau" visual compensa o custo de performance.

**Bibliotecas de componentes prontos:**
- **kokonut ui** — mais de 100 componentes prontos já com animações e transições embutidas. Bom para acelerar entrega mantendo qualidade visual.
- **originkit.dev** — componentes animados prontos para React, Next.js, Vite e Framer. Boa opção quando o stack já é um desses frameworks e se quer algo "plug-and-play".
- **skiper-ui** — nível shadcn/ui, instalação via CLI, modelo freemium. Bom quando se quer um design system mais robusto e consistente.
- **reactbits.dev** — mais de 150 componentes para copiar e colar, com variantes em JS, TS, CSS e Tailwind. Ótimo banco de peças soltas (botões, cards, seções) para montar um layout único combinando peças de fontes diferentes.

**Dados e gráficos:**
- **bklit ui** — gráficos e visualizações de dados bonitos (barras, pizza, linha). Útil se o site do cliente precisar mostrar números (ex.: painel de resultados, estatísticas de atendimento).

**Geração rápida de conceito:**
- **manu.im** — IA agêntica que gera sites/slides com qualidade de estúdio. Útil na fase de brainstorm/moodboard inicial para gerar referências visuais rápido antes de montar o site "de verdade" à mão — não é para produção final, é para inspiração e velocidade de ideação.

## Como decidir a combinação

1. **Pergunte ou infira o tom do negócio.** Ex.: marmitaria fit tende a pedir visual leve, clean, cores quentes/naturais, fotos de comida em destaque, pouca animação pesada (o cardápio precisa carregar rápido no celular). Barbearia tende a pedir visual mais bold, tema escuro, hover effects marcantes, alguma 3D/textura para transmitir estilo.
2. **Verifique o histórico de projetos já entregues** (peça ao usuário ou consulte anotações anteriores da conversa/projeto). Nunca repita a mesma combinação exata de biblioteca de componentes + motor de animação usada no cliente mais recente do mesmo nicho.
3. **Monte a combinação por camada**, não escolha uma lib "para tudo":
   - Base de componentes (formulários, cards, navbar): kokonut ui, originkit ou reactbits.
   - Microinterações (hover, drag, transição de página): motion.dev ou anime.js — escolha um dos dois, raramente os dois juntos (redundância e peso).
   - Destaque visual opcional (hero, seção especial): three.js, só se o site pedir impacto forte e a performance permitir.
   - Se o site precisar mostrar dados/métricas: bklit ui.
4. **Registre a escolha.** Ao final, anote no projeto (ou peça para o usuário guardar) qual combinação foi usada em qual cliente — isso vira a "memória" que evita repetição no próximo projeto. Sugestão de formato simples:

```
| Cliente | Nicho | Base de componentes | Microinteração | Destaque | Data |
|---|---|---|---|---|---|
| Barbearia do Zé | Barbearia | kokonut ui | motion.dev | - | 2026-08 |
```

## Saída esperada
Para cada projeto novo: (1) combinação recomendada de 2–3 bibliotecas com justificativa curta ligada ao nicho/tom do negócio, (2) confirmação de que a combinação não repete o cliente anterior do mesmo nicho, (3) link de cada lib escolhida, (4) sugestão de atualizar a tabela de histórico de escolhas.
