(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/cloud-image/cloud-image"],{"24fd":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},4184:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(n){var e=this;n&&"cloud://"==n.substring(0,8)?t.getTempFileURL({fileList:[n]}).then((function(t){e.cSrc=t.fileList[0].tempFileURL})):this.cSrc=n},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};n.default=e}).call(this,e("a9ff")["default"])},bdcb:function(t,n,e){"use strict";e.r(n);var i=e("4184"),u=e.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=u.a},f802:function(t,n,e){"use strict";e.r(n);var i=e("24fd"),u=e("bdcb");for(var c in u)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(c);var r=e("f0c5"),f=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component',
    {
        'uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f802"))
        })
    },
    [['uni_modules/uni-id-pages/components/cloud-image/cloud-image-create-component']]
]);
