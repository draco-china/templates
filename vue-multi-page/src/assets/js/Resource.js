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

        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        // ajax请求强制刷新
        if (url.indexOf('?') > 0) {
            url = url + '&r' + Math.random();
        } else {
            url = url + '?r' + Math.random();
        }
        // 添加请求头和参数
        var options={
            headers: headers,
            params:data
        };
        Vue.http.get(url,options).then(function (response) {
            response = response.data;

            if(response.code == 0){
                success(response);
            }else if(response.code == 1){ //请求检测未登录处理
                login()
            }else{
                Vue.$toast(response.msg)
            }
