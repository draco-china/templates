/**
 * Created by gemini on 2017/3/15
 * 基于vue resource的http请求包装
 */
Vue.http.interceptors.push(function (request, next) {
    Vue.$indicator.open();
    next(function (response) {
        Vue.$indicator.close();
        return response;
    })
});

var Resource = function() {

    function login() {
        // 这里之所以是写死域名，是因为微信登录只能在m.genefamily.com.cn域名下进行
        location.href="http://m.genefamily.com.cn/user/login";
    }
    
    var handleAjaxGet = function (url, data, success, errorfn) {

