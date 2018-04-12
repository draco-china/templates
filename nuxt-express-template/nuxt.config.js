module.exports = {
  build: {
    // 为JS和Vue文件定制babel配置。https://nuxtjs.org/api/configuration-build/#analyze
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  cache: {
    max: 10,
    maxAge: 600000
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' }
  ],
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-exprss-template',
    titleTemplate: '%s | nuxt-exprss-template',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
