export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Clifford Ray — Backend & Full-stack Engineer',
      meta: [
        { name: 'description', content: 'Clifford Ray builds dependable backend systems, thoughtful digital products, and clear technical experiences.' },
        { name: 'theme-color', content: '#090b0d' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Clifford Ray — Backend & Full-stack Engineer' },
        { property: 'og:description', content: 'Backend engineering, system design, and product development.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },
  typescript: { strict: true, typeCheck: true },
  tailwindcss: { viewer: false }
})
