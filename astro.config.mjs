// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
// https://astro.build/config
export default defineConfig({
  site: "https://ishikawa-masashi.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    // MathJax(SVG) でビルド時に数式を描画。TeX 純正フォントで本に近い矢印になる。
    rehypePlugins: [rehypeMathjax],
  },
  vite: {
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
