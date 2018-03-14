/*
*
* 时间格式化过滤器
*
* Description
*
*/

// 取剩余秒
const pluralize = (time, label) => {
  return time + label + '前'
