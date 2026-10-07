// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- Esta es la línea clave
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({
    mode: 'standalone'
  })
});