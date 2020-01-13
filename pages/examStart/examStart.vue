<template>
	<view class="exam-start">
		<cell class="exam-start-cell" title="考试时长" :arrow="false">
			<view class="exam-start-cell-right-content" slot="right-content">
				<text>{{examInfo.timeLimit}}分钟</text>
			</view>
		</cell>
		<cell class="exam-start-cell" title="考试总分" :arrow="false">
			<view class="exam-start-cell-right-content" slot="right-content">
				<text>{{examInfo.totalScore}}分</text>
			</view>
		</cell>
		<cell class="exam-start-cell" title="及格分数" :arrow="false">
			<view class="exam-start-cell-right-content" slot="right-content">
				<text>{{examInfo.passingMark}}分</text>
			</view>
		</cell>
		<cell class="exam-start-cell" title="题目数量" :arrow="false">
			<view class="exam-start-cell-right-content" slot="right-content">
				<text>{{examInfo.questionNum}}题</text>
			</view>
		</cell>


		<button @click="startExam(examInfo.examId)" class="exam-start-button">开始考试</button>

	</view>
</template>

<script>
	import api from "../../server/index.js"
	import {
		ERR_OK
	} from "@/utils/config.js"
	import cell from "@/components/Cell/CellItem.vue"
	export default {
		components: {
			cell
		},
		data() {
			return {
				examInfo: {},
				userId: uni.getStorageSync("userInfo").userId
			};
		},
		async onLoad(option) {
			const data = await api.examLearn.getExamInfo(option.examId);
			if (data.errorCode === ERR_OK) {
				console.log(data)
				this.examInfo = data.examInfo;
				this.setTitle(this.examInfo.examName)
			}
		},
		methods: {
			setTitle(title) {
				uni.setNavigationBarTitle({
					title,
				})
			},
			async getExamDetail(userId, examId) {
				const res = await api.examStart.getExamDetail(examId);
				if (res.errorCode === ERR_OK) {
					const config = {
						url: ``,
						success: () => {

						},
						fail: (err) => {
							console.log("fail", err)
						}
					}
					uni.navigateTo(config)
				}
			},
			async startExam(examId) {
				const res = await api.examStart.startExam(this.userId, examId)
				if (res.errorCode === 'success') {
					uni.navigateTo({url:`../examPaper/examPaper?examId=${item.examId}`})
				}
			}
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
		width: 100%;
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

			.exam-start-cell-right-content {
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
			bottom: 0;
			width: 100%;
			height: 94rpx;
			border-radius: 0;
			background: #36C892;
			font-family: PingFangSC-Regular;
			font-size: 17px;
			color: #FFFFFF;
			letter-spacing: 0.29px;
			line-height: 94rpx;
			border: none;

			&::after {
				display: none;
			}
		}
	}
</style>
