// Script utilitário de otimização de imagem — roda uma vez (ou de novo se trocar as fotos-fonte).
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "src/assets/profile/source";
const OUT = "src/assets/profile";
const PUBLIC = "public";

mkdirSync(OUT, { recursive: true });

async function run() {
  // Retrato principal (Hero): a foto-fonte já é um círculo sobre preto; a máscara
  // corta um pouco pra dentro pra sumir com a vinheta e deixa o fundo transparente.
  // 560px cobre o círculo de até 280px em retina 2x.
  const circulo = (lado) =>
    Buffer.from(`<svg width="${lado}" height="${lado}"><circle cx="${lado / 2}" cy="${lado / 2}" r="${lado * 0.47}"/></svg>`);
  const redonda = (lado) =>
    sharp(`${SRC}/foto-cafe.png`).resize({ width: lado }).composite([{ input: circulo(lado), blend: "dest-in" }]);

  await redonda(560).webp({ quality: 84 }).toFile(`${OUT}/portrait.webp`);
  // Miniatura redonda (Nav e página de links).
  await redonda(256).webp({ quality: 88 }).toFile(`${OUT}/avatar.webp`);

  // og:image / twitter:card — 1200x630: foto redonda no centro, sobre o fundo escuro da paleta.
  await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#0e0c0b" } })
    .composite([{ input: await redonda(520).png().toBuffer(), left: 340, top: 55 }])
    .jpeg({ quality: 85 })
    .toFile(`${PUBLIC}/og-image.jpg`);

  // Mark pessoal (avatar pixel art, fundo cinza) — usado como glifo pequeno na Nav/Footer.
  await sharp(`${SRC}/perfil-8bit (1).png`)
    .resize({ width: 128, height: 128 })
    .webp({ quality: 90 })
    .toFile(`${OUT}/mark.webp`);

  // apple-touch-icon (precisa ser PNG) a partir do mesmo avatar.
  await sharp(`${SRC}/perfil-8bit (1).png`)
    .resize({ width: 180, height: 180 })
    .png()
    .toFile(`${PUBLIC}/apple-touch-icon.png`);

  // Favicon (aba do navegador) a partir do mesmo avatar, em duas resoluções.
  await sharp(`${SRC}/perfil-8bit (1).png`)
    .resize({ width: 32, height: 32 })
    .png()
    .toFile(`${PUBLIC}/favicon-32.png`);
  await sharp(`${SRC}/perfil-8bit (1).png`)
    .resize({ width: 16, height: 16 })
    .png()
    .toFile(`${PUBLIC}/favicon-16.png`);

  console.log("Imagens otimizadas geradas em src/assets/profile e public/.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
