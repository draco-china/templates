/**
 * Created by Monarch on 2016/8/17.
 */
var crypto = require('crypto');
//console.log(crypto.getHashes()); //输出可用加密算法
//MD5加密
function encodeMd5(encodeStr){
    var md5 = crypto.createHash('md5');
    md5.update(encodeStr);              //更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法。
    var encodeStr = md5.digest('hex');  //计算所有传入数据的hash摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。
    return encodeStr;
