//定义服务器地址
const net = {

	/*********************************************
	 * setUrl 设置本次登录IP地址
	 * GetSessionToken 获取本次登陆认证的Token值
	 * SetSessionToken 设置本次登陆认证的Token值
	 * ClearSessionToken 清楚本次登陆认证的Token值
	 * 
	 * SetLocalToken 设置本地登陆认证的Token值
	 * GetLocalToken 获取本地登陆认证的Token值
	 * ClearLocalToken 清理本地登陆认证的Token值
	 **********************************************/
	setUrl(url) {
		const _url = "http://111.230.193.251:85/" + url;
		return _url;
	},
	SetSessionToken(value) {
		uni.setStorageSync('token', value);
	},

	GetSessionToken() {
		let thisToken = uni.getStorageSync('token');
		return thisToken;
	},
	ClearSessionToken() {
		uni.removeStorageSync('token');
	},
	//调试用token
	SetTestToken(value) {
		//uni.setStorageSync('TestToken', value);
		uni.setStorage({
			key: 'TestToken',
			data: value,
			success: function(res) {
				console.log("成功");
			}
		})
	},
	getTestToken() {
		//let thisToken;
		let thisToken = uni.getStorageSync('TestToken');
		/*uni.getStorage({
			key: 'TestToken',
			success: function(res) {
				thisToken=res.data;
				console.log(res.data);
			}
		});*/
		return thisToken;
	},
	//自动登录，持久化Token到本地
	SetLocalToken(value) {
		//uni.setStorageSync('LoaclToken', value);
		uni.setStorage({ //必须使用异步操作
			key: 'LocalToken',
			data: value,
			success: function() {
				console.log("本地Token存储成功" + value);
			}
		})
	},
	GetLocalToken() {
		let localToken = uni.getStorageSync('LocalToken');
		return localToken;
	},
	ClearLocalToken() {
		//localStorage.removeItem('Token');
		uni.removeStorage({
			key:'LocalToken'
		})
	},
	SetUser(value){
		uni.setStorageSync('user', value);
	},
	GetUser(){
		let localToken = uni.getStorageSync('user');
		return localToken;
	},
     SetMenus(value){
     	uni.setStorageSync('menus', value);
     },
     
     GetMenus(){
     	let menus = uni.getStorageSync('menus');
     	return menus;
     },
     
     ClearMenus(){
     	uni.removeStorageSync('menus');
     },
     
     CheckMenus(title){
     	let menus = uni.getStorageSync('menus');
         if(menus.indexOf(title) < 0) {
			 uni.showToast({
			 	title: '没有权限操作',
			 	mask: false,
			 	duration: 1500
			 });
             return false;
         } else return true;
     },
	 showWrongTips(tips){
		uni.showToast({
			title: tips,
			mask: false,
			icon:'none',
			duration: 1500
		});
	 },
	 showWrongTipsEx(obj){
		 if(obj.data.status === 3)
		 {
			 uni.showToast({
			 title: obj.data.message+"",
			 mask: false,
			 icon:'none',
			 duration: 1500
			 });
		 }
	 },
	 showFailTips(result){
		 uni.showToast({
			title: JSON.stringify(result)+"",
			mask: false,
			icon:'none',
			duration: 1500
		 });
	 },
	 getFormatDate(date){
		var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
	 }
}

/*const TestToken = function() {
	let TextToken = '';
	let url = 'http://111.230.193.251:85/api/loginapi/login';
	uni.request({
		url: url,
		data: {
			"AccountID": "admin",
			"Password": "123456"
		},
		dataType: 'json',
		method: 'POST',
		success: (result, header) => {
			var jsondata = result.data;
			if (jsondata.status == 1) {
				let a=testGet(jsondata.token)
				console.log(a);
				//this.SetTestToken(jsondata.token);

			}
		},
		fail: () => {
			console.log("登录失败")
		}
	});
	
}*/

function testGet(item) {
	console.log(item);
	return item;
}

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};


export default {
	net,
	formatTime,
	formatLocation,
	dateUtils

}
