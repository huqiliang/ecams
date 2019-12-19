<template>
	<view class="person-index">
		<view class="nav-bar-title-and-person-info-bg">
			<view class="status_bar" :style="{height:status_bar_height}">
				  <!-- 这里是状态栏 -->
			</view>
			<!-- :style="{top:status_bar_height}" -->
			<view class="nav-bar"  >
				<text class="nav-bar-title">个人中心</text>
			</view>
			<view class="person-user-info uni-flex">
				<view class="person-user-info-left  uni-flex">
					<view class="avart">
						<image></image>
					</view>
					<view class="area">
						<view class="name">
							<text>孙婧</text>
						</view>
						<view>
							<text class="station1">城南站 </text>
							<text class="station2">金城分站 </text>
							<text class="title-name">医生 </text>
						</view>
					</view>
				</view>
				<view class="message has-message "></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			status_bar_height(){
				return uni.getSystemInfoSync().statusBarHeight + 'px';
			}

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/mixins.less";
	.person-index{
		.nav-bar-title-and-person-info-bg {
			width: 100%;
			background-image: linear-gradient(225deg, #4BDB9B 0%, #4AB8AF 100%);
			.status_bar {
				//position:fixed;
				//top:0;
				width: 100%;
				// height:40rpx;
			}
			.nav-bar{
				//position:fixed;
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				.nav-bar-title {
					color:#FFFFFF;
					font-family: PingFangSC-Regular;
					font-size: 34rpx;
				}
			}
			.person-user-info {
				
				box-sizing: border-box;
				justify-content: space-between;
				align-items: center;
				height: 292rpx;
				padding:40rpx 32rpx 132rpx;
				.avart{
				
					flex-basis:16%;
					height: 120rpx;
					margin-right: 32rpx;
					image {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						background-color: red;
					}
				}
				.area{
					.name {
						font-family: PingFangSC-Medium;
						font-size: 17px;
						color: #FFFFFF;
						
						text-align: left;
					}
					.station1,.station2,.title-name {
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #FFFFFF;
						letter-spacing: 0.23px;
						text-align: left;
					}
				}
				.message{
					width: 48rpx;
					height: 48rpx;
					.bg-image("../static/icon_msg_tip");
					background-position: center center;					background-size:cover;
					background-repeat: no-repeat;
					position:relative;
				}
				.has-message {
					&::before {
						position:absolute;
						content:"";
						width: 16rpx;
						height: 16rpx;
						border-radius: 50%;
						background-color:#FF3B30;
						right:0
					}
				}
			}
		}
	}
</style>
