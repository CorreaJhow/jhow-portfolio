---
name: client-prospector
description: Ajuda a prospectar clientes locais para venda de sites em nichos específicos como marmitaria e barbearia: encontra negócios sem site ou com site desatualizado, monta lista de leads e gera script de abordagem personalizado. Use sempre que o usuário pedir para achar clientes, prospectar, montar lista de leads, ou vender sites para um nicho específico.
---

# Client Prospector — prospecção de clientes locais para venda de sites

Você ajuda a encontrar e abordar pequenos negócios locais (foco inicial: marmitaria e barbearia) que são bons candidatos a comprar um site. O critério de ouro é achar negócios que **já têm demanda** (avaliações, movimento, presença em rede social) mas **não têm site próprio, ou têm um site ruim/desatualizado** — esse é o gancho de venda mais forte, porque o problema é visível e fácil de mostrar para o dono.

## 1. Definir o critério de busca
Pergunte ou defina com o usuário:
- Cidade/bairro alvo (comece local — mais fácil visitar/fechar pessoalmente).
- Nicho (marmitaria, barbearia, ou outro).
- Faixa de avaliação mínima no Google (ex.: 4.0+ e pelo menos 15 avaliações — sinal de negócio já validado, não early-stage demais).

## 2. Buscar leads
1. Pesquise no Google Maps: `[nicho] em [bairro/cidade]` (ex.: "barbearia em Santo André").
2. Para cada resultado relevante, registre: nome do negócio, endereço, telefone/WhatsApp (se visível), nota e nº de avaliações, link do Instagram (buscar separadamente se não estiver no perfil do Maps), e **se tem site ou não** (o Google Maps mostra o botão "Site" quando existe).
3. Priorize:
   - **Sem site algum** (só perfil do Maps/Instagram) — maior necessidade.
   - **Site que existe mas é fraco**: não responsivo, sem HTTPS, visual datado, sem WhatsApp/CTA claro, carrega lento. Vale abrir rapidamente para confirmar antes de classificar.
4. Verifique o Instagram do negócio: perfil ativo com bom volume de posts/seguidores mas "link na bio" apontando só para WhatsApp ou Linktree é outro sinal forte — o negócio tem demanda mas não tem presença própria na web.

## 3. Montar a lista de leads
Organize em tabela (ou planilha, se o volume for grande):

```
| Negócio | Nicho | Bairro | Nota Google | Tem site? | Instagram | Telefone/WhatsApp | Observação |
|---|---|---|---|---|---|---|---|
| Barbearia Exemplo | Barbearia | Centro | 4.7 (120) | Não | @barbeariaexemplo | (11) 90000-0000 | Só link do WhatsApp na bio |
```

## 4. Scripts de abordagem por nicho

O gancho certo é mostrar o problema específico do nicho, não um discurso genérico de "eu faço sites".

**Marmitaria:**
> "Oi [nome]! Vi sua marmitaria no Google, com [nota] avaliações — parabéns pelo trabalho! Notei que quem procura 'marmita perto de mim' no Google não acha vocês por lá ainda, só quem já é cliente e conhece o WhatsApp. Eu monto sites simples pra negócios de comida, com cardápio, preços e pedido direto pelo WhatsApp — ajuda a pegar cliente novo que nem sabe que vocês existem. Faz sentido eu te mostrar uma ideia rápida sem compromisso?"

**Barbearia:**
> "Fala [nome]! Vi a barbearia de vocês no Google, avaliação muito boa ([nota]/5). Reparei que ainda não tem site — hoje boa parte do cliente novo pesquisa e compara antes de agendar, e um site com agendamento online ajuda a reduzir aquele cliente que marca e não aparece. Quer que eu te mostre um exemplo rápido de como ficaria pro seu negócio?"

Adapte o tom conforme o canal (WhatsApp costuma converter melhor que e-mail para esse público — priorize abordagem por WhatsApp/Instagram DM).

## 4. Próximo passo — não pule direto pro orçamento
Depois de identificar o lead, o passo seguinte NÃO é abordar com proposta/preço. Siga para a skill `client-demo` para gerar uma prévia visual rápida do site e mandar como isca junto com o portfólio — isso converte muito mais do que um script de venda ou pedido de reunião a frio. Só depois que o lead demonstrar interesse na prévia é que entra a skill `client-proposal`.

## 5. Acompanhamento
Depois do primeiro contato (envio da prévia via `client-demo`), registre status na mesma tabela (Demo enviada / Gostou, quer orçamento / Reunião marcada / Fechado / Sem interesse) para não perder o histórico e saber quando fazer follow-up (sugestão: 1 follow-up gentil após 3–4 dias sem resposta, no máximo 2 no total).

## Saída esperada
Lista de leads qualificados (negócio + contato + por que é um bom alvo), pronta para a skill `client-demo` gerar e enviar a prévia de cada um.
