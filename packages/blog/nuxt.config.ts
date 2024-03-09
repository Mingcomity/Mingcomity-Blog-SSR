// https://nuxt.com/docs/api/configuration/nuxt-config
// import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.scss', '~/assets/css/font.css', '~/assets/iconFont/iconfont.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/css/variables.scss" as *; @use "@/assets/css/element/index.scss" as element;'
        }
      }
    }
  },
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
    '@element-plus/nuxt',
    '@nuxtjs/color-mode'
  ],
  // colorMode
  colorMode: {
    classSuffix: ''
  },
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark']
  }
})
