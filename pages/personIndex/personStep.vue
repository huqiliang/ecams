<template>
	<view>
		<view class="person-info-step" v-for="(item,index) in messageList" :key='index'>
			<view class="step-time-cell">
				<navigator url="../notice/notice" hover-class="none">
					<view class="step-time-item uni-flex">
						<view class="step-tail"></view>
						<text class="step-time-icon"></text>
						<text class="step-time-text">{{item[0].groupTime}}</text>
						<view class="cell-right-content uni-flex-item  uni-inline-item">
							<view class="arrow-img arrow uni-inline-item"></view>
						</view>
					</view>
				</navigator>
			</view>
			<view class="step-event-cell" v-for="(val,index2) in item" :key='index2'>
				<navigator url="../notice/notice" hover-class="none">
					<view class="step-event-item uni-flex">
						<view class="step-tail"></view>
						<view class="step-event-icon-wrapper">
							<text class="step-event-icon calendar_check_fill-bg-image"></text>
						</view>
						<text class="step-event-text">{{val.wechatContent}}</text>
						<view class="cell-right-content uni-flex-item  uni-inline-item">
							<view class="arrow-img arrow uni-inline-item"></view>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			messageList: {
				default: []
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/mixins.less";

	.person-info-step {
		background-color: #ffffff;
		padding-bottom: 34rpx;

		/deep/ .cell-wrapper {
			padding-left: 0;
		}

		.step-time-cell {
			height: 115rpx;

			//padding-left: 0;
			//background-color: #007AFF;
			// /deep/ .cell-wrapper {
			// 	height: 112rpx;
			.step-time-item {
				height: 115rpx;
				padding-bottom: 48rpx;
				position: relative;
				align-items: center;

				.step-tail {
					background-color: #36C892;
					position: absolute;
					left: 29px;
					top: 28rpx;
					height: 100%;
					width: 2rpx;
					padding: 60rpx 0 8rpx;
				}

				.step-time-icon {
					display: inline-block;
					width: 16rpx;
					height: 16rpx;
					margin: 0rpx 16rpx 0 48rpx;
					border-radius: 50%;
					background-image: linear-gradient(225deg, #4BDB9B 0%, #4AB8AF 100%);
				}

				.step-time-text {
					font-family: PingFangSC-Semibold;
					font-size: 36rpx;
					color: #333333;
					letter-spacing: 0.09px;
					vertical-align: middle;
				}

				.cell-right-content {
					justify-content: flex-end;
					margin-right: 32rpx;
					text-align: right;

					//align-items: flex-start;
					text {
						font-family: PingFangSC-Regular;
						font-size: 24rpx;
						color: #999999;
						text-align: right;
						line-height: 36rpx;
					}

					.arrow {
						width: 36rpx;
						height: 36rpx;
					}

					.arrow-img {
						.bg-image('../static/icon_list_more');
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 36rpx 36rpx;

						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}
			}

			//}
		}

		.step-event-cell {
			height: 112rpx;
			position: relative;

			.step-event-item {
				align-items: center;

				.step-tail {
					background-color: #36C892;
					position: absolute;
					left: 29px;
					top: 0;
					height: 100%;
					width: 2rpx;
					padding: 60rpx 0 8rpx;
				}

				.step-event-text {
					margin-left: 0;
				}

				.step-event-icon-wrapper {
					width: 48rpx;
					height: 48rpx;
					line-height: 48rpx;
					text-align: center;
					border: 2rpx solid #36C892;
					border-radius: 50%;
					margin: 0 16rpx 0 32rpx;
					background-color: #ffffff;
					z-index: 2;

					.step-event-icon {
						display: inline-block;
						width: 24rpx;
						height: 24rpx;
						margin: 12rpx;
						background-size: cover;
						background-repeat: no-repeat;
					}

					.calendar_check_fill-bg-image {
						.bg-image('../static/calendar_check_fill');
					}

					.file_text_fill-bg-image {
						.bg-image('../static/file_text_fill');
					}

					.sound_fill-bg-image {
						.bg-image('../static/sound_fill');
					}

					.trophy_fill-bg-image {
						.bg-image('../static/trophy_fill');
					}
				}

				.cell-right-content {
					justify-content: flex-end;
					margin-right: 32rpx;
					text-align: right;

					text {
						font-family: PingFangSC-Regular;
						font-size: 24rpx;
						color: #999999;
						text-align: right;
						line-height: 36rpx;
					}

					.arrow {
						width: 36rpx;
						height: 36rpx;
					}

					.arrow-img {
						.bg-image('../static/icon_list_more');
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 36rpx 36rpx;

						image {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}

			}

			&:last-child {
				.step-event-item {
					.step-tail {
						display: none;
					}
				}
			}
		}
	}
</style>
