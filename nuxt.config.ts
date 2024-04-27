// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt project configuration like modules or runtime variables goes here

  modules: [
    // simple ESLint config
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },

})
