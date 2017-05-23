// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var configure = require('../config/configure')

module.exports = {
  build: {
    env: require('./prod.env'),
    //index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: configure.ProjectDirectory,
    assetsPublicPath: '/',
    productionSourceMap: false,//是否显示源码
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
