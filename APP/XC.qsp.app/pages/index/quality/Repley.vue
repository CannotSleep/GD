<template>
	<view class="content">
		<form action="" class="input-form">
			<view class="input-row">
				<view class="input-label">
					<image src="../../../static/img/list1_icon/list1_icon-03.png" mode=""></image>
					<text>{{Title}}:</text>
				</view>
				<input type="text" placeholder="请选择" v-model="content"/>
			</view>
			<view class="input-row-my">
				<view class="input-label">
					<image src="../../../static/img/list1_icon/list1_icon-15.png" mode=""></image>
					<text>请选择图片:</text>
				</view>
			</view>
			<view> 
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<view class="uni-uploader-title">点击可预览选好的图片</view>
							<view class="uni-uploader-info">{{imageList.length}}/9</view>
						</view>
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in imageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
							</view>
							<view class="uni-uploader__input-box_my">
								<view class="uni-uploader__input_my" @tap="removeImage"></view>
							</view>
							<view class="uni-uploader__input-box">
								<view class="uni-uploader__input" @tap="chooseImage"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="button-row">
				<button class="search-btn" size="mini" @tap="Sub()">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	import server from '../../../store/server.js';
	export default {
		data() {
			return {
				pageId:'',
				Type:1,  //1为安全检查 2为质量检查
				Token: '', //
				SubType:1,  //1为回复 2为复查 
				Title:'',
				url:'',
				Content:'',
				imageList:[],
				sourceTypeIndex: 2,
				sizeTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeType: ['压缩', '原图', '压缩或原图'],
				imgupindex:0,
				content:'',
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				forid:'',
				qtype:0,
				qid:''
			}
		},
		onLoad(option) {
			this.Type=option.Type //决定是质量还是安全  2为质量  1为安全
			this.SubType = option.SubType;
			this.pageId = option.id;
			this.Token = server.net.GetSessionToken();
			switch(this.SubType){
				case '1':
					this.Title = "回复";
					this.qtype = 0;
					break;
				case '2':
					this.Title = "复查";
					this.qtype =  1;
					break;
				default:
				break;
			}
			
			switch(this.Type){  //1安全  2质量
				case '1':
					this.url='api/SecurityInspectApi/Reply';
				break;
				case '2':
					this.url='api/QualityApi/AddReply';
				break;
				default:
				break;
			}
			console.log(this.url)
			//设置标题栏
			uni.setNavigationBarTitle({
				title: this.Title
			});
			
		},
		methods: {
			sourceTypeChange: function (e) {
				this.sourceTypeIndex = e.target.value
			},
			sizeTypeChange: function (e) {
				this.sizeTypeIndex = e.target.value
			},
			countChange: function (e) {
				this.countIndex = e.target.value;
			},
			chooseImage: async function () {
				if(this.imageList.length === 9){
					let isContinue = await this.isFullImg();
					console.log("是否继续?",isContinue);
					if(!isContinue){
						return;
					}
				}
				uni.chooseImage({
					sourceType: this.sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: this.sizeType[this.sizeTypeIndex],
					// #endif
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						console.log(this.imageList)
					}
				})
			},
			isFullImg:function(){
				return new Promise((res) => {
					uni.showModal({
						content:"已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if(e.confirm){
								this.imageList = [];
								res(true);
							}else{
								res(false)
							}
						},
						fail:() => {
							res(false)
						}
					})
				})
			},
			previewImage: function (e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			removeImage:function(e){
				console.log("移除图片");
				this.imageList.pop();
			},
			uploadImage:function(e){ //上传图片
				console.log("上传图片")
				if(this.imgupindex!=this.imageList.length){
					let url = server.net.setUrl('api/FileApi/FileUpload');
					
					const uploadTask = uni.uploadFile({
						url: url, //仅为示例，非真实的接口地址
						header:{
							Token:this.Token
						},
						filePath:this.imageList[this.imgupindex],
						name:'123',
						formData: {
							'foreignId': this.qid,
							'type':'2'
						}, 
						success: (uploadFileRes) => {
							server.net.showWrongTipsEx(uploadFileRes);
							console.log(uploadFileRes.data);
							console.log("上传成功")
							this.imgupindex+=1;
							this.uploadImage();
							uni.showToast({
								title: '图片上传成功',
								mask: false,
								duration: 1500
							});
						}
					});   
					uploadTask.onProgressUpdate((res) => {
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				}else{
					uni.hideLoading();
					setTimeout(function() {
						uni.navigateBack({
							delta: 1
						})
					}, 2000)
				}

			},
			Sub:function(e){
				console.log(this.Type)
				switch(this.Type){
					case '1':
						this.ssub();
					break;
					case '2':
						this.qsub();
					break;
					default:
					break;
				}
			},
			qsub:function(e){
				//添加回复
				console.log(this.pageId)
				let url = server.net.setUrl(this.url);
				//let url = server.net.setUrl(this.url+"?securityId=" + this.pageId +"&type=" + this.SubType +"&content="+this.content);
				let data={
					QualityInspectID:this.pageId, 
					Type:this.qtype, 
					ReplyContent:this.content
				}
				uni.request({
					url: url,
					method: 'POST',
					header: {
						token: this.Token,
					},
					data:JSON.stringify(data),
					success: res => {
						server.net.showWrongTipsEx(res);
						console.log(res);
						let result = res.data;
						let jsondata = result.data;
						this.qid = jsondata;
						this.uploadImage();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			ssub:function(e){
				//添加回复
				
				console.log(this.pageId)
				let url = server.net.setUrl(this.url);
				let data={
					SecurityID:this.pageId, 
					Type:this.qtype, 
					ReplyContent:this.content
				}
				uni.request({
					url: url,
					method: 'POST',
					header: {
						token: this.Token,
					},
					data:JSON.stringify(data),
					success: res => {
						server.net.showWrongTipsEx(res);
						let result = res.data;
						let jsondata = result.data;
						this.qid = jsondata;
						console.log(jsondata)
						this.uploadImage();
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
		@import "../../../common/uni.css";
		.cell-pd {
			padding: 22upx 30upx;
		} 
	
		.list-pd {
			margin-top: 50upx;
		}
		
		.input-row-my{
			width: 100%;
			height: 50px;
			line-height: 50px;
			font-size: 28px;
			/* border-bottom: 0; */
			border: none;
			/* display: flex; */
		}
		
		.uni-list-cell{
			margin-top: 0;
			border-bottom: 0;
		}
		
		.uni-list-cell cell-pd{
			border: none;
		}
	
		.mysubmit{
			margin-top: 30px;
			text-align: center;
		}
		
		.uni-uploader-head{
			font-size: 30px;
		}
		
		.block {
			display: block;
		}
	
		.uni-uploader__input-box_my {
			float: left;
			position: relative;
			margin-right: 18upx;
			margin-bottom: 18upx;
			width: 154upx;
			height: 154upx;
			border: 2upx solid #D9D9D9;
		}
	
		.uni-uploader__input-box_my:before,
		.uni-uploader__input-box_my:after {
			content: " ";
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			background-color: #D9D9D9;
		}
	
		.uni-uploader__input-box_my:before {
			width: 0upx;
			height: 0upx;
		}
	
		.uni-uploader__input-box_my:after {
			width: 79upx;
			height: 4upx;
		}
	
		.uni-uploader__input-box_my:active {
			border-color: #999999;
		}
	
		.uni-uploader__input-box_my:active:before,
		.uni-uploader__input-box_my:active:after {
			background-color: #999999;
		}
	
		.uni-uploader__input_my {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
		}
	
</style>
