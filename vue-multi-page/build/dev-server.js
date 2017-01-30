require('./check-versions')()

var config = require('../config')
var configure = require('../config/configure')
if (!process.env.NODE_ENV) {
