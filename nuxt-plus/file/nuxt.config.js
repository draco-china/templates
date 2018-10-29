

/*---------- START ----------*/
/********** DO NOT MODIFY **********/
/**
 * 将值插入数组中
 * @param path // module.exports下的路径
 * @param value // 需要push到数组的值或者对象
 */
function pushArr(path, value) {
  var pathArr = path.split('.'),
    len = pathArr.length,
    str = 'module.exports';
  for (var i = 0; i < len; i++ ) {
    str += '.'+pathArr[i];
    if(eval(str) == undefined){
      eval(str + '= {}')
      if(i == len-1) {
        eval(str + '= []')
      }
    }
  }
  eval(str).push(value)
}

/**
 * 将值插入map对象中
 * @param path // module.exports下的路径
 * @param key // 键值对的名称 如果不需要可不填 value的值将直接赋给path 此时value的值类型必须为 boolean String Number
 * @param value // 键值对的值
 */
function pushMap(path, key, value) {
  var pathMap = path.split('.'),
    len = pathMap.length,
    str = 'module.exports';
  for (var i = 0; i < len; i++ ) {
