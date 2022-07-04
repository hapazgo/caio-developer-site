import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
    ],

    css: ["~/assets/css/tailwind.css"],

    build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
    colorMode: {
    classSuffix: ''
  },


  meta: {
      title: "Caio - Developer",
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat&display=swap",
      },
      ]
  }

})
