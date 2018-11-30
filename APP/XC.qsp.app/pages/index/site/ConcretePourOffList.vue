<template>
	<view class="content">
		<view class="list-content">
			<view class="uni-list">
				<block v-for="(item,index) in ConcreteList" :key="index">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="goEdit(index)">
						<view class="uni-triplex-row">
							<view class="uni-triplex-left">
								<text class="list-title uni-ellipsis">{{item.Name}}</text>
								<label>
									<text class="list-deadline">{{item.StartDate}}</text>
									<text class="list-level">{{item.isFinish}}</text>
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
		onLoad(option) { //页面加载完毕
			this.Notify = option.notify;//can be 'true'
			this.initDate();
		},
		onShow(){
			this.initDate();
		},
		data() {
			return {
				ConcreteList: [],
			}
		},
		methods: {
			initDate:function(e){
				let conpouroff = uni.getStorageSync('ConcretePourListOffLine');
				if (conpouroff.length == 0) {
					conpouroff=[];
					uni.showToast({
						title: '没有离线记录',
						mask: false,
						duration: 1500
					});
				}
				else
				{
					this.ConcreteList = conpouroff;
				}
			},
			goEdit: function(index) { //跳转到详情页面
					console.log(index)
					uni.navigateTo({
						url: "ConcretePourEdit?index=" + index
					})
			}
		}

	}
</script>

<style scoped>
	.input-row {
		align-items: center;
	}

	.list-content {
		margin-top: 20px;
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
	.list-state {
		font-size: 28px;
		color: #6C6C6C;
		display: inline-block;
		margin-right: 15px;

	}
</style>
