require("../common/manifest.js");
require("../common/vendor.js");
global.webpackJsonp([46],{169:function(t,e,l){"use strict";var c=n(l(1)),s=n(l(170));function n(t){return t&&t.__esModule?t:{default:t}}new c.default(s.default).$mount()},170:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=l(172),s=l.n(c),n=l(173),o=!1;var i=function(t){o||l(171)},a=l(0)(s.a,n.a,i,"data-v-5db38d32",null);a.options.__file="F:\\施工管理平台\\20181101\\XC.qsp.app\\components\\selectPeopleMulti.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] selectPeopleMulti.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},171:function(t,e){},172:function(t,e,l){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var c=n(l(3)),s=n(l(6));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{peopleDatalist:[],userIds:"",userNames:"",Token:""}},components:{uniIcon:s.default},methods:{getPeoplelist:function(){var e=this,l=c.default.net.setUrl("api/DropDownListApi/SelectPeople");t.request({url:l,method:"GET",header:{token:this.Token},success:function(l){c.default.net.showWrongTipsEx(l);var s=l.data.data;e.peopleDatalist=s,t.stopPullDownRefresh()},fail:function(t){},complete:function(t){}})},checkboxChange:function(t){console.log(t),console.log("checkbox发生change事件，携带value值为："+t.detail.value);var e=t.detail.value.splice(",");console.log(e);var l="",c="",s=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(s=(i=a.next()).done);s=!0){var u=i.value,r=u.length;l+=u.substring(0,36)+",",c+=u.substring(36,r)+","}}catch(t){n=!0,o=t}finally{try{!s&&a.return&&a.return()}finally{if(n)throw o}}this.userIds=l,this.userNames=c}},onLoad:function(t){this.Token=c.default.net.GetSessionToken(),console.log("测试token："+c.default.net.GetLocalToken()),this.getPeoplelist()},onPullDownRefresh:function(){console.log("下拉刷新"),this.getPeoplelist()},onUnload:function(){console.log("页面关闭"),t.setStorageSync("selectIDs",this.userIds),t.setStorageSync("selectNames",this.userNames)}}}).call(e,l(2).default)},173:function(t,e,l){"use strict";var c=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("view",{staticClass:"content"},[l("view",{staticClass:"list-content"},[l("view",{staticClass:"uni-list"},[l("checkbox-group",{staticClass:"checkbox-group",attrs:{eventid:"iak-0",mpcomid:"8bo-15"},on:{change:t.checkboxChange}},t._l(t.peopleDatalist,function(e,c){return l("block",{key:c},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"gsO-0-"+c}}),l("text",{staticClass:"list-first"},[t._v(t._s(e.Name))])],1)],1),t._l(e.children,function(s,n){return null!=e.children?l("block",{key:n},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==s.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"yan-1-"+c+"-"+n}}),l("text",{staticClass:"list-second"},[t._v(t._s(s.Name))])],1):t._e(),null!=s.Account?l("label",{staticClass:"checkbox list-second"},[l("checkbox",{attrs:{value:s.Account.ID+s.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"j49-2-"+c+"-"+n}}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(s.Name)+"\n\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(s.children,function(e,o){return null!=s.children?l("block",{key:o},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==e.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"4Fx-3-"+c+"-"+n+"-"+o}}),l("text",{staticClass:"list-third"},[t._v(t._s(e.Name))])],1):t._e(),null!=e.Account?l("label",{staticClass:"checkbox list-third"},[l("checkbox",{attrs:{value:e.Account.ID+e.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"EdQ-4-"+c+"-"+n+"-"+o}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.Name)+"\n\t\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(e.children,function(s,i){return null!=e.children?l("block",{key:i},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==s.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"RU1-5-"+c+"-"+n+"-"+o+"-"+i}}),l("text",{staticClass:"list-fourth"},[t._v(t._s(s.Name))])],1):t._e(),null!=s.Account?l("label",{staticClass:"checkbox list-fourth"},[l("checkbox",{attrs:{value:s.Account.ID+s.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"glO-6-"+c+"-"+n+"-"+o+"-"+i}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.Name)+"\n\t\t\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(s.children,function(e,a){return null!=s.children?l("block",{key:a},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==e.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"kRm-7-"+c+"-"+n+"-"+o+"-"+i+"-"+a}}),l("text",{staticClass:"list-fifth"},[t._v(t._s(e.Name))])],1):t._e(),null!=e.Account?l("label",{staticClass:"checkbox list-fifth"},[l("checkbox",{attrs:{value:e.Account.ID+e.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"w5s-8-"+c+"-"+n+"-"+o+"-"+i+"-"+a}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.Name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(e.children,function(s,u){return null!=e.children?l("block",{key:u},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==s.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"nVD-9-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u}}),l("text",{staticClass:"list-sixth"},[t._v(t._s(s.Name))])],1):t._e(),null!=s.Account?l("label",{staticClass:"checkbox list-sixth"},[l("checkbox",{attrs:{value:s.Account.ID+s.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"JHU-10-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.Name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(s.children,function(e,r){return null!=s.children?l("block",{key:r},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==e.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"WPL-11-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u+"-"+r}}),l("text",{staticClass:".list-senth"},[t._v(t._s(e.Name))])],1):t._e(),null!=e.Account?l("label",{staticClass:"checkbox .list-senth"},[l("checkbox",{attrs:{value:e.Account.ID+e.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"HgX-12-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u+"-"+r}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.Name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()],1),t._l(e.children,function(s,h){return null!=e.children?l("block",{key:h},[l("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[null==s.Account?l("label",[l("uni-icon",{attrs:{type:"home",color:"#8f8f94",mpcomid:"TMg-13-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u+"-"+r+"-"+h}}),l("text",{staticClass:"list-eight"},[t._v(t._s(s.Name))])],1):t._e(),null!=s.Account?l("label",{staticClass:"checkbox list-eight"},[l("checkbox",{attrs:{value:s.Account.ID+s.Name,checked:!1}}),l("uni-icon",{attrs:{type:"contact",color:"#8f8f94",mpcomid:"1FA-14-"+c+"-"+n+"-"+o+"-"+i+"-"+a+"-"+u+"-"+r+"-"+h}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.Name)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()],1)]):t._e()})],2):t._e()})],2):t._e()})],2):t._e()})],2):t._e()})],2):t._e()})],2):t._e()})],2)}))],1)])])};c._withStripped=!0;var s={render:c,staticRenderFns:[]};e.a=s}},[169]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/selectPeopleMulti.js.map