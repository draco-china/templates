// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var configure = require('../config/configure')

module.exports = {
  build: {
    env: require('./prod.env'),
    //index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
