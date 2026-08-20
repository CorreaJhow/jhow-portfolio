---
name: deploy-pipeline
description: Guia o fluxo completo de publicação e venda de um site: criar repositório privado no GitHub, subir o código, conectar na Vercel, orientar a compra do domínio do cliente e apontar o domínio (Vercel ou Hostinger). Use sempre que o usuário pedir para publicar, hospedar, colocar no ar, subir no GitHub/Vercel/Hostinger, ou configurar o domínio de um site de cliente.
---

# Deploy Pipeline — GitHub → Vercel → domínio do cliente → Hostinger

Você conduz a etapa final: pegar o código pronto (validado pelas skills `site-security` e `site-tester`) e publicar de forma profissional, entregando um site no ar com domínio próprio do cliente. Só inicie esta skill depois que `site-tester` não tiver bloqueadores pendentes.

## 1. Criar o repositório no GitHub (privado)
O código do cliente deve ficar em repositório **privado** (é propriedade do cliente/seu trabalho pago, não é open source).

Via terminal (GitHub CLI, se disponível):
```bash
gh repo create nome-do-cliente-site --private --source=. --remote=origin
git add .
git commit -m "Site inicial - entrega para [cliente]"
git push -u origin main
```
Se `gh` não estiver configurado, oriente a criar o repo manualmente em github.com/new (marcar "Private") e depois:
```bash
git remote add origin https://github.com/SEU_USUARIO/nome-do-cliente-site.git
git branch -M main
git push -u origin main
```

## 2. Conectar na Vercel
1. Acesse vercel.com, "Add New Project", importe o repositório recém-criado do GitHub.
2. A Vercel detecta Next.js/Vite automaticamente — confirme o build command e output directory se pedir.
3. Configure variáveis de ambiente (se houver, ex.: chave de formulário/e-mail) — nunca commitadas no repositório.
4. Deploy inicial gera uma URL de preview (`nome-do-cliente-site.vercel.app`) — use essa URL para o cliente aprovar antes do domínio final entrar no ar.

## 3. Orientar a compra do domínio
O domínio é do cliente, não seu — ele deve comprar e ser o titular (evita dor de cabeça de posse depois).
- Domínios `.com.br`: registrar diretamente em **registro.br** (registro oficial, mais barato, é a fonte — outros lugares só revendem).
- Domínios `.com` ou outros: pode comprar direto pela **Hostinger** (mais simples se já for hospedar lá) ou em qualquer registrador confiável.
- Sugira o nome do domínio junto com o cliente antes da compra (nome do negócio + cidade, se o nome puro já estiver ocupado).

## 4. Apontar o domínio — duas rotas possíveis

**Rota A — manter hospedagem na Vercel (mais simples, recomendado para site institucional):**
1. No projeto da Vercel: Settings → Domains → adicionar o domínio comprado.
2. A Vercel mostra os registros DNS necessários (geralmente um registro `A` apontando para IP da Vercel, ou `CNAME` para subdomínios).
3. No painel do registrador (registro.br ou Hostinger), adicionar esses registros DNS.
4. Propagação pode levar de minutos a até 24h.

**Rota B — hospedar na Hostinger com o domínio do cliente (quando o cliente já tem plano de hospedagem lá, ou prefere tudo em um único painel):**
1. Build estático do projeto (`next export` ou `vite build`) e subir os arquivos via o gerenciador de arquivos da Hostinger ou FTP.
2. No painel da Hostinger, associar o domínio à hospedagem (se comprado lá, já vem conectado; se comprado em outro lugar, apontar os nameservers da Hostinger no registrador de origem).
3. Ativar SSL grátis (Hostinger oferece Let's Encrypt automático).

Escolha a rota com o usuário conforme o que o cliente já tem contratado ou prefere pagar.

## 5. Checklist pós-deploy
- HTTPS ativo (cadeado no navegador, sem aviso de "não seguro").
- Site abre pelo domínio final, não só pela URL de preview.
- `sitemap.xml`, `robots.txt` e `llms.txt` acessíveis pelo domínio final.
- Submeter o site no Google Search Console com o domínio final.
- Testar formulários novamente já em produção (ambiente diferente do preview pode quebrar integrações).
- Renovação automática de domínio ativada (ver `site-security`).

## 6. Modelo de entrega/venda
Ao entregar, deixe claro para o cliente, em linguagem simples:
- Quem é o titular do domínio (o cliente).
- Onde o site está hospedado e como renovar (Vercel é gratuito para sites simples; Hostinger tem mensalidade/anuidade de hospedagem).
- O que está incluso no seu serviço (criação) vs. o que é custo recorrente do cliente (domínio, hospedagem se for Hostinger).

Depois de publicado, siga para a skill `client-handoff` para a entrega formal e oferta de manutenção.

## Saída esperada
Site publicado e acessível pelo domínio final, com HTTPS ativo, repositório privado no GitHub como fonte de verdade, e um resumo simples para o cliente explicando titularidade do domínio e custos recorrentes.
