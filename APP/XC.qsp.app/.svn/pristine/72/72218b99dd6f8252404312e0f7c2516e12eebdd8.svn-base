<script>
	import server from 'store/server.js';

	export default {
		onLaunch: function() {
			console.log('App Launch');
			//#ifdef APP-PLUS
			/* 5+环境锁定屏幕方向 */
			plus.screen.lockOrientation('portrait-primary'); //锁定
			/* 5+环境升级提示 */
			//let server = "https://uniapp.dcloud.io/update"; //检查更新地址
			
			let url =server.net.setUrl("api/AppUpdate/Check");
			let req = { //升级检测数据 
				"Appid": "QSP.XC",
				"Version": plus.runtime.version
			};	
			uni.request({
				url: url,
				method:'POST',
				data: JSON.stringify(req),
				success: (res) => {
					console.log(JSON.stringify(res))
					//iosurl = https://itunes.apple.com/cn/app/%
					let dataarr = res.data
					let jsondata = dataarr.data;
					if (dataarr.status == 1) {
						let openUrl = plus.os.name === 'iOS' ? jsondata.IosUpdateUrl : jsondata.AndroidUpdateUrl;
						uni.showModal({ //提醒用户更新
							title: '更新提示',
							content: dataarr.note ? dataarr.note : '是否选择更新',
							success: (res) => {
								if (res.confirm) {
									plus.runtime.openURL("http://111.230.193.251:85/"+jsondata.AndroidUpdateUrl);
								}
							}
 						})
					}
				}
			})
			//#endif
		},
		onShow: function() {
			console.log('前台显示')
		},
		onHide: function() {
			console.log('后台显示')
		}
	}
</script>

<style>
	/*每个页面公共css */

	@import "common/iconfont.css";

	/* @import "common/uni.css"; */
	page {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
		min-height: 100%;
	}

	.mt-10 {
		margin-top: 10px;
	}

	.mt-20 {
		margin-top: 20px;
	}

	.mt-40 {
		margin-top: 40px;
	}

	.content {
		display: flex;
		flex: 1;
		padding: 20px;
		flex-direction: column;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.img-group {
		text-align: center;
		position: relative;
		display: block ! !important;
	}

	.img-group img {
		margin: 0 auto;
		max-width: 100%;
	}

	.input-group {
		position: relative;
		padding: 30px;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		width: 100%;
		justify-content: center;
	}

	.input-row input {
		width: 100%;
		height: 50px;
		min-height: 50px;
		padding: 15px 0;
		line-height: 50px;
		text-align: center;
	}

	.btn-row {
		margin-top: 40px;
	}

	/* 表单样式 */
	.input-form {
		width: 100%;
	}

	.input-row {
		width: 100%;
		height: 78px;
		line-height: 50px;
		font-size: 28px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.input-row:before {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	/* .input-row:after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	} */
	
	.input-row-bottom-line{
		/* position: absolute; */
		width:100%;
		right: 15px;
		left: 15px;
		height: 1px !important;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-label {
		padding: 15px 0;
		width: 30%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.input-label image {
		width: 28px;
		height: 28px;
		margin-right: 5px;
		line-height: 70px;
	}

	.input-row picker {
		width: 70%;
		height: 50px;
		line-height: 70px;
		font-size: 28px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
		padding: 15px 0;
	}

	.input-row input {
		width: 70%;
		height: 50px;
		line-height: 70px;
		font-size: 28px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
	}

	.uni-input {
		width: 100%;
		height: 50px;
		line-height: 70px;
		font-size: 28px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-align: left;
	}

	.input-row textarea {
		width: 70%;
		padding: 10px 0;

		font-size: 28px;
	}

	.auto-height {
		height: auto;
	}

	.width-100 {
		width: 100%;
	}

	.search-btn {
		background-color: #17a869;
		color: #fff;
		border-color: #fff;
	}

	.danger-btn {
		background-color: red;
		color: #fff;
		border-color: #fff;
	}

	.uni-list-cell {
		margin-top: 20px;
		/* border-bottom: 1px solid #ccc; 
		padding: 10px 0;*/
	}
	
	.uni-list-cell:after {
		left: 0 !important;
	}

	.uni-list {
		width: 100%;
	}

	.button-row {
		margin-top: 10px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.button-row button[type=primary] {
		background-color: #17A869;
		border-color: #fff;
	}

	.block {
		display: block;
	}

	.uni-uploader {
		flex: 1;
		flex-direction: column;
	}

	.uni-uploader-head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.uni-uploader-info {
		color: #B2B2B2;
	}

	.uni-uploader-body {
		margin-top: 16upx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		overflow: hidden;
	}

	.uni-uploader__file {
		float: left;
		margin-right: 18upx;
		margin-bottom: 18upx;
	}

	.uni-uploader__img {
		display: block;
		width: 158upx;
		height: 158upx;
	}

	.uni-uploader__input-box {
		float: left;
		position: relative;
		margin-right: 18upx;
		margin-bottom: 18upx;
		width: 154upx;
		height: 154upx;
		border: 2upx solid #D9D9D9;
	}

	.uni-uploader__input-box:before,
	.uni-uploader__input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}

	.uni-uploader__input-box:before {
		width: 4upx;
		height: 79upx;
	}

	.uni-uploader__input-box:after {
		width: 79upx;
		height: 4upx;
	}

	.uni-uploader__input-box:active {
		border-color: #999999;
	}

	.uni-uploader__input-box:active:before,
	.uni-uploader__input-box:active:after {
		background-color: #999999;
	}

	.uni-uploader__input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
