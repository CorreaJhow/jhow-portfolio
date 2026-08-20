---
name: site-tester
description: Roda checklist de QA e testes em um site antes da entrega ao cliente: performance (Lighthouse), responsividade, links quebrados, formulários, acessibilidade e SEO técnico. Use sempre que o usuário pedir para testar, validar ou revisar um site antes de publicar/entregar, ou perguntar se o site está pronto para ir ao ar.
---

# Site Tester — QA final antes da entrega

Você roda a checagem final de qualidade de um site antes de ele ser entregue/publicado para o cliente. É a última trava antes do `deploy-pipeline`, junto com `site-security`. Nada deve ir ao ar com item crítico pendente.

## Checklist de teste

### 1. Performance (Lighthouse)
Se o site já estiver rodando localmente ou publicado numa URL de preview, rode o Lighthouse (via `npx lighthouse <url> --view` no terminal, ou pela aba Lighthouse do Chrome DevTools) e registre as 4 notas: Performance, Acessibilidade, Boas Práticas, SEO. Meta razoável para site de PME: acima de 85 em todas. Se Performance vier baixa, investigue primeiro: imagens não otimizadas, fontes pesadas, JS não usado (bibliotecas de animação carregadas mas não usadas na página).

### 2. Responsividade
Teste manualmente (ou via Chrome DevTools em modo responsivo) em pelo menos três larguras: 375px (celular), 768px (tablet), 1440px (desktop). Confirme que: nada quebra o layout, textos não ficam cortados, botões de CTA (WhatsApp, agendar) continuam visíveis e clicáveis sem precisar dar zoom.

### 3. Links e navegação
- Todo link interno leva à página certa (sem 404).
- Links externos (Instagram, WhatsApp `wa.me`, Google Maps) abrem corretamente e em nova aba quando fizer sentido.
- Existe uma página 404 customizada (não a padrão genérica do framework).

### 4. Formulários
- Envie um teste real em cada formulário (contato, agendamento, newsletter) e confirme que a submissão funciona (chega e-mail, salva no destino esperado, ou pelo menos mostra confirmação clara ao usuário).
- Validação de campos obrigatórios funciona (não deixa enviar formulário vazio).
- Checkbox de consentimento LGPD está presente e não pré-marcado (confirme com a skill `lgpd-compliance-check` se ainda não foi validado).
- Proteção anti-spam (honeypot/rate limit) validada com a skill `site-security`.

### 5. Acessibilidade básica
- Contraste de texto legível (ferramentas do Lighthouse já acusam isso).
- Imagens com `alt`.
- Navegação por teclado (Tab) consegue alcançar todos os links/botões principais.

### 6. SEO técnico (conferência final)
- `title` e `meta description` únicos por página (produzidos pela skill `seo-specialist`).
- `sitemap.xml` e `robots.txt` acessíveis.
- `llms.txt` publicado na raiz.
- Um único `<h1>` por página.
- HTTPS ativo (confirmar após o deploy).

### 7. Informações do negócio
- Telefone/WhatsApp, endereço e horário de funcionamento batem em todas as páginas e com o Google Meu Negócio (consistência de NAP — importante para SEO local).
- Favicon presente.

## Saída esperada
Relatório objetivo com: notas do Lighthouse, lista de itens ✅/❌ do checklist acima, e uma lista final "bloqueadores" (o que impede o site de ir ao ar) separada de "melhorias recomendadas" (pode ir ao ar, mas vale ajustar depois). Só considere o site "pronto para deploy" quando a lista de bloqueadores estiver vazia.
