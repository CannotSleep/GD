<template>
	<view class="content">
		<view class="module-row mt-30">
			<view class="module-box" v-for="(value,key) in moduleList" :key="key">
				<text :style="{'color':value.color}">{{value.title}}</text>
				<image :src="value.img" mode="aspectFit" class="module-img" @tap="openViews(value.url)"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		data() { 
			return {
				moduleList: [{
					"id": 1,
					"img": '/static/img/File/file4.png',
					"url": 'downFile',
					"title": '下载管理',
					"color": "#21aa6a"
				}, {
					"id": 2,
					"img": '/static/img/File/file2.png',
					"url": 'fileList?type=1',
					"title": '我的文件',
					"color": "#5ec2ca"
				}, {
					"id": 3,
					"img": '/static/img/File/file3.png',
					"url": 'fileList?type=2',
					"title": '与我相关',
					"color": "#1a738b"
				}, {
					"id": 4,
					"img": '/static/img/File/file1.png',
					"url": 'fileList?type=0',
					"title": '共享文件',
					"color": "#dca13a"
				}]
			}
		},
		methods:{
			openViews(url){  //，保留当前页面，跳转新页面
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.content {
		flex: 1;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.module-row {
		width: 100%;
		height: 226px;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.module-box {
		width: 326px;
		height: 226px;
		margin-top: 30px;
		font-size: 28px;
		color: #21AA6A;
		text-align: center;
		border-radius: 50px;
		margin-top: 50px;
	}

	.module-title {
		font-size: 28px;
		color: #21aa6a;
	}

	.module-img {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 10px;
	}
</style>
