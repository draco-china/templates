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
