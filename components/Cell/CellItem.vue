<template>
	<view class="cell-wrapper" hover-class="hover-class">
		<view :class="[{'cell-container-bottom':border},'cell-container', 'uni-flex' ,'uni-inline-item']">
			<view class="cell-title uni-flex-item">
				<text class="cell-title-text" v-if="title">{{title}}</text>
				<view v-else>
					<slot name="left-content"></slot>
				</view>
			</view>
			<view class="cell-right-content uni-flex-item  uni-inline-item">
				<text v-if="content">{{content}}</text>
				<view v-else>
					<slot name="right-content"></slot>
				</view>
				<view :class="[{'arrow-img':arrow} ,'arrow',  'uni-inline-item']"  ></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:""
			},
			content:{
				type:String,
				default:""
			},
			arrow:{
				type:Boolean,
				default:true
			},
			border:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="less">
	@import '../../common/mixins.less';
	.cell-wrapper {
		background-color: #ffffff;
		height: 104rpx;
		padding-left: 32rpx;
		.cell-container-bottom {
			.border-bottom-1px(2rpx,solid,#eee);
		}
		.cell-container{
			box-sizing: border-box;
			position: relative;
			width: 100%;
			justify-content: space-around;
			height: 104rpx;
			
			.cell-title {
				
				.no-wrap();
				// text {
				// 	width: 100%;
				// 	margin-left: 0;
				// 	font-family: PingFangSC-Regular;
				// 	font-size: 34rpx;
				// 	text-align: left;
				// 	color: #333333;
				// }	
			}	
			.cell-right-content{
				justify-content: flex-end;
				margin-right: 32rpx;
				text-align: right;
				// text {
				// 	font-family: PingFangSC-Regular;
				// 	font-size: 24rpx;
				// 	color: #999999;
				// 	text-align: right;
				// 	line-height: 36rpx;
				// }
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
	}	
</style>
