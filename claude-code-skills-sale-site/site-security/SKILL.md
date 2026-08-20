---
name: site-security
description: Auditoria e hardening de segurança de sites de clientes antes e depois do deploy: headers de segurança, HTTPS/HSTS, proteção de formulários contra spam/bot, segredos e chaves de API fora do repositório, dependências vulneráveis (npm audit), backups e segurança de domínio/DNS. Use sempre que o usuário pedir para revisar segurança, "auditar segurança do site", proteger formulário de spam, checar vazamento de chave/API key, ou antes de qualquer site ir para produção — roda em conjunto com site-tester como trava final antes do deploy-pipeline.
---

# Site Security — auditoria e hardening antes/depois do deploy

Você faz a checagem de segurança de um site antes dele ir ao ar (ou revisão de um site já publicado). Sites de pequenos negócios costumam ser alvo fácil justamente porque ninguém olha para isso — um site comprometido (invadido, usado para phishing, ou que vaza um formulário de dados) destrói a confiança do cliente em você, então esta skill é uma trava obrigatória, não opcional. Rode em conjunto com `site-tester`, antes de `deploy-pipeline`.

## Checklist de auditoria

Classifique cada item como ✅ Conforme / ⚠️ Atenção / ❌ Ausente, com a correção sugerida.

### 1. Transporte e HTTPS
- HTTPS forçado em todo o site (nenhuma página acessível por `http://` sem redirect).
- Sem "mixed content" (imagens, scripts ou iframes carregados por `http://` dentro de uma página `https://`).
- Certificado SSL válido e renovação automática (Vercel e Hostinger com Let's Encrypt cuidam disso — só confirme que está ativo).

### 2. Headers de segurança HTTP
Configure os headers abaixo. Para Next.js, adicione em `next.config.js`:
```js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ];
  },
};
```
Para sites estáticos hospedados fora da Vercel (ex.: Hostinger), os mesmos headers podem ir num `vercel.json`/`.htaccess` conforme o host. `X-Frame-Options: SAMEORIGIN` evita que o site seja embutido em iframe de outro domínio (proteção contra clickjacking) — importante porque sites de pequenos negócios raramente precisam ser embutidos em outro lugar.
Um `Content-Security-Policy` (CSP) mais restrito é ideal, mas só implemente com calma — CSP mal configurado quebra scripts legítimos (Analytics, Maps, WhatsApp widget). Comece permissivo e vá restringindo conforme testa.

### 3. Segredos e chaves de API
- Confirme que existe um `.gitignore` cobrindo `.env`, `.env.local` e qualquer arquivo de credencial — nunca comitar isso no GitHub, mesmo em repositório privado.
- Nenhuma chave de API, senha ou token hardcoded direto no código-fonte (principalmente em componentes client-side, onde qualquer visitante consegue ver no navegador). Chaves sensíveis vivem só como variável de ambiente no servidor/build (Vercel Environment Variables), nunca expostas no bundle JS enviado ao navegador.
- Se o site usa alguma chave pública (ex.: Google Maps embed, reCAPTCHA site key), confirme que é realmente uma chave pública por design — não confundir com uma chave secreta.

### 4. Dependências vulneráveis
Antes do deploy, rode:
```bash
npm audit
```
Corrija (ou pelo menos avalie) vulnerabilidades classificadas como `high` ou `critical` antes de publicar — geralmente basta `npm audit fix`. Para vulnerabilidades sem correção automática, avalie se a dependência é realmente necessária; pacotes abandonados (sem atualização há anos) são um risco silencioso, prefira alternativas mantidas.

### 5. Formulários — proteção contra spam e abuso
Todo formulário público (contato, agendamento, newsletter) precisa de pelo menos uma camada de proteção:
- **Honeypot**: campo invisível ao usuário humano (escondido via CSS) que, se preenchido, indica um bot — descarte o envio silenciosamente. É grátis e resolve a maior parte do spam automatizado sem incomodar o usuário real.
- **Validação no servidor**, não só no navegador — nunca confie apenas em validação client-side, porque é trivial de burlar.
- **Rate limiting** básico (ex.: bloquear múltiplos envios do mesmo IP em poucos segundos) se o formulário for exposto a abuso.
- Para formulários com risco maior de spam pesado (ex.: alto tráfego), considere reCAPTCHA ou Cloudflare Turnstile — mas para a maioria dos sites de PME local, honeypot + validação de servidor já resolve sem atrito na experiência do usuário.

### 6. Scripts e embeds de terceiros
- Use apenas o código de incorporação oficial de cada serviço (Google Maps, Meta Pixel, WhatsApp) — nunca cole scripts de fontes não confiáveis ou copiados de tutoriais duvidosos.
- Carregue scripts de terceiros de forma assíncrona/adiada quando possível (também ajuda performance).

### 7. Se houver CMS ou painel administrativo
Quando o projeto usa WordPress ou outro CMS com login (não é o padrão desta stack, mas pode acontecer):
- Senha forte + autenticação de dois fatores no admin.
- Limitar tentativas de login (plugin de bloqueio de força bruta).
- Manter core, tema e plugins sempre atualizados — a maioria das invasões de WordPress explora plugin desatualizado, não o core.
- Não usar `admin` como nome de usuário.

### 8. Backup e recuperação
- O próprio Git/GitHub já funciona como backup do código-fonte — garanta que o histórico de commits está íntegro antes do deploy.
- Se o site tiver qualquer dado dinâmico (formulários salvando em banco, CMS), confirme que existe backup periódico automático (Hostinger costuma oferecer backup no painel — ative).
- Documente o processo de "restaurar do zero" (reclonar repo + redeploy) para não depender de memória em caso de incidente.

### 9. Segurança de domínio/DNS
- Ative renovação automática do domínio no registrador (registro.br/Hostinger) — domínio expirado é uma das formas mais comuns (e evitáveis) de um negócio perder o site e a marca para sequestro de domínio.
- Ative autenticação de dois fatores na conta do registrador e na conta da Vercel/Hostinger.

## Se encontrar um incidente (site comprometido)
1. Trocar imediatamente todas as senhas/chaves relacionadas (GitHub, Vercel, Hostinger, e-mail).
2. Revisar o histórico de commits/deploys por alterações não reconhecidas.
3. Fazer redeploy a partir de um commit limpo conhecido.
4. Só depois investigar a causa raiz (dependência vulnerável, credencial vazada, plugin desatualizado).

## Saída esperada
Relatório com os itens ✅/⚠️/❌ do checklist, os headers de segurança prontos para colar na config do projeto, e uma lista separada de "bloqueadores" (impedem o deploy) vs. "recomendado, mas não crítico".
