(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/settings/settings"],{120:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26),t(27);o(t(25));var i=o(t(121));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},121:function(e,n,t){"use strict";t.r(n);var o=t(122),i=t(124);for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(s);t(127);var c,a=t(78),r=Object(a["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],c);r.options.__file="pages/ucenter/settings/settings.vue",n["default"]=r.exports},122:function(e,n,t){"use strict";t.r(n);var o=t(123);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},123:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return s})),t.d(n,"components",(function(){return o}));try{o={uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,317))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,324))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$t("settings.userInfo")),o=e.userInfo.mobile?e.$t("settings.changePassword"):null,i=e.supportMode.includes("fingerPrint"),s=i?e.$t("settings.fingerPrint"):null,c=e.supportMode.includes("facial"),a=c?e.$t("settings.facial"):null,r=e.i18nEnable?e.$t("settings.changeLanguage"):null,u=e.hasLogin?e.$t("settings.logOut"):null,l=e.hasLogin?null:e.$t("settings.login");e.$mp.data=Object.assign({},{$root:{m0:t,m1:o,g0:i,m2:s,g1:c,m3:a,m4:r,m5:u,m6:l}})},s=!1,c=[];i._withStripped=!0},124:function(e,n,t){"use strict";t.r(n);var o=t(125),i=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=i.a},125:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t(28)),s=o(t(30)),c=o(t(126)),a=t(107),r={data:function(){return{pushServer:c.default,supportMode:[],pushIsOn:"wait",currentLanguage:"",userInfo:{}}},computed:{hasLogin:function(){return a.store.hasLogin},i18nEnable:function(){return getApp().globalData.config.i18n.enable}},onLoad:function(){var n=this;this.currentLanguage="en"==e.getStorageSync("CURRENT_LANG")?"English":"简体中文",e.setNavigationBarTitle({title:this.$t("settings.navigationBarTitle")}),e.checkIsSupportSoterAuthentication({success:function(e){n.supportMode=e.supportMode},fail:function(e){console.log(e)}})},onShow:function(){},methods:{changeLoginState:function(){var n=this;return(0,s.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.hasLogin){t.next=5;break}return t.next=3,a.mutations.logout();case 3:t.next=6;break;case 5:e.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});case 6:case"end":return t.stop()}}),t)})))()},startSoterAuthentication:function(n){var t=this;console.log(n);var o={fingerPrint:this.$t("settings.fingerPrint"),facial:this.$t("settings.facial")}[n];this.checkIsSoterEnrolledInDevice({checkAuthMode:n,title:o}).then((function(){console.log(n,o),e.startSoterAuthentication({requestAuthModes:[n],challenge:"123456",authContent:t.$t("settings.please")+" "+"".concat(o),complete:function(e){console.log(e)},success:function(n){if(console.log(n),0==n.errCode)return e.showToast({title:"".concat(o)+t.$t("settings.successText"),icon:"none"});e.showToast({title:t.$t("settings.failTip"),icon:"none"})},fail:function(n){console.log(n),console.log("认证失败:".concat(n.errCode)),e.showToast({title:t.$t("settings.authFailed"),icon:"none"})}})}))},checkIsSoterEnrolledInDevice:function(n){var t=this,o=n.checkAuthMode,i=n.title;return new Promise((function(n,s){e.checkIsSoterEnrolledInDevice({checkAuthMode:o,success:function(o){if(console.log(o),o.isEnrolled)return n(o);e.showToast({title:t.$t("settings.deviceNoOpen")+"".concat(i),icon:"none"}),s(o)},fail:function(n){console.log(n),e.showToast({title:"".concat(i)+t.$t("settings.fail"),icon:"none"}),s(n)}})}))},clearTmp:function(){var n=this;e.showLoading({title:this.$t("settings.clearing"),mask:!0}),e.getSavedFileList({success:function(t){t.fileList.length>0?e.removeSavedFile({filePath:t.fileList[0].filePath,complete:function(t){console.log(t),e.hideLoading(),e.showToast({title:n.$t("settings.clearedSuccessed"),icon:"none"})}}):(e.hideLoading(),e.showToast({title:n.$t("settings.clearedSuccessed"),icon:"none"}))},complete:function(e){console.log(e)}})},changeLanguage:function(){var n=this;console.log("语言切换"),e.showActionSheet({itemList:["English","简体中文"],success:function(t){console.log(t.tapIndex);var o=e.getStorageSync("CURRENT_LANG");if(!t.tapIndex&&"zh-Hans"==o||t.tapIndex&&"en"==o){var i=getApp().globalData;o=i.locale="en"===o?"zh-Hans":"en",e.setStorageSync("CURRENT_LANG",o),getApp().globalData.$i18n.locale=o,n.currentLanguage=t.tapIndex?"简体中文":"English",e.setLocale&&e.setLocale(o),e.reLaunch({url:"/pages/list/list",complete:function(){e.$emit("changeLanguage",o)}})}},fail:function(){},complete:function(){}})}}};n.default=r}).call(this,t(2)["default"])},127:function(e,n,t){"use strict";t.r(n);var o=t(128),i=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=i.a},128:function(e,n,t){}},[[120,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/ucenter/settings/settings.js.map