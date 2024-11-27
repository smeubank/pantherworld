// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: { client: true },  
  css: ["~/assets/css/main.css"],
  experimental: {
    asyncContext: true,
  },
  runtimeConfig: {
    public: {
      world_api_url: "https://p4nth3rb0t-mainframe.herokuapp.com/world/", // NUXT_WORLD_API_URL
      // world_api_url: "http://localhost:8999/world/", // NUXT_WORLD_API_URL
    },
    oauth: {
      twitch: {
        clientId: "", // NUXT_OAUTH_TWITCH_CLIENT_ID
        clientSecret: "", // NUXT_OAUTH_TWITCH_CLIENT_SECRET
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/html-validator",
    "nuxt-auth-utils",
    "@formkit/auto-animate/nuxt",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@sentry/nuxt/module"
  ],
  sentry: {
    sourceMapsUploadOptions: {
      org: "steven-eubank",
      project: "pantherworld",
      authToken: "",
    },
  },
  compatibilityDate: "2024-07-04",
});
