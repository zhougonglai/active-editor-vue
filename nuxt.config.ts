import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  postcss: {
    config: true,
    plugins: {
      autoprefixer: true,
      cssnano: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  publicRuntimeConfig:{
    // baseURL: process.env.VUE_APP_API_URL,
  }
})
