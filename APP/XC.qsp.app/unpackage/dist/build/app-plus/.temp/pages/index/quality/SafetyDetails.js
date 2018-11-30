require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([34],{39:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(40));function n(t){return t&&t.__esModule?t:{default:t}}new s.default(a.default).$mount()},40:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(42),a=i.n(s),n=i(43);var l=function(t){i(41)},c=i(0)(a.a,n.a,l,"data-v-0404f4b6",null);e.default=c.exports},41:function(t,e){},42:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(3),n=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{pageId:"",Token:"",SubcontractingUnit:"",Title:"",Number:"",Project:"",RectPeople:"",Company:"",Building:"",Floor:"",SafetyDanger:"",DangerDes:"",ExpirDate:"",CrashLevel:"",CheckDate:"",ReCheckDate:"",State:"",Rectification:"",AddPeople:"",isReply:!1,isApproval:!1,isRejected:!1,isRecheck:!1,isFinished:!1,replyContent:"",rejuectContent:"",imageList:[],repleyList:[]}},onLoad:function(t){this.pageId=t.id,this.Token=n.default.net.GetSessionToken(),this.getDetails(t.id),this.GetImage(),this.GetReply()},methods:{getDetails:function(e){var i=this,s=n.default.net.setUrl("api/SecurityInspectApi/GetList");console.log(e);var a=JSON.stringify({ID:e});t.request({url:s,method:"POST",dataType:"json",header:{Token:this.Token,"content-type":"application/json"},data:a,success:function(e){var s=e.data,a=s.data;1==s.status?a.forEach(function(t){switch(i.Title=t.Title,i.Company=t.Company,i.Project=t.ProjectName,i.Number=t.Number,i.Floor=t.Floor,i.Building=t.Building,i.SubcontractingUnit=t.SubcontractingUnit,i.SafetyDanger=t.SaftyDanger,i.DangerDes=t.DangerDes,i.RectPeople=t.RectPeopleName,i.Rectification=t.Rectification,i.AddPeople=t.AddPeopleName,i.ExpirDate=t.ExpireDate,i.CheckDate=t.CheckDate.substring(0,10),i.ReCheckDate=t.ReCheckDate.substring(0,10),i.CrashLevel=t.CrashLevelName,i.State=t.StateName,t.State){case 0:i.isApproval=!0,i.isRejected=!0;break;case 1:i.isReply=!0;break;case 2:i.JudgeAc()}}):(console.log(s.message),t.showToast({title:s.message}))},fail:function(e){console.log(e),t.showToast({title:"数据获取失败，请检查您的网络环境"})}})},JudgeAc:function(){var e=this,i=n.default.net.setUrl("api/QualityApi/JudgeAc?proid="+this.pageId);t.request({url:i,method:"POST",header:{token:this.Token},success:function(t){"9"==t.data&&(e.isRecheck=!0,e.isFinished=!0)},fail:function(){},complete:function(){}})},Reply:function(e){var i=0;switch(e){case 1:i=1;break;case 2:i=2}t.navigateTo({url:"Repley?Type=1&SubType="+i+"&id="+this.pageId})},Review:function(e){console.log(e);var i=n.default.net.setUrl("api/SecurityInspectApi/Review"),s={id:this.pageId,state:e,content:this.rejectContent};t.request({url:i,method:"POST",data:s,header:{token:this.Token,"content-type":"application/x-www-form-urlencoded"},success:function(e){var i=e.data;t.showToast({title:i.message}),setTimeout(function(){t.navigateBack({delta:1})},2e3)},fail:function(){},complete:function(){}})},previewImage:function(e){var i=e.target.dataset.src;t.previewImage({current:i,urls:this.imageList})},GetImage:function(e){var i=this;console.log(this.pageId);var s=n.default.net.setUrl("api/FileApi/GetFileTable?foreignId="+this.pageId+"&type=1");t.request({url:s,method:"POST",header:{token:this.Token},success:function(t){var e=t.data.data,s=[],a=!0,l=!1,c=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var u=r.value,v=n.default.net.setUrl(u.FileSrc);s.push(v)}}catch(t){l=!0,c=t}finally{try{!a&&o.return&&o.return()}finally{if(l)throw c}}i.imageList=s},fail:function(){},complete:function(){}})},GetReply:function(e){var i=this;console.log(this.pageId);var s=n.default.net.setUrl("api/SecurityInspectApi/GetRepleyList"),a={qid:this.pageId};t.request({url:s,method:"POST",header:{token:this.Token},data:JSON.stringify(a),success:function(t){var e=t.data.data;console.log(e);var s=!0,a=!1,l=void 0;try{for(var c,r=e[Symbol.iterator]();!(s=(c=r.next()).done);s=!0){var o=c.value,u=!0,v=!1,p=void 0;try{for(var d,_=o.FileImage[Symbol.iterator]();!(u=(d=_.next()).done);u=!0){var h=d.value;h.FileSrc=n.default.net.setUrl(h.FileSrc)}}catch(t){v=!0,p=t}finally{try{!u&&_.return&&_.return()}finally{if(v)throw p}}}}catch(t){a=!0,l=t}finally{try{!s&&r.return&&r.return()}finally{if(a)throw l}}i.repleyList=e},fail:function(){},complete:function(){}})}}}}).call(e,i(2).default)},43:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"input-row"},[t._m(0),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(Number)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(1),i("view",{staticClass:"detail-box"},[t._v(" \n\t\t\t\t"+t._s(t.Company)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(2),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.Project)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(3),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.Title)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(4),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.Floor)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(5),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.Building)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(6),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.SubcontractingUnit)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(7),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.SafetyDanger)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(8),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.DangerDes)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(9),i("view",{staticClass:"detail-box"},[t._v("\n\t\t\t\t"+t._s(t.Rectification)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(10),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.RectPeople)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(11),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.ExpirDate)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(12),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.CheckDate)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(13),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.ReCheckDate)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(14),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.State)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(15),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.AddPeople)+"\n\t\t\t")])]),i("view",{staticClass:"input-row"},[t._m(16),i("view",{staticClass:"detail-box auto-height"},[t._v("\n\t\t\t\t"+t._s(t.State)+"\n\t\t\t")])]),i("view",[i("view",{staticClass:"uni-list-cell cell-pd"},[i("view",{staticClass:"uni-uploader"},[t._m(17),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},t._l(t.imageList,function(e,s){return i("block",{key:s},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"56c-0-"+s},on:{tap:t.previewImage}})])])}))])])])]),t.isRejected?i("view",{staticClass:"input-row"},[t._m(18),i("input",{directives:[{name:"model",rawName:"v-model",value:t.replyContent,expression:"replyContent"}],attrs:{type:"text",value:"",placeholder:"请填写拒绝理由",eventid:"dsq-1"},domProps:{value:t.replyContent},on:{input:function(e){e.target.composing||(t.replyContent=e.target.value)}}})]):t._e(),i("view",{staticClass:"grace-comment"},t._l(t.repleyList,function(e,s){return i("block",{key:s},[i("view",{staticClass:"grace-comment-list"},[i("view",{staticClass:"grace-comment-face"},[i("image",{attrs:{src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",mode:"widthFix"}})]),i("view",{staticClass:"grace-comment-body"},[i("view",{staticClass:"grace-comment-top"},[i("text",[t._v(t._s(1==e.Type?"回复":"复查"))]),i("text",{staticClass:"grace-iconfont icon-zan"})]),i("view",{staticClass:"grace-comment-date"},[i("text",[t._v(t._s(e.ReplyTime))])]),i("view",{staticClass:"grace-comment-content"},[t._v(t._s(e.ReplyContent))]),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},t._l(e.FileImage,function(e,a){return i("block",{key:a},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:e.FileSrc,"data-src":e.FileSrc,eventid:"VW9-2-"+s+"-"+a},on:{tap:t.previewImage}})])])}))])])])])})),i("view",{staticClass:"button-row mt-10"},[t.isReply?i("button",{staticClass:"search-btn",attrs:{size:"mini",eventid:"Zp4-3"},on:{tap:function(e){t.Reply(1)}}},[t._v("回复")]):t._e(),t.isApproval?i("button",{staticClass:"danger-btn",attrs:{size:"mini",eventid:"8Zi-4"},on:{tap:function(e){t.Review(4)}}},[t._v("审批拒绝")]):t._e(),t.isRejected?i("button",{staticClass:"search-btn",attrs:{size:"mini",eventid:"1QK-5"},on:{tap:function(e){t.Review(1)}}},[t._v("审批通过")]):t._e(),t.isRecheck?i("button",{staticClass:"search-btn",attrs:{size:"mini",eventid:"oIL-6"},on:{tap:function(e){t.Reply(2)}}},[t._v("复查")]):t._e(),t.isFinished?i("button",{staticClass:"search-btn",attrs:{size:"mini",eventid:"HGl-7"},on:{tap:function(e){t.Review(3)}}},[t._v("合格完成")]):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("编号:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("分公司:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("工程项目:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("标题:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("栋号:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("楼号:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("分包单位:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("隐患类型:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("隐患描述:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("整改要求:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("整改人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("整改日期:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("检查日期:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("复查日期:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("紧急级别:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("填写人:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("状态:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-uploader-head"},[e("view",{staticClass:"uni-uploader-title"},[this._v("图片:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"input-label"},[e("text",[this._v("拒绝理由:")])])}]};e.a=s}},[39]);