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
		if(!!code.match(/^[0-9]{0,6}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证邮箱地址
	function checkemail(mail){
		if(!!mail.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证用户名(只包含大小写英文、数字和下划线,同时用户名长度在6-15之间)
	function checkusername(username){
	   if(!!username.match(/^(?!\d+$)[a-zA-Z0-9]{6,15}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证真实姓名
	//只能是汉字且2-4位
	function checkName(name){
	   if(!!name.match( /^[\u4E00-\u9FA5]{2,4}$/)){ 
			return true; 
