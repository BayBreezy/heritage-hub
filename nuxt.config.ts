const title = "Heritage Hub";
const shortTitle = "Heritage Hub";
const description = "A place where you can share your heritage with the world.";
const image = "https://heritage-hub.netlify.app/ss.png";
const url = "https://heritage-hub.netlify.app/";

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
    "@kevinmarrec/nuxt-pwa",
  ],

  // google fonts
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
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

  app: {
    head: {
      title,
      titleTemplate: `%s | ${title}`,
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: url,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },
  pwa: {
    meta: {
      name: shortTitle,
      author: "Apply Digital",
      theme_color: "#059669",
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: "#059669",
      description: description,
    },
  },
});
