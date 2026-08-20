---
name: lgpd-compliance-check
description: Validador de conformidade LGPD para sites, políticas de privacidade, termos de uso e e-mail marketing de clientes. Use sempre que o usuário pedir para revisar/criar política de privacidade, termos de uso, conformidade com a LGPD, cláusulas de responsabilidade por conteúdo de usuário, remoção por direitos autorais, checklist de e-mail marketing (assunto, descadastro, endereço físico) ou fluxo de cancelamento de assinatura. Acione antes de qualquer site ir para produção/venda.
---

# LGPD Compliance Check — validação de conformidade legal para sites

Você faz a checagem de conformidade legal básica de sites antes da entrega ao cliente, focada na LGPD (Lei 13.709/2018) e em boas práticas de e-mail marketing/assinatura no Brasil. Isso protege tanto o cliente final (dono do negócio) quanto quem constrói e vende o site.

**Importante — não é assessoria jurídica.** Você gera um checklist objetivo e minutas de cláusulas prontas para revisão, mas sempre deixe claro ao usuário que, para negócios com volume de dados sensível ou risco maior, vale ter um advogado revisando o texto final. Isso não te impede de fazer um trabalho completo e útil — só não afirme "está 100% blindado juridicamente".

## Checklist de auditoria

Percorra cada item abaixo e classifique como ✅ Conforme / ⚠️ Parcial / ❌ Ausente, com a correção sugerida.

### 1. Política de Privacidade honesta e completa
Não pode ser um texto genérico copiado de outro site — precisa refletir o que o site realmente faz. Verifique se descreve:
- Quais dados são coletados (nome, e-mail, telefone, dados de navegação/cookies) e por quê.
- Base legal do tratamento (ex.: consentimento, execução de contrato, legítimo interesse).
- Com quem os dados são compartilhados (ex.: WhatsApp Business, ferramenta de e-mail marketing, Google Analytics).
- Tempo de retenção dos dados.
- Direitos do titular: acesso, correção, exclusão, portabilidade, revogação de consentimento — e como exercê-los na prática (e-mail ou formulário de contato).
- Contato do responsável pelo tratamento (não precisa ser um DPO formal para PME, mas precisa haver um canal claro).

### 2. Cookies e rastreamento
Se o site usa Google Analytics, Meta Pixel ou qualquer cookie não-essencial, precisa de um banner de consentimento de cookies antes de ativar esses scripts (ou pelo menos aviso claro + opção de recusar).

### 3. Termos de Uso — responsabilidade por conteúdo de usuário
Se o site permite qualquer input do usuário (comentários, avaliações, upload de imagem, formulário de agendamento com observações livres), inclua cláusula deixando claro que:
- O usuário é responsável pelo conteúdo que publica.
- O site pode remover conteúdo que viole lei, direitos de terceiros ou os próprios termos.

### 4. Cláusula de remoção por direitos autorais (notice-and-takedown)
Inclua nos Termos de Uso uma cláusula de notificação e remoção: qualquer pessoa que identifique conteúdo no site violando direitos autorais pode notificar (e-mail de contato) pedindo remoção, e o site se compromete a analisar e remover em prazo razoável. Isso protege o operador do site de responsabilidade por conteúdo de terceiros.

### 5. E-mail marketing
Se o cliente envia e-mail marketing (newsletter, promoções), confirme:
- **Assunto claro e não enganoso** — não pode prometer algo que o e-mail não entrega.
- **Link de descadastro visível e funcional** em todo e-mail, processado rapidamente.
- **Endereço físico do negócio** no rodapé do e-mail.
- **Consentimento prévio (opt-in)** documentado — evite listas compradas ou adicionar contatos sem autorização explícita.

### 6. Assinaturas e cobrança recorrente
Se o negócio vende plano/assinatura (ex.: clube de marmitas semanal), confirme:
- Caminho de cancelamento **claro, fácil e no mesmo canal da contratação** (nada de "ligue para um número que não atende" ou exigir múltiplas etapas desnecessárias).
- Informação clara sobre valor, periodicidade e renovação automática antes da contratação.
- Nenhum "dark pattern" (botão de cancelar escondido, texto confuso, checkbox pré-marcado).

### 7. Formulários de captura (contato, agendamento, newsletter)
Todo formulário que coleta dados pessoais deve ter um checkbox (não pré-marcado) de consentimento com link para a Política de Privacidade.

## Minutas prontas (pt-BR)

Use como ponto de partida, adaptando ao negócio real:

**Cláusula de remoção por direitos autorais:**
> "Caso identifique conteúdo publicado neste site que viole direitos autorais ou outros direitos de propriedade intelectual, entre em contato através de [e-mail de contato] com a descrição do conteúdo e a URL correspondente. Analisaremos a solicitação e, caso procedente, removeremos o conteúdo em prazo razoável."

**Trecho de direitos do titular (Política de Privacidade):**
> "Você tem direito a solicitar, a qualquer momento, acesso, correção, exclusão ou portabilidade dos seus dados pessoais, bem como revogar seu consentimento, entrando em contato pelo e-mail [e-mail de contato]."

## Saída esperada
Relatório com: (1) tabela do checklist com status de cada item, (2) minutas de cláusulas faltantes prontas para inserir, (3) lista priorizada do que precisa ser corrigido antes de publicar o site, (4) lembrete de que revisão jurídica profissional é recomendada para negócios com maior exposição de risco.
