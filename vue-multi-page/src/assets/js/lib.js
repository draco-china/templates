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
