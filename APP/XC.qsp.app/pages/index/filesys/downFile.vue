<template>
	<view class="content">
		<view class="list-content">
			<view class="uni-list">
				<block v-for="(item,index) in fileDataList" :key="index">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-triplex-row">
							<view class="uni-triplex-left">
								<label class="filetext">
									<text class="list-title uni-ellipsis">{{item.fileName}}</text>
									<text class="list-level">文件大小{{item.size}}kb</text>
									<button class="list-button" type="primary" :size="mini" @tap="fileOpen(item.fileName)" :loading="false" >打开</button>
								</label>
							</view>	
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>

</template>

<script>
	import server from '../../../store/server.js';
	export default {
		data() {
			return {
				fileDataList: []
			}
		},
		methods: {
			checkLocalFile(){
				uni.getSavedFileList({
				  success: (res)=> {
						console.log(JSON.stringify(res))
						for(let f of res.fileList){
								let nameAttr = f.filePath.split("/");
								f.fileName = nameAttr[nameAttr.length-1];
								console.log(f.fileName)
								f.fileName = uni.getStorageSync(f.fileName);
								console.log(f.fileName)
						}
						this.fileDataList = res.fileList;
				  }
				});
			},
			
			fileOpen(fileName) {
				let paName = "";
				paName = uni.getStorageSync(fileName)
// 				uni.getStorage({
// 					key:fileName,
// 					success:(res)=>{
// 						paName = res.data;
// 					}
// 				});
				
				uni.openDocument({
					// filePath:"_doc/uniapp_temp/download/uniapp_save/"+paName,
					filePath:"_doc/uniapp_save/"+paName,
					success:function(result){
						console.log(JSON.stringify(result))
					},
					fail:function(res){
						console.log(JSON.stringify(res))
					}
				})
			},
		},
		onLoad(option) {
			this.testToken = server.net.getTestToken();
			this.checkLocalFile();
		},onPullDownRefresh() {
				setTimeout(function(){
					uni.stopPullDownRefresh();
				},1000)
		}
	}
</script>

<style scoped>
	.input-row {
		align-items: center;
	}

	.list-content {
		margin-top: 0px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 10px;
	}

	.list-title {
		font-size: 32px;
		color: #000;
		display: block;
	}

	.list-deadline,
	.list-level,
	.list-state{
		font-size: 26px;
		color: #6C6C6C;
		/* width:30%; */
		margin-right: 6px;
	}
	
	.filetext{
/* 		display: flex;
		flex-direction: row; */
		width: 100%;
	}
	.uni-triplex-left{
			width: 100%;
	}
	
	.list-button{
		font-size: 20px;
		/* color: #6C6C6C; */
		display: inline-block;
		margin-right: 2px;
		float: right;
		/* height: 100%; */
	}
	
	.classdown{
		display:none;
	}
	
	
</style>
