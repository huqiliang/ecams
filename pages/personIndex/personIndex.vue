<template>
	<view>
	      <view class="status_bar">
	          <!-- 这里是状态栏 -->
	      </view>
				<view class="nav-bar-title-and-person-info-bg">
					
					<view class="nav-bar">
						<text class="nav-bar-title">个人中心</text>
					</view>
					<view></view>
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
	.status_bar {
      height: var(--status-bar-height);
      width: 100%;
  }
	.nav-bar-title-and-person-info-bg {
		background-image: linear-gradient(225deg, #4BDB9B 0%, #4AB8AF 100%);
	}
</style>
