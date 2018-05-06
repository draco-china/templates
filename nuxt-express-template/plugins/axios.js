import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL =  process.env.baseUrl
}
// 名称: 全替换函数
// 功能: 把json中所有的undefined值替换成空字符串
// 返回: 处理完成的json
// 参数: json 指定的json
