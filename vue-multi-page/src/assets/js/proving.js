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
		}
	}
	
	//验证金额
	//任意正整数，正小数（小数位不超过2位）
	function checkMoney(money){
		if(!!money.match(/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//手机号码验证
	function checkMobile(mobile){
		if(!!mobile.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证码验证(6位纯数字)
	function checkCode(code){
