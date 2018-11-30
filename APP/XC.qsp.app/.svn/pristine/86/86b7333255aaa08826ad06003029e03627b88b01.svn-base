<template>
	<view class="">
		<view class="prompt-box" v-show="showMask">
			<view class="prompt-content">
				<view class="first-title">
					<text>{{firstTitle}}</text>
				</view>
				<view class="second-title">
					<text>{{secondTitle}}</text>
				</view>
				<view class="input-row">
					<input type="text" value="" v-model="promptInput" placeholder="请输入" />
				</view>
				<view class="button-row">
					<!-- <button type="" size="mini">取消</button>
					<button type="primary" size="mini">确认</button> -->
					<view class="button-box" @tap="cancel">
						<text>取消</text>
					</view>
					<view class="button-box" @tap="confirm">
						<text>确认</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMask: true
			}
		},
		props: {
			value: {}, //对应组件中的v-model
			firstTitle: {
				type: String,
				default: '大标题'
			},
			secondTitle: {
				type: String,
				default: '副标题'
			},
			promptInput: {
				type: String,
				default: ''
			}
		},
		methods: {
			closeMask() {
				this.showMask = false;
			},
			cancel() {
				this.$emit('cancel');
				this.closeMask();
			},
			confirm() {
				this.$emit('confirm');
				//this.closeMask();
				console.log("确认");
			}
		},
		mounted() {
			this.showMask = this.value;
		},
		watch: {
			value(newVal, oldVal) {
				this.showMask = newVal; //监听value值的变化
			},
			showMask(val) {
				this.$emit('input', val);
			}
		}
	}
</script>

<style>
	.prompt-box {
		position: fixed;
		top: 0px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}

	.prompt-content {
		width: 600px;
		border-radius: 25px;
		padding: 15px;
		border: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.first-title {
		margin-top: 20px;
		font-size: 36px;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.second-title {
		margin-top: 25px;
		font-size: 28px;
		color: #6C6C6C;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.input-row {
		margin-top: 35px;
		text-align: center;
		justify-content: center;
	}

	.input-row ._input {
		width: 80%;
		justify-content: center;
		text-align: center;
	}

	.button-box {
		width: 50%;
		padding: 15px 10px;
		display: flex;
		justify-content: center;
		color: #007AFF;
	}

	.button-box:first-child {
		border-right: 1px solid #ccc;
	}
</style>
