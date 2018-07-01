#!/usr/bin/env node

var path = process.argv[2], // 请输入项目路径
    exec = require('child_process').exec,
    fs   = require('fs'),
    dir  = './file',
