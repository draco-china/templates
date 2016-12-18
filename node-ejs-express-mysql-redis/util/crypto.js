/**
 * Created by Monarch on 2016/8/17.
 */
var crypto = require('crypto');
//console.log(crypto.getHashes()); //输出可用加密算法
//MD5加密
function encodeMd5(encodeStr){
    var md5 = crypto.createHash('md5');
