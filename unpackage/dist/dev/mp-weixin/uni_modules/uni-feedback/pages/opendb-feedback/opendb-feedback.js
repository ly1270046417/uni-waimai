require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"],{137:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27);r(t(25));var o=r(t(138));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},138:function(e,n,t){"use strict";t.r(n);var r=t(139),o=t(141);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(144);var u,c=t(78),a=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);a.options.__file="uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback.vue",n["default"]=a.exports},139:function(e,n,t){"use strict";t.r(n);var r=t(140);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},140:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,358))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,367))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,374))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,383))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},i=!1,u=[];o._withStripped=!0},141:function(e,n,t){"use strict";t.r(n);var r=t(142),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},142:function(e,n,t){"use strict";(function(e,r){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t(11)),u=t(143);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}console.log(u.validator);var s=e.database(),f="opendb-feedback";function d(e){var n={};for(var t in u.validator)e.indexOf(t)>-1&&(n[t]=u.validator[t]);return n}var l={data:function(){var e={content:"",imgs:[],contact:"",mobile:""};return{formData:e,formOptions:{},rules:a({},d(Object.keys(e)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;r.showLoading({mask:!0}),this.$refs.form.validate().then((function(n){e.submitForm(n)})).catch((function(){r.hideLoading()}))},submitForm:function(e){var n=this;s.collection(f).add(e).then((function(e){r.showToast({icon:"none",title:"提交成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return r.navigateBack()}),500)})).catch((function(e){r.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){r.hideLoading()}))}}};n.default=l}).call(this,t(27)["default"],t(2)["default"])},144:function(e,n,t){"use strict";t.r(n);var r=t(145),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},145:function(e,n,t){}},[[137,"common/runtime","common/vendor","uni_modules/uni-feedback/common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback.js.map