require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([2],{15:function(t,e,i){"use strict";var a=n(i(1)),s=n(i(16));function n(t){return t&&t.__esModule?t:{default:t}}i(0).default;new a.default(s.default).$mount()},16:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(18),s=i.n(a),n=i(22),c=!1;var o=function(t){c||i(17)},r=i(2)(s.a,n.a,o,"data-v-e4853720",null);r.options.__file="H:\\项目文件夹\\XC-XCGL\\pages\\index\\quailty\\safetyCheck.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] safetyCheck.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},17:function(t,e){},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i(19)),s=n(i(3));function n(t){return t&&t.__esModule?t:{default:t}}var c=i(0).default,o=[["camera"],["album"],["camera","album"]],r=[["compressed"],["original"],["compressed","original"]];e.default={data:function(){return{title:"picker",companyList:["请选择分公司"],projectList:["请选择项目"],areaList:["请选择区域"],unitList:["请选择施工单位"],dangerList:["请选择隐患类型"],dangerDesList:["请选择隐患描述"],rectiList:["请选择整改人"],noticeList:["请选择通知人"],degreeList:["一般","紧急","严重"],companyVal:0,projectVal:0,areaVal:0,unitVal:0,dangerVal:0,dangerDesVal:0,degreeVal:0,checkDate:"2018-09-18",recheckDate:"2018-10-18",deadline:"2018-09-21",time:"12:01",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onLoad:function(){console.log("页面加载ing"),this.getCompany(),this.getProject()},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{chooseImage:function(){var t,e=(t=a.default.mark(function t(){var e,i=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(e=t.sent,console.log("是否继续?",e),e){t.next=7;break}return t.abrupt("return");case 7:c.chooseImage({sourceType:o[this.sourceTypeIndex],sizeType:r[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){i.imageList=i.imageList.concat(t.tempFilePaths)}});case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function a(s,n){try{var c=e[s](n),o=c.value}catch(t){return void i(t)}if(!c.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})});return function(){return e.apply(this,arguments)}}(),isFullImg:function(){var t=this;return new Promise(function(e){c.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(i){i.confirm?(t.imageList=[],e(!0)):e(!1)},fail:function(){e(!1)}})})},previewImage:function(t){var e=t.target.dataset.src;c.previewImage({current:e,urls:this.imageList})},getCompany:function(){var t=this,e=s.default.net.setUrl("api/DropDownListApi/GetCompany");c.request({url:e,dataType:"json",type:"GET",header:{token:s.default.net.GetSessionToken()},success:function(e){var i=e.data;(i.status=1)?(console.log("公司获取成功"),t.companyList=t.setData(i.data)):(console.log(i.status),c.showToast({title:i.status,mask:!1,duration:1500}))},fail:function(t,e){console.log("公司获取失败"+t+e)}})},getProject:function(){var t=this,e=s.default.net.setUrl("api/DropDownListApi/GetProject");c.request({url:e,method:"GET",header:{token:s.default.net.GetSessionToken(),company:1},success:function(e){var i=e.data;(i.status=1)?(console.log("项目获取成功"),t.projectList=t.setData(i.data)):console.log("项目获取失败"+i.status)},fail:function(t,e){console.log("项目数据请求失败"+t+e)},complete:function(){}})},setData:function(t){var e=[];return t.forEach(function(t){e.push({text:t.text,value:t.value})}),e},changeCompany:function(t){console.log("picker发送选择改变，携带值为"+t.detail.value),this.companyVal=t.detail.value,this.getProject()},changeProject:function(t){this.projectVal=t.detail.value},changeArea:function(t){this.areaVal=t.detail.value},changeUnit:function(t){this.unitVal=t.detail.value},changeDanger:function(t){this.dangerVal=t.detail.value}}}},22:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("form",{staticClass:"input-form",attrs:{action:"",eventid:"15"},on:{submit:t.safetySubmit,reset:t.formReset}},[i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-01.png",mode:""}}),t._v(" "),i("text",[t._v("所属公司:")])]),t._v(" "),i("picker",{attrs:{value:t.companyVal,range:t.companyList,"range-key":"text",eventid:"0"},on:{change:t.changeCompany}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.companyList[t.companyVal].text))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-02.png",mode:""}}),t._v(" "),i("text",[t._v("项目名称:")])]),t._v(" "),i("picker",{attrs:{value:t.projectVal,range:t.projectList,"range-key":"text",eventid:"1"},on:{change:t.changeProject}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.projectList[t.projectVal].text))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-03.png",mode:""}}),t._v(" "),i("text",[t._v("任务名称:")])]),t._v(" "),i("input",{attrs:{type:"text",value:"",placeholder:"请填写任务名称"}})]),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-04.png",mode:""}}),t._v(" "),i("text",[t._v("检查楼栋:")])]),t._v(" "),i("input",{attrs:{type:"text",value:"",placeholder:"请填写检查楼栋号"}})]),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-05.png",mode:""}}),t._v(" "),i("text",[t._v("检查楼层:")])]),t._v(" "),i("input",{attrs:{type:"text",value:"",placeholder:"请填写检查楼层号"}})]),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-06.png",mode:""}}),t._v(" "),i("text",[t._v("检查区域:")])]),t._v(" "),i("picker",{attrs:{value:t.areaVal,range:t.areaList,eventid:"2"},on:{change:t.changeArea}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.areaList[t.areaVal]))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-07.png",mode:""}}),t._v(" "),i("text",[t._v("施工单位:")])]),t._v(" "),i("picker",{attrs:{value:t.unitVal,range:t.unitList,eventid:"3"},on:{change:t.changeUnit}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.unitList[t.unitVal]))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),t._v(" "),i("text",[t._v("隐患类型:")])]),t._v(" "),i("picker",{attrs:{value:t.dangerDesVal,range:t.dangerList,eventid:"4"},on:{change:t.changeDanger}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.dangerList[t.dangerDesVal]))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-09.png",mode:""}}),t._v(" "),i("text",[t._v("隐患描述:")])]),t._v(" "),i("picker",{attrs:{value:t.dangerDesVal,range:t.dangerDesList,eventid:"5"},on:{change:t.changeDangerDes}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.dangerDesList[t.dangerDesVal]))])])],1),t._v(" "),i("view",{staticClass:"input-row auto-height"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-10.png",mode:""}}),t._v(" "),i("text",[t._v("整改要求:")])]),t._v(" "),i("textarea",{attrs:{"auto-height":"",placeholder:"请填写整改要求",eventid:"6"},on:{blur:t.bindTextAreaBlur}})]),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-11.png",mode:""}}),t._v(" "),i("text",[t._v("整改人:")])]),t._v(" "),i("picker",{attrs:{value:t.index,range:t.rectiList,eventid:"7"},on:{change:t.changeServer}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.rectiList[t.index]))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-12.png",mode:""}}),t._v(" "),i("text",[t._v("通知人:")])]),t._v(" "),i("picker",{attrs:{value:t.index,range:t.noticeList,eventid:"8"},on:{change:t.changeServer}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.noticeList[t.index]))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-13.png",mode:""}}),t._v(" "),i("text",[t._v("整改期限:")])]),t._v(" "),i("picker",{attrs:{mode:"date",value:t.deadline,start:"2018-09-18",end:"2028-12-31",eventid:"9"},on:{change:function(t){}}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.deadline))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),t._v(" "),i("text",[t._v("检查日期:")])]),t._v(" "),i("picker",{attrs:{mode:"date",value:t.checkDate,start:"2018-09-18",end:"2028-12-31",eventid:"10"},on:{change:function(t){}}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.checkDate))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-15.png",mode:""}}),t._v(" "),i("text",[t._v("复查日期:")])]),t._v(" "),i("picker",{attrs:{mode:"date",value:t.recheckDate,start:"2018-09-18",end:"2028-12-31",eventid:"11"},on:{change:function(t){}}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.recheckDate))])])],1),t._v(" "),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-15.png",mode:""}}),t._v(" "),i("text",[t._v("严重程度:")])]),t._v(" "),i("picker",{attrs:{value:t.degreeVal,range:t.degreeList,eventid:"12"},on:{change:t.changeDegree}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.degreeList[t.degreeVal]))])])],1),t._v(" "),i("view",{staticClass:"input-row auto-height"},[i("view",{staticClass:"input-label width-100 block"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-15.png",mode:""}}),t._v(" "),i("text",[t._v("上传照片:")])]),t._v(" "),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},t._l(t.imageList,function(e,a){return i("block",{key:a},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"13-"+a},on:{tap:t.previewImage}})])])})),t._v(" "),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"14"},on:{tap:t.chooseImage}})])])])])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s}},[15]);
//# sourceMappingURL=../../../.sourcemap/pages/index/quailty/safetyCheck.js.map