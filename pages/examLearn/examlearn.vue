<template>
	<view style="background-color: #F7F9FA;">
		<view class="QS-tabs-box">
			<QSTabs ref="tabs" :tabs="qsTabs.tabs" animationMode="line1" animationLineWidth="64" :current="qsTabs.current"
			 @change="tabsChange" activeColor="#36C892" lineColor="#36C892" fontSize="32" :min-width="375" :height="88"
			 :duration="0.5">
			</QSTabs>
		</view>
		<swiper :style="{'height': swiper.height,}" :current="swiper.current" @change="swiperChange" @transition="transition"
		 @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;background-color: #F7F9FA;margin-top:-16rpx;">
					<view class="scroll-items">
						<view class="scroll-item-text-box">
							<view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;justify-content:space-between;">

								<view class="flex-item" style="margin-bottom:32rpx;" v-for="item in examList" :key="item.examId">
									<Card>
										<view class="ornament"></view>
										<view class="card-title">
											<text>{{item.examName}}</text>
										</view>
										<view class="card-time">
											<text>{{item.durationStart}}</text>
										</view>
										<view class="card-mark">
											<text>{{item.passingMark}}</text>
										</view>
										<button @click="getExamInfo(item)" class="card-button card-button-view">{{item.userExamState=='1'?"开始考试":item.userExamState=='2'?"继续考试":"查看"}}</button>
									</Card>
								</view>

							</view>

						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;box-sizing: border-box;">
					<cell class="" title="学习课件" content="查看全部" :border="false"></cell>
					<view class="scroll-items" style="background-color: #FFFFFF;margin-bottom:80rpx;">
						<view class="scroll-item-text-box">
							<view class="konwleage-base uni-flex">
								<view class="konwleage-base-left flex-item">
									<image class="konwleage-base-left-image"></image>
								</view>
								<view class="konwleage-base-right flex-item">
									<view class="konwleage-base-right-title">
										<text class="konwleage-base-right-title-text">急性心肌梗死的院前急救</text>
									</view>
									<view class="konwleage-base-right-time">
										<text class="konwleage-base-right-time-text">2019-11-22 16:04</text>
									</view>
									<view class="konwleage-base-right-features uni-flex">
										<view class="konwleage-base-right-features-read konwleage-base-right-features-icon flex-item">
											<image class="konwleage-base-right-features-image" src="../../static/icon_eye@2x.png"></image>
											<text>3</text>
										</view>
										<view class="konwleage-base-right-features-like konwleage-base-right-features-icon flex-item">
											<image class="konwleage-base-right-features-image" src="../../static/icon_like@2x.png"></image>
											<text>4</text>
										</view>
										<view class="konwleage-base-right-features-reply konwleage-base-right-features-icon flex-item">
											<image class="konwleage-base-right-features-image" src="../../static/icon_message@2x.png"></image>
											<text>5</text>
										</view>
									</view>
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
	import api from "../../server/index.js"
	import {
		ERR_OK
	} from "@/utils/config.js"
	import cell from "@/components/Cell/CellItem"
	import {
		uniList,
		uniListItem
	} from '@dcloudio/uni-ui'
	const Sys = uni.getSystemInfoSync();
	const wH = Sys.windowHeight;

	const swiperHeight = `${(wH - 44-8)*2}rpx`;
	export default {
		components: {
			cell,
			QSTabs,
			Card,
			uniList,
			uniListItem
		},
		data() {
			return {
				qsTabs: {
					tabs: ["我的考试", "知识库"],
					current: 0,
				},
				swiper: {
					current: 0,
					height: swiperHeight
				},
				examList: [],
				userId:  uni.getStorageSync('userInfo').userId
			}
		},
		onShow() {
			this.getMyExam(this.userId);
		},
		methods: {
			async getExamInfo(item) {

				let config;
				switch (item.userExamState) {
					case "1":
						config = {
							url: `../examStart/examStart?examId=${item.examId}`,
							success: () => {
								console.log('success', arguments)
							},
							fail: (err) => {
								console.log("fail", err)
							}
						}
						break;
					case "2":
						config = {
							url: `../examPaper/examPaper?examId=${item.examId}`,
							success: () => {
								console.log('success', arguments)
							},
							fail: (err) => {
								console.log("fail", err)
							}
						}
						break;
					case "3":
						config = {
							url: `../examResult/examResult?examId=${item.examId}&isComplete=true`,
							success: () => {
								console.log('success', arguments)
							},
							fail: (err) => {
								console.log("fail", err)
							}
						}
						break;
					default:
						break;
				}
				uni.navigateTo(config)
			},
			async getMyExam(userId) {

				const data = await api.examLearn.getMyExam(userId);
				console.log(data)
				if (data.errorCode === ERR_OK) {
					this.examList = data.examList;
				}
			},
			tabsChange(index) {
				this.qsTabs.current = index;
				this.swiper.current = index;
			},
			swiperChange({
				detail: {
					current,
					source
				}
			}) {
				this.qsTabs.current = current;
				this.swiper.current = current;
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../../common/mixins.less';

	.QS-tabs-box {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: white;
		margin-bottom: 16rpx
	}

	.swiper-item {
		background-color: #fff;
	}

	.scroll-items {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
	}

	.scroll-item {
		margin-top: 15rpx;
		padding: 25rpx;
		background-color: white;
		border-radius: 8rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		border: 1px solid #f8f8f8;
	}

	.scroll-item-image-box {
		flex-grow: 0;
	}

	.scroll-item-text-box {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28rpx;
		font-weight: bold;

	}

	.scroll-item-image {
		border-radius: 4rpx;
		width: 180rpx;
		height: 150rpx;
	}

	.ornament {
		height: 64rpx;
		background-color: #35DC9E;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		border-bottom-left-radius: 32rpx;
		border-bottom-right-radius: 32rpx;
	}

	.card-title {
		margin: 32rpx 0 4rpx;
		text-align: center;
	}

	.card-title {
		text {
			width: 85%;
			display: block;
			/* box-sizing: border-box;
			padding:10rpx; */
			font-family: PingFangSC-Semibold;
			font-size: 32rpx;
			color: #FFFFFF;
			.no-wrap();
		}
	}

	.card-time {
		margin: 4rpx 0 6rpx;
		text-align: center;
	}

	.card-time text {
		opacity: 0.8;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 36rpx;
	}

	.card-mark {
		text-align: center;
		height: 76rpx;
		line-height: 76rpx;
		margin: 12rpx auto 20rpx;
	}

	.card-mark text {
		font-family: DINCond-Black;
		font-size: 64rpx;
		color: #FFFFFF;
		text-align: center;
	}

	.konwleage-base-left {
		width: 160rpx;
		height: 160rpx;
		margin-right: 16rpx;
		background: #fff;
	}

	.konwleage-base-left-image {
		width: 160rpx;
		height: 160rpx;
		background: #EFF1F2;
	}

	.konwleage-base-right {
		width: 100%;
	}

	.konwleage-base-right-title {
		font-size: 0;
		margin-bottom: 16rpx;
		height: 44rpx;
		line-height: 44rpx;
	}

	.konwleage-base-right-title-text {
		font-family: PingFangSC-Regular;
		font-size: 32rpx;

		color: #333333;
		letter-spacing: 0;

	}

	.konwleage-base-right-time {
		font-size: 0;
		margin-bottom: 30rpx;
		height: 34rpx;
		line-height: 34rpx;
	}

	.konwleage-base-right-time-text {
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #999999;
		letter-spacing: 0;

	}

	.konwleage-base-right-features {
		width: 100%;
		justify-content: flex-end;
		height: 24rpx;
		line-height: 24rpx;
		// text-align: right;
	}

	.konwleage-base-right-features-image {
		width: 24rpx;
		height: 24rpx;
	}

	.konwleage-base-right-features-read {
		margin-right: 24rpx;
	}

	.konwleage-base-right-features-like {
		margin-right: 24rpx;
	}

	.konwleage-base-right-features-icon {
		text {
			font-family: PingFangSC-Regular;
			font-size: 24rpx;
			color: #999999;
			letter-spacing: 0;


		}
	}

	.card-button {
		width: 224rpx;
		line-height: 60rpx;
		height: 64rpx;
		border-radius: 32rpx;
		background-color: transparent;
		border: 2px solid #ffffff;
	}

	.card-button-view {
		font-family: PingFangSC-Regular;
		font-size: 32rpx;
		color: #FFFFFF;
		text-align: center;
	}
</style>
