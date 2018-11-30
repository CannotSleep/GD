<template>
	<view class="content">
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-01.png" mode=""></image>
				<text>所属公司:</text>
			</view>
			<picker @change="changeCompany" :value="companyIndex" :range="companyList" range-key="text">
				<view class="uni-input">{{companyText}}</view>
			</picker>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list2_icon-02.png" mode=""></image>
				<text>项目名称:</text>
			</view>
			<picker @change="changeProject" :value="projectIndex" :range="projectList" range-key="text">
				<view class="uni-input">{{projectText}}</view>
			</picker>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-14.png" mode=""></image>
				<text>年份选择:</text>
			</view>
			<picker mode="selector" :value="yearIndex" :range="yearList" @change="changeYears" range-key="text" v-if="year">
				<view class="uni-input">{{yearList[yearIndex].text}}</view>
			</picker>
		</view>
		<view class="input-row">
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-14.png" mode=""></image>
				<text>{{planType}}选择:</text>
			</view>
			<picker mode="selector" :value="monthIndex" :range="monthList" @change="changeMonth" range-key="text" v-if="month">
				<view class="uni-input">{{monthList[monthIndex].text}}</view>
			</picker>
			<picker mode="selector" :value="seasonIndex" :range="seasonList" @change="changeSeason" range-key="text" v-if="season">
				<view class="uni-input">{{seasonList[seasonIndex].text}}</view>
			</picker>
		</view>
		<view class="button-row">
			<!-- <button type="" class="search-btn" size="mini" @tap="getCompany">获取公司数据</button> -->
			<button type="" class="search-btn" size="mini" @tap="searchData">查询</button>
		</view>
		<view class="list-content">
			<view class="uni-list">
				<block v-for="(item,index) in scheduleList" :key="index">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="goDetail(item)">
						<view class="uni-triplex-row">
							<view class="uni-triplex-left">
								<text class="list-title uni-ellipsis">{{item.Name}}</text>
								<text class="list-deadline">计划开始日期:{{item.StartDate}}</text>
								<text class="list-deadline">计划完成日期:{{item.EndDate}}</text>
								<text class="list-deadline">实际完成日期:{{item.RealEndDate == "0001-01-01"?"":item.RealEndDate}}</text>
								<text class="list-level">项目:{{item.ProjectName}}</text>
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
		onLoad(option) {
			//根据页面传值判断页面内容：检查记录&整改记录，并动态设置页面标题
			let State = option.state;
			console.log(State);
			this.Notify = option.notify;//can be 'true'
			switch (State) {
				case 'month':
					uni.setNavigationBarTitle({
						title: '月进度计划'
					});
					break;
				case 'season':
					uni.setNavigationBarTitle({
						title: '季度进度计划'
					});
					this.month = false;
					this.season = true;
					this.planType = '季度';
					break;
				case 'all':
				    uni.setNavigationBarTitle({
				    	title: '进度计划'
				    });
					break;
				defualt: break;
					
			}
			//server.net.TestToken();
			//是否需要填报
			if(this.Notify){
				this.searchData();
				console.log(this.Notify);
			}
			this.getCompany();
			
		},
		data() {
			return {
				planType: '月份',
				companyList: [],
				companyVal: '',
				companyIndex: 0,
				companyText: '',
				projectList: [],
				projectIndex: 0,
				projectVal: '',
				projectText: '',
				yearIndex: 0,
				yearList: [{
					text: "请选择",
					value: 0
				}, {
					text: "2017年",
					value: 2017
				}, {
					text: "2018年",
					value: 2018
				}, {
					text: "2019年",
					value: 2019
				}, {
					text: "2020年",
					value: 2020
				}, {
					text: "2021年",
					value: 2021
				}, {
					text: "2022年",
					value: 2022
				}],
				yearVal: '',
				monthList: [{
					text: "请选择",
					value: 0
				}, {
					value: 1,
					text: '1月'
				}, {
					value: 2,
					text: '2月'
				}, {
					value: 3,
					text: '3月'
				}, {
					value: 4,
					text: '4月'
				}, {
					value: 5,
					text: '5月'
				}, {
					value: 6,
					text: '6月'
				}, {
					value: 7,
					text: '7月'
				}, {
					value: 8,
					text: '8月'
				}, {
					value: 9,
					text: '9月'
				}, {
					value: 10,
					text: '10月'
				}, {
					value: 11,
					text: '11月'
				}, {
					value: 12,
					text: '12月'
				}],
				monthIndex: 0,
				monthVal: '',
				monthText: '',
				seasonList: [{
					text: "请选择",
					value: 0
				}, {
					value: 1,
					text: '第一季度'
				}, {
					value: 2,
					text: '第二季度'
				}, {
					value: 3,
					text: '第三季度'
				}, {
					value: 4,
					text: '第四季度'
				}],
				seasonVal: '',
				seasonIndex: 0,
				scheduleList: [],
				month: true, //用于判断是月计划查询还是季度计划查询
				season: false,
				year: true,
				Name: '',
				StartDate: '',
				EndDate: '',
				ProjectName: '',
				Notify:'',
				page:1,
				existNewList:true
			}
		},
		onReachBottom() {
			this.page += 1;
			if(this.existNewList)
			{
				this.pullupRefresh();
			}    
		},
		methods: {
			openViews(url) { //，保留当前页面，跳转新页面
				uni.navigateTo({
					url: url
				})
			},
			getCompany() { //获取公司数据				
				let url = server.net.setUrl('api/DropDownListApi/GetCompany');
				uni.request({
					url: url,
					dataType: 'json',
					type: 'GET',
					header: {
						Token: server.net.GetSessionToken()
						//token: this.testToken
					},
					success: (result) => {
						server.net.showWrongTipsEx(result);
						var jsondata = result.data;
						let dataArr = jsondata.data;

						if (jsondata.status == 1) {
							let first={
									value:"",
									text:"请选择公司"
								}
							dataArr.unshift(first);
							console.log("公司获取成功");
							this.companyList = this.setData(dataArr);
							this.companyVal = this.companyList[this.companyIndex].value;
							this.companyText = this.companyList[this.companyIndex].text;
							//this.getProject();
						} else {
							console.log(jsondata.status);
							uni.showToast({
								title: jsondata.status,
								mask: false,
								duration: 1500
							});
						}
					},
					fail: (data, code) => {
						console.log("公司获取失败" + data + code);
					}
				});
			},
			getProject() { //获取项目数据
				let url = server.net.setUrl('api/DropDownListApi/GetProject');
				uni.request({
					url: url,
					method: 'GET',
					header: {
						Token: server.net.GetSessionToken(),
						//token: this.testToken
					},
					data: {
						company: this.companyVal
					},
					success: (data) => {
						server.net.showWrongTipsEx(data);
						let jsondata = data.data;
						let dataArr = jsondata.data;
						if (jsondata.status == 1) {
                            let first={
                            		value:"",
                            		text:"请选择项目"
                            	}
                            dataArr.unshift(first);
							this.projectList = this.setData(dataArr);
							this.projectVal = this.projectList[this.projectIndex].value;
							this.projectText = this.projectList[this.projectIndex].text;
						} else {
							console.log("项目获取失败" + jsondata.status);
						}
					},
					fail: (data, code) => {
						console.log("项目数据请求失败" + data + code)
					},
					complete: () => {}
				});
			},
			searchData() {
				this.page = 1;
				this.scheduleList = [];
				this.existNewList = true;
				this.getListData();
			},
			pullupRefresh() {
			    this.getListData();
			},
            getListData(){
				let url = server.net.setUrl('api/ScheduleApi/GetList?page=' + this.page);
				let ajaxdata = {};
				this.yearVal = this.yearList[this.yearIndex].value;
				this.monthVal = this.monthList[this.monthIndex].value;
				this.seasonVal = this.seasonList[this.seasonIndex].value;
				if (this.companyVal) {
					ajaxdata.CompanyID = this.companyVal;
				}
				if (this.projectVal) {
					ajaxdata.ProjectID = this.projectVal;
				}
				if (this.yearVal != 0) {
					ajaxdata.Year = this.yearVal;
				}
				//判断月/季度查询
				if (this.month == true) {
					if(this.monthVal != 0){
						ajaxdata.Month = this.monthVal;
					}
					ajaxdata.Type = 2;
				} else if (this.season == true){
					if(this.seasonVal != 0){
						ajaxdata.Quarter = this.seasonVal;
					}
					ajaxdata.Type = 1;
				}
				//是否需要填报
				if(this.Notify){
					ajaxdata.NeedSub = 'true';
				}
				console.log(ajaxdata);
				
				uni.request({
					url: url,
					method: 'POST',
					header: {
						Token: server.net.GetSessionToken()
					},
					data: JSON.stringify(ajaxdata),
					success: res => {
						server.net.showWrongTipsEx(res);
						let result = res.data;
						let jsondata = result.data;
						if (result.status == 1) {
							if (jsondata != '') {
								for (let i in jsondata) {
									this.scheduleList.push({
										Name: jsondata[i].Name,
										StartDate: jsondata[i].StartDate.substring(0, 10),
										EndDate: jsondata[i].EndDate.substring(0, 10),
										RealEndDate: jsondata[i].RealEndDate.substring(0, 10),
										ProjectName: jsondata[i].ProjectName,
										ID: jsondata[i].ID
									})
								}
							} else {
								this.existNewList = false;//防止重复加载
								uni.showToast({
									title: "暂无更多数据"
								})
							}
						} else {

						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			setData: function(items) { //设置两个picker的数据
				let newItems = [];
				items.forEach((e) => {
					newItems.push({
						text: e.text,
						value: e.value
					});
				});
				return newItems;
			},

			changeCompany(e) {
				this.companyIndex = e.detail.value;
				this.companyVal = this.companyList[e.detail.value].value;
				this.companyText = this.companyList[this.companyIndex].text;
				this.getProject();
			},
			changeProject(e) {
				this.projectIndex = e.detail.value;
				this.projectVal = this.projectList[e.detail.value].value;
				this.projectText = this.projectList[this.projectIndex].text;
			},
			changeYears(e) {
				this.yearIndex = e.detail.value;
				this.yearVal = this.yearList[this.yearIndex].value;
			},
			changeMonth(e) {
				this.monthIndex = e.detail.value;
				this.monthVal = this.monthList[this.monthIndex].value;
			},
			changeSeason(e) {
				this.seasonIndex = e.detail.value;
				this.seasonVal = this.seasonList[this.seasonIndex].value;
			},
			goDetail: function(e) { //跳转到详情页面
				let detail = {
					id: e.ID,
				}
				uni.navigateTo({
					url: "scheduleDetails?id=" + e.ID + "&notify=" + this.Notify
				})
			}
		}

	}
</script>

<style>
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

	.list-level {
		display: block;
	}
</style>
