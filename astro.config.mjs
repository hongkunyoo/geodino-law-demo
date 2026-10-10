// @ts-check
import { defineConfig } from 'astro/config';
import { office } from './src/config/office.ts';

// https://astro.build/config
export default defineConfig({
  site: office.siteUrl,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
