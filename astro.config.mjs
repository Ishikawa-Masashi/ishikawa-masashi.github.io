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
    // minRuleThickness で分数の横線・√の線を太くする（既定は約 0.04em で細い）
    rehypePlugins: [[rehypeKatex, { minRuleThickness: 0.09 }]],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
  server: {
    host: '127.0.0.1'
  }
});
