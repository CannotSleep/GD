require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([20],{64:function(t,e,a){"use strict";var n=i(a(1)),s=i(a(65));function i(t){return t&&t.__esModule?t:{default:t}}new n.default(s.default).$mount()},65:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(67),s=a.n(n),i=a(68);var o=function(t){a(66)},c=a(0)(s.a,i.a,o,"data-v-3defff01",null);e.default=c.exports},66:function(t,e){},67:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};e.default={onLoad:function(t){this.Token=i.default.net.GetSessionToken(),this.getCompany()},data:function(){return{Token:"",companyList:[],companyIndex:0,projectList:[],companyText:"",projectText:"",projectIndex:0,companyVal:"",projectVal:"",ConcreteList:[]}},methods:{getCompany:function(){var e=this,a=i.default.net.setUrl("api/DropDownListApi/GetCompany");t.request({url:a,dataType:"json",type:"GET",header:{Token:this.Token},success:function(a){var n=a.data,s=n.data;if(n.status=1){s.unshift({value:"",text:"请选择公司"}),console.log("公司获取成功"),e.companyList=e.setData(s),e.companyVal=e.companyList[e.companyIndex].value,e.companyText=e.companyList[e.companyIndex].text,e.getProject()}else console.log(n.status),t.showToast({title:n.status,mask:!1,duration:1500})},fail:function(t,e){console.log("公司获取失败"+t+e)}})},getProject:function(){var e=this,a=i.default.net.setUrl("api/DropDownListApi/GetProject");t.request({url:a,method:"GET",header:{Token:this.Token},data:{company:this.companyVal},success:function(t){var a=t.data,n=a.data;if(a.status=1){n.unshift({value:"",text:"请选择项目"}),e.projectList=e.setData(n),e.projectVal=e.projectList[e.projectIndex].value,e.projectText=e.projectList[e.projectIndex].text}else console.log("项目获取失败"+a.status)},fail:function(t,e){console.log("项目数据请求失败"+t+e)},complete:function(){}})},setData:function(t){var e=[];return t.forEach(function(t){e.push({text:t.text,value:t.value})}),e},changeCompany:function(t){this.companyIndex=t.detail.value,this.companyVal=this.companyList[t.detail.value].value,this.companyText=this.companyList[this.companyIndex].text,this.getProject()},changeProject:function(t){this.projectIndex=t.detail.value,this.projectVal=this.projectList[t.detail.value].value,this.projectText=this.projectList[this.projectIndex].text},searchData:function(){var t=this.companyVal,e=this.projectVal;this.getListData(t,e)},getListData:function(e,a){var n=this,s=i.default.net.setUrl("api/QualityConcreteBackApi/GetList"),o={page:1};e&&(o.CompanyId=e),a&&(o.ProjectId=a);var c=JSON.stringify(o);t.request({url:s,method:"POST",header:{Token:this.Token},data:c,success:function(t){var e=t.data;if(1==e.status){var a=e.data,s=[];""!=a?a.forEach(function(t){s.push({ConcreteDate:t.ConcreteDate.substring(0,10),ProjectName:t.ProjectName,ID:t.ID,Grade:t.Grade})}):i.default.net.showWrongTips("暂无数据"),n.ConcreteList=s}},fail:function(){},complete:function(){}})},goDetail:function(e){e.ID;t.navigateTo({url:"ConcreteDetails?id="+e.ID})}}}}).call(e,a(2).default)},68:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-row"},[t._m(0),a("picker",{attrs:{value:t.companyIndex,range:t.companyList,"range-key":"text",eventid:"jRy-0"},on:{change:t.changeCompany}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.companyText))])])],1),a("view",{staticClass:"input-row"},[t._m(1),a("picker",{attrs:{value:t.projectIndex,range:t.projectList,"range-key":"text",eventid:"Jar-1"},on:{change:t.changeProject}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.projectText))])])],1),a("view",{staticClass:"input-row"},[a("button",{staticClass:"search-btn",attrs:{type:"",size:"mini",eventid:"PzR-2"},on:{tap:t.searchData}},[t._v("查询")])],1),a("view",{staticClass:"list-content"},[a("view",{staticClass:"uni-list"},t._l(t.ConcreteList,function(e,n){return a("block",{key:n},[a("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"XG8-3-"+n},on:{tap:function(a){t.goDetail(e)}}},[a("view",{staticClass:"uni-triplex-row"},[a("view",{staticClass:"uni-triplex-left"},[a("text",{staticClass:"list-title uni-ellipsis"},[t._v(t._s(e.ProjectName))]),a("text",{staticClass:"list-deadline"},[t._v(t._s(e.ConcreteDate))]),a("text",{staticClass:"list-level"},[t._v(t._s(e.Grade))])])])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-01.png",mode:""}}),e("text",[this._v("所属公司:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-02.png",mode:""}}),e("text",[this._v("项目名称:")])])}]};e.a=n}},[64]);