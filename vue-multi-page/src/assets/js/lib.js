/**
 * Created by gemini on 2017/3/27.
 */
import Vue from 'vue'
import vueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/all.css'  //引入公共样式
import '@/assets/css/icon.css' //字体图标样式

// 注册组件
Vue.use(vueResource)
Vue.use(MuseUI)

export default{
    get:function(url, data, success, errorfn){
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
            },function (response) {
                if(errorfn){
                    errorfn(response);
                }else{
                    console.log('get')
                    // Vue.$toast(response.status +"  "+response.statusText)
                }
            });
        },
    post:function(url, data, success, errorfn){
            if (!data) {
                data = { };
            }
            data._r = Math.random();
            var options = {
                emulateJSON:true
            };
            Vue.http.post(url,data,options).then(function(response){
                response = response.data;
                if(response.code == 0){
                    if(success) success(response);
                }else if(response.code ==1){ //请求检测未登录处理
                    login()
                }else{
                    Vue.$toast(response.msg)
