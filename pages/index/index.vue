<template>
	<view style="background-color: #F7F9FA;">
		<view class="QS-tabs-box">
			<QSTabs 
			ref="tabs" 
			:tabs="tabs" 
			animationMode="line1" 
			animationLineWidth="64"
			:current="current" 
			@change="change"
			activeColor="#36C892" 
			lineColor="#36C892"
			fontSize="32"
			:min-width="375"
			:height="88"
			:duration="0.3"
			>
			</QSTabs>
		</view>
		<swiper 
		:style="{'height': swiperHeight,}" 
		:current="swiperCurrent" 
		@change="swiperChange"
		@transition="transition"
		@animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #F7F9FA;margin-top:-16rpx;" >
					<view class="scroll-items" >
						<view class="scroll-item-text-box">
							 <view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;justify-content:space-between;">
								<view class="flex-item" style="margin-bottom:32rpx;">
									<Card>
										<view class="ornament"></view>
										<view class="card-title">
											<text>19年度10月度考试</text>
										</view>
										<view class="card-time">
											<text>2019-10-22 16:04</text>
										</view>
										<view class="card-mark">
											<text >80.0</text>
										</view>
										<button class="card-button card-button-view">查看</button>
									</Card>
								</view>
								
							 </view>
							 
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" >
					<view class="scroll-items" style="background-color: #F7F9FA;">
						<view class="scroll-item-text-box">
							 <view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
								<view class="flex-item">
									<Card>1</Card>
								</view>
								<view class="flex-item">
									<Card>2</Card>
								</view>
								
							 </view>
							 
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Card from '@/components/Card.vue'
	import QSTabs from '@/components/QS-tabs/QS-tabs.vue';
	// import {uniBadge} from '@dcloudio/uni-ui'
	const Sys = uni.getSystemInfoSync();
	const wH = Sys.windowHeight;
	
	const swiperHeight = `${(wH - 44-8)*2}rpx`;
	console.log(swiperHeight)
	export default {
		components: {
			QSTabs,
			Card
		},
		data() {
			return {
				tabs:["我的考试","知识库"],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				swiperHeight: swiperHeight
			}
		},
		methods: {
			change(index) {
				console.log('change',index)
				this.swiperCurrent = index;
			},
			swiperChange({detail:{current,source}}) {
				console.log('swiperChange',current,source);
				this.current = current;
				this.swiperCurrent = current;
			},
			transition({ detail: { dx } }) {
				console.log('transition')
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({detail: { current }}) {
				console.log('animationfinish')
				this.$refs.tabs.setFinishCurrent(current);
				
				
			}
		}
	}
</script>

<style scoped>
	.QS-tabs-box{
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: white;
		margin-bottom:16rpx
	}
	.swiper-item{
		background-color: #fff;
	}
	.scroll-items{
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
	}
	.scroll-item{
		margin-top: 15rpx;
		padding: 25rpx;
		background-color: white;
		border-radius: 8rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		border: 1px solid #f8f8f8;
	}
	.scroll-item-image-box{
		flex-grow: 0;
	}
	.scroll-item-text-box{
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: bold;
		
	}
	.scroll-item-image{
		border-radius: 4rpx;
		width: 180rpx;
		height: 150rpx;
	}
	.ornament{
		height: 64rpx;
		background-color: #35DC9E;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		border-bottom-left-radius: 32rpx;
		border-bottom-right-radius: 32rpx;
	}
	.card-title{
		margin: 32rpx 0 4rpx;
		text-align: center;
	}
	
	.card-title text{
		font-family: PingFangSC-Semibold;
		font-size: 16px;
		color: #FFFFFF;
		text-align: center;
	}
	.card-time {
		margin:4rpx 0 6rpx ;
		text-align: center;
	}
	.card-time text{
		opacity: 0.8;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		text-align: center;
		line-height: 36rpx;
	}
	.card-mark {
		text-align: center;
		height:76rpx;
		line-height: 76rpx;
		margin:12rpx auto 20rpx;
	}
	.card-mark text {
		font-family: DINCond-Black;
		font-size: 32px;
		color: #FFFFFF;
		text-align: center;
	}
	.card-button{
		width: 224rpx;
		line-height: 60rpx;
		height: 64rpx;
		border-radius:32rpx;
		background-color: transparent;
		border:2px solid #ffffff;
	}
	.card-button-view {
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #FFFFFF;
		text-align: center;
	}
</style>
