/*
*
* 全局设置数据状态
*
*/

export const state = () => {
  return {
    // 是否为移动端
    isMobile: false,
    // ua
    userAgent: ''
  }
}

export const getters = {
  isMobile: state => state.isMobile,
