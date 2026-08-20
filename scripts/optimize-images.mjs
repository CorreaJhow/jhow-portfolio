// Script utilitário de otimização de imagem — roda uma vez (ou de novo se trocar as fotos-fonte).
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "src/assets/profile/source";
const OUT = "src/assets/profile";
const PUBLIC = "public";

mkdirSync(OUT, { recursive: true });

async function run() {
  // Retrato principal (Hero/About) — WebP leve, mantém proporção 3:4.
  await sharp(`${SRC}/foto-perfil.png`)
    .resize({ width: 640 })
    .webp({ quality: 82 })
    .toFile(`${OUT}/portrait.webp`);

  // og:image / twitter:card — 1200x630, cover centralizado no rosto.
  await sharp(`${SRC}/foto-perfil.png`)
    .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
    .flatten({ background: "#09090b" })
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
