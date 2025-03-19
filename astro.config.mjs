// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://govindahosein.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "night-owl",
    },
    syntaxHighlight: "shiki",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
