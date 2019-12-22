<template>
	<view class="exam-start">
		<form @submit="formSubmit" @reset="formReset">
			<cell class="exam-start-cell" title="考试时长"  :arrow="false">
				<view class="exam-start-cell-right-content" slot="right-content">
					<text>2个小时</text>
				</view>
			</cell>
			<cell class="exam-start-cell" title="考试时长"  :arrow="false">
				<view class="exam-start-cell-right-content" slot="right-content">
					<text>100分</text>
				</view>
			</cell>
			<cell class="exam-start-cell" title="及格分数"  :arrow="false">
				<view class="exam-start-cell-right-content" slot="right-content">
					<text>60分</text>
				</view>
			</cell>
			<cell class="exam-start-cell" title="题目数量"  :arrow="false">
				<view class="exam-start-cell-right-content" slot="right-content">
					<text>100题</text>
				</view>
			</cell>

			
			<button form-type="submit" class="exam-start-button">提交</button>
		</form>	
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
				transferApplication:{
					type:"",
					date:"",
					
				},
				formSelectList:{
					postList:[]
				}
			};
		}
	}
</script>

<style lang="less" scoped>
	.exam-start {
		// box-sizing: border-box;
		// position: fixed;
		// top:0;
		padding-top: 32rpx;
		background-color: #F7F9FA;
		width:100%;
		height: 100%;
		.exam-start-cell {
			
				// /deep/ .cell-container{
				// 	/deep/ .cell-title {
				// 		/deep/ .cell-title-text {
				// 			font-family: PingFangSC-Regular;
				// 			font-size: 17px;
				// 			color: red;
				// 			letter-spacing: 0.29px;
				// 			text-align: left;
				// 		}
				// 	}
				// }
			
			.exam-start-cell-right-content{
				margin-right: -36rpx;
				font-family: PingFangSC-Regular;
				font-size: 17px;
				color: #333333;
				letter-spacing: 0.29px;
				text-align: right;
			}
		}
		.exam-start-button {
			position: fixed;
			bottom:0;
			width: 100%;
			height: 94rpx;
			border-radius: 0;
			background: #36C892;
			font-family: PingFangSC-Regular;
			font-size: 17px;
			color: #FFFFFF;
			letter-spacing: 0.29px;
			line-height: 94rpx;
			border:none;
			&::after{
				display: none;
			}
		}
	}
</style>
