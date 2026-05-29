import { defineConfig } from 'astro/config';

// https://astro.build/config
// Note: Tailwind CSS is loaded via CDN in index.astro
// No @astrojs/tailwind integration needed
export default defineConfig({
  output: 'static',
  site: 'https://pinncafe.com',
});
