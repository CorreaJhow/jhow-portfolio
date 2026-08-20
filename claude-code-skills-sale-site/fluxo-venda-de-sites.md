# Fluxo de Venda de Sites — Skills Instaladas

Onze skills salvas na sua conta, disponíveis em qualquer conversa aqui no Cowork (e no Claude Code, via sync ou instalação local). Cobrem o processo completo, do lead até a receita recorrente pós-venda.

## Ordem do fluxo

**1. `client-prospector`** — encontra negócios locais (marmitaria, barbearia) sem site ou com site fraco, monta lista de leads via Google Maps/Instagram.

**2. `client-demo`** — antes de qualquer orçamento: constrói o site quase completo (multi-página, mesma stack do produto final — Next.js/Vite + Tailwind, componentes escolhidos), mas pulando as camadas pesadas (SEO fino, LGPD, segurança, QA). Entrega como link pra navegar, não print. Só avança pra proposta se o lead demonstrar interesse real.

**3. `client-proposal`** — transforma o lead aquecido em projeto fechado: define escopo por escrito, calcula preço, condições de pagamento e gera proposta + contrato simples. Evita escopo aberto e preço inconsistente entre clientes.

**4. `site-builder`** — não recomeça do zero: continua e finaliza o código do `client-demo` (ou monta do zero se não houver demo prévia), preparando o terreno pra SEO/LGPD/segurança serem aprofundados.

**5. `component-picker`** — chamada dentro do `site-builder` para escolher a combinação de bibliotecas visuais (anime.js, motion.dev, three.js, kokonut ui, originkit, skiper-ui, reactbits, bklit ui) sem repetir a mesma combinação do cliente anterior do mesmo nicho.

**6. `seo-specialist`** — otimiza title, meta description (com apoio da extensão detail.so), dados estruturados, e prepara o site para IA (AEO/GEO), incluindo geração do `llms.txt`.

**7. `lgpd-compliance-check`** — audita política de privacidade, termos de uso, e-mail marketing e fluxo de cancelamento.

**8. `site-security`** — audita e reforça segurança: headers HTTP, HTTPS/HSTS, segredos fora do repositório, dependências vulneráveis, proteção de formulário contra spam/bot, backup e segurança de domínio.

**9. `site-tester`** — roda o checklist final de QA (Lighthouse, responsividade, links, formulários, acessibilidade) — junto com `site-security`, é o portão antes do deploy.

**10. `deploy-pipeline`** — cria o repositório privado no GitHub, conecta na Vercel, orienta a compra do domínio (registro.br / Hostinger) e publica no ar.

**11. `client-handoff`** — entrega final: repasse de acessos, treinamento rápido do cliente, documentação e oferta de plano de manutenção mensal (receita recorrente) — fecha o ciclo, com follow-up de 30 dias que pode gerar indicação e voltar para o `client-prospector`.

## Como usar no dia a dia

Você não precisa chamar as skills pelo nome — basta descrever o que quer fazer que a skill certa é acionada automaticamente. Se quiser forçar uma específica, é só citar o nome dela. No Claude Code, com uma cadeia longa como essa, é mais confiável nomear cada etapa explicitamente (veja `prompt-mestre-novo-cliente.md`).

## Pendências / próximos passos sugeridos

- **Prospecção fora do Brasil/B2B**: `apollo:prospect` está conectada mas precisa de autorização OAuth (via configurações de conector) e é voltada a leads corporativos internacionais — não é a ferramenta certa para marmitaria/barbearia local.
- **Sua tabela de preços real**: o `client-proposal` te dá a lógica de precificação, mas vale você montar sua própria tabela de valores-base (por tipo de site/nicho) para eu usar como referência fixa nas propostas.
- **Portfólio**: o `client-demo` já sugere manter uma tabela de projetos entregues pra anexar como prova social — vale você começar essa lista assim que fechar os primeiros clientes.
- **Testar e refinar**: use cada skill em um caso real e me diga o que não bateu — eu ajusto o conteúdo salvo (é só pedir "atualiza a skill X" com o feedback).
