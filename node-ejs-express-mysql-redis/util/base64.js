/**
 * Created by Monarch on 2016/8/17.
 */

var base64url = require("base64-url");
//base64加密
function encodeSpecial(encodeStr){
    //	var str = base64url.encode(encodeStr);
    var b = new Buffer(encodeStr);
    var str= b.toString('base64');
    str = str.replace("+", "*").replace("/", "-").replace("=", ".");
    return str;
}
//base64解密
