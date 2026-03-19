import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      prerenderScript: fileURLToPath(new URL('./src/main.tsx', import.meta.url)),
      additionalPrerenderRoutes: ['/about', '/work', '/blog', '/contact'],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
