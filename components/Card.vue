<template>
	<view>
		<view class="card-wrapper">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.card-wrapper{
		background-color: #36C892;
		width: 326rpx;
		height: 400rpx;
		border-radius: 16rpx;
		border-radius: 16rpx;
	}
</style>
