import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Duas páginas: portfólio (jhow.me) e hub de links (links.jhow.me).
      input: {
        main: resolve(__dirname, 'index.html'),
        links: resolve(__dirname, 'links.html'),
      },
    },
  },
})
