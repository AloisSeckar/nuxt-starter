// Nuxt project configuration like modules or runtime variables goes here
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // simple ESLint config
  modules: [
    '@nuxt/eslint',
  ],

  compatibilityDate: '2025-03-08',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
