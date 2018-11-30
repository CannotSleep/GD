<template>
	<view class="content">
		<view class="module-row mt-30">
			<view class="module-box" v-for="(value,key) in moduleList" :key="key">
				<text class="module-title" :style="{'color':value.color}">{{value.title}}</text>
				<image :src="value.img" mode="aspectFit" class="module-img" @tap="openViews(value.url,value.title)"></image>
			</view> 
		</view>
	</view>
</template>

<script>
	import server from '../../../store/server.js';
	export default {
		data() {
			return {
				moduleList: [{
					"id": 1,
					"img": '../../../static/img/quality/quality%20(1).png',
					"url": 'safetyCheck?type=safety',
					"title": '安全隐患检查',
					"color": "#fff"
				}, {
					"id": 2-1,
					"img": '../../../static/img/quality/quality%20(11).png',
					"url": 'safetyList?state=my',
					"title": '我的安全检查',
					"color": "#fff"
				}, {
					"id": 2,
					"img": '../../../static/img/quality/quality%20(2).png',
					"url": 'safetyList?state=0',
					"title": '安全检查记录',
					"color": "#fff"
				}, {
					"id": 3,
					"img": '../../../static/img/quality/quality%20(3).png',
					"url": 'safetyList?state=1',
					"title": '安全整改记录',
					"color": "#fff"
				}, 
				{
					"id": 4,
					"img": '../../../static/img/quality/quality%20(4).png',
					"url": 'SafetyOffList',
					"title": '安全离线记录',
					"color": "#fff"
				}, 
				{
					"id": 5,
					"img": '../../../static/img/quality/quality%20(5).png',
					"url": 'safeChart',
					"title": '安全隐患报表',
					"color": "#fff"
				}, {
					"id": 6,
					"img": '../../../static/img/quality/quality%20(6).png',
					"url": 'qualityCheck?type=quality',
					"title": '质量隐患检查',
					"color": "#fff"
				}, {
					"id": 7-1, 
					"img": '../../../static/img/quality/quality%20(10).png',
					"url": 'QualityList?state=my',
					"title": '我的质量检查',
					"color": "#fff"
				}, {
					"id": 7, 
					"img": '../../../static/img/quality/quality%20(7).png',
					"url": 'QualityList?state=0',
					"title": '质量检查记录',
					"color": "#fff"
				},{
					"id": 8,
					"img": '../../../static/img/quality/quality%20(8).png',
					"url": 'QualityList?state=1',
					"title": '质量整改记录',
					"color": "#fff"
				}, 
				{
					"id": 9,
					"img": '../../../static/img/quality/quality%20(9).png',
					"url": 'QualityOffList',
					"title": '质量离线记录',
					"color": "#fff"
				},
				]
			}
		},
		methods:{
			
			openViews(url,title){  //，保留当前页面，跳转新页面
				//if(server.net.CheckMenus(title)){
					uni.navigateTo({
						url:url
					})
				//}
			}
		}
	}
</script>

<style scoped>
	.content {
		flex: 1;
		justify-content: flex-start;
		align-items: flex-start;
		background:#17A869;
	}

	.module-row {
		width: 100%;
		height: 226px;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: center;
	}
 
	.module-box {
		width:33%;
		/* width: 226px; */
		text-align: center;
		height: 226px;
		/* background-color: #fff; */
		margin-top: 10px;
		font-size: 28px;
		color: #21AA6A;
		margin-bottom:50px;

	} 

	.module-title {
		width: 210px;
		font-size: 0.3rem;
		color: #21aa6a; 
		text-align: center;
		margin:0 auto;
	}

	.module-img {
		width: 210px;
		height: 210px;
		/* margin: 0 auto; */
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}
</style>
