<template>
	<!-- <cmd-cell-item title="排班表发布通知(11.25-11.29)" addon="附加文案" ></cmd-cell-item> -->
	<div >
		<cell :arrow="false" v-for="(item,index) in noticeList" :key='index'>
			<view class="" slot="left-content">
				{{item.wechatContent}}
			</view>
			<view class="notice-time" slot="right-content">
				{{item.handleTime.split(' ')[0]}}
			</view>
		</cell>
	</div>
</template>

<script>
	import cell from "@/components/Cell/CellItem.vue"
	import api from "@/server/index"
	export default {
		components:{
			cell
		},
		data() {
			return {
				noticeList:[]
			}
		},
		async onLoad() {
			const noticeList = await this.getNotice();
			this.noticeList = noticeList.messageList;
		},
		methods:{
			async getNotice() {
				const res = await api.notice.userWechatMessage();
				if(res.errorCode === "success") {
					return res;
				}
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
