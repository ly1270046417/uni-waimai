(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page-store/store/index"],{"20c9":function(t,e,n){"use strict";var i=n("af25"),o=n.n(i);o.a},"28b6":function(t,e,n){"use strict";n.r(e);var i=n("4115"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},4115:function(t,e,n){"use strict";(function(t,i){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("2eee")),a=o(n("9523")),u=o(n("c973")),c=n("26cb");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={data:function(){return{titleStyle:{float:"left"},cancelStyle:{float:"right"},confirmStyle:{float:"left",width:"200rpx"},collection:!1,addShopTF:!0,number:0,form:{id:"",name:"",user_id:"",headImg:"",phone:"18637815946",time:"10:00~22:00",address:"深证市罗湖区翠竹路1052号102室",type:"水果生鲜",minPrice:"100"},activeList:[{title:"点餐",value:"d"},{title:"商家",value:"s"}],shopBarTitleList:[],downloadUrlParams:{type:"commodity",commodityName:"apple.png"},downloadUrl:"",activeTabIndex:"",shopBarTitleIndex:"",showShopCarModel:!1,showCartEntry:!1,shopDetailListTile:"",shopDetailList:[],shopCarTip:"未选购商品",cart:[]}},onShow:function(){},onLoad:function(t){this.activeTabIndex=0,this.shopBarTitleIndex=0,console.log(JSON.stringify(t)+"详情页面接收--"+t.id),this.form.id=t.id,this.form.name=t.name,this.form.headImg=t.headImg,this.form.user_id=t.user_id,this.loadStoreBar()},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../index/search",animationType:"pop-in",animationDuration:2e3})},watch:{activeTabIndex:function(){var t=(0,u.default)(r.default.mark((function t(e){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.activeList[e].value,t.next=3,this.getForm(n);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),shopBarTitleIndex:function(){var t=(0,u.default)(r.default.mark((function t(e){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.shopDetailListTile=this.shopBarTitleList[e].title,n=this.shopBarTitleList[e].value,t.next=4,this.getShopBarTitleList(n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},computed:l(l({},(0,c.mapState)(["orderType","address","store"])),{},{goTitle:function(){return this.disabledPay?"¥"+this.form.minPrice+"起送":"去结算"},goodCartNum:function(){var t=this;return function(e){return t.cart.reduce((function(t,n){return n.id===e?t+n.number:t}),0)}},getCartGoodsNumber:function(){return this.cart.reduce((function(t,e){return t+e.number}),0)},getCartGoodsPrice:function(){return this.cart.reduce((function(t,e){return t+e.number*e.price}),0)},disabledPay:function(){return this.getCartGoodsPrice<this.form.minPrice},spread:function(){return parseFloat((this.form.minPrice-this.getCartGoodsPrice).toFixed(2))}}),methods:{handleTab:function(t){this.activeTabIndex=t},shopBarTitleClick:function(t){this.shopBarTitleIndex=t,this.shopDetailListTile=this.shopBarTitleList[t].title},getForm:function(t){return(0,u.default)(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("获取"+t+"表单");case 1:case"end":return e.stop()}}),e)})))()},getShopBarTitleList:function(t){return(0,u.default)(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("获取"+t+"商品种类");case 1:case"end":return e.stop()}}),e)})))()},loadStoreBar:function(){var t=this;i.callFunction({name:"initIndex",data:{index:"storeBar",parent_id:this.form.id},success:function(e){console.log(e),t.shopBarTitleList=e.result.data,t.loadCommodityList()},fail:function(t){console.log(t)},complete:function(){}})},loadCommodityList:function(){var t=this;i.callFunction({name:"initIndex",data:{category_id:this.shopBarTitleList[this.shopBarTitleIndex]._id},success:function(e){console.log(e),t.shopDetailList=e.result.data,t.loadCommodityImage()},fail:function(t){console.log(t)},complete:function(){}})},loadCommodityImage:function(){var t=this;i.callFunction({name:"dowloadImage",data:{category_id:"63f46c4be1a35c8785e51856"},success:function(e){console.log(e);var n=e.result.data;for(var i in n)t.shopDetailList[i].goods_thumb=n[i].url},fail:function(t){console.log(t)},complete:function(){}})},collectionClick:function(){this.collection=!this.collection,this.collection?this.$refs.uToast.show({title:"收藏成功",type:"success",position:"top",duration:"500"}):this.$refs.uToast.show({title:"取消收藏",type:"warning",position:"top",duration:"500"})},toReportClick:function(){this.$refs.uToast.show({title:"举报成功",type:"success",position:"center",duration:"500"})},addShopClick:function(t,e){var n=this.cart.findIndex((function(e){return e.id===t.id}));n>-1?this.cart[n].number+=e:this.cart.push({id:t.id,name:t.name,price:t.price,number:e,type:t.type})},reducShopClick:function(t){var e=this.cart.findIndex((function(e){return e.id===t.id}));this.cart[e].number-=1,this.cart[e].number<=0&&this.cart.splice(e,1),this.getCartGoodsNumber},goPay:function(){t.showLoading({title:"加载中"}),t.setStorageSync("cart",JSON.parse(JSON.stringify(this.cart))),t.navigateTo({url:"./pay",animationType:"pop-in",animationDuration:2e3}),t.hideLoading()},showShopCarModelClick:function(){this.showShopCarModel=!this.showShopCarModel&&this.getCartGoodsNumber>0},emptyClick:function(){this.showCartEntry=!0},cartEntry:function(){console.log("实际清空购物车操作-----"),this.cart=[],this.showCartEntry=!1,this.showShopCarModel=!1},noCartEntry:function(){this.showCartEntry=!1}}};e.default=d}).call(this,n("543d")["default"],n("a9ff")["default"])},4497:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("b701"),n("a9ff");i(n("66fd"));var o=i(n("675f"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"675f":function(t,e,n){"use strict";n.r(e);var i=n("8d94"),o=n("28b6");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("20c9");var a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},"8d94":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"55c1"))},uPopup:function(){return n.e("node-modules/uview-ui/components/u-popup/u-popup").then(n.bind(null,"1ee5"))},uModal:function(){return n.e("node-modules/uview-ui/components/u-modal/u-modal").then(n.bind(null,"3733"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"8dc3"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,0==t.activeTabIndex?t.__map(t.shopDetailList,(function(e,n){var i=t.__get_orig(e),o=t.goodCartNum(e.id),r=t.goodCartNum(e.id),a=t.goodCartNum(e.id);return{$orig:i,m0:o,m1:r,m2:a}})):null),i=0==t.activeTabIndex?t.__map(t.cart,(function(e,n){var i=t.__get_orig(e),o=t.goodCartNum(e.id),r=t.goodCartNum(e.id),a=t.goodCartNum(e.id);return{$orig:i,m3:o,m4:r,m5:a}})):null;t.$mp.data=Object.assign({},{$root:{l0:n,l1:i}})},r=[]},af25:function(t,e,n){}},[["4497","common/runtime","common/vendor"]]]);