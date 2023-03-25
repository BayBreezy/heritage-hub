const title = "Heritage Hub";

export default defineNuxtConfig({
  // to enable takover mode
  typescript: { shim: false },
  // For tailwindcss to work
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css files
  css: ["~/assets/css/main.css"],
  // modules
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@morev/vue-transitions/nuxt",
    "nuxt-typed-router",
    "nuxt-headlessui",
    "@nuxt/devtools",
    "nuxt-swiper",
  ],

  // google fonts
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  app: {
    head: {
      title,
      titleTemplate: `%s | ${title}`,
    },
  },

  // headless ui config
  headlessui: {
    prefix: "H",
  },

  runtimeConfig: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
  },
});
