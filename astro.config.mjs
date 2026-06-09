import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cyzentech.com',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
