// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],
  app:{
    head:{
      title: 'Nuxt Dojo',
      meta:[
        {name:'description',content:'Everything about Nuxt 3'}
      ],
      link:[
        {rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css'}
      ]
    }
  }
})