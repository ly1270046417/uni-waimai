<template>


	<view  v-if="isLog"  :key="2" class="width95 margin-center ">

		<!-- 商品列表1 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-30">
			<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2">
				<view class="d-row">
					<view class="d-clo d-ai-centen">  <image style="width: 80rpx;height: 80rpx;" src="../../static/logo.png" ></image> </view>
					<view class="d-clo d-jc-between padding-left-10"> <h3>西瓜</h3> </view>
				</view>
				<view class="d-clo d-ai-end">
					<view class="padding-bottom-20">等待支付</view>
					<view>
						<label>剩余 <label class="colorBlue padding-left-10" > 09:15 </label> </label>
					</view>
				</view>
			</view>


			<view class="d-row d-jc-between d-ai-centen padding-10 font30 padding-bottom-10">
				<view class="font22">草莓 + 西瓜</view>
				<view>¥ <label class="font-bold font36">15</label></view>
			</view>

			<view class="d-row d-jc-between d-ai-centen padding-10 padding-top-30">
				<view></view>
				<view>
					<button plain type="primary" size="mini" @tap="go('pay')">
						去支付
					</button>
				</view>
			</view>

		</view>


		<!-- 商品列表2 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-30">
			<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2">
				<view class="d-row">
					<view class="d-clo d-ai-centen">  <image style="width: 80rpx;height: 80rpx;" src="../../static/logo.png" ></image> </view>
					<view class="d-clo d-jc-between padding-left-10">  <h3>西瓜</h3>
						<label class="font20 gray3">15小时 2分钟前</label>
					</view>
				</view>
				<view class="d-clo d-ai-end">
					<view class="padding-bottom-20">已取消</view>
					<view>
						<label class="font24 gray3">订单超时未支付</label>
					</view>
				</view>
			</view>


			<view class="d-row d-jc-between d-ai-centen padding-10 font30 padding-bottom-10">
				<view class="font22">益杯百香果 + 原味珍珠奶茶</view>
				<view>¥ <label class="font-bold font36">15</label></view>
			</view>

			<view class="d-row d-jc-between d-ai-centen padding-10 padding-top-30">
				<view></view>
				<view>
					<button plain type="primary" size="mini" @tap="go('one')">
						再来一单
					</button>
				</view>
			</view>

		</view>


		<!-- 商品列表3 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-30">
			<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2">
				<view class="d-row">
					<view class="d-clo d-ai-centen">  <image style="width: 80rpx;height: 80rpx;" src="../../static/logo.png" ></image> </view>
					<view class="d-clo d-jc-between padding-left-10">  <h3>西瓜</h3>
						<label class="font20 gray3">15小时 2分钟前</label>
					</view>
				</view>
				<view class="d-clo d-ai-end">
					<view class="padding-bottom-20">已送达</view>
					<view>
						<label class="font24 gray3"></label>
					</view>
				</view>
			</view>


			<view class="d-row d-jc-between d-ai-centen padding-10 font30 padding-bottom-10">
				<view class="font22">益杯百香果 + 原味珍珠奶茶</view>
				<view>¥ <label class="font-bold font36">15</label></view>
			</view>

		</view>
	</view>
  <view  v-else :key="1" class="content width100 height100" >
    <button class="padding-20 width80 d-ai-centen" type="primary" @click="toLogin" >立即登录</button>
    <button class="padding-20 width80 d-ai-centen" type="default" @click="toLogin" >手机登录</button>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        isLog : false
			}
		},
    onLoad(){

    },

    onShow(){
      console.log('重载前')
      // uni.switchTab({url: 'pages/order/order-list'})
      this.isLogin()
      // // uni.switchTab({url: 'pages/order/order-list'})
      console.log('重载后')
    },
		methods: {
			go(type){
				if('one'==type){
					console.log("one--------")
					uni.navigateTo({
						url: '../store/index',
						animationType: 'pop-in',
						animationDuration: 2000
					})
				}else if('pay'==type){
					console.log("pay--------")
					uni.navigateTo({
						url: '../store/pay',
						animationType: 'pop-in',
						animationDuration: 2000
					})
				}
			},
      isLogin(){
        let uid = uniCloud.getCurrentUserInfo().uid;
        if (uid!=null){
          this.isLog=true
          uni.redirectTo({
            url: 'pages/order/order-list'
          });
        }else {
          this.isLog=false
        }
        console.log(this.isLog)
      },
      toLogin(){
        uni.navigateTo({
          url: '../../uni_modules/uni-id-pages/pages/login/login-withoutpwd',
          animationType: 'pop-in',
          animationDuration: 2000
        })
      }
		}
	}
</script>

<style>
uni-page-body,html,body,uni-page-head,uni-page{
  height: 100%;
  background-color: #f7f7f7;
}
/*uni-page-head,uni-page,page{*/
/*	background-color: #f7f7f7;*/
/*}*/

.bgColor{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #bbbbf3;
	z-index: -1;
}
</style>
