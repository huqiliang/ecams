<template>
	<view class="cell-wrapper" hover-class="hover-class">
		<view class="cell-container uni-flex uni-inline-item">
			<view class="cell-title uni-flex-item">
				<text>{{title}}</text>	
			</view>
			<view class="cell-right-content uni-flex-item  uni-inline-item">
				<text>{{content}}</text>	
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
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="stylus">
	@import '../../common/mixins.styl'
	.cell-wrapper 
		height 104rpx
		padding-left 32rpx
		.cell-container
			box-sizing border-box
			position relative
			width 100%
			height 104rpx
			justify-content space-arround
			
			border-bottom-1px(2rpx,solid,#eee)
			.cell-title
				// flex-basis 70%
				no-wrap()
				text
					width 100%
					margin-left 0
					font-family PingFangSC-Regular
					font-size 34rpx
					text-align left
					color #333333
					
			.cell-right-content
				
				
				justify-content flex-end
				// flex-basis 30%
				margin-right 32rpx
				text-align right
				text
					font-family PingFangSC-Regular
					font-size 24rpx
					color #999999
					text-align right
					line-height 36rpx
					
				.arrow 
					width 36rpx
					height 36rpx
					// margin-right 32rpx
					
				.arrow-img
					bg-image('../../static/icon_list_more')
					background-repeat no-repeat
					background-position center center
					background-size 36rpx 36rpx
					image 
						width 36rpx
						height 36rpx
				
</style>
