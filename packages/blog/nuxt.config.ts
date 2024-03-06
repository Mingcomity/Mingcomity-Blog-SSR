// https://nuxt.com/docs/api/configuration/nuxt-config
// import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'Mingcomity的博客,分享前端开发笔记、摄影作品等等'
        },
        {
          name: 'keywords',
          content: 'Mingcomity博客,Mingcomity摄影作品,Mingcomity开发笔记'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title: 'Mingcomity的博客',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs']
      }
    ],
    '@element-plus/nuxt'
  ]
})
