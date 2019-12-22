<template>
	<!-- <cmd-cell-item title="排班表发布通知(11.25-11.29)" addon="附加文案" ></cmd-cell-item> -->
	<cell :arrow="false">
		<view class="" slot="left-content">
			11.3心肺复苏成功，来自领导的表表表表表表表
		</view>
		<view class="notice-time" slot="right-content">
			12:33
		</view>
	</cell>
</template>

<script>
	import cell from "@/components/Cell/CellItem.vue"
	export default {
		components:{
			cell
		},
		data() {
			return {
				
			}
		},
		methods:{
			showNotice() {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.notice-time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		text-align: right;
		line-height: 18px;
		margin-right: -36rpx;
	}
</style>
