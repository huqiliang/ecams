<template>
	<view class="exam-paper">
		<view class="progress-box">
				<progress percent="20" stroke-width="6" :show-info="false" activeColor="#36C892" />
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

<style lang="less">
.exam-paper {
	background: #F7F9FA;
	padding-top: 10 rpx;
}
</style>
