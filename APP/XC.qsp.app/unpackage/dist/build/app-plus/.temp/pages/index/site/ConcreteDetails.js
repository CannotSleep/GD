require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([22],{69:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(70));function n(t){return t&&t.__esModule?t:{default:t}}new s.default(a.default).$mount()},70:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(72),a=i.n(s),n=i(73);var l=function(t){i(71)},c=i(0)(a.a,n.a,l,"data-v-41aaa12f",null);e.default=c.exports},71:function(t,e){},72:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(3),n=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{Token:"",areaVal:0,areaList:[{value:1,text:"测区1"}],ProjectName:"",TestState:"",ComponentType:"",Grade:"",CheckDate:"",ConcreteDate:"",dataNumList:[],Calculation:"",Remarks:"",Floor:""}},onLoad:function(t){this.Token=n.default.net.GetSessionToken(),this.getDetails(t.id)},methods:{getDetails:function(e){var i=this,s=n.default.net.setUrl("api/QualityConcreteBackApi/GetDetail"),a=JSON.stringify({ID:e});t.request({url:s,method:"POST",dataType:"json",header:{Token:this.Token,"content-type":"application/json"},data:a,success:function(e){var s=e.data,a=s.data;1==s.status?a.forEach(function(t){i.ProjectName=t.ProjectName,i.TestState=t.TestState,i.CheckDate=t.CheckDate.substring(0,10),i.Grade=t.Grade,i.ComponentType=t.ComponentType,i.Calculation=t.Calculation,i.Remarks=t.Remark,i.Floor=t.Floor,i.ConcreteDate=t.ConcreteDate.substring(0,10);var e=t.DetailCollection;for(var s in e)i.dataNumList.push({index:e[s].Name,value:e[s].DataAttr.join(" ")});console.log(t)}):(console.log(s.message),t.showToast({title:s.message}))},fail:function(e){console.log(e),t.showToast({title:"数据获取失败，请检查您的网络环境"})}})}}}}).call(e,i(2).default)},73:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"input-row"},[t._m(0),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.ProjectName)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(1),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.Floor)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(2),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.Grade)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(3),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.TestState)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(4),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.ComponentType)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(5),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.ConcreteDate)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(6),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.CheckDate)+"\n\t\t")])]),t._l(t.dataNumList,function(e,s){return i("block",{key:s},[i("view",{staticClass:"input-row increaseHeight"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-07.png",mode:""}}),i("text",[t._v("测量数据:"+t._s(e.index))])]),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(e.value)+"\n\t\t\t")])])])}),i("view",{staticClass:"input-row"},[t._m(7),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t"+t._s(t.Calculation)+"\n\t\t")])]),i("view",{staticClass:"input-row"},[t._m(8),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t"+t._s(t.Remarks)+"\n\t\t")])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-02.png",mode:""}}),e("text",[this._v("工程名称:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-02.png",mode:""}}),e("text",[this._v("构件部位(楼层):")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-10.png",mode:""}}),e("text",[this._v("混凝土强度设计等级:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-11.png",mode:""}}),e("text",[this._v("测试面状态:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-05.png",mode:""}}),e("text",[this._v("构件类型:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-13.png",mode:""}}),e("text",[this._v("砼浇筑时间:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-13.png",mode:""}}),e("text",[this._v("测量时间:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-09.png",mode:""}}),e("text",[this._v("计算结果:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-08.png",mode:""}}),e("text",[this._v("备注:")])])}]};e.a=s}},[69]);