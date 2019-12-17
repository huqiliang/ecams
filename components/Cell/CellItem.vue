<template>
	<view class="cell-wrapper">
		<view class="cell-">
			<view class="cell-title">{{title}}</view>
			<view class="cell-right-content">{{content}}</view>
			<view class="arrow" v-if="arrow" >
				<!-- <image src="../../static/icon_list_more@2x.png"></image> -->
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
	@import url('../../common/mixins.styl')
	.cell-wrapper {
		display:flex;
		
	}
.arrow {
	width:36rpx;
	height: 36rpx;
}
.arrow image {
	width:36rpx;
	height: 36rpx;
}
</style>
