<template>
	<view class="notice">
		<view class="notice-cell-container">
			<cell title="人脸数据"  content="尚未验证"></cell>
			<cell title="姓名"  content="孙晋" :arrow="false"></cell>
			<cell title="生日"  content="1980-11-1" ></cell>
			<cell title="联系电话"  content="13812341234" :arrow="false"></cell>
			<cell title="身份证号"  content="330110198011011234" :arrow="false"></cell>
		</view>
		<view class="notice-cell-container">
			<cell title="所属机构"  content="城南站 金城分站"></cell>
			<cell title="岗位"  content="医生"></cell>
			<cell title="执业资格"  content="是"></cell>
			<cell title="职称"  content="主治医师"></cell>
			<cell title="调入年月"  content="2015-1-1"></cell>
			<cell title="党员"  content="是"></cell>
		</view>
		<button class="login-out">退出登录</button>
	</view>
</template>

<script>
	import cell from "@/components/Cell/CellItem.vue"
	export default {
		components:{
			cell
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="less">
.notice {
	background-color: #f7f9fa;
	padding-top: 32rpx;
	padding-bottom: 94rpx;
	.notice-cell-container{
		margin-bottom: 32rpx;
		background-color: #fff;
		.cell-title {
			/deep/ text{
				font-family: PingFangSC-Regular;
				font-size: 32rpx;
				color: red;
				text-align: right;
				}
		}
	}
	.login-out{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 94rpx;
		background: #F74E41;
		font-family: PingFangSC-Regular;
		font-size: 34rpx;
		color: #FFFFFF;
		border-radius: 0;
		text-align: center;
		line-height: 94rpx;
	}
}
</style>
