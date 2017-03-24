var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: utils.getEntries('./src/'+config.build.assetsSubDirectory+'/**/*.js'),// 获得入口js文件
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
