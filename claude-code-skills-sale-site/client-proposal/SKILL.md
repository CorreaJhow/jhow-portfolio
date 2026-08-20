---
name: client-proposal
description: Padroniza a etapa comercial de venda de sites: monta escopo do projeto, calcula precificação, define condições de pagamento e gera uma proposta e contrato simples para o cliente. Use sempre que o usuário pedir para montar orçamento, proposta comercial, calcular preço de um site, definir escopo, redigir contrato simples para cliente, ou fechar um projeto novo antes de começar a construir — roda depois que o lead topou a prévia do client-demo e antes do site-builder.
---

# Client Proposal — proposta comercial, escopo e contrato padrão

Você ajuda a padronizar como cada projeto é fechado comercialmente, antes de qualquer código de verdade ser escrito. Isso evita dois problemas clássicos de quem vende site como freelancer/pequena agência: escopo aberto (cliente pedindo mudanças infinitas) e preço inconsistente (cobrar diferente de cliente pra cliente sem critério, o que dificulta escalar).

Esta skill roda depois que o lead já viu a prévia visual gerada pela skill `client-demo` e demonstrou interesse real — nesse ponto a conversa de preço fica mais fácil, porque a pessoa já viu o valor com os próprios olhos, não está comprando "no escuro". Roda antes do `site-builder` (a construção completa e de verdade só começa depois da proposta fechada).

## 1. Escopo do projeto
Defina por escrito, sempre, o que está incluso e o que não está — a maior fonte de atrito em projetos de site é escopo implícito.

**Inclua no escopo padrão:**
- Número de páginas (ex.: Home, Sobre, Serviços/Cardápio, Contato, Política de Privacidade, Termos).
- Responsividade mobile/tablet/desktop.
- Botão de WhatsApp e integração com Google Maps.
- SEO básico on-page (title, meta description, dados estruturados — via `seo-specialist`).
- Conformidade LGPD básica das páginas legais (via `lgpd-compliance-check`).
- Deploy e conexão de domínio (via `deploy-pipeline`).
- Número de rodadas de revisão incluídas (defina um número, ex.: 2 rodadas — evita "revisão infinita").

**Deixe explicitamente fora do escopo padrão** (a menos que cobrado à parte):
- Fotografia profissional (cliente fornece as fotos, ou é orçado como adicional).
- Redação de conteúdo/copywriting extenso (você pode oferecer como adicional).
- Funcionalidades além do combinado (ex.: sistema de agendamento completo, loja virtual) — trate como projeto à parte ou adicional com preço próprio.
- Manutenção contínua após a entrega (isso é o plano oferecido pela skill `client-handoff`).

## 2. Precificação
Sugestão de estrutura simples para manter consistência entre clientes (ajuste os valores à sua realidade/mercado local, mas mantenha a lógica):

- **Site institucional simples** (até ~5 páginas, sem funcionalidade especial): preço base fechado.
- **Site com funcionalidade extra** (agendamento online, catálogo com filtro, formulário mais complexo): preço base + adicional por funcionalidade.
- **Custos recorrentes que são do cliente, não seus** (deixe isso claro na proposta para não ser confundido com sua taxa): domínio (anual) e hospedagem, caso opte por Hostinger em vez de Vercel gratuito.
- **Plano de manutenção mensal** (opcional, oferecido na entrega via `client-handoff`): outra faixa de preço, separada do valor do projeto.

Regra prática: tenha uma tabela de referência própria (mesmo que simples) com o preço-base por tipo de site e por nicho, para não precisar reinventar o cálculo a cada proposta — isso é o que profissionaliza e permite escalar o número de clientes sem perder consistência.

## 3. Condições de pagamento
Padrão recomendado para reduzir risco de calote e formalizar o compromisso:
- Sinal de entrada (ex.: 50%) para iniciar o projeto.
- Restante na entrega/publicação do site.
- Prazo de entrega estimado, condicionado ao cliente enviar o conteúdo (fotos, textos, cardápio) em até X dias — deixe claro que atraso do cliente em mandar material desloca o prazo.

## 4. Modelo de proposta para enviar ao cliente
Estruture a proposta em poucas seções, direto ao ponto (a maioria desses clientes vai ler pelo celular):

```
[Nome do negócio] — Proposta de Site

O que notei: [problema identificado na prospecção — ex.: "vocês não aparecem no Google quando alguém busca marmita na região"]

O que entrego: [lista curta do escopo]

Prazo estimado: [X dias úteis após receber o conteúdo]

Investimento: [valor], sendo [X%] para início e [X%] na entrega.
Custos à parte (do cliente): domínio (~R$ valor/ano) [+ hospedagem, se aplicável].

Próximo passo: [ex.: "Topa? Te mando o contrato simples e já começamos essa semana."]
```

## 5. Minuta de contrato simples (pt-BR)
Não substitui revisão jurídica para projetos de maior valor/risco, mas cobre o essencial para a maioria dos casos:

> "O presente contrato tem por objeto a criação de um site institucional para [Cliente], conforme escopo descrito na proposta enviada em [data], anexa a este documento.
>
> **Prazo**: a entrega está estimada em [X] dias úteis a partir do recebimento de todo o conteúdo (textos, fotos, informações) por parte do Cliente.
>
> **Valor e pagamento**: o valor total é de R$ [valor], sendo R$ [valor sinal] no início do projeto e o restante na entrega/publicação do site.
>
> **Revisões**: estão incluídas [X] rodadas de revisão sobre o material entregue. Alterações além do escopo original serão orçadas separadamente.
>
> **Propriedade**: após o pagamento integral, o código-fonte e o domínio (caso registrado em nome do Cliente) passam a ser de propriedade do Cliente.
>
> **Cancelamento**: em caso de cancelamento pelo Cliente após o início do projeto, o valor do sinal não é reembolsável, cobrindo o trabalho já iniciado."

Sempre adapte ao caso e recomende revisão de um advogado para contratos de maior valor ou clientes recorrentes/corporativos.

## Saída esperada
Um pacote pronto para enviar ao cliente: escopo definido por escrito, preço calculado com a lógica acima, condições de pagamento e a minuta de contrato — tudo pronto antes de `site-builder` começar a construir.
