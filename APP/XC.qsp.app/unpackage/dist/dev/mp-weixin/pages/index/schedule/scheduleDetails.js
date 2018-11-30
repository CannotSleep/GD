require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([26],{118:function(t,e,a){"use strict";var i=n(a(1)),s=n(a(119));function n(t){return t&&t.__esModule?t:{default:t}}new i.default(s.default).$mount()},119:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(121),s=a.n(i),n=a(122),l=!1;var o=function(t){l||a(120)},r=a(0)(s.a,n.a,o,"data-v-3b8b944d",null);r.options.__file="F:\\施工管理平台\\20181101\\XC.qsp.app\\pages\\index\\schedule\\scheduleDetails.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] scheduleDetails.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},120:function(t,e){},121:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,s=a(3),n=(i=s)&&i.__esModule?i:{default:i};e.default={onLoad:function(t){this.Token=n.default.net.GetSessionToken(),this.pageId=t.id,this.getDetails(t.id,t.notify)},data:function(){return{Token:"",pageId:"",Name:"",ProjectName:"",StartDate:"",EndDate:"",RealEndDate:"",Remark:"",Reclaimed:"",Deviation:"",PlanType:"",NeedSub:!1}},methods:{changeDate:function(t){this.RealEndDate=t.detail.value},getDetails:function(e,a){var i=this;console.log(e);var s=n.default.net.setUrl("api/ScheduleApi/GetList?page=1"),l={};l.ID=e,"true"==a&&(l.NeedSub="true"),t.request({url:s,method:"POST",data:l,header:{Token:this.Token,"content-type":"application/json"},success:function(t){n.default.net.showWrongTipsEx(t);var e=t.data,a=e.data;1==e.status?a.forEach(function(t){i.ProjectName=t.ProjectName,i.Name=t.Name,i.StartDate=t.StartDate.substring(0,10),i.EndDate=t.EndDate.substring(0,10),i.RealEndDate=t.RealEndDate.substring(0,10),i.Reclaimed=t.Reclaimed,null==t.Deviation?(i.Deviation="暂无",i.RealEndDate="未完成"):i.Deviation=t.Deviation,1==t.Type?i.PlanType="月进度计划":i.PlanType="季度进度计划",i.Remark=t.Remark,i.NeedSub=t.NeedSub}):console.log(e.message)},fail:function(){},complete:function(){}})},submit:function(){var e=n.default.net.setUrl("api/ScheduleApi/Update");if("未完成"==this.RealEndDate)return n.default.net.showWrongTips("请选择实际完成时间"),!1;var a={id:this.pageId,realEndDate:this.RealEndDate,reclaimed:this.Reclaimed,remark:this.Remark};console.log(a),t.request({url:e,method:"POST",header:{Token:this.Token},data:JSON.stringify(a),success:function(e){n.default.net.showWrongTipsEx(e);var a=e.data;a.data;1==a.status?(t.showToast({title:"填报成功",mask:!1,duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},2e3)):console.log(a.message)},fail:function(){console.log("填报失败")},complete:function(){}})}}}}).call(e,a(2).default)},122:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-row"},[t._m(0),a("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.Name)+"\n\t\t")])]),a("view",{staticClass:"input-row"},[t._m(1),a("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.PlanType)+"\n\t\t")])]),a("view",{staticClass:"input-row"},[t._m(2),a("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.StartDate)+"\n\t\t")])]),a("view",{staticClass:"input-row"},[t._m(3),a("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.EndDate)+"\n\t\t")])]),a("view",{staticClass:"input-row"},[t._m(4),a("picker",{attrs:{mode:"date",value:t.RealEndDate,start:t.StartDate,end:"2028-12-31",eventid:"rFu-0"},on:{change:t.changeDate}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.RealEndDate))])])],1),a("view",{staticClass:"input-row"},[t._m(5),a("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.Deviation)+"\n\t\t")])]),a("view",{staticClass:"input-row"},[t._m(6),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Reclaimed,expression:"Reclaimed"}],attrs:{"auto-height":"",placeholder:"计划纠编措施",eventid:"No5-1"},domProps:{value:t.Reclaimed},on:{blur:t.bindTextAreaBlur,input:function(e){e.target.composing||(t.Reclaimed=e.target.value)}}})]),a("view",{staticClass:"input-row"},[t._m(7),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Remark,expression:"Remark"}],attrs:{"auto-height":"",placeholder:"请填写备注",eventid:"O70-2"},domProps:{value:t.Remark},on:{blur:t.bindTextAreaBlur,input:function(e){e.target.composing||(t.Remark=e.target.value)}}})]),a("view",{staticClass:"input-row-bottom-line"}),t.NeedSub?a("view",{staticClass:"button-row"},[a("button",{attrs:{type:"primary",size:"mini",eventid:"OI8-3"},on:{tap:t.submit}},[t._v("填报")])],1):t._e()])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-08.png",mode:""}}),e("text",[this._v("计划名称：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-05.png",mode:""}}),e("text",[this._v("计划类型：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),e("text",[this._v("计划开始时间：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),e("text",[this._v("计划完成时间：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),e("text",[this._v("实际完成时间：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-09.png",mode:""}}),e("text",[this._v("实际偏差：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-10.png",mode:""}}),e("text",[this._v("计划纠编措施：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-08.png",mode:""}}),e("text",[this._v("备注")])])}]};e.a=s}},[118]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/schedule/scheduleDetails.js.map