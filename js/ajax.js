function ajax(method, url, param, res) {

//	1.创建请求
	var xhr = new XMLHttpRequest();

//2.捕获异常
	try {

		xhr = new XMLHttpRequest();

	} catch(e) {

		xhr.ActiveXObject("Microsoft.XMLHTTP");

	}

//	3.发起请求
	xhr.open(method, url);

//	4.判断是否需要设置请求头,进行发送请求
	if(method.toLowerCase() == "get") { //不需要设置请求头

		xhr.send();

	} else { //需要设置请求头

		xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded");
		xhr.send(param);

	}

//	5.监听请求状态
	xhr.onreadystatechange = function() {

		if(xhr.readyState == 4 && xhr.status == 200) {		//请求成功

			res && res(xhr.responseText);	//确认有res参数才能将responseText当做res函数的实参返回

		}else if(xhr.readyState == 4 && xhr.status != 200){
			
			console.log("请求失败");
			
		}

	}

}