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
  const cansub = _length && text && text.length > _length
  return cansub ? text.substr(0, _length) + '...' : text
