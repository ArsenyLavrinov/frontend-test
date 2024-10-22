// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
  pinia: {
    storeDirs: ["./stores"],
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "nuxt-build"),
    },
  },
});
