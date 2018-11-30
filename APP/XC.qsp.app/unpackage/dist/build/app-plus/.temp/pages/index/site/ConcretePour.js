require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([18],{191:function(t,e,i){"use strict";var a=s(i(1)),n=s(i(192));function s(t){return t&&t.__esModule?t:{default:t}}new a.default(n.default).$mount()},192:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(194),n=i.n(a),s=i(198);var r=function(t){i(193)},o=i(0)(n.a,s.a,r,"data-v-1e27983f",null);e.default=o.exports},193:function(t,e){},194:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=s(i(3)),n=s(i(6));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{numberBox:n.default},onLoad:function(t){this.Token=a.default.net.GetSessionToken(),console.log(this.Token),this.getProject()},onShow:function(e){if(0!=this.isfirstopen){var i=t.getStorageSync("selectID"),a=t.getStorageSync("selectName");this.AutographList[this.sindex].AccountID=i,this.AutographList[this.sindex].AccountName=a}},data:function(){return{Token:"",ProjectName:"",Position:"",Engineering:"",Angle:"",Grade:"",StartDate:"2018-09-26",EndDate:"2018-09-26",dayTg:"",nightTg:"",ZNigNum:"",ZDayNum:"",PDayNum:"",PNigNum:"",MechanicalZNum:0,MechanicalMNum:0,MechanicalPNum:0,LabourName:"",LabourNumber:"",RebarName:"",RebarNumber:"",CarpentryName:"",CarpentryNumber:"",PlumberName:"",PlumberNumber:"",AutographList:[{Type:0,TypeName:"工程部",AccountID:"人员编号",AccountName:"请选择工程部人员"},{Type:1,TypeName:"技术部",AccountID:"",AccountName:"请选择技术部人员"},{Type:2,TypeName:"材料设备员",AccountID:"人员编号",AccountName:"请选择材料设备员"},{Type:3,TypeName:"实验员",AccountID:"",AccountName:"请选择实验员"},{Type:4,TypeName:"安全部",AccountID:"人员编号",AccountName:"请选择安全部"},{Type:5,TypeName:"生产经理",AccountID:"",AccountName:"请选择生产经理"},{Type:6,TypeName:"技术经理",AccountID:"人员编号",AccountName:"请选择技术经理"},{Type:7,TypeName:"项目经理",AccountID:"",AccountName:"请选择项目经理"}],pageId:"",TypeName:"",NeedAutograph:!1,sendVal:"",projectList:[],projectText:"请获取项目",projectIndex:0,projectVal:"",isfirstopen:0,sindex:0}},methods:{openMask:function(t){this.sendVal=!0},confirm:function(){console.log("点击了取消")},getProject:function(){var e=this,i=a.default.net.setUrl("api/DropDownListApi/GetProject");t.request({url:i,method:"GET",header:{token:this.Token},data:{},success:function(t){console.log(t);var i=t.data,a=i.data;if(i.status=1){a.unshift({value:"08876894",text:"请选择项目"}),e.projectList=e.setData(a),e.projectVal=e.projectList[e.projectIndex].value,e.projectText=e.projectList[e.projectIndex].text}else console.log("项目获取失败"+i.status)},fail:function(t,e){console.log("项目数据请求失败"+t+e)},complete:function(){}})},changeProject:function(t){this.projectIndex=t.detail.value,this.projectVal=this.projectList[t.detail.value].value,this.projectText=this.projectList[this.projectIndex].text},setData:function(t){var e=[];return t.forEach(function(t){e.push({text:t.text,value:t.value})}),e},changeStartDate:function(t){this.StartDate=t.detail.value},changeEndDate:function(t){this.changeEndDate=t.detail.value},MZnumberUpdate:function(t){this.MechanicalZNum=t},MEnumberUpdate:function(t){this.MechanicalMNum=t},MPnumberUpdate:function(t){this.MechanicalPNum=t},opselect:function(e){this.isfirstopen+=1,this.sindex=e,t.navigateTo({url:"../../../components/selectPeople"})},addDate:function(){var e=a.default.net.setUrl("api/ConcretePouringApi/Add"),i=[];for(var n in this.AutographList){var s={Type:this.AutographList[n].Type,AccountID:this.AutographList[n].AccountID,Opinion:""};i.push(s)}var r={Name:"混凝土浇筑令",Position:this.Position,Engineering:this.Engineering,Grade:this.Grade,Angle:this.Angle,StartDate:this.StartDate,EndDate:this.EndDate,TDayNnm:this.dayTg,TNigNnm:this.nightTg,ZDayNnm:this.ZDayNum,ZNigNnm:this.ZNigNum,PDayNnm:this.PDayNum,PNigNnm:this.PNigNum,MechanicalZNnm:this.MechanicalZNum,MechanicalMNnm:this.MechanicalMNum,MechanicalPNnm:this.MechanicalPNum,LabourName:this.LabourName,LabourPhone:this.LabourNumber,RebarName:this.RebarName,RebarPhone:this.RebarNumber,CarpentryName:this.CarpentryName,CarpentryPhone:this.CarpentryNumber,PlumberName:this.PlumberName,PlumberPhone:this.PlumberNumber,ProjectID:this.projectVal,AutographList:i};console.log(r),t.request({url:e,method:"POST",header:{Token:this.Token},data:JSON.stringify(r),success:function(e){console.log(e);var i=e.data;i.data;console.log(i.message),1==i.status?(console.log("添加成功"),t.showToast({title:i.message,mask:!1,duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},2e3)):(console.log("添加失败"+i.message),t.showToast({title:i.message,mask:!1,duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},2e3))},fail:function(){},complete:function(){}})},tempS:function(e){console.log("暂存");var i={Name:"混凝土浇筑令",Position:this.Position,Engineering:this.Engineering,Grade:this.Grade,Angle:this.Angle,StartDate:this.StartDate,EndDate:this.EndDate,TDayNnm:this.dayTg,TNigNnm:this.nightTg,ZDayNnm:this.ZDayNum,ZNigNnm:this.ZNigNum,PDayNnm:this.PDayNum,PNigNnm:this.PNigNum,MechanicalZNnm:this.MechanicalZNum,MechanicalMNnm:this.MechanicalMNum,MechanicalPNnm:this.MechanicalPNum,LabourName:this.LabourName,LabourPhone:this.LabourNumber,RebarName:this.RebarName,RebarPhone:this.RebarNumber,CarpentryName:this.CarpentryName,CarpentryPhone:this.CarpentryNumber,PlumberName:this.PlumberName,PlumberPhone:this.PlumberNumber,ProjectID:this.projectVal,ProjectName:this.projectText,AutographList:this.AutographList,isFinish:"未完成",ProjectIndex:this.projectIndex},a=t.getStorageSync("ConcretePourListOffLine");a?(console.log(a),a.push(i)):(a=[]).push(i),t.setStorageSync("ConcretePourListOffLine",a),t.showToast({title:"暂存成功",mask:!1,duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},2e3)}}}}).call(e,i(2).default)},198:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"input-row"},[t._m(0),i("picker",{attrs:{value:t.projectIndex,range:t.projectList,"range-key":"text",eventid:"bzC-0"},on:{change:t.changeProject}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.projectText))])])],1),i("view",{staticClass:"input-row"},[t._m(1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Position,expression:"Position"}],attrs:{type:"text",value:"",placeholder:"请填写浇筑部位",eventid:"PaY-1"},domProps:{value:t.Position},on:{input:function(e){e.target.composing||(t.Position=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(2),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Grade,expression:"Grade"}],attrs:{type:"text",value:"",placeholder:"请填写浇筑部位",eventid:"YVl-2"},domProps:{value:t.Grade},on:{input:function(e){e.target.composing||(t.Grade=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(3),i("picker",{attrs:{mode:"date",value:t.StartDate,start:"2018-09-26",end:"2028-12-31",eventid:"PdL-3"},on:{change:t.changeStartDate}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.StartDate))])])],1),i("view",{staticClass:"input-row"},[t._m(4),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Angle,expression:"Angle"}],attrs:{type:"text",value:"",placeholder:"请填写塌落度",eventid:"BRy-4"},domProps:{value:t.Angle},on:{input:function(e){e.target.composing||(t.Angle=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(5),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Engineering,expression:"Engineering"}],attrs:{type:"text",value:"",placeholder:"请填写浇筑方量",eventid:"LTW-5"},domProps:{value:t.Engineering},on:{input:function(e){e.target.composing||(t.Engineering=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(6),i("picker",{attrs:{mode:"date",value:t.EndDate,start:"2018-09-26",end:"2028-12-31",eventid:"740-6"},on:{change:t.changeEndDate}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.EndDate))])])],1),t._m(7),i("view",{staticClass:"input-row"},[t._m(8),i("input",{directives:[{name:"model",rawName:"v-model",value:t.dayTg,expression:"dayTg"}],staticClass:"day-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"cXU-7"},domProps:{value:t.dayTg},on:{input:function(e){e.target.composing||(t.dayTg=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nightTg,expression:"nightTg"}],staticClass:"night-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"GBu-8"},domProps:{value:t.nightTg},on:{input:function(e){e.target.composing||(t.nightTg=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(9),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ZDayNum,expression:"ZDayNum"}],staticClass:"day-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"Zvw-9"},domProps:{value:t.ZDayNum},on:{input:function(e){e.target.composing||(t.ZDayNum=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ZNigNum,expression:"ZNigNum"}],staticClass:"night-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"8RD-10"},domProps:{value:t.ZNigNum},on:{input:function(e){e.target.composing||(t.ZNigNum=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(10),i("input",{directives:[{name:"model",rawName:"v-model",value:t.PDayNum,expression:"PDayNum"}],staticClass:"day-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"D7w-11"},domProps:{value:t.PDayNum},on:{input:function(e){e.target.composing||(t.PDayNum=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.PNigNum,expression:"PNigNum"}],staticClass:"night-row",attrs:{type:"text",value:"",placeholder:"请填写人数",eventid:"UC2-12"},domProps:{value:t.PNigNum},on:{input:function(e){e.target.composing||(t.PNigNum=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(11),i("view",{staticClass:"detail-box"},[i("number-box",{attrs:{eventid:"9mv-13",mpcomid:"dMF-0"},on:{update:t.MZnumberUpdate}})],1)]),i("view",{staticClass:"input-row"},[t._m(12),i("view",{staticClass:"detail-box"},[i("number-box",{attrs:{eventid:"MHG-14",mpcomid:"DmW-1"},on:{update:t.MEnumberUpdate}})],1)]),i("view",{staticClass:"input-row"},[t._m(13),i("view",{staticClass:"detail-box"},[i("number-box",{attrs:{eventid:"Eoj-15",mpcomid:"4Nn-2"},on:{update:t.MPnumberUpdate}})],1)]),i("view",{staticClass:"input-row"},[t._m(14),i("input",{directives:[{name:"model",rawName:"v-model",value:t.LabourName,expression:"LabourName"}],attrs:{type:"text",value:"",placeholder:"请填写劳务值班人",eventid:"oGU-16"},domProps:{value:t.LabourName},on:{input:function(e){e.target.composing||(t.LabourName=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(15),i("input",{directives:[{name:"model",rawName:"v-model",value:t.LabourNumber,expression:"LabourNumber"}],attrs:{type:"text",value:"",placeholder:"请填写劳务值班人电话",eventid:"3rM-17"},domProps:{value:t.LabourNumber},on:{input:function(e){e.target.composing||(t.LabourNumber=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(16),i("input",{directives:[{name:"model",rawName:"v-model",value:t.RebarName,expression:"RebarName"}],attrs:{type:"text",value:"",placeholder:"请填写钢筋值班人",eventid:"ll3-18"},domProps:{value:t.RebarName},on:{input:function(e){e.target.composing||(t.RebarName=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(17),i("input",{directives:[{name:"model",rawName:"v-model",value:t.RebarNumber,expression:"RebarNumber"}],attrs:{type:"text",value:"",placeholder:"请填写钢筋值班人电话",eventid:"oSu-19"},domProps:{value:t.RebarNumber},on:{input:function(e){e.target.composing||(t.RebarNumber=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(18),i("input",{directives:[{name:"model",rawName:"v-model",value:t.CarpentryName,expression:"CarpentryName"}],attrs:{type:"text",value:"",placeholder:"请填写木工值班人",eventid:"cf8-20"},domProps:{value:t.CarpentryName},on:{input:function(e){e.target.composing||(t.CarpentryName=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(19),i("input",{directives:[{name:"model",rawName:"v-model",value:t.CarpentryNumber,expression:"CarpentryNumber"}],attrs:{type:"text",value:"",placeholder:"请填写木工值班人电话",eventid:"ZNe-21"},domProps:{value:t.CarpentryNumber},on:{input:function(e){e.target.composing||(t.CarpentryNumber=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(20),i("input",{directives:[{name:"model",rawName:"v-model",value:t.PlumberName,expression:"PlumberName"}],attrs:{type:"text",value:"",placeholder:"请填写水电值班人",eventid:"sOY-22"},domProps:{value:t.PlumberName},on:{input:function(e){e.target.composing||(t.PlumberName=e.target.value)}}})]),i("view",{staticClass:"input-row"},[t._m(21),i("input",{directives:[{name:"model",rawName:"v-model",value:t.PlumberNumber,expression:"PlumberNumber"}],attrs:{type:"text",value:"",placeholder:"请填写水电值班人电话",eventid:"gms-23"},domProps:{value:t.PlumberNumber},on:{input:function(e){e.target.composing||(t.PlumberNumber=e.target.value)}}})]),t._l(t.AutographList,function(e,a){return i("block",{key:a},[i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),i("text",[t._v(t._s(e.TypeName)+":")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.AccountName,expression:"item.AccountName"}],attrs:{type:"text",value:"",eventid:"VFu-24-"+a},domProps:{value:e.AccountName},on:{tap:function(e){t.opselect(a)},input:function(t){t.target.composing||(e.AccountName=t.target.value)}}})])])}),i("view",{staticClass:"button-row"},[i("button",{attrs:{type:"primary",size:"mini",eventid:"OrN-25"},on:{tap:function(e){t.addDate()}}},[t._v("添加")]),i("button",{staticClass:"search-btn",attrs:{size:"mini",type:"default",eventid:"9ez-26"},on:{tap:t.tempS}},[t._v("暂存")])],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("项目名称:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("浇筑部位:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("砼强度:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("开盘时间:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("塌落度:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("浇筑方量:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("浇筑持续时间:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-row"},[e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("各工种人员配备情况:")])]),e("view",{staticClass:"day-row"},[e("text",[this._v("白班")])]),e("view",{staticClass:"night-row"},[e("text",[this._v("夜班")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("砼工人数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("找平人数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("捧手人数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("振动棒台数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("磨光机台数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("平板振动器台数:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("劳务值班人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("劳务值班人电话:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("钢筋值班人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("钢筋值班人电话:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("木工值班人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("木工值班人电话:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("水电值班人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),e("text",[this._v("水电值班人电话:")])])}]};e.a=a}},[191]);