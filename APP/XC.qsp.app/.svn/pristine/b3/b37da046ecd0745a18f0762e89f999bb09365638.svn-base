<template>
	<view class="content">
		<view class="list-content">
			<view class="uni-list">
				<checkbox-group class="checkbox-group" @change="checkboxChange">
					<block v-for="(item,index) in peopleDatalist" :key="index">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover">
							<label>
								<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
								<text class="list-first">{{item.Name}}</text>
							</label>
						</view>	
							<block v-if="item.children!=null" v-for="(sitem,sindex) in item.children" :key="sindex">
								<view class="uni-list-cell" hover-class="uni-list-cell-hover">
									<label v-if="sitem.Account==null">
										<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
										<text class="list-second">{{sitem.Name}}</text>
									</label>
									<label class="checkbox list-second" v-if="sitem.Account!=null">
										<checkbox :value="sitem.Account.ID+sitem.Name" :checked="false" />
										<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
										{{sitem.Name}}
									</label> 
								</view>	
								<block v-if="sitem.children!=null" v-for="(titem,tindex) in sitem.children" :key="tindex">
									<view class="uni-list-cell" hover-class="uni-list-cell-hover">
										<label v-if="titem.Account==null">
											<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
											<text class="list-third">{{titem.Name}}</text>
										</label>
										<label class="checkbox list-third" v-if="titem.Account!=null">
											<checkbox :value="titem.Account.ID+titem.Name" :checked="false" />
											<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
											{{titem.Name}}
										</label> 
									</view>	
									<block v-if="titem.children!=null" v-for="(fitem,findex) in titem.children" :key="findex">
										<view class="uni-list-cell" hover-class="uni-list-cell-hover">
											<label v-if="fitem.Account==null">
												<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
												<text class="list-fourth">{{fitem.Name}}</text>
											</label>
											<label class="checkbox list-fourth" v-if="fitem.Account!=null">
												<checkbox :value="fitem.Account.ID+fitem.Name" :checked="false" />
												<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
												{{fitem.Name}}
											</label> 
										</view>	
											<block v-if="fitem.children!=null" v-for="(sxitem,sxindex) in fitem.children" :key="sxindex">
												<view class="uni-list-cell" hover-class="uni-list-cell-hover">
													<label v-if="sxitem.Account==null">
														<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
														<text class="list-fifth">{{sxitem.Name}}</text>
													</label>
													<label class="checkbox list-fifth" v-if="sxitem.Account!=null">
														<checkbox :value="sxitem.Account.ID+sxitem.Name" :checked="false" />
														<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
														{{sxitem.Name}}
													</label> 
												</view>
												<block v-if="sxitem.children!=null" v-for="(seitem,seindex) in sxitem.children" :key="seindex">
													<view class="uni-list-cell" hover-class="uni-list-cell-hover">
														<label v-if="seitem.Account==null">
															<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
															<text class="list-sixth">{{seitem.Name}}</text>
														</label>
														<label class="checkbox list-sixth" v-if="seitem.Account!=null">
															<checkbox :value="seitem.Account.ID+seitem.Name" :checked="false" />
															<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
															{{seitem.Name}}
														</label> 
													</view>
													<block v-if="seitem.children!=null" v-for="(eitem,eindex) in seitem.children" :key="eindex">
														<view class="uni-list-cell" hover-class="uni-list-cell-hover">
															<label v-if="eitem.Account==null">
																<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
																<text class=".list-senth">{{eitem.Name}}</text>
															</label>
															<label class="checkbox .list-senth" v-if="eitem.Account!=null">
																<checkbox :value="eitem.Account.ID+eitem.Name" :checked="false" />
																<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
																{{eitem.Name}}
															</label> 
														</view>
														<block v-if="eitem.children!=null" v-for="(nitem,nindex) in eitem.children" :key="nindex">
															<view class="uni-list-cell" hover-class="uni-list-cell-hover">
																<label v-if="nitem.Account==null">
																	<uni-icon :type="'home'" :color="'#8f8f94'" ></uni-icon>
																	<text class="list-eight">{{nitem.Name}}</text>
																</label>
																<label class="checkbox list-eight" v-if="nitem.Account!=null">
																	<checkbox :value="nitem.Account.ID+nitem.Name" :checked="false" />
																	<uni-icon :type="'contact'" :color="'#8f8f94'" ></uni-icon>
																	{{nitem.Name}}
																</label> 
															</view>
														</block>
													</block>
												</block>
											</block>
									</block>
								</block>
							</block>
					</block>
				</checkbox-group>
			</view>
		</view>
	</view>
 
</template>

<script>
	import server from '../store/server.js';
	import uniIcon from '../components/uni-icon.vue';
	export default {
		data() {
			return {
					peopleDatalist: [],
					"userIds":"",
					"userNames":"",
					Token:''
				}
		},
		components: {
      uniIcon
    },
		methods: {
			getPeoplelist() {
				let url = server.net.setUrl('api/DropDownListApi/SelectPeople');
				
				uni.request({
					url: url,
					method: 'GET',
					header: {
						token: this.Token
					},
					success: (res) => {
						server.net.showWrongTipsEx(res);
 						let jsondata = res.data;
 						let peopleArr=jsondata.data;
						
						this.peopleDatalist = peopleArr;
						uni.stopPullDownRefresh();
					},
					fail: (f) => {
						
					},
					complete: (c) => {
						
					}
				});
				
			},
			checkboxChange: function(e){
				console.log(e)
				console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
				let strAttr = e.detail.value.splice(',');
				//let strAttr = str.splice()
				console.log(strAttr)
				let strids = "";
				let strnames="";
				for(let ns of strAttr){
					let leng = ns.length;
					let strid = ns.substring(0,36)
					let strname = ns.substring(36,leng)
					strids+=strid+",";
					strnames+=strname+",";
				}
				this.userIds=strids;
				this.userNames = strnames;
			}
		},
		onLoad(option) {
			//根据页面传值判断页面内容：检查记录&整改记录，并动态设置页面标题
			this.Token = server.net.GetSessionToken();
			console.log("测试token："+server.net.GetLocalToken());
			//获取文件列表
			this.getPeoplelist();
			
		},onPullDownRefresh() {
			console.log('下拉刷新');
			this.getPeoplelist();
		},
		onUnload:function(){
			console.log("页面关闭")
			
				
				uni.setStorageSync('selectIDs', this.userIds);
				uni.setStorageSync('selectNames', this.userNames);
				
		}		
	}
</script>

<style scoped>
	@import "../common/uni.css";
	@import "../common/icon.css";
	
	.list-content {
		margin-top: 0px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0px 10px;
	}
	
	.list-title{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-right: 15px;
	}
	
	
	.list-first{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 15px;
	}
	
	.list-second{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 30px;
	}
	
	.icon-second{
		width: 20upx;
		margin-left: 30px;
	}
	
	.list-third{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 45px;
	}
	.list-fourth{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 60px;
	}
	.list-fifth{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 75px;
	}
	.list-sixth{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 90px;
	}
	.list-senth{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 105px;
	}
	.list-eight{
		font-size: 32px;
		color: #000;
		display: inline-block;
		margin-left: 120px;
	}
	
</style>
