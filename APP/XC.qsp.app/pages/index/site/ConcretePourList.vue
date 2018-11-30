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
				<image src="../../../static/img/list1_icon/list1_icon-02.png" mode=""></image>
				<text>项目名称:</text>
			</view>
			<picker @change="changeProject" :value="projectIndex" :range="projectList" range-key="text">
				<view class="uni-input">{{projectText}}</view>
			</picker>
		</view>
		<view class="input-row">
			<!-- <button class="search-btn" size="mini" @tap="getCompany">获取公司</button>
			<button class="search-btn" size="mini" @tap="getProject">获取项目</button> -->
			<button type="" class="search-btn" size="mini" @tap="searchData">查询</button>
		</view>
		<view class="list-content">
			<view class="uni-list">
				<block v-for="(item,index) in ConcreteList" :key="index">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" @tap="goDetail(item)">
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
			this.Token = server.net.GetSessionToken();
			this.Notify = option.notify;//can be 'true'
			if(this.Notify){
				this.searchData();
				console.log(this.Notify);
			}
			this.getCompany();
		},
		data() {
			return {
				Token: '',
				companyList: [],
				companyIndex: 0,
				projectList: [],
				companyText: '',
				projectText: '',
				projectIndex: 0,
				companyVal: '',
				projectVal: '',
				ConcreteList: [],
				Name: '',
				isFinish: false,
				StateDate: '',
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
			getCompany() { //获取公司数据				
				let url = server.net.setUrl('api/DropDownListApi/GetCompany');
				uni.request({
					url: url,
					dataType: 'json',
					type: 'GET',
					header: {
						//token: server.net.GetSessionToken()
						token: this.Token
					},
					success: (result) => {
						server.net.showWrongTipsEx(result);
						var jsondata = result.data;
						let dataArr = jsondata.data;
						if (jsondata.status == 1) {
							console.log("公司获取成功"); 
							let first={
								value:"",
								text:"请选择公司"
							}
							dataArr.unshift(first);
							this.companyList = this.setData(dataArr);
							this.companyVal = this.companyList[this.companyIndex].value;
							this.companyText = this.companyList[this.companyIndex].text;
							if(this.companyVal!='08876894'){
								this.getProject();
							}
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
						//token: server.net.GetSessionToken(),
						token: this.Token
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
			searchData() {
				this.page = 1;
				this.ConcreteList = [];
				this.existNewList = true;
				let cid = this.companyVal;
				let pid = this.projectVal;
				this.getListData(cid, pid)
			},
            pullupRefresh() {
				let cid = this.companyVal;
				let pid = this.projectVal;
				this.getListData(cid, pid);
			},
			getListData(cid, pid) { //获取列表数据
				const url = server.net.setUrl('api/ConcretePouringApi/GetList?page=' + this.page);
				let data = {
				};
				if (cid) {
					data.CompanyID = cid;
				}
				if (pid) {
					data.ProjectID = pid;
				}
				//是否需要签字
				if(this.Notify){
					data.NeedAutograph = 'true';
				}
				let ajaxdata = JSON.stringify(data);
				uni.request({
					url: url,
					method: 'POST',
					header: {
						token: this.Token,
						page: 1
					},
					data: ajaxdata,
					success: res => {
						server.net.showWrongTipsEx(res);
						var jsondata = res.data;
						let state = null;
						if (jsondata.status == 1) {
							console.log("混凝土回弹列表获取成功")
							let listData = jsondata.data;
							if (listData!='') {
								listData.forEach((e) => {
									if (e.IsFinish == false) {
										this.ConcreteList.push({
											StartDate: e.StartDate.substring(0, 10),
											Name: e.Name,
											isFinish: '未完成',
											ID: e.ID
										});
									} else {
										this.ConcreteList.push({
											StartDate: e.StartDate.substring(0, 10),
											Name: e.Name,
											isFinish: '已完成',
											ID: e.ID
										});
									}
								});
							} else{
								this.existNewList = false;//防止重复加载
								server.net.showWrongTips("暂无更多数据");
							}
						} else {

						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			goDetail: function(e) { //跳转到详情页面
				let detail = {
					id: e.ID,
				}
				uni.navigateTo({
					url: "ConcretePourDetails?id=" + JSON.stringify(e.ID)
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
