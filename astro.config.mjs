// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// https://astro.build/config
export default defineConfig({
  site: "https://ishikawa-masashi.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: '127.0.0.1'
  }
});
