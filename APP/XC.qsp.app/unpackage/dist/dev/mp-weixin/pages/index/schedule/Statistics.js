require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([28],{123:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(124));function n(t){return t&&t.__esModule?t:{default:t}}new a.default(i.default).$mount()},124:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(126),i=s.n(a),n=s(127),o=!1;var l=function(t){o||s(125)},c=s(0)(i.a,n.a,l,"data-v-55dd5891",null);c.options.__file="F:\\施工管理平台\\20181101\\XC.qsp.app\\pages\\index\\schedule\\Statistics.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] Statistics.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},125:function(t,e){},126:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(3),n=(a=i)&&a.__esModule?a:{default:a};e.default={onLoad:function(e){switch(e.state){case"month":t.setNavigationBarTitle({title:"月进度统计"}),this.searchType=3;break;case"season":t.setNavigationBarTitle({title:"季度进度统计"}),this.month=!1,this.season=!0,this.planType="季度",this.searchType=2;break;case"year":t.setNavigationBarTitle({title:"年度进度统计"}),this.secondPicker=!1,this.planType="",this.searchType=1}console.log("token："+n.default.net.GetSessionToken()),this.getCompany()},data:function(){return{testToken:"",planType:"月份",companyList:[],companyVal:"",companyIndex:0,companyText:"",projectList:[],projectIndex:0,projectVal:"",projectText:"",yearIndex:0,yearList:[{text:"请选择",value:0},{text:"2017年",value:2017},{text:"2018年",value:2018},{text:"2019年",value:2019},{text:"2020年",value:2020},{text:"2021年",value:2021},{text:"2022年",value:2022}],yearVal:"",monthList:[{text:"请选择",value:0},{value:1,text:"1月"},{value:2,text:"2月"},{value:3,text:"3月"},{value:4,text:"4月"},{value:5,text:"5月"},{value:6,text:"6月"},{value:7,text:"7月"},{value:8,text:"8月"},{value:9,text:"9月"},{value:10,text:"10月"},{value:11,text:"11月"},{value:12,text:"12月"}],monthIndex:0,monthVal:"",monthText:"",seasonList:[{text:"请选择",value:0},{value:1,text:"第一季度"},{value:2,text:"第二季度"},{value:3,text:"第三季度"},{value:4,text:"第四季度"}],seasonVal:"",seasonIndex:0,scheduleList:[],month:!0,season:!1,year:!0,secondPicker:!0,Number:0,statisticsList:[],searchType:1,page:1,existNewList:!0}},onReachBottom:function(){this.page+=1,this.existNewList&&this.pullupRefresh()},methods:{getCompany:function(){var e=this,s=n.default.net.setUrl("api/DropDownListApi/GetCompany");t.request({url:s,dataType:"json",type:"GET",header:{Token:n.default.net.GetSessionToken()},success:function(s){n.default.net.showWrongTipsEx(s);var a=s.data,i=a.data;if(console.log(JSON.stringify(s)),1==a.status){i.unshift({value:"",text:"请选择公司"}),console.log("公司获取成功"),e.companyList=e.setData(i),e.companyVal=e.companyList[e.companyIndex].value,e.companyText=e.companyList[e.companyIndex].text}else console.log(a.status),t.showToast({title:a.status,mask:!1,duration:1500})},fail:function(t,e){console.log("公司获取失败"+t+e)}})},getProject:function(){var e=this,s=n.default.net.setUrl("api/DropDownListApi/GetProject");t.request({url:s,method:"GET",header:{Token:n.default.net.GetSessionToken()},data:{company:this.companyVal},success:function(t){n.default.net.showWrongTipsEx(t);var s=t.data,a=s.data;if(1==s.status){a.unshift({value:"",text:"请选择项目"}),e.projectList=e.setData(a),e.projectVal=e.projectList[e.projectIndex].value,e.projectText=e.projectList[e.projectIndex].text}else console.log("项目获取失败"+s.status)},fail:function(t,e){console.log("项目数据请求失败"+t+e)},complete:function(){}})},setData:function(t){var e=[];return t.forEach(function(t){e.push({text:t.text,value:t.value})}),e},searchData:function(){this.page=1,this.statisticsList=[],this.existNewList=!0,this.getListData()},pullupRefresh:function(){this.getListData()},getListData:function(){var e=this,s=n.default.net.setUrl("api/ScheduleApi/Statistics?page="+this.page);this.yearVal=this.yearList[this.yearIndex].value,this.monthVal=this.monthList[this.monthIndex].value,this.seasonVal=this.seasonList[this.seasonIndex].value,console.log(this.searchType);var a={StatisticsType:this.searchType};this.companyVal&&(a.CompanyID=this.companyVal),this.projectVal&&(a.ProjectID=this.projectVal),1==this.searchType?0!=this.yearVal&&(a.Year=this.yearVal):2==this.searchType?(0!=this.yearVal&&(a.Year=this.yearVal),0!=this.seasonVal&&(a.Quarter=this.seasonVal)):(0!=this.yearVal&&(a.Year=this.yearVal),0!=this.monthVal&&(a.Month=this.monthVal)),console.log(JSON.stringify(a)),t.request({url:s,method:"POST",data:JSON.stringify(a),header:{Token:n.default.net.GetSessionToken()},success:function(s){n.default.net.showWrongTipsEx(s);var a=s.data,i=a.data;1==a.status?""!=i?i.forEach(function(t){e.statisticsList.push({Date:t.StatisticsName,planNum:t.PlanCount,realNum:t.FinishCount,rate:t.FinishPercent})}):(e.existNewList=!1,t.showToast({title:"暂无更多数据"})):(console.log(a.message),t.showToast({title:a.message}))},fail:function(){},complete:function(){}})},changeCompany:function(t){this.companyIndex=t.detail.value,this.companyVal=this.companyList[t.detail.value].value,this.companyText=this.companyList[this.companyIndex].text,this.getProject()},changeProject:function(t){this.projectIndex=t.detail.value,this.projectVal=this.projectList[t.detail.value].value,this.projectText=this.projectList[this.projectIndex].text},changeYears:function(t){this.yearIndex=t.detail.value,this.yearVal=this.yearList[this.yearIndex].value},changeMonth:function(t){this.monthIndex=t.detail.value,this.monthVal=this.monthList[this.monthIndex].value},changeSeason:function(t){this.seasonIndex=t.detail.value,this.seasonVal=this.seasonList[this.seasonIndex].value}}}}).call(e,s(2).default)},127:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"input-row"},[t._m(0),s("picker",{attrs:{value:t.companyIndex,range:t.companyList,"range-key":"text",eventid:"afF-0"},on:{change:t.changeCompany}},[s("view",{staticClass:"uni-input"},[t._v(t._s(t.companyText))])])],1),s("view",{staticClass:"input-row"},[t._m(1),s("picker",{attrs:{value:t.projectIndex,range:t.projectList,"range-key":"text",eventid:"ZbU-1"},on:{change:t.changeProject}},[s("view",{staticClass:"uni-input"},[t._v(t._s(t.projectText))])])],1),s("view",{staticClass:"input-row"},[t._m(2),t.year?s("picker",{attrs:{mode:"selector",value:t.yearIndex,range:t.yearList,"range-key":"text",eventid:"s74-2"},on:{change:t.changeYears}},[s("view",{staticClass:"uni-input"},[t._v(t._s(t.yearList[t.yearIndex].text))])]):t._e()],1),t.secondPicker?s("view",{staticClass:"input-row"},[s("view",{staticClass:"input-label"},[s("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),s("text",[t._v(t._s(t.planType)+"选择:")])]),t.month?s("picker",{attrs:{mode:"selector",value:t.monthIndex,range:t.monthList,"range-key":"text",eventid:"2kf-3"},on:{change:t.changeMonth}},[s("view",{staticClass:"uni-input"},[t._v(t._s(t.monthList[t.monthIndex].text))])]):t._e(),t.season?s("picker",{attrs:{mode:"selector",value:t.seasonIndex,range:t.seasonList,"range-key":"text",eventid:"vOG-4"},on:{change:t.changeSeason}},[s("view",{staticClass:"uni-input"},[t._v(t._s(t.seasonList[t.seasonIndex].text))])]):t._e()],1):t._e(),s("view",{staticClass:"button-row"},[s("button",{staticClass:"search-btn",attrs:{type:"",size:"mini",eventid:"2xY-5"},on:{tap:t.searchData}},[t._v("查询")])],1),s("view",{staticClass:"list-content"},[s("view",{staticClass:"uni-list"},t._l(t.statisticsList,function(e,a){return s("block",{key:a},[s("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"n4e-6-"+a},on:{tap:function(s){t.goDetail(e)}}},[s("view",{staticClass:"uni-triplex-row"},[s("view",{staticClass:"uni-triplex-left"},[s("text",{staticClass:"list-title uni-ellipsis"},[t._v("时间:"+t._s(e.Date))]),s("text",{staticClass:"list-deadline"},[t._v("计划个数:"+t._s(e.planNum))]),s("text",{staticClass:"list-deadline"},[t._v("完成个数:"+t._s(e.realNum))]),s("text",{staticClass:"list-level"},[t._v("完成率:"+t._s(e.rate)+"%")])])])])])}))])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-01.png",mode:""}}),e("text",[this._v("所属公司:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-02.png",mode:""}}),e("text",[this._v("项目名称:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),e("text",[this._v("年份选择:")])])}]};e.a=i}},[123]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/schedule/Statistics.js.map