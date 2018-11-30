<template>
	<view class="content">
		<view class="img-group mt-20">
			<image :src="src"></image>
		</view>
		<view class="input-group mt-20">
			<view class="login-input-row mt-20">
				<input type="text" value="" placeholder="请输入用户名" placeholder-style="color:#fff" v-model="account" />
			</view>
			<view class="login-input-row mt-20">
				<input type="password" value="" placeholder="请输入密码" placeholder-style="color:#fff" v-model="password" />
			</view>
			<view class="login-input-row mt-20 ">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">自动登录</view>
					<switch @change="autoLogin" color="#0ce998" />
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" :loading="loading" @tap="login">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import server from '../../store/server.js';
	export default {
		data() {
			return {
				src: '../../static/img/logo.png',
				account: '',
				password: '',
				loading: false,
				isAuto: false,
				index: 0
			}
		},
		methods: {
			login() {
				this.loading = true;
				if (this.account.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '用户名不能为空',
						success:(e)=>{
							this.loading=false;
						}
					});
					return;
				}
				if (this.password.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '密码不能为空',
						success:(e)=>{
							this.loading=false;
						}
					});
					return;
				}
				const ajaxdata = JSON.stringify({
					AccountID: this.account,
					Password: this.password
				})
				const url = server.net.setUrl('api/loginapi/login');
				uni.request({
					url: url,
					data: ajaxdata,
					dataType: 'json',
					method: 'POST',
					header: {
						"content-type": "application/json"
					},
					success: (result, header) => {
						let jsondata = result.data;
						if (jsondata.status == 1) {
							uni.showToast({
								icon: 'none',
								title: '登录成功'
							});
							server.net.SetSessionToken(jsondata.token);
							server.net.SetUser(jsondata.data);
							this.getAuthorityMenus();//获取菜单权限
							//判断是否自动登录
							if (this.isAuto == true) {							
								server.net.SetLocalToken(jsondata.token);
							}
							uni.switchTab({
								url: '../index/index',
								fail: function(e) {
									console.log("跳转失败")
								}
							});

							console.log("本次登录token：" + server.net.GetSessionToken());
						} else {
							uni.showToast({
								icon: 'none',
								title: jsondata.message,
								success:(e)=>{
									this.loading=false;
								}
							});
						}
					},
					fail: (e) => {
						server.net.showFailTips(e)
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			autoLogin(e) {
				this.isAuto = e.detail.value;
			},
			getAuthorityMenus(){
				const url = server.net.setUrl('api/loginapi/GetAuthority');
				uni.request({
					url: url,
					method: 'POST',
					header: {
						Token: server.net.GetSessionToken()
					},
					success: (data) => {
						let jsondata = data.data;
						let dataArr = jsondata.data;
						if (jsondata.status == 1) {
							let menus = "";
							console.log("菜单权限获取成功");
                            for(let i = 0; i < dataArr.length; i++) {
                                menus += dataArr[i].Name + ",";
								if(dataArr[i].AppTitle != "")
								    menus += dataArr[i].AppTitle + ",";
                            }
                            server.net.SetMenus(menus);
						} else {
							console.log("菜单权限获取失败");
							server.net.SetMenus("");
						}
					},
					fail: (data, code) => {
						server.net.showFailTips(data)
						console.log("菜单权限获取失败:" + data + code)
						server.net.SetMenus("");
					},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.content {
		flex-direction: column;
		align-items: flex-start ! !important;
		justify-content: center;
		background-color: #17a869;
	}

	.img-group {
		width: 100%;
	}

	.input-group {
		width: 100%;
		padding: 0px;
	}

	.login-input-row {
		margin-top: 30px;
		text-align: center;
	}

	.login-input-row input {
		background-color: #17A869;
		border-radius: 40px;
		border: 1px solid #fff;
		color: #fff !important;
		height: 40px;
		font-size: 28px;
		padding: 10px 0;
	}

	.input-group input::-webkit-input-placeholder {
		color: #fff;
	}

	.btn-row button {
		border-radius: 40px;
		background-color: #45b881;
		height: 80px;
		border: none;
		padding: 0px;
		line-height: 80px;
	}

	picker {
		width: 100%;
		height: 50px;
		background-color: #17A869;
		border-radius: 40px;
		padding: 15px 0;
		border: 1px solid #fff;
		color: #fff ! !important;
		text-align: center;
	}

	.uni-input {
		text-align: center;
		color: #fff;
		justify-content: center;
	}

	.uni-list-cell {
		display: flex;
		position: relative;
		flex-flow: row;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 40px;
		font-size: 28px;
		padding: 15px 35px;
		padding-left: 80px;
	}
</style>
