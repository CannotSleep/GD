require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{144:function(t,e,a){"use strict";var s=i(a(1)),n=i(a(145));function i(t){return t&&t.__esModule?t:{default:t}}new s.default(n.default).$mount()},145:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(147),n=a.n(s),i=a(152);var l=function(t){a(146)},u=a(0)(n.a,i.a,l,"data-v-1bc04d90",null);e.default=u.exports},146:function(t,e){},147:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=i(a(3)),n=i(a(148));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{messageDatalist:[{type:19,contents:"混凝土浇筑令签字",count:1},{type:19,contents:"混凝土浇筑令签字",count:1}]}},components:{uniBadge:n.default},methods:{getMessagelist:function(){var e=this,a=s.default.net.setUrl("api/NoticeNewsApi/AppGetNotify");t.request({url:a,method:"GET",header:{Token:s.default.net.GetSessionToken()},success:function(a){console.log(a);var s=a.data.data;e.messageDatalist=s,t.stopPullDownRefresh()},fail:function(t){},complete:function(t){}})},getDetailList:function(e){switch(e){case 0:case 1:case 2:case 3:t.navigateTo({url:"../index/quality/QualityList?infoType="+e+"&state=3"});break;case 4:case 5:case 6:case 7:t.navigateTo({url:"../index/quality/safetyList?infoType="+e+"&state=3"});break;case 8:t.navigateTo({url:"../index/filesys/fileList?type="+e});break;case 12:t.navigateTo({url:"../index/quality/QualityList?infoType="+e+"&state=3"});break;case 13:t.navigateTo({url:"../index/quality/safetyList?infoType="+e+"&state=3"});break;case 14:case 15:t.navigateTo({url:"../index/quality/QualityList?infoType="+e+"&state=3"});break;case 16:case 17:t.navigateTo({url:"../index/quality/safetyList?infoType="+e+"&state=3"});break;case 18:t.navigateTo({url:"../index/schedule/scheduleList?state=all&notify=true"});break;case 19:t.navigateTo({url:"../index/site/ConcretePourList?notify=true"})}}},onLoad:function(t){this.getMessagelist()},onPullDownRefresh:function(){console.log("下拉刷新"),this.getMessagelist()}}}).call(e,a(2).default)},148:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(150),n=a.n(s),i=a(151);var l=function(t){a(149)},u=a(0)(n.a,i.a,l,null,null);e.default=u.exports},149:function(t,e){},150:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,inverted:{type:Boolean,default:!1},text:String},methods:{onClick:function(){this.$emit("click")}}}},151:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.text?a("text",{staticClass:"uni-badge",class:[!0===t.inverted?"uni-badge-inverted":"","uni-badge-"+t.type],attrs:{eventid:"Hs4-0"},on:{click:function(e){t.onClick()}}},[t._v("\n\t"+t._s(t.text)+"\n")]):t._e()},staticRenderFns:[]};e.a=s},152:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"list-content"},[a("view",{staticClass:"uni-list"},t._l(t.messageDatalist,function(e,s){return a("block",{key:s},[a("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[a("view",{staticClass:"uni-triplex-row"},[a("view",{staticClass:"uni-triplex-left",attrs:{eventid:"gMG-0-"+s},on:{tap:function(a){t.getDetailList(e.type)}}},[a("text",{staticClass:"list-title"},[t._v(t._s(e.contents))]),a("view",{staticClass:"mytab"},[a("uni-badge",{attrs:{text:"1",text:e.count,type:"success",mpcomid:"JgT-0-"+s}})],1)])])])])}))])])},staticRenderFns:[]};e.a=s}},[144]);