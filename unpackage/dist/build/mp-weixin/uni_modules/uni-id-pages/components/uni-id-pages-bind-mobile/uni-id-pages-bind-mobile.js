(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile"],{"2db1":function(e,n,t){"use strict";t.r(n);var u=t("3df9"),i=t("42b2");for(var c in i)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(c);t("ed9c");var o=t("f0c5"),r=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"0c5ef59a",null,!1,u["a"],void 0);n["default"]=r.exports},"3df9":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return u}));var u={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"8022"))}},i=function(){var e=this.$createElement;this._self._c},c=[]},"42b2":function(e,n,t){"use strict";t.r(n);var u=t("a24f"),i=t.n(u);for(var c in u)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(c);n["default"]=i.a},a24f:function(e,n,t){"use strict";(function(e,u,i){var c=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("2eee")),r=c(t("c973")),a=e.database(),s=(a.collection("uni-id-users"),e.importObject("uni-id-co")),f={emits:["success"],computed:{},data:function(){return{}},methods:{beforeGetphonenumber:function(){return(0,r.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n,t){u.showLoading({mask:!0}),i.checkSession({success:function(){n(),u.hideLoading()},fail:function(){i.login({success:function(i){var c=i.code;e.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:c}).then((function(e){n()})).catch((function(e){console.log(e),t()})).finally((function(e){u.hideLoading()}))},fail:function(e){console.error(e),t()}})}})}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},bindMobileByMpWeixin:function(e){var n=this;return(0,r.default)(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("getPhoneNumber:ok"!=e.detail.errMsg){t.next=6;break}return t.next=3,n.beforeGetphonenumber();case 3:s.bindMobileByMpWeixin(e.detail).then((function(e){n.$emit("success")})).finally((function(e){n.closeMe()})),t.next=7;break;case 6:n.closeMe();case 7:case"end":return t.stop()}}),t)})))()},open:function(){var e=this;return(0,r.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$refs.popup.open();case 1:case"end":return n.stop()}}),n)})))()},closeMe:function(e){this.$refs.popup.close()}}};n.default=f}).call(this,t("a9ff")["default"],t("543d")["default"],t("bc2e")["default"])},c158:function(e,n,t){},ed9c:function(e,n,t){"use strict";var u=t("c158"),i=t.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2db1"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component']]
]);