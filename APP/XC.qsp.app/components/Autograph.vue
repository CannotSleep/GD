<template>
	<view class="content">
		<view class="page-section">
			<view class="page-section-title">签字意见</view>
			<view class="textarea-wrp">
				<textarea class="ta" placeholder="请填写签字意见" v-model="opinion" :disabled="opinionFlag"/>
			</view>
		</view>
		<view class="button-row">
			<button type="primary" size="mini"  @tap="autograph()">提交</button>
		</view>
	</view>	
</template>

<script>
	import server from '../store/server.js';
	export default {
		onLoad(option) {
			this.id = option.id;
			this.type = option.type;
			console.log('id:' + this.id + ',type:' + this.type);
			if(this.type >=5)
			{
				this.opinion = '无需填写';
				this.opinionFlag = true;
			}
		},
		data() {
			return {
				id:'',
				type:0,
				opinion:'',
				opinionFlag:false
			};
		},
		methods:{
			autograph() {
				let url = server.net.setUrl('api/ConcretePouringApi/Autograph');
				let data = {
					id: JSON.parse(this.id),
					type:this.type,
					opinion:this.opinion
				}
				console.log(data);
				uni.request({
					url: url,
					method: 'POST',
					header: {
						Token:server.net.GetSessionToken()
					},
					data: JSON.stringify(data),
					success: res => {
						server.net.showWrongTipsEx(res);
						let result = res.data;
						let jsondata = result.data;
						console.log(result.message);
						if (result.status == 1) {
							console.log("提交成功");
							uni.showToast({
								title: "提交成功",
								mask: false,
								duration: 1500
							});
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								})
							}, 2000);
						} else {
							console.log("提交失败：" + result.message);
							uni.showToast({
								title: result.message,
								mask: false,
								duration: 1500
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
.ta{
	border:solid 1px gray;
}
</style>
