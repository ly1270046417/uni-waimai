require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd"],{219:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27);r(t(25));var o=r(t(220));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},220:function(e,n,t){"use strict";t.r(n);var r=t(221),o=t(223);for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);t(225);var u,i=t(78),c=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);c.options.__file="uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd.vue",n["default"]=c.exports},221:function(e,n,t){"use strict";t.r(n);var r=t(222);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},222:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return s})),t.d(n,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,358))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,367))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,383))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusOldPassword=!1},e.e1=function(n){e.focusNewPassword=!1},e.e2=function(n){e.focusNewPassword2=!1})},s=!1,u=[];o._withStripped=!0},223:function(e,n,t){"use strict";t.r(n);var r=t(224),o=t.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(s);n["default"]=o.a},224:function(e,n,t){"use strict";(function(e,r){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=o(t(11)),u=o(t(160)),i=o(t(202));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,s.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=e.importObject("uni-id-co",{customUI:!0}),f={mixins:[u.default],data:function(){return{focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:a({oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]}},i.default.getPwdRules("newPassword","newPassword2")),logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(n){var t=e.formData,o=t.oldPassword,s=t.newPassword;d.updatePwd({oldPassword:o,newPassword:s}).then((function(e){r.removeStorageSync("uni_id_token"),r.setStorageSync("uni_id_token_expired",0),r.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((function(e){r.showModal({content:e.message,showCancel:!1})}))})).catch((function(n){var t=n[0].key;t=t.replace(t[0],t[0].toUpperCase()),e["focus"+t]=!0}))}}};n.default=f}).call(this,t(27)["default"],t(2)["default"])},225:function(e,n,t){"use strict";t.r(n);var r=t(226),o=t.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(s);n["default"]=o.a},226:function(e,n,t){}},[[219,"common/runtime","common/vendor","uni_modules/uni-id-pages/pages/common/vendor"]]]);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd.js.map