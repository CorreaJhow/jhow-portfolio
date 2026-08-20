# jhow.dev — site pessoal / portfólio

Site pessoal do Jhow: sobre, serviços de criação de site, projetos e hub de links (LinkedIn, Instagram, Facebook, GitHub, e-mail).

Stack: **Vite + React + TypeScript + Tailwind CSS v4** — site estático, sem backend, feito pra hospedar em qualquer hospedagem estática (Hostinger, Vercel, Netlify etc.) sem complicação.

## ✅ O que revisar antes de publicar

Todo o conteúdo do site fica em um único arquivo: **`src/data/site.ts`**. Não precisa mexer em componente nenhum, só editar esse arquivo. Pendências marcadas com `TODO` lá dentro:

- [ ] Trocar `links.github` pelo seu usuário real do GitHub
- [ ] Preencher `profile.whatsapp` (se quiser botão de WhatsApp em vez de só e-mail)
- [ ] Revisar `profile.bio` e `profile.tagline` pro seu tom de voz
- [ ] Trocar a seção `projects` pelos seus cases reais assim que tiver o primeiro
- [ ] Confirmar domínio final em `index.html`, `public/robots.txt`, `public/sitemap.xml` e `public/llms.txt` (hoje está como `jhow.dev` — ajuste se comprar outro)

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` — são só arquivos estáticos (HTML/CSS/JS), prontos pra subir em qualquer lugar.

## Deploy na Hostinger

1. Rode `npm run build` e pegue o conteúdo da pasta `dist/`.
2. No hPanel da Hostinger, vá em **Arquivos → Gerenciador de Arquivos** (ou use FTP) e entre em `public_html` (ou na subpasta do domínio, se for um addon domain).
3. Apague o conteúdo padrão (`default.php` etc.) e envie **todo o conteúdo de dentro de `dist/`** (não a pasta `dist` em si) para `public_html`.
4. Confirme que o domínio (`jhow.dev` ou o que você registrar) está apontado pra essa hospedagem — se comprou domínio + hospedagem juntos na Hostinger, isso já vem configurado.
5. Ative o certificado SSL gratuito no hPanel (Hostinger oferece Let's Encrypt grátis) — obrigatório porque domínios `.dev` exigem HTTPS.

Toda vez que editar o conteúdo, repita: `npm run build` → subir o novo conteúdo de `dist/`.

## Subindo pro GitHub

```bash
git remote add origin <URL_DO_SEU_REPO_VAZIO>
git branch -M main
git push -u origin main
```

## Próximos passos (quando fechar o primeiro cliente/case)

Sequência recomendada, usando as mesmas skills do fluxo de cliente:
1. `seo-specialist` — aprofundar SEO (esse projeto já sai com title/description básicos, JSON-LD `Person`, `robots.txt`, `sitemap.xml` e `llms.txt`).
2. `lgpd-compliance-check` — hoje o site não coleta dados (sem formulário, só `mailto:`/links), então não tem página de privacidade. Se adicionar formulário de contato depois, rode essa skill antes de publicar.
3. `site-security` — checar headers de segurança na configuração da hospedagem.
4. `site-tester` — QA final (responsividade, links, performance) antes de qualquer divulgação grande.
