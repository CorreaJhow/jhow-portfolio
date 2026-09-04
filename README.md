# jhow.dev — site pessoal / portfólio

Site pessoal do Jhow: sobre, serviços de criação de site, como funciona o processo, projetos, FAQ e hub de links (LinkedIn, Instagram, Facebook, GitHub, WhatsApp, e-mail).

Stack: **Vite + React + TypeScript + Tailwind CSS v4** — site estático, sem backend, feito pra hospedar em qualquer hospedagem estática (Hostinger, Vercel, Netlify etc.) sem complicação.

## ✅ O que revisar antes de publicar

Todo o conteúdo do site fica em um único arquivo: **`src/data/site.ts`**. Não precisa mexer em componente nenhum, só editar esse arquivo. Pendências abertas:

- [ ] Trocar o card "Em breve" em `projects` assim que os próximos clientes forem ao ar.
- [ ] Domínio final: hoje tudo (`index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, JSON-LD) aponta pra `jhow.dev`. Se comprar `jhow.me` (ou outro), troque nesses 4 arquivos de uma vez.
- [ ] O FAQ existe em dois lugares que precisam ficar sincronizados: o conteúdo visível vem de `faq` em `site.ts`, mas o `FAQPage` JSON-LD (pro Google/IA) está hardcoded em `index.html` — se editar uma pergunta, edite as duas.
- [ ] As fotos de perfil (`src/assets/profile/foto-perfil.png`) têm uma marca d'água pequena de app de retrato por IA; se conseguir uma versão sem marca, rode `node scripts/optimize-images.mjs` de novo depois de substituir o arquivo-fonte.

## Imagens

As fotos originais (retrato e avatares pixel art) ficam em `src/assets/profile/source/` e não entram no bundle — só as versões otimizadas (`portrait.webp`, `mark.webp`, `public/og-image.jpg`, `public/apple-touch-icon.png`) são usadas no site. Pra gerar de novo depois de trocar uma foto-fonte:

```bash
node scripts/optimize-images.mjs
```

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

Gera a pasta `dist/` — são só arquivos estáticos (HTML/CSS/JS), prontos pra subir em qualquer lugar. `dist/.htaccess` já sai com os headers de segurança e a página 404 customizada (Hostinger/Apache).

## Deploy na Hostinger

1. Rode `npm run build` e pegue o conteúdo da pasta `dist/`.
2. No hPanel da Hostinger, vá em **Arquivos → Gerenciador de Arquivos** (ou use FTP) e entre em `public_html` (ou na subpasta do domínio, se for um addon domain).
3. Apague o conteúdo padrão (`default.php` etc.) e envie **todo o conteúdo de dentro de `dist/`** (não a pasta `dist` em si) para `public_html` — inclui o `.htaccess`, não esconda/ignore esse arquivo no FTP.
4. Confirme que o domínio (`jhow.dev` ou o que você registrar) está apontado pra essa hospedagem — se comprou domínio + hospedagem juntos na Hostinger, isso já vem configurado.
5. Ative o certificado SSL gratuito no hPanel (Hostinger oferece Let's Encrypt grátis) — obrigatório porque domínios `.dev` exigem HTTPS.

Toda vez que editar o conteúdo, repita: `npm run build` → subir o novo conteúdo de `dist/`.

## Deploy na Netlify (alternativa)

O repo já tem `netlify.toml` com o comando de build (`npm run build`) e a pasta de publicação (`dist`) configurados — não precisa mexer nada no painel da Netlify além de conectar o repositório.

1. Na Netlify, **Add new site → Import an existing project** e conecte este repositório do GitHub.
2. Confirme a **branch** que ela vai acompanhar (em Site settings → Build & deploy). Se apontar pra `main`, ela publica o que estiver lá — se o trabalho mais recente ainda estiver numa PR/branch separada, ou aponte a Netlify pra essa branch, ou faça o merge na `main` primeiro.
3. Build command e publish directory já vêm do `netlify.toml` (`npm run build` / `dist`) — não precisa preencher manualmente.
4. Headers de segurança e a página 404 (`404.html`) também já saem configurados via `netlify.toml`/`public/404.html`.

Se a tela ficar em branco após o deploy, o motivo mais comum é a Netlify não ter rodado o build (serviu o `index.html` cru, que aponta pro `.tsx` fonte) — confirme em **Deploys** que o último build terminou com sucesso e que "Publish directory" está como `dist`.

## Subindo pro GitHub

```bash
git remote add origin <URL_DO_SEU_REPO_VAZIO>
git branch -M main
git push -u origin main
```

## Próximos passos (quando fechar o próximo cliente/case)

Sequência recomendada, usando as mesmas skills do fluxo de cliente:
1. `seo-specialist` — este site já sai com title/description, JSON-LD `Person` + `ProfessionalService` + `FAQPage`, `robots.txt`, `sitemap.xml` e `llms.txt`; revisitar quando o domínio final for confirmado.
2. `lgpd-compliance-check` — hoje o site não coleta dados (sem formulário, só `mailto:`/`wa.me`/links), então não tem página de privacidade. Se adicionar formulário de contato depois, rode essa skill antes de publicar.
3. `site-security` — headers já saem via `.htaccess`; revisar HTTPS/domínio depois do deploy.
4. `site-tester` — QA final (responsividade, links, performance) antes de qualquer divulgação grande.
