/*
** 只在生成模式的客户端中使用
*/

if (process.env.NODE_ENV === 'production') {

  const copyText = () => {
    return [ '',
      '著作权归作者所有。',
