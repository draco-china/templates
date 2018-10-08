/*
*
* HTML编译输出过滤器
*
* Description
*
*/

// 文字溢出过滤器
export const textOverflow = (text, length) => {
  const _length = length || text.length
