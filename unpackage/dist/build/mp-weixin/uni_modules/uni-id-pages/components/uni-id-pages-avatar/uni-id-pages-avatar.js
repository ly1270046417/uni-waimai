(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar"],{2939:function(e,n,t){"use strict";t.r(n);var a=t("a23d"),u=t("d10e");for(var r in u)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(r);t("34ba");var o=t("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=i.exports},"2c37":function(e,n,t){},"34ba":function(e,n,t){"use strict";var a=t("2c37"),u=t.n(a);u.a},"90af":function(e,n,t){"use strict";(function(e,a,u){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("2eee")),i=r(t("c973")),c=t("59e3"),s={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){return(0,i.default)(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{hasLogin:function(){return c.store.hasLogin},userInfo:function(){return c.store.userInfo},avatar_file:function(){return c.store.userInfo.avatar_file}},methods:{setAvatarFile:function(e){c.mutations.updateUserInfo({avatar_file:e})},bindchooseavatar:function(n){var t=this;return(0,i.default)(o.default.mark((function r(){var i,c,s,f,l,d;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=n.detail.avatarUrl,c={extname:i.split(".")[i.split(".").length-1],name:"",url:i},r.next=4,new Promise((function(n){e.cropImage({src:i,cropScale:"1:1",success:function(e){n(e.tempFilePath)},fail:function(e){console.error(e),a.showModal({content:"wx.cropImage "+e.errMsg,showCancel:!1,confirmText:"跳过裁剪",complete:function(){n(i)}})}})}));case 4:return s=r.sent,f=t.userInfo._id+""+Date.now(),c.name=f,r.prev=7,a.showLoading({title:"更新中",mask:!0}),r.next=11,u.uploadFile({filePath:s,cloudPath:f,fileType:"image"});case 11:l=r.sent,d=l.fileID,c.url=d,a.hideLoading(),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](7),console.error(r.t0);case 20:t.setAvatarFile(c);case 21:case"end":return r.stop()}}),r,null,[[7,17]])})))()},uploadAvatarImg:function(e){return!1}}};n.default=s}).call(this,t("bc2e")["default"],t("543d")["default"],t("a9ff")["default"])},a23d:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a}));var a={cloudImage:function(){return t.e("uni_modules/uni-id-pages/components/cloud-image/cloud-image").then(t.bind(null,"f802"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"4d2b"))}},u=function(){var e=this.$createElement;this._self._c},r=[]},d10e:function(e,n,t){"use strict";t.r(n);var a=t("90af"),u=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2939"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar-create-component']]
]);