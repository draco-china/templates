/**
 * Created by gemini on 2017/3/15.
 */
var proving = function(){
	//验证特殊字符
	//返回false表示有特殊字符
	function checkStr(str){
		if(!!str.match(/^(([^\^\.<>%&',;=?$"':#@!~\]\[{}\\/`\|])*)$/)){ 
			return false; 
		} else{
			return true; 
