<template>
	<div>

	</div>
</template>

<script>
	export default {
		methods: {
			chooseImage: async function() { //选择图片
					if (this.imageList.length === 9) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					uni.chooseImage({ //调用图片选择API
						sourceType: sourceType[this.sourceTypeIndex],
						// #ifdef MP-WEIXIN
						sizeType: sizeType[this.sizeTypeIndex],
						// #endif
						count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				},
				isFullImg: function() { //判断图片最大数量
					return new Promise((res) => {
						uni.showModal({
							content: "已经有9张图片了,是否清空现有图片？",
							success: (e) => {
								if (e.confirm) {
									this.imageList = [];
									res(true);
								} else {
									res(false)
								}
							},
							fail: () => {
								res(false)
							}
						});
					});
				},
				previewImage(e) { //预览图片
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				},
				getCompany() { //获取公司数据				
					let url = server.net.setUrl('api/DropDownListApi/GetCompany');
					uni.request({
						url: url,
						dataType: 'json',
						type: 'GET',
						header: {
							//token: server.net.GetSessionToken()
							token: this.testToken
						},
						success: (result) => {
							var jsondata = result.data;
							let dataArr = jsondata.data;

							if (jsondata.status = 1) {
								console.log("公司获取成功");
								this.companyList = this.setData(jsondata.data);
								this.companyVal = this.companyList[this.companyIndex].value;
								this.companyText = this.companyList[this.companyIndex].text;
								this.getProject();
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
							token: this.testToken
						},
						data: {
							company: this.companyVal
						},
						success: (data) => {
							let jsondata = data.data;
							let dataArr = jsondata.data;
							if (jsondata.status = 1) {

								this.projectList = this.setData(dataArr);
								this.projectVal = this.projectList[this.projectIndex].value;
								this.projectText = this.projectList[this.projectIndex].text;
							} else {
								console.log("项目获取失败" + jsondata.status);
							}
						},
						fail: (data, code) => {
							console.log("项目数据请求失败" + data + code)
						}
					});
				},
				getArea() { //获取检查区域
					let url = server.net.setUrl('api/DropDownListApi/GetUtilitySettings');
					uni.request({
						url: url,
						method: 'GET',
						header: {
							//token:server.net.GetSessionToken(),
							token: this.testToken
						},
						data: {
							type: 0
						},
						success: (data) => {
							var jsondata = data.data;
							if (jsondata.status = 1) {
								console.log("检查区域获取成功");
								this.areaList = this.setData(jsondata.data);
								this.areaVal = this.areaList[this.areaIndex].value;
								this.areaText = this.areaList[this.areaIndex].text;
							} else {
								console.log("检查区域获取失败" + jsondata.status);
							}
						},
						fail: (data, code) => {
							console.log("检查区域数据请求失败" + data + code)
						}

					});
				},
				getUnit() {
					let url = server.net.setUrl('api/DropDownListApi/GetUtilitySettings');
					uni.request({
						url: url,
						method: 'GET',
						header: {
							//token:server.net.GetSessionToken(),
							token: this.testToken
						},
						data: {
							type: 1
						},
						success: (data) => {
							var jsondata = data.data;
							if (jsondata.status = 1) {
								console.log("施工单位获取成功");
								this.unitList = this.setData(jsondata.data);
								this.unitVal = this.unitList[this.unitIndex].value;
								this.unitText = this.unitList[this.unitIndex].text;
							} else {
								console.log("施工单位获取失败" + jsondata.status);
							}
						},
						fail: (data, code) => {
							console.log("施工单位数据请求失败" + data + code)
						}
					})
				},
				setData(items) {
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
				changeArea(e) {
					this.areaIndex = e.detail.value;
					this.areaText = this.areaList[this.areaIndex].text;
					this.areaVal = this.areaList[this.areaIndex].value;
				},
				changeUnit(e) {
					this.unitIndex = e.detail.value;
					this.unitText = this.unitList[this.unitIndex].text;
					this.unitVal = this.unitList[this.unitIndex].value;
				},
				changeDanger(e) {
					this.dangerVal = e.detail.value;
				}
				
				//111
				bindChange: async function (e) {  //异步函数
														let index = e.target.current;
														if (this.isClickChange) {
															this.currentTab = index;
															this.isClickChange = false;
															return;
														}
														let tabBar = await this.getWidth("tab-bar"),
															tabBarScrollLeft = tabBar.scrollLeft;
							
														let width = 0;
							
														for (let i = 0; i < index; i++) {
															let result = await this.getWidth(this.tabs[i].id);
															width += result.width;
														}
							
														let winWidth = uni.getSystemInfoSync().windowWidth,
															nowElement = await this.getWidth(this.tabs[index].id),
															nowWidth = nowElement.width;
							
														if (width + nowWidth - tabBarScrollLeft > winWidth) {
															this.scrollLeft = width + nowWidth - winWidth;
														}
														if (width < tabBarScrollLeft) {
															this.scrollLeft = width;
														}
														this.isClickChange = false;
														this.currentTab = index; //一旦访问data就会出问题
													},
							getWidth: function (id) { //得到元素的宽高
								return new Promise((res, rej) => {
									uni.createSelectorQuery().select("#" + id).fields({
										size: true,
										scrollOffset: true
									}, (data) => {
										if (id === 'tab-bar') {
											console.log("id=", id, "数据:", data)
										}
										res(data);
									}).exec();
								})
							},
							swichNav: async function (e) { //点击tab-bar事件
								if (this.currentTab === e.target.dataset.current) {
									return false;
								} else {
									let tabBar = await this.getWidth("tab-bar"),
										tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
									this.scrollLeft = tabBarScrollLeft;
									this.isClickChange = true;
									this.currentTab =e.target.dataset.current
								}
							},
							chooseImage: async function() { //选择图片
									if (this.imageList.length === 9) {
										let isContinue = await this.isFullImg();
										console.log("是否继续?", isContinue);
										if (!isContinue) {
											return;
										}
									}
									uni.chooseImage({ //调用图片选择API
										sourceType: sourceType[this.sourceTypeIndex],
										// #ifdef MP-WEIXIN
										sizeType: sizeType[this.sizeTypeIndex],
										// #endif
										count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
										success: (res) => {
											this.imageList = this.imageList.concat(res.tempFilePaths);
										}
									})
								},
							isFullImg: function() { //判断图片最大数量
									return new Promise((res) => {
										uni.showModal({
											content: "已经有9张图片了,是否清空现有图片？",
											success: (e) => {
												if (e.confirm) {
													this.imageList = [];
													res(true);
												} else {
													res(false)
												}
											},
											fail: () => {
												res(false)
											}
										});
									});
							},
							previewImage(e) { //预览图片
									var current = e.target.dataset.src
									uni.previewImage({
										current: current,
										urls: this.imageList
									})
							},
							getArea() {
								 //获取测量区域
								 console.log(this.testToken);
								 let url = server.net.setUrl('api/DropDownListApi/GetActualQuaAreaList');
								 let data={};
								 if (this.projectName!='') {
								 	data.name=this.projectName;
								 }
								 uni.request({
								 	url: url,
								 	method: 'GET',
								 	header: {
								 		//token:server.net.GetSessionToken(),
								 		token: this.testToken
								 	},
								 	data: JSON.stringify(data),
								 	success: (data) => {
								 		let jsondata = data.data;
								 		if (jsondata.status = 1) {
								 			console.log("检查区域获取成功");
								 			this.areaList = this.setData(jsondata.data);
											this.areaList2 = this.setData(jsondata.data);
								 			this.areaVal = this.areaList[this.areaIndex].value;
								 			this.areaText = this.areaList[this.areaIndex].text;
											this.areaVal2 = this.areaList2[this.areaIndex2].value;
											this.areaText2 = this.areaList2[this.areaIndex2].text;
								 		} else {
								 			console.log("检查区域获取失败" + jsondata.status);
								 		}
				
								 	},
								 	fail: (data, code) => {
								 		console.log("检查区域数据请求失败" + data + code)
								 	}
								 });
							},
							getConstruction(){
								let url=server.net.setUrl('api/DropDownListApi/GetActualQuaComList');
								let data={};
								if (this.projectName!='') {
								   data.name=this.projectName;
								}
								uni.request({
								url: url,
								method: 'GET',
								header: {
									//token:server.net.GetSessionToken(),
									token: this.testToken
								},
								data: JSON.stringify(data),
								success: (data) => {
									let jsondata = data.data;
									if (jsondata.status = 1) {
										console.log("构件类型获取成功");
										this.ConstructList = this.setData(jsondata.data);
										this.ConstructVal = this.ConstructList[this.ConstructIndex].value;
										this.ConstructText = this.ConstructList[this.ConstructIndex].text;
										this.ConstructList2 = this.setData(jsondata.data);
										this.ConstructVal2 = this.ConstructList2[this.ConstructIndex2].value;
										this.ConstructText2 = this.ConstructList2[this.ConstructIndex2].text;
										this.GetActualQuaTermList();
									} else {
										console.log("构件类型获取失败" + jsondata.status);
									}
								},
								fail: (data, code) => {
									console.log("构件类型数据请求失败" + data + code)
								}
								});
							},
							GetActualQuaTermList(){
								let url=server.net.setUrl('api/DropDownListApi/GetActualQuaTermList');
								let ajaxdata={
									comid:this.ConstrutVal
								};
								uni.request({
									url: url,
									method: 'GET',
									header:{
										Token:this.testToken
									},
									data: JSON.stringify(ajaxdata),
									success: res => {
										let jsondata = res.data;
										if (jsondata.status = 1) {
											console.log("主控项目获取成功");
											this.engProjectList = this.setData(jsondata.data);
											this.engProjectVal = this.engProjectList[this.engProjectIndex].value;
											this.engProjectText = this.engProjectList[this.engProjectIndex].text;
				
										} else {
											console.log("主控项目获取失败" + jsondata.status);
										}
									},
									fail: () => {},
									complete: () => {}
								});
							},
							setData(items) {
								let newItems = [];
								items.forEach((e) => {
									newItems.push({
										text: e.text,
										value: e.value
									});
								});
								return newItems;
							},
							changeArea(e) {
								this.areaIndex = e.detail.value;
								this.areaText = this.areaList[this.areaIndex].text;
								this.areaVal = this.areaList[this.areaIndex].value;
							},
							changeArea2(e) {
								this.areaIndex2 = e.detail.value;
								this.areaText2 = this.areaList2[this.areaIndex2].text;
								this.areaVal2 = this.areaList2[this.areaIndex2].value;
							},
							changeConstruct(e){
								this.ConstructIndex=e.detail.value;
								this.ConstructVal = this.ConstructList[this.ConstructIndex].value;
								this.ConstructText = this.ConstructList[this.ConstructIndex].text;
								this.GetActualQuaTermList();//重新获取主控项目
							},
							changeConstruct2(e){
								this.ConstructIndex2=e.detail.value;
								this.ConstructVal2 = this.ConstructList2[this.ConstructIndex2].value;
								this.ConstructText2 = this.ConstructList2[this.ConstructIndex2].text;
								this.GetActualQuaTermList();//重新获取主控项目
							},
							changeEngproject(e){
								this.engProjectIndex=e.detail.value;
								this.engProjectVal = this.engProjectList[this.engProjectIndex].value;
								this.engProjectText = this.engProjectList[this.engProjectIndex].text;
							},
							addDatas(){
								let addTimes=0;
								console.log("点击次数"+addTimes);
								addTimes+=1;
								this.dataNum=addTimes;
				
							}
		}

	}
</script>

<style scoped>

</style>
