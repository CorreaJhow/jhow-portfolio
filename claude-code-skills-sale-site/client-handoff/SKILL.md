---
name: client-handoff
description: Conduz a entrega final do site ao cliente: repasse de credenciais e acessos, treinamento rápido de como pedir alterações, documentação de entrega e oferta de plano de manutenção recorrente. Use sempre que o usuário pedir para entregar o site ao cliente, fazer o handoff, treinar o cliente a usar o site, oferecer manutenção mensal, ou fechar/documentar um projeto depois do deploy — roda por último, logo depois do deploy-pipeline.
---

# Client Handoff — entrega final e plano de manutenção

Você conduz a etapa final do projeto: depois que `deploy-pipeline` publicou o site no ar, esta skill garante uma entrega profissional (o que diferencia quem cobra bem de quem faz "trabalho de freelancer avulso") e transforma a entrega em oportunidade de receita recorrente via manutenção.

## 1. Checklist de repasse de acessos
Confirme e documente, um a um:
- **Domínio**: está registrado no nome/CPF-CNPJ do cliente (não no seu) — reforce isso, é importante para a confiança do cliente e evita problema futuro de titularidade.
- **Hospedagem**: se Vercel, o projeto está num time/conta que o cliente também acessa (ou pelo menos sabe que existe); se Hostinger, credenciais do painel repassadas com segurança (nunca por WhatsApp em texto puro — prefira gerenciador de senha ou nota que o cliente apaga depois de ler).
- **Repositório GitHub**: decida e comunique claramente se o cliente terá acesso direto ao código ou se você seguirá como mantenedor (é comum e aceitável manter você como responsável técnico, mas isso precisa estar explícito e combinado, não implícito).
- **E-mail/formulário**: confirme que as notificações de formulário de contato chegam para o e-mail/WhatsApp certo do cliente, não para o seu.

## 2. Treinamento rápido
Adapte à familiaridade técnica do cliente (a maioria dos donos de marmitaria/barbearia não é técnico — mantenha simples):
- Se o site tem algum painel de edição de conteúdo, grave um vídeo curto (2–5 min, tela + voz) mostrando como trocar um preço, foto ou horário.
- Se não tem painel (conteúdo fixo no código), deixe claro que qualquer alteração de conteúdo passa por você — e é justamente esse o gancho natural para o plano de manutenção.
- Entregue um documento curto de "perguntas frequentes" (ex.: "e se eu quiser trocar uma foto?", "e se o WhatsApp mudar?").

## 3. Documentação de entrega
Resuma em um documento simples para o cliente guardar:
- Link do site.
- Onde está hospedado e como/quando renovar domínio e hospedagem (datas de vencimento).
- Quem procurar para suporte (você) e como (WhatsApp, e-mail).
- O que foi entregue (resumo do escopo do `client-proposal`, para não haver dúvida do que estava incluso).

## 4. Oferecer plano de manutenção
Este é o momento certo para propor recorrência — o cliente acabou de ver o valor entregue, é quando está mais aberto a continuar a relação. Estruture 1–2 opções simples, por exemplo:

- **Plano básico**: pequenas alterações de conteúdo (texto, preço, foto) incluídas até X vezes/mês, monitoramento de que o site está no ar, lembrete de renovação de domínio/hospedagem.
- **Plano avançado** (opcional, upsell natural depois): acompanhamento contínuo de SEO (via `seo-specialist`), pequenas melhorias, e/ou nova página sazonal (ex.: cardápio de datas comemorativas).

Apresente o plano como continuidade natural, não como venda forçada: "o site está no ar — se quiser, eu cuido de manter tudo funcionando e atualizado por R$ [valor]/mês, assim você não precisa se preocupar com isso."

## 5. Follow-up pós-entrega
Agende (mentalmente ou via lembrete) um contato de acompanhamento ~30 dias depois da entrega:
- Perguntar como está sendo o retorno do site (mais contatos? mais clientes chegando pelo Google?).
- Reforçar a oferta de manutenção se o cliente ainda não tiver aceitado.
- É um bom momento também para pedir indicação de outro negócio do mesmo nicho — fecha o ciclo de volta para o `client-prospector`.

## Saída esperada
Um pacote de entrega: checklist de acessos repassados, material de treinamento (vídeo/documento), documento-resumo do projeto, e uma proposta clara de manutenção mensal pronta para enviar ao cliente.
