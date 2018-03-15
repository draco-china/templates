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
}

// 相对时间过滤器，传入时间，返回距离今天有多久
export const timeAgo = time => {
  time = time instanceof Date ? time : new Date(time)
  const between = Date.now() / 1000 - Number(time) / 1000
  if (between < 3600) {
