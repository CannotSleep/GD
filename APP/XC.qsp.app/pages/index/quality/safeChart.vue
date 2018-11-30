<template>
	<view class="container">
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
			<view class="input-label">
				<image src="../../../static/img/list1_icon/list1_icon-02.png" mode=""></image>
				<text>检查日期:</text>
			</view>
			<picker mode="date" :value="checkDate" start="2000-01-01" end="2028-12-31" @change="changeCheckDate">
				<view class="uni-input">{{checkDate}}</view>
			</picker>
		</view>
		<view class="input-row">
			<button type="" class="search-btn" size="mini" @tap="seachJudge">查询</button>
		</view>
		<view class="canvasView">
			<view class="canvas-bar">
				<view class="title">{{checkDate}}安全类别分析饼状图</view>
			</view>
			<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" />
		</view>
		<view class="canvasView">
			<view class="title">{{checkDate}}安全类别分析折线图</view>
			<mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
	</view>
</template>

<script>
	import * as echarts from '../../../components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue';

// 	let pieOption = {
// 		animation: true,
// 		backgroundColor: '#F8F8F8',
// 		color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
// 		series: [{
// 			label: {
// 				normal: {
// 					fontSize: 14 
// 				}
// 			},
// 			type: 'pie',
// 			center: ['50%', '50%'],
// 			radius: [0, '60%'],
// 			data: dataP,
// 			itemStyle: {
// 				emphasis: {
// 					shadowBlur: 10,
// 					shadowOffsetX: 0,
// 					shadowColor: 'rgba(0, 2, 2, 0.3)'
// 				}
// 			}
// 		}]
// 	};
// 
// 	let lineOption = {
// 		animation: true,
// 		color: ['#37A2DA', '#9FE6B8'],
// 		//直角坐标系内绘图网格
// 		grid: {
// 			x: 35,
// 			x2: 10,
// 			y: 30,
// 			y2: 25
// 		},
// 		//是否启用拖拽重计算
// 		calculable: false,
// 		
// 		xAxis: [{
// 			//坐标轴类型默认为类目型
// 			type: 'category',
// 			data: dataLX
// 			// data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
// 		}],
// 		yAxis: [{
// 			//默认为数值型
// 			type: 'value',
// 			splitArea: {
// 				show: true
// 			}
// 		}],
// 		series: [{
// 			name: '',
// 			type: 'line',
// 			data: dataLY,
// 			// data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
// 		}]
// 	};
	import server from '../../../store/server.js';
	export default {
		data() {
			return {
				Token: '',
				echarts: echarts,
				updateStatus: false,
				companyList: [],
				companyIndex: 0,
				projectList: [],
				companyText: '',
				projectText: '',
				projectIndex: 0,
				companyVal: '',
				projectVal: '', 
				checkDate: '2018-09-18',
				dataLX:[],
				dataLY:[],
				dataP:[],
				lineOption : {
					animation: true,
					color: ['#37A2DA', '#9FE6B8'],
					//直角坐标系内绘图网格
					grid: {
						x: 35,
						x2: 10,
						y: 30,
						y2: 25
					},
					//是否启用拖拽重计算
					calculable: false,
					
					xAxis: [{
						//坐标轴类型默认为类目型
						type: 'category',
						data: []
						// data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
					}],
					yAxis: [{
						//默认为数值型
						type: 'value',
						splitArea: {
							show: true
						}
					}],
					series: [{
						name: '',
						type: 'line',
						data: [],
						// data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
					}]
				},	
				pieOption : {
					animation: true,
					backgroundColor: '#F8F8F8',
					color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
					series: [{
						label: {
							normal: {
								fontSize: 14 
							}
						},
						type: 'pie',
						center: ['50%', '50%'],
						radius: [0, '60%'],
						data: [],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 2, 2, 0.3)'
							}
						}
					}]
				}
			}	
		},
		onLoad() {
			this.Token = server.net.GetSessionToken();
			var today =server.net.getFormatDate(new Date());
			this.checkDate = today;
			this.getCompany();

		},
		methods: {
			getCompany() { //获取公司数据				
				let url = server.net.setUrl('api/DropDownListApi/GetCompany');
				uni.request({
					url: url,
					dataType: 'json',
					type: 'GET',
					header: {
						Token: this.Token
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
							dataArr.unshift(first)
							this.companyList = this.setData(jsondata.data);
							this.companyVal = this.companyList[this.companyIndex].value;
							this.companyText = this.companyList[this.companyIndex].text;
							if(this.companyVal!=''){
								this.getProject();
							}
						} else {
							console.log(jsondata.status);
							uni.showToast({
								title: jsondata.status+"",
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
			changeCompany(e) {
				this.companyIndex = e.detail.value;
				this.companyVal = this.companyList[e.detail.value].value;
				this.companyText = this.companyList[this.companyIndex].text;
				this.projectIndex=0;
				this.getProject();
			},
			changeProject(e) {
				this.projectIndex = e.detail.value;
				this.projectVal = this.projectList[e.detail.value].value;
				this.projectText = this.projectList[this.projectIndex].text;
			},
			changeCheckDate(e){
				this.checkDate = e.detail.value;
			},
			setData(items) {
				let newItems = [];
				//console.log(items)
				if(items!=null&&items.length!=0){
					items.forEach((e) => {
						newItems.push({ 
							text: e.text,
							value: e.value
						});
					});
				}
				return newItems;
			},
// 			updatePie() {
// 				// 参考 mpvue-charts 的懒加载示例
// 				// https://github.com/F-loat/mpvue-echarts/blob/master/examples/lazyLoad.vue
// 
// 				if (this.updateStatus) {
// 					return;
// 				}
// 				pieOption.series[0].data.push({
// 					value: 20,
// 					name: '武汉'
// 				});
// 				pieOption.series[0].data.push({
// 					value: 10,
// 					name: '杭州'
// 				});
// 				this.$refs.pieChart.init();
// 				this.updateStatus = true;
// 			}, 
			pieInit(canvas, width, height) {
			
				let pieChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(pieChart)
 
				pieChart.setOption(this.pieOption)
				return pieChart
			},
			lineInit(canvas, width, height) {
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(lineChart)

				lineChart.setOption(this.lineOption)
				return lineChart
			},
			setLD(data){
				let X=[];
				let Y=[];
				for(let item of data){
					X.push(item.dates)
					Y.push(item.value)
				}
				this.dataLX=X;
				this.lineOption.xAxis[0].data=this.dataLX;
				this.dataLY=Y;
				this.lineOption.series[0].data=this.dataLY;
				console.log(JSON.stringify(this.dataLX))
				console.log(JSON.stringify(this.dataLY))
				this.updatePie();
			},
			setPD(data){
				let P=[];
				for(let item of data){
					let ob={
						value:item.value,
						name:item.name
					}
					P.push(ob)
				}
				this.dataP=P; 
				console.log(JSON.stringify(this.dataP))
				this.pieOption.series[0].data=this.dataP;
				this.updatePie();
			},
			updatePie() {
				// 参考 mpvue-charts 的懒加载示例
				// https://github.com/F-loat/mpvue-echarts/blob/master/examples/lazyLoad.vue
// 				if (this.updateStatus) {
// 					return;
// 				}

				this.$refs.pieChart.init();
				this.$refs.lineChart.init();
				this.updateStatus = true;
			},
			seachJudge(){
				let data={
					CheckDate:this.checkDate
				};
				if(this.projectVal!=''){
					data.ProjectID=this.projectVal
				};
				let ispass = this.formcheck(data);
				if(ispass){
					this.searchBtn(data);
				}
			},
			searchBtn(data){
				let url = server.net.setUrl('api/SecurityInspectApi/ChartSearch');
			
				uni.request({
					url: url,
					dataType: 'json',
					method: 'POST',
					header: {
						Token: this.Token
					}, 
					data:JSON.stringify(data),
					success: (result) => {
						console.log(JSON.stringify(result))
						server.net.showWrongTipsEx(result);
						var jsondata = result.data;
						let dataArr = jsondata.data;
						if(dataArr.Line.Y.length==0 && dataArr.Pie.length==0){
							uni.showToast({
								title: "无数据",
								icon:'none',
								mask: false,
								duration: 1500
							});
						}
						if (jsondata.status == 1) { 
							this.setLD(dataArr.Line.Y)
							this.setPD(dataArr.Pie);
						} else {
							console.log(jsondata.status);
							uni.showToast({
								title: jsondata.status+"",
								mask: false,
								duration: 1500
							});
						}
					},
					fail: (data, code) => {
						console.log("公司获取失败" + data + code);
					}
				});
				
			},formcheck(data){
				
				
				if(this.CheckDate==''){
					uni.showToast({
						title: '请选择日期',
						mask: false,
						duration: 1500,
						image:null,
						icon:"none"
					});
					return false;
				}
				return true;
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}

	page {
		min-height: 100%;
	}
	
	.input-row{
		/* padding: 0px 15px; */
	}
	
	.page-section-title {
		padding: 0 30upx;
	}

	.title {
		font-size: 0.35rem;
		margin-left: 30upx;
		color: #8f8f94;
	}

	.container {
		padding-bottom: 30upx;
		box-sizing: border-box;
	}

	.container,
	.canvasView {
		flex: 1;
		flex-direction: column;
	}

	.navigate {
		color: #007AFF;
	}

	.canvas-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.update-btn {
		margin-right: 30upx;
	}
</style>
