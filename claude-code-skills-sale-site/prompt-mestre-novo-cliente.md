# Prompt mestre — novo cliente (Claude Code)

Como as skills disparam sozinhas pela descrição, você não *precisa* citar o nome de cada uma — mas para um fluxo com 11 etapas em ordem específica, é mais confiável nomear cada skill explicitamente no prompt (com `/nome` ou só citando o nome). Isso garante que o Claude Code segue a ordem certa em vez de decidir sozinho por onde começar.

## Antes de usar
Confirme que as skills estão carregadas na sessão local: rode `/skills` dentro do Claude Code e veja se as 11 aparecem (via sync da conta ou copiadas para `~/.claude/skills/`).

## Fase 1 — prospecção e isca (antes de qualquer orçamento)
Use assim que tiver um lead do `client-prospector`:

```
Encontrei este lead: [nome do negócio], [nicho], em [cidade/bairro], WhatsApp [número],
nota [nota] no Google. [Tem site? / site fraco, por quê?]

Usa a skill client-demo pra montar o site quase completo desse negócio (mesma stack
do site final, multi-página, com componentes escolhidos), mas sem SEO fino, LGPD,
segurança ou QA ainda — isso vem depois se o lead topar. Sobe num link rápido pra
eu mandar por WhatsApp junto com o portfólio. Ainda não fala em orçamento nessa etapa.
```

Só depois que o lead responder com interesse real é que você entra na fase 2.

## Fase 2 — fluxo completo (depois que o lead topou a prévia)
Cole algo assim, preenchendo os colchetes:

```
O lead [nome do negócio] gostou da prévia e topou seguir. Agora quero o fluxo
completo, usando as skills na ordem abaixo, uma etapa de cada vez — me avise
quando cada etapa terminar antes de seguir pra próxima (algumas dependem de eu
confirmar com o cliente ou comprar algo, como domínio).

Dados do cliente:
- Negócio: [nome do negócio]
- Nicho: [marmitaria / barbearia / outro]
- Cidade/bairro: [cidade, bairro]
- Diferencial: [o que torna esse negócio especial em 1 frase]
- Conteúdo disponível: [cardápio/serviços com preços, fotos, horário, WhatsApp, endereço — cole aqui ou diga que vai enviar depois]

Fluxo a seguir, nesta ordem:
1. client-proposal — monte escopo, preço e a minuta de contrato pra eu mandar pro cliente
2. site-builder — depois que eu aprovar a proposta, continue a partir do código que o client-demo já gerou (não recomece do zero): finalize conteúdo, preencha o que ficou como placeholder
3. component-picker — só rode de novo se o client-demo ainda não tiver escolhido os componentes
4. seo-specialist — otimize title, meta description, schema e gere o llms.txt (a demo só tinha um title básico)
5. lgpd-compliance-check — audite e gere as páginas de Política de Privacidade e Termos de Uso
6. site-security — rode o checklist de segurança (headers, segredos, proteção de formulário, npm audit)
7. site-tester — rode o QA final (Lighthouse, responsividade, links, formulários) e me diga se há bloqueadores
8. deploy-pipeline — só depois que eu confirmar que o site está aprovado, suba pro GitHub privado, conecte a Vercel e me oriente na compra/apontamento do domínio
9. client-handoff — gere a documentação de entrega, o material de treinamento e a proposta de manutenção mensal

Comece pela etapa 1.
```

## Se preferir ir por partes (mais controle)
Para clientes onde você já tem proposta fechada, pode pular direto, citando só a skill que precisa:

```
Usa a skill site-builder pra montar o site da [nome do negócio] ([nicho], em [cidade]).
Conteúdo: [cole aqui cardápio/serviços, fotos, horário, WhatsApp, endereço].
Já rodou o component-picker considerando que o último cliente desse nicho foi [cliente anterior] com [combinação usada].
```

E depois, em mensagens separadas conforme for avançando:
```
Site pronto — roda seo-specialist, lgpd-compliance-check e site-security nele.
```
```
Passou no site-tester? Se sim, roda o deploy-pipeline.
```
```
Site no ar — roda o client-handoff pra eu entregar pro cliente.
```

## Dicas práticas
- **Nunca pule direto pra proposta.** Sempre passe pelo `client-demo` primeiro com leads novos — é isso que converte melhor, e é rápido/barato de gerar.
- **Nomeie a skill explicitamente** quando o pedido for ambíguo ou envolver várias etapas de uma vez — o Claude Code decide sozinho quando o pedido é claro, mas numa cadeia de várias etapas é mais seguro guiar.
- **Quebre em fases reais**, não peça tudo numa mensagem só esperando o site sair pronto e no ar: há pontos que dependem de você (o lead responder à prévia, aprovar a proposta, comprar o domínio, repassar credenciais) — o fluxo acima já reflete isso.
- **Reaproveite este arquivo** a cada cliente novo: só troque os dados em colchetes.
- Se alguma etapa não disparar a skill certa sozinha, invoque direto digitando `/nome-da-skill` (ex.: `/client-demo`).
