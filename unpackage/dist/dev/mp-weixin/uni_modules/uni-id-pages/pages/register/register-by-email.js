require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-by-email"],{227:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26),t(27);r(t(25));var i=r(t(228));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},228:function(e,n,t){"use strict";t.r(n);var r=t(229),i=t(231);for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t(233);var u,s=t(78),a=Object(s["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);a.options.__file="uni_modules/uni-id-pages/pages/register/register-by-email.vue",n["default"]=a.exports},229:function(e,n,t){"use strict";t.r(n);var r=t(230);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},230:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,358))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,367))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,383))},uniIdPagesEmailForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form").then(t.bind(null,458))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,423))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusEmail=!1},e.e1=function(n){e.focusNickname=!1},e.e2=function(n){e.focusPassword=!1},e.e3=function(n){e.focusPassword2=!1})},o=!1,u=[];i._withStripped=!0},231:function(e,n,t){"use strict";t.r(n);var r=t(232),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},232:function(e,n,t){"use strict";(function(e,r){var i=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t(11)),u=(i(t(201)),i(t(160))),s=(i(t(75)),i(t(202)));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,o.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=e.importObject("uni-id-co"),l={mixins:[u.default],data:function(){return{formData:{email:"",nickname:"",password:"",password2:"",code:""},rules:c(c({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(e,n,t,r){return(/^1\d{10}$/.test(n)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(n))&&r("昵称不能是：手机号或邮箱"),/^\d+$/.test(n)&&r("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(n)&&r("昵称不能包含中文"),!0}}],label:"昵称"}},s.default.getPwdRules()),{},{code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"邮箱验证码不正确"}]}}),focusEmail:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;this.$refs.form.validate().then((function(n){if(e.needAgreements&&!e.agree)return e.$refs.agreements.popup((function(){e.submitForm(n)}));e.submitForm(n)})).catch((function(n){var t=n[0].key;t=t.replace(t[0],t[0].toUpperCase()),e["focus"+t]=!0}))},submitForm:function(e){f.registerUserByEmail(this.formData).then((function(e){r.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(e){}})})).catch((function(e){console.log(e.message)}))},navigateBack:function(){r.navigateBack()},toLogin:function(){r.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByUserName:function(){r.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register"})}}};n.default=l}).call(this,t(27)["default"],t(2)["default"])},233:function(e,n,t){"use strict";t.r(n);var r=t(234),i=t.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=i.a},234:function(e,n,t){}},[[227,"common/runtime","common/vendor","uni_modules/uni-id-pages/pages/common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-id-pages/pages/register/register-by-email.js.map