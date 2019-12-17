<template>
	<!-- <cmd-cell-item title="排班表发布通知(11.25-11.29)" addon="附加文案" ></cmd-cell-item> -->
	<cell title="排班表发布通知(11.25-11.29)" content="附加文案"></cell>
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

<style scoped>
	/deep/.cmd-cell-item-title {
		font-family: PingFangSC-Regular;
		font-size: 34rpx;
		color: #333333;
		
		text-align: left;
		line-height: 1.2;
	}
</style>
