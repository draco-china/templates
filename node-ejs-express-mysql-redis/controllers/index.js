'use strict';

var httpRequest = require('request');  

module.exports = function (router) {
	router.get('/index', function (req, res) {
