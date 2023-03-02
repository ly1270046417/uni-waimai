<template>
	<view class="content">
		<view class="width95 title">{{title}}</view>
		
		<!-- 轮播图 -->
		<view class="banner-image">
<!--			 <image class="banner-image" src="static/banner.png" height="220" mode="dot" border-radius="20"></image>-->
			<u-swiper :list="bannerImgList" height="220" mode="dot" border-radius="20" name="url" effect3d="ture"></u-swiper>
		</view>  
		
		<!-- 搜索框 -->
		<navigator class="width95" url="search">
			<view> 
				<input class="input"  placeholder="输入店铺" placeholder-style="color:#b8b8b8" /> 
			</view>
		</navigator>
		
		<!-- 选项 -->
		<view class="width95">
			<view class="width40 d-row d-jc-between">
				<view :class="{active: activeTabIndex == index}"
					v-for="(item,index) in activeList" :key="index" @tap="handleTab(index)">
					<view class="title-name">{{ item.title }}</view>
					<view :class="{titleBottom: activeTabIndex == index}" ></view>
				</view>
			</view>
		</view>
		
		<!-- 店铺 -->
		<view class="width90 d-row d-jc-around" style="margin-top: 30rpx;height: 180rpx;"
			v-for="(item,index) in sList" :key="index" @tap="intoDetails(item)">
			<view class="s-head d-clo d-jc-centen d-ai-centen "><image class="s-head-img" :src="item.headImg"></image></view>
			<view class="s-detail d-clo d-jc-around">
				<view class="font-bold font32">{{item.name}}</view>
				<view class="font28 gray3">月销{{item.yx}}</view>
				<view class="d-row d-jc-between gray3">
					<view>起送 ¥{{item.qs}} | 配送 ¥{{item.ps}}</view>
					<view>{{item.sj}}分钟 {{item.jl}}m</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '中午好,午饭时间到了!',
				activeList: [
					{title: '距离最近', value: 'distance'},
					{title: '销量最高', value: 'sales'},
				],
				activeTabIndex: '',
				bannerImgList: [
				],
				sList:[
					{
						id:'',
						headImg:'',
						// headImg:'/static/businessicon/th.png',
						name:'',
						yx:'',
						qs:'',
						ps:'4',
						sj:'40',
						jl:'800'
					},
					{
						id:'',
						headImg:'',
						// headImg:'/static/businessicon/th(1).png',
						name:'',
						yx:'',
						qs:'',
						ps:'4',
						sj:'40',
						jl:'800'
					},
					{
						id:'',
						headImg:'',
									// headImg:'/static/businessicon/th(2).png',
						name:'',
						yx:'',
						qs:'',
						ps:'4',
						sj:'40',
						jl:'800'
					}
				]
			}
		},
		onLoad() {
			this.activeTabIndex = 0

		},
    onShow(){
      this.initIndex()
      this.loadBannerImage()
      this.loadIndexImage()
    },
		watch: {
			// watch 监听器,监听到数据发生变化时执行
			activeTabIndex: async function(val) {
				const type = this.activeList[val].value
				await this.getIndexList(type)
			}
		},
		methods: {
			handleTab(index) {
				this.activeTabIndex = index
			},
			async getIndexList(type){
				console.log("获取"+type+"数据列表")
			},
			intoDetails(item){
				uni.navigateTo({
					url:'../../page-store/store/index?id='+item.id+'&name='+item.name+"&headImg="+item.headImg+"&user_id="+item.user_id,
					animationType: 'pop-in',
					animationDuration: 2000
				})
			},
      initIndex() {
        uniCloud.callFunction({  //调用云端函数，把图片地址写入表
          name: 'initIndex',  //云函数名称
          data: {				//提交给云端的数据
            index: 'index',

          },
          success: (res) => {
            console.log(res)
            let dataList = res.result.data;
            for (let i in dataList){
              this.sList[i].id=dataList[i]._id
              this.sList[i].name=dataList[i].store_name
              this.sList[i].yx=dataList[i].month_sell_count
              this.sList[i].qs=dataList[i].total_sell_count

            }
          },
          fail: (err) => {
            console.log(err)
          },
          complete: () => {

          }
        })
      },

      loadBannerImage(){

        uniCloud.callFunction({  //调用云端函数，把图片地址写入表
          name: 'dowloadImage',  //云函数名称
          data: {				//提交给云端的数据
            category_id: '63f80c4228064aa7a87149bc',
          },
          success: (res) => {
            console.log(res)
            // let dataList = res.result.data;
           this.bannerImgList = res.result.data;
            // for (let i in dataList){
            //   this.bannerImgList[i].headImg=dataList[i]
            // }

          },
          fail: (err) => {
            console.log(err)
          },
          complete: () => {

          }
        })
      },



      loadIndexImage(){

        uniCloud.callFunction({  //调用云端函数，把图片地址写入表
          name: 'dowloadImage',  //云函数名称
          data: {				//提交给云端的数据
            category_id: '63f46c2ae766bb8309f287d5',
          },
          success: (res) => {
            console.log(res)
            let dataList = res.result.data;
            for (let i in dataList){
              this.sList[i].headImg=dataList[i].url
            }
          },
          fail: (err) => {
            console.log(err)
          },
          complete: () => {

          }
        })
      }
		},

  }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title{
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 10rpx;
	}
	.banner-image{
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		width: 95%;
		border-radius:0 0 50rpx 50rpx;
	}
	.input{
		background-color: #f7f7f7;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.title-name{
		padding: 15rpx 0;
	}
	.active {
		font-weight: bold;
		color: #007AFF;
	}
	.titleBottom{
		margin: 0 auto;
		width: 60%;
		border-bottom: 5rpx solid #007AFF;
	}
	
	.s-head{
		flex: 1;
	}
	.s-head-img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}
	.s-detail{
		flex: 3;
	}
</style>
