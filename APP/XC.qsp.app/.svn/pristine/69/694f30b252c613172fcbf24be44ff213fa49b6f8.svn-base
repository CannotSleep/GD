<template>
	<view class="content">
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-01.png" mode=""></image>
				<text>数据选择:</text>
			</view>
			<picker @change="changeChild" :value="childIndex" :range="childArr" range-key="text">
				<view class="uni-input">{{childText}}</view>
			</picker>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-02.png" mode=""></image>
				<text>工程名称:</text>
			</view>
			<view class="detail-box">
				{{ProjectName}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-13.png" mode=""></image>
				<text>测量时间:</text>
			</view>
			<view class="detail-box">
				{{CreateTime}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-03.png" mode=""></image>
				<text>总合格率:</text>
			</view>
			<view class="detail-box">
				{{totalRate}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-04.png" mode=""></image>
				<text>合格个数:</text>
			</view>
			<view class="detail-box">
				{{qualifiedNum}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-04.png" mode=""></image>
				<text>不合格个数:</text>
			</view>
			<view class="detail-box">
				{{failedNum}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-03.png" mode=""></image>
				<text>陪同检查人:</text>
			</view>
			<view class="detail-box">
				{{checkPerson}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-04.png" mode=""></image>
				<text>区域/栋号:</text>
			</view>
			<view class="detail-box">
				{{Area}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-02.png" mode=""></image>
				<text>楼层:</text>
			</view>
			<view class="detail-box">
				{{Postition}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-05.png" mode=""></image>
				<text>构件类别:</text>
			</view>
			<view class="detail-box">
				{{Construct}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-06.png" mode=""></image>
				<text>实测项目:</text>
			</view>
			<view class="detail-box">
				{{EngProject}}
			</view>
		</view>

		<block v-for="(item,index) in dataNumList" :key="index">
			<view class="input-row">
				<view class="input-label">
					<image src="../../../static/img/list1_icon/list2_icon-07.png" mode=""></image>
					<text>测量数据:{{item.index}}</text>
				</view>
				<view class="detail-box">
					{{item.value}}
				</view>
			</view>
		</block>

		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-03.png" mode=""></image>
				<text>合格率:</text>
			</view>
			<view class="detail-box">
				{{PerRate}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-09.png" mode=""></image>
				<text>偏差:</text>
			</view>
			<view class="detail-box">
				{{Deviation}}
			</view>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-08.png" mode=""></image>
				<text>备注:</text>
			</view>
			<view class="detail-box auto-height">
				{{Remark}}
			</view>
		</view>
		<view class="input-row-bottom-line"></view>

	</view>
</template>

<script>
	import server from '../../../store/server.js';
	export default {
		data() {
			return {
				Token: '',
				areaVal: 0,
				dataList: [],
				ProjectName: '',
				failedNum: '',
				totalRate: '',
				qualifiedNum: '',
				CreateTime: '',
				checkPerson: '',
				Remark: '',
				Area:'',
				Postition:'',
				Construct:'',
				EngProject: '',
				PerRate: '',
				Deviation: '',
				dataIndex: 0,
				dataArr: [],//测量数据列表
				childIndex: 0,
				childText:'',
				childArr:[],//测量数据下拉选择列表
				dataNumList: [],
				showData: true

			}
		},
		onLoad(option) {
			this.Token = server.net.GetSessionToken();
			//this.childArr = [];
			this.getDetails(option.id);
		},
		methods: {
			getDetails(id) {
				console.log("Id:" + id);
				let url = server.net.setUrl('api/ActualQuantityApi/GetDetail');
				uni.request({
					url: url,
					method: 'POST',
					dataType: 'json',
					header: {
						Token: this.Token
					},
					data: {
						Id: id
					},
					success: res => {
						server.net.showWrongTipsEx(res);
						let result = res.data;
						let jsondata = result.data;
						if (result.status == 1) {
							//遍历JSON数组，获取数据对象
							jsondata.forEach((e) => {
								this.ProjectName = e.ProjectName;
								this.failedNum = e.failedNum;
								this.CreateTime = e.CheckDate.substring(0, 10);
								this.qualifiedNum = e.qualifiedNum;
								this.totalRate = e.totalRate;
								this.checkPerson = e.AccCheckPropleName;
								this.totalRate = e.QualificationRate;
								this.qualifiedNum = e.TotalQualified;
								this.failedNum = e.TotalUnQualified;
								let arr = e.Children;
								let k = 0;
								for (let i in arr) {
									let dataArrChild = {};
									dataArrChild.Area = arr[i].ActualQuantityAreaName;
									dataArrChild.Postition = arr[i].Postition;
									dataArrChild.Construct = arr[i].ComName;
									dataArrChild.EngProject = arr[i].ActualQuantityTermName;
									dataArrChild.PerRate = arr[i].PerRate;
									dataArrChild.Deviation = arr[i].Deviation;
									dataArrChild.Remark = arr[i].Remark;
									dataArrChild.dataList = arr[i].DataAttr;
									let newItems = [];
									
									for (let j = 0; j < dataArrChild.dataList.length; j++) {
										newItems.push({
											value: dataArrChild.dataList[j],
											index: Number(j+1)
										});
									}
									dataArrChild.dataNumList = newItems;
									this.childArr.push({
										text: Number(k+1) + '-' + dataArrChild.EngProject,
										value: Number(k)
									});
									//console.log(this.childArr);
                                    this.dataArr.push({
                                    	value: dataArrChild,
                                    	index: Number(k)
                                    });
									k += 1;
								}
								//todo 如果没有测量数据
								this.unitChild(this.dataArr[0].value);//初始化加载数据1
							});
						} else {
							console.log(result.message);
							uni.showToast({
								title: result.message
							})
						}

					},
					fail: (code) => {
						console.log(code)
						uni.showToast({
							title: '数据获取失败，请检查您的网络环境'
						});
					},

				});
			},
			changeChild(e){
				this.childIndex = e.detail.value;
				this.childText = this.childArr[this.childIndex].text;
				let child = this.dataArr[this.childIndex].value;
				console.log(child);
				this.Area = child.Area;
				this.Postition = child.Postition;
				this.Construct = child.Construct;
				this.EngProject = child.EngProject;
				this.PerRate = child.PerRate;
				this.Deviation = child.Deviation;
				this.Remark = child.Remark;
				this.dataNumList = child.dataNumList	
			},
			unitChild(objc){
				this.Area = objc.Area;
				this.Postition = objc.Postition;
				this.Construct = objc.Construct;
				this.EngProject = objc.EngProject;
				this.PerRate = objc.PerRate;
				this.Deviation = objc.Deviation;
				this.Remark = objc.Remark;
				this.dataNumList = objc.dataNumList;
				this.childText = this.childArr[this.childIndex].text;
				console.log('this.childArr');
				console.log(this.childArr);
			}
		}
	}
</script>

<style scoped>
	.detail-box {
		width: 55%;
		min-height: 50px;
		font-size: 28px;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		padding: 15px 0;
	}

	.input-label {
		width: 45%;
	}

	picker {
		width: 55%;
	}
</style>
