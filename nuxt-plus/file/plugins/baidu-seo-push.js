/*
** 只在生成模式的客户端中使用
*/

if (process.env.NODE_ENV === 'production') {
  /*
  ** 百度seo-自动push脚本
  ** https://zz.bdstatic.com/linksubmit/push.js
  */
  const baiduPush = href => {
    !function(){
      let e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi
      let r = href || window.location.href
      let t = document.referrer
      if (!e.test(r)) {
        let o = "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif"
