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
		} else{
			return false; 
		}
	}
	//验证身份证号码
	function checkCardNo(card){
	  	vcity={ 11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",  
            21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",  
            33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",  
            42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",  
            51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",  
            63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"  
        }; 
	    var card = document.getElementById('card_no').value;  
	    //是否为空  
	    if(card === '')  
	    {  
	        alert('请输入身份证号，身份证号不能为空');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //校验长度，类型  
	    if(isCardNo(card) === false)  
	    {  
	        alert('您输入的身份证号码不正确，请重新输入');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //检查省份  
	    if(checkProvince(card) === false)  
	    {  
	        alert('您输入的身份证号码不正确,请重新输入');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //校验生日  
	    if(checkBirthday(card) === false)  
	    {  
	        alert('您输入的身份证号码生日不正确,请重新输入');  
	        document.getElementById('card_no').focus();  
	        return false;  
	    }  
	    //检验位的检测  
	    if(checkParity(card) === false)  
	    {  
	        alert('您的身份证校验位不正确,请重新输入');  
	        document.getElementById('card_no').focus();  
	        return false;  
	    }  
	    return true;  
		//检查号码是否符合规范，包括长度，类型  
		isCardNo = function(card)  
		{  
		    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
