require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([30],{23:function(e,t,i){"use strict";var n=s(i(1)),a=s(i(24));function s(e){return e&&e.__esModule?e:{default:e}}new n.default(a.default).$mount()},24:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(26),a=i.n(n),s=i(29),o=!1;var c=function(e){o||i(25)},l=i(0)(a.a,s.a,c,"data-v-08ece39c",null);l.options.__file="F:\\施工管理平台\\20181101\\XC.qsp.app\\pages\\index\\quality\\safetyCheck.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] safetyCheck.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},25:function(e,t){},26:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(i(4)),a=s(i(3));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{Token:"",title:"picker",companyList:["请选择分公司"],companyIndex:0,companyText:"1",companyVal:"1",dong:"",ceng:"",projectList:["请选择项目"],projectIndex:0,projectText:"",projectVal:"",areaList:["请选择区域"],areaVal:"",areaIndex:0,areaText:"",unitList:["请选择施工单位"],unitVal:"",unitIndex:0,unitText:"",rectification:"",dangerList:["请选择隐患类型"],dangerVal:"",dangerIndex:0,dangerText:"",dangerDesList:["请选择隐患描述"],dangerDesVal:"",dangerDesText:"请选择隐患描述",dangerDesIndex:0,rectiList:["请选择整改人"],rectpeople:"请选择整改人",rectpeopleid:"",noticeList:["请选择通知人"],noticepeople:"请选择通知人",noticepeopleid:"",degreeList:[{text:"一般",value:"0"},{text:"紧急",value:"1"},{text:"严重",value:"2"}],degreeVal:"0",degreeText:"一般",degreeIndex:0,checkDate:"2018-09-18",recheckDate:"2018-10-18",deadline:"2018-09-21",time:"12:01",sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9],isfirstopen:1,imageList:[],safetyId:"",imgupindex:0}},onLoad:function(e){this.Token=a.default.net.GetSessionToken(),this.getCompany(),this.getUnit(),this.getDanger();var t=a.default.net.getFormatDate(new Date);console.log(t),this.checkDate=t,this.deadline=t,this.recheckDate=t},onShow:function(){if(console.log("页面显示"),1!=this.isfirstopen){var t=e.getStorageSync("selectID"),i=e.getStorageSync("selectName");""==i&&(i="请选择整改人"),this.rectpeople=i,this.rectpeopleid=t;var n=e.getStorageSync("selectIDs"),a=e.getStorageSync("selectNames");""==a&&(a="请选择通知人"),this.noticepeople=a,this.noticepeopleid=n}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{submit:function(t){var i=this;e.showLoading({title:"上传中",mask:!0}),e.removeStorageSync("selectID"),e.removeStorageSync("selectName"),e.removeStorageSync("selectIDs"),e.removeStorageSync("selectNames");var n=a.default.net.setUrl("api/SecurityInspectApi/AddOrUpdate?notifier="+this.noticepeopleid),s={Title:this.title,RectPeople:this.rectpeopleid,ProjectId:this.projectVal,SubcontractingUnit:this.unitVal,Building:this.dong,Floor:this.ceng,SaftyDangerID:this.dangerVal,SaftyDanger:this.dangerText,DangerDesID:this.dangerDesVal,DangerDes:this.dangerDesText,Rectification:this.rectification,ExpireDate:this.deadline,CrashLevel:this.degreeVal,AddPeopleID:a.default.net.GetUser().ID,CheckDate:this.checkDate,ReCheckDate:this.recheckDate};this.formcheck(s)&&e.request({url:n,method:"POST",header:{Token:this.Token},data:JSON.stringify(s),success:function(t){a.default.net.showWrongTipsEx(t);var n=t.data,s=n.data;1==n.status?(e.showToast({title:"提交成功",mask:!1,duration:1500}),i.safetyId=s,0!=i.imageList.length?i.uploadImage():(e.hideLoading(),setTimeout(function(){e.navigateBack({delta:1})},2e3))):console.log(n.message)},fail:function(){console.log("提交失败")},complete:function(){console.log("完成")}})},sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var t,i=(t=n.default.mark(function t(){var i;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(9!==this.imageList.length){t.next=7;break}return t.next=3,this.isFullImg();case 3:if(i=t.sent,console.log("是否继续?",i),i){t.next=7;break}return t.abrupt("return");case 7:e.chooseImage({sourceType:this.sourceType[this.sourceTypeIndex],sizeType:["compressed"],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){console.log("压缩前"),console.log(JSON.stringify(e.tempFiles))}});case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function n(a,s){try{var o=e[a](s),c=o.value}catch(e){return void i(e)}if(!o.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});t(c)}("next")})});return function(){return i.apply(this,arguments)}}(),isFullImg:function(){var t=this;return new Promise(function(i){e.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(e){e.confirm?(t.imageList=[],i(!0)):i(!1)},fail:function(){i(!1)}})})},previewImage:function(t){var i=t.target.dataset.src;e.previewImage({current:i,urls:this.imageList})},removeImage:function(e){console.log("移除图片"),this.imageList.pop(),this.tempFiles.pop()},uploadImage:function(t){var i=this;if(console.log("上传图片"),this.imgupindex!=this.imageList.length){var n=a.default.net.setUrl("api/FileApi/FileUpload");e.uploadFile({url:n,header:{Token:this.Token},filePath:this.imageList[this.imgupindex],name:"123",formData:{foreignId:this.safetyId,type:"1"},success:function(t){a.default.net.showWrongTipsEx(t),console.log(t.data),console.log("上传成功"),i.imgupindex+=1,i.uploadImage(),e.showToast({title:"图片上传成功",mask:!1,duration:1500})}}).onProgressUpdate(function(e){console.log("上传进度"+e.progress),console.log("已经上传的数据长度"+e.totalBytesSent),console.log("预期需要上传的数据总长度"+e.totalBytesExpectedToSend)})}else e.hideLoading(),setTimeout(function(){e.navigateBack({delta:1})},2e3)},tempS:function(t){console.log("暂存");var i={Title:this.title,CompanyID:this.companyVal,CompanyName:this.companyText,RectPeople:this.rectpeopleid,RectPeopleName:this.rectpeople,NoticePeople:this.noticepeopleid,NoticePeopleName:this.noticepeople,ProjectId:this.projectVal,ProjectName:this.projectText,SubcontractingUnit:this.unitVal,SubcontractingUnitName:this.unitText,Building:this.dong,Floor:this.ceng,SaftyDangerID:this.dangerVal,SaftyDanger:this.dangerText,DangerDesID:this.dangerDesVal,DangerDes:this.dangerDesText,Rectification:this.rectification,ExpirDate:this.deadline,CrashLevel:this.degreeVal,CrashLevelName:this.degreeText,AddPeopleID:a.default.net.GetUser().ID,CheckDate:this.checkDate,ReCheckDate:this.recheckDate,ImageList:this.imageList,CompanyIndex:this.companyIndex,ProjectIndex:this.projectIndex,AreaIndex:this.areaIndex,UnitIndex:this.unitIndex,DangerIndex:this.dangerIndex,DangerDesIndex:this.dangerDesIndex,DegreeIndex:this.degreeIndex},n=e.getStorageSync("SafeListOffLine");n?(console.log(n),n.push(i)):(n=[]).push(i),e.setStorageSync("SafeListOffLine",n),e.showToast({title:"暂存成功",mask:!1,duration:1500}),setTimeout(function(){e.navigateBack({delta:1})},2e3)},getCompany:function(){var t=this,i=a.default.net.setUrl("api/DropDownListApi/GetCompany");e.request({url:i,dataType:"json",type:"GET",header:{Token:this.Token},success:function(i){a.default.net.showWrongTipsEx(i);var n=i.data,s=n.data;if(1==n.status){console.log("公司获取成功");s.unshift({value:"",text:"请选择公司"}),t.companyList=t.setData(s),t.companyVal=t.companyList[t.companyIndex].value,t.companyText=t.companyList[t.companyIndex].text,""!=t.companyVal&&t.getProject()}else console.log(n.status),e.showToast({title:n.status,mask:!1,duration:1500})},fail:function(e,t){console.log("公司获取失败"+e+t)}})},getProject:function(){var t=this,i=a.default.net.setUrl("api/DropDownListApi/GetProject");e.request({url:i,method:"GET",header:{Token:this.Token},data:{company:this.companyVal},success:function(e){a.default.net.showWrongTipsEx(e);var i=e.data,n=i.data;if(1==i.status){n.unshift({value:"",text:"请选择项目"}),t.projectList=t.setData(n),t.projectVal=t.projectList[t.projectIndex].value,t.projectText=t.projectList[t.projectIndex].text}else console.log("项目获取失败"+i.status)},fail:function(e,t){console.log("项目数据请求失败"+e+t)}})},getUnit:function(){var t=this,i=a.default.net.setUrl("api/DropDownListApi/GetUtilitySettings");e.request({url:i,method:"POST",header:{Token:this.Token},data:JSON.stringify({type:1}),success:function(e){a.default.net.showWrongTipsEx(e);var i=e.data,n=i.data;if(1==i.status){console.log("施工单位获取成功");n.unshift({value:"",text:"请选择整改单位"}),t.unitList=t.setData(n),t.unitVal=t.unitList[t.unitIndex].value,t.unitText=t.unitList[t.unitIndex].text}else console.log("施工单位获取失败"+i.status)},fail:function(e,t){console.log("施工单位数据请求失败"+e+t)}})},getDanger:function(){var t=this,i=a.default.net.setUrl("api/DropDownListApi/GetQualityDangerType");e.request({url:i,method:"POST",header:{Token:this.Token},data:JSON.stringify({type:2}),success:function(e){a.default.net.showWrongTipsEx(e);var i=e.data,n=i.data;if(1==i.status){n.unshift({value:"",text:"请选择隐患类型"}),t.dangerList=t.setData(n),t.dangerVal=t.dangerList[t.dangerIndex].value,t.dangerText=t.dangerList[t.dangerIndex].text,""!=t.dangerVal&&t.getDangerDes()}else console.log("隐患类型获取失败"+i.status)},fail:function(e,t){console.log("施工单位数据请求失败"+e+t)}})},getDangerDes:function(){var t=this,i=a.default.net.setUrl("api/DropDownListApi/GetQualityDangerDes"),n={size:"9999",page:"1",type:"2",comid:this.dangerVal};e.request({url:i,method:"POST",header:{Token:this.Token},data:JSON.stringify(n),success:function(e){a.default.net.showWrongTipsEx(e);var i=e.data,n=i.data;if(1==i.status){n.unshift({value:"",text:"请选择隐患描述"}),t.dangerDesList=t.setData(i.data),t.dangerDesVal=t.dangerDesList[t.dangerDesIndex].value,t.dangerDesText=t.dangerDesList[t.dangerDesIndex].text}else console.log("隐患描述获取失败"+i.status)},fail:function(e,t){console.log("隐患描述获取失败"+e+t)}})},setData:function(e){var t=[];return null!=e&&0!=e.length&&e.forEach(function(e){t.push({text:e.text,value:e.value})}),t},changeCompany:function(e){this.companyIndex=e.detail.value,this.companyVal=this.companyList[e.detail.value].value,this.companyText=this.companyList[this.companyIndex].text,this.projectIndex=0,this.getProject()},changeProject:function(e){this.projectIndex=e.detail.value,this.projectVal=this.projectList[e.detail.value].value,this.projectText=this.projectList[this.projectIndex].text},changeUnit:function(e){this.unitIndex=e.detail.value,this.unitText=this.unitList[this.unitIndex].text,this.unitVal=this.unitList[this.unitIndex].value},changeDanger:function(e){this.dangerIndex=e.detail.value,this.dangerVal=this.dangerList[this.dangerIndex].value,this.dangerText=this.dangerList[this.dangerIndex].text,this.dangerDesIndex=0,this.getDangerDes()},changeDangerDes:function(e){this.dangerDesIndex=e.detail.value,this.dangerDesVal=this.dangerDesList[this.dangerDesIndex].value,this.dangerDesText=this.dangerDesList[this.dangerDesIndex].text},changeDegree:function(e){this.degreeIndex=e.detail.value,this.degreeVal=this.degreeList[this.degreeIndex].value,this.degreeText=this.degreeList[this.degreeIndex].text,console.log(this.degreeVal),console.log(this.degreeText)},selectRect:function(t){this.isfirstopen+=1,e.navigateTo({url:"../../../components/selectPeople"})},selectNotice:function(){this.isfirstopen+=1,e.navigateTo({url:"../../../components/selectPeopleMulti"})},changeCheckDate:function(e){this.checkDate=e.detail.value},changeDeadDate:function(e){this.deadline=e.detail.value},changeReCheckDate:function(e){this.recheckDate=e.detail.value},nameInput:function(e){this.title=e.detail.value},dongInput:function(e){this.dong=e.detail.value},cengInput:function(e){this.ceng=e.detail.value},recInput:function(e){this.rectification=e.detail.value},formcheck:function(t){return""==this.companyVal?(e.showToast({title:"请选择公司",mask:!1,duration:1500,image:null,icon:"none"}),!1):""==t.ProjectId?(e.showToast({title:"请选择项目",mask:!1,image:null,icon:"none",duration:1500}),!1):""==t.SubcontractingUnit?(e.showToast({title:"请填写整改单位",mask:!1,duration:1500,image:null,icon:"none"}),!1):""==t.SaftyDangerID?(e.showToast({title:"请选择隐患类型",mask:!1,duration:1500,image:null,icon:"none"}),!1):""==t.DangerDesID?(e.showToast({title:"请选择隐患描述",mask:!1,duration:1500,image:null,icon:"none"}),!1):""==t.RectPeople?(e.showToast({title:"请选择整改人",mask:!0,image:null,icon:"none",duration:1500}),!1):""!=this.noticepeopleid||(e.showToast({title:"请选择通知人",mask:!1,duration:1500,image:null,icon:"none"}),!1)},app_img:function(e,t){var i=this,n=t.tempFiles[e].path.lastIndexOf("."),a=t.tempFiles[e].path.substring(n+1,t.tempFiles[e].path.length),s=t.tempFiles[e].path.substring(0,n),o=(new Date).getTime();console.log(s),plus.zip.compressImage({src:t.tempFiles[e].path,dst:s+o+"."+a,quality:10},function(n){console.log("Compress success!"),console.log(JSON.stringify(n)),i.imageList=i.imageList.concat(n.target),console.log(JSON.stringify(i.imageList)),e!=t.tempFiles.length-1&&(i.app_img(e+1,t),console.log("end",i.imageList))},function(e){console.log("Compress error!"),console.log(JSON.stringify(e))})}}}}).call(t,i(2).default)},29:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"content"},[i("form",{staticClass:"input-form",attrs:{action:"",eventid:"tSW-20"},on:{submit:e.safetySubmit,reset:e.formReset}},[i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-01.png",mode:""}}),i("text",[e._v("所属公司:")])]),i("picker",{attrs:{value:e.companyIndex,range:e.companyList,"range-key":"text",eventid:"Ycy-0"},on:{change:e.changeCompany}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.companyText))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-02.png",mode:""}}),i("text",[e._v("项目名称:")])]),i("picker",{attrs:{value:e.projectIndex,range:e.projectList,"range-key":"text",eventid:"6Av-1"},on:{change:e.changeProject}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.projectText))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-03.png",mode:""}}),i("text",[e._v("任务名称:")])]),i("input",{attrs:{type:"text",value:"",placeholder:"请填写任务名称",eventid:"NmS-2"},on:{input:e.nameInput}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-04.png",mode:""}}),i("text",[e._v("检查楼栋:")])]),i("input",{attrs:{type:"text",value:"",placeholder:"请填写检查楼栋号",eventid:"UXM-3"},on:{input:e.dongInput}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-05.png",mode:""}}),i("text",[e._v("检查楼层:")])]),i("input",{attrs:{type:"text",value:"",placeholder:"请填写检查楼层号",eventid:"TBe-4"},on:{input:e.cengInput}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-07.png",mode:""}}),i("text",[e._v("施工单位:")])]),i("picker",{attrs:{value:e.unitIndex,range:e.unitList,"range-key":"text",eventid:"GNl-5"},on:{change:e.changeUnit}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.unitText))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-08.png",mode:""}}),i("text",[e._v("隐患类型:")])]),i("picker",{attrs:{value:e.dangerIndex,range:e.dangerList,"range-key":"text",eventid:"JlY-6"},on:{change:e.changeDanger}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.dangerText))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-09.png",mode:""}}),i("text",[e._v("隐患描述:")])]),i("picker",{attrs:{value:e.dangerDesVal,range:e.dangerDesList,"range-key":"text",eventid:"XCZ-7"},on:{change:e.changeDangerDes}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.dangerDesText))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-11.png",mode:""}}),i("text",[e._v("整改人:")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.rectpeople,expression:"rectpeople"}],attrs:{type:"text",placeholder:"",eventid:"LLT-8"},domProps:{value:e.rectpeople},on:{tap:e.selectRect,input:function(t){t.target.composing||(e.rectpeople=t.target.value)}}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-12.png",mode:""}}),i("text",[e._v("通知人:")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.noticepeople,expression:"noticepeople"}],attrs:{type:"text",placeholder:"",eventid:"g1V-9"},domProps:{value:e.noticepeople},on:{tap:e.selectNotice,input:function(t){t.target.composing||(e.noticepeople=t.target.value)}}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),i("text",[e._v("检查日期:")])]),i("picker",{attrs:{mode:"date",value:e.checkDate,start:"2000-01-01",end:"2028-12-31",eventid:"oEl-10"},on:{change:e.changeCheckDate}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.checkDate))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-13.png",mode:""}}),i("text",[e._v("整改期限:")])]),i("picker",{attrs:{mode:"date",value:e.deadline,start:e.checkDate,end:"2028-12-31",eventid:"YJs-11"},on:{change:e.changeDeadDate}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.deadline))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-14.png",mode:""}}),i("text",[e._v("复查日期:")])]),i("picker",{attrs:{mode:"date",value:e.recheckDate,start:e.deadline,end:"2028-12-31",eventid:"JV4-12"},on:{change:e.changeReCheckDate}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.recheckDate))])])],1),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-05.png",mode:""}}),i("text",[e._v("整改要求:")])]),i("input",{attrs:{type:"text",value:"",placeholder:"请填写整改要求",eventid:"QMt-13"},on:{input:e.recInput}})]),i("view",{staticClass:"input-row"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list2_icon-10.png",mode:""}}),i("text",[e._v("严重程度:")])]),i("picker",{attrs:{value:e.degreeIndex,range:e.degreeList,"range-key":"text",eventid:"2yD-14"},on:{change:e.changeDegree}},[i("view",{staticClass:"uni-input"},[e._v(e._s(e.degreeText))])])],1),i("view",{staticClass:"input-row-bottom-line"}),i("view",{staticClass:"input-row-my"},[i("view",{staticClass:"input-label"},[i("image",{attrs:{src:"../../../static/img/list1_icon/list1_icon-15.png",mode:""}}),i("text",[e._v("请选择图片:")])])]),i("view",[i("view",{staticClass:"uni-list-cell cell-pd"},[i("view",{staticClass:"uni-uploader"},[i("view",{staticClass:"uni-uploader-head"},[i("view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),i("view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])]),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},e._l(e.imageList,function(t,n){return i("block",{key:n},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:t,"data-src":t,eventid:"TRI-15-"+n},on:{tap:e.previewImage}})])])})),i("view",{staticClass:"uni-uploader__input-box_my"},[i("view",{staticClass:"uni-uploader__input_my",attrs:{eventid:"LiH-16"},on:{tap:e.removeImage}})]),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"HpW-17"},on:{tap:e.chooseImage}})])])])])]),i("view",{staticClass:"mysubmit"},[i("button",{staticClass:"search-btn",attrs:{size:"mini",eventid:"gmK-18"},on:{tap:e.submit}},[e._v("提交")]),i("button",{staticClass:"search-btn",attrs:{size:"mini",type:"default",eventid:"JTZ-19"},on:{tap:e.tempS}},[e._v("暂存")])],1)])],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a}},[23]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/quality/safetyCheck.js.map