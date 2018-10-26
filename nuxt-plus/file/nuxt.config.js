

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
