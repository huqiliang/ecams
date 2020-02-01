<template>
	<view class="answer-sheet">
		<view class="answer-sheet-type-tip ">
			<view class=" answer-sheet-type-tip-item">
				<text :class="[(answerSheetTipMap.style)[0],'dot-tip']"></text>
				<text class="answer-sheet-type-tip-item-text">{{(answerSheetTipMap.state)[0]}}</text>
			</view>
			<view class=" answer-sheet-type-tip-item">
				<text :class="[(answerSheetTipMap.style)[1],'dot-tip']"></text>
				<text class="answer-sheet-type-tip-item-text">{{(answerSheetTipMap.state)[1]}}</text>
			</view>
			<view class=" answer-sheet-type-tip-item">
				<text :class="[(answerSheetTipMap.style)[2],'dot-tip']"></text>
				<text class="answer-sheet-type-tip-item-text">{{(answerSheetTipMap.state)[2]}}</text>
			</view>

		</view>

		<view class="uni-flex  answer-sheet-list">
			<view class="uni-flex-item answer-sheet-item" v-for="(answer,index) in answerList" :key="index">
				<view :class="['answer-sheet-circle', (answerSheetMap.style)[answer.status]]">
					<text>{{index+1}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import api from "@/server/";
	import _ from "lodash"
	export default {
		props: {},
		data() {
			return {
				//答题卡是已完成还是未完成的答题卡
				isComplete: false,
				answerList: [],
			};
		},
		async onLoad(options) {
			console.log(options)
			this.isComplete = options.isComplete === "true" ? true : false
			let arr = [];
			let exam;
			const examQuestion = uni.getStorageSync("examQuestion")
			if (!examQuestion) {
				const res = await api.examLearn.getExamDetail({
					"userId": uni.getStorageSync('userInfo').userId,
					"examId": options.examId
				})
				exam = res.examQuestion
			} else {
				exam = examQuestion
			}
			_.map(exam, val => {
				if (val.qtId !== '5') {
					if (this.isComplete) {
						arr.push({
							status: val.selectedQiId ? (val.answer == val.selectedQiId ? "correct" : "error") : "notDone"
						})
					} else {
						arr.push({
							status: val.selectedQiId ? "done" : "notDone"
						})
					}
				} else {
					let flag = true;
					let notDone = true;
					_.map(examQuestion.groupQuestions, item => {
						if (item.selectedQiId !== item.answer) {
							flag = false;
						}
						if (item.selectedQiId) {
							notDone = false
						}
					})
					arr.push({
						status: notDone ? "notDone" : (flag ? "success" : "error")
					})
				}
			})
			this.answerList = arr;
		},
		computed: {
			// 返回是完成还是未完成状态的样式
			answerSheetTipMap() {
				if (this.isComplete) {
					return this.completeTip;
				} else {
					return this.unCompleteTip;
				}
			},
			completeTip() {
				return {
					style: {
						0: 'complete-correct',
						1: 'complete-error',
						2: 'complete-not-done',
					},
					state: {
						0: "正确",
						1: "错误",
						2: "未做"
					}
				}
			},
			unCompleteTip() {
				return {
					style: {
						// 0: 'un-complete-current',
						0: 'un-complete-done',
						1: 'un-complete-not-done',
					},
					state: {

						// 0: "当前",
						0: "已做",
						1: "未做"
					}
				}
			},
			answerSheetMap() {
				if (this.isComplete) {
					return this.complete;
				} else {
					return this.unComplete;
				}
			},
			complete() {
				return {
					style: {
						correct: 'complete-correct',
						error: 'complete-error',
						notDone: 'complete-not-done',
					},
					state: {
						0: "正确",
						1: "错误",
						2: "未做"
					}
				}
			},
			unComplete() {
				return {
					style: {
						// current: 'un-complete-current',
						done: 'un-complete-done',
						notDone: 'un-complete-not-done',
					},
					state: {

						// 0: "当前",
						0: "已做",
						1: "未做"
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.answer-sheet {

		.answer-sheet-type-tip {
			height: 84rpx;
			display: block;

			.answer-sheet-type-tip-item {
				display: inline-block;
				width: 120rpx;
				height: 84rpx;
				padding: 16rpx 0 32rpx 32rpx;

				.answer-sheet-type-tip-item-text {
					font-family: PingFangSC-Regular;
					font-size: 24rpx;
					color: #333333;
					letter-spacing: 0;

					line-height: 36rpx;
				}

				.dot-tip {
					vertical-align: middle;
					display: inline-block;
					margin-right: 8rpx;
					width: 24rpx;
					height: 24rpx;
					border-radius: 50%;
				}
			}
		}

		.answer-sheet-list {
			justify-content: flex-start;
			align-items: center;

			flex-wrap: wrap;

			.answer-sheet-item {
				flex-grow: 0;
				flex-basis: 20%;
				margin-bottom: 32rpx;
				;

				.answer-sheet-circle {

					width: 96rpx;
					height: 96rpx;
					line-height: 96rpx;
					border-radius: 50%;
					// background: #FFFFFF;
					text-align: center;
					// border: 1px solid #36C892;
					margin: 0 auto;

					text {
						font-family: PingFangSC-Regular;
						font-size: 32rpx;

						letter-spacing: 0;

					}
				}
			}
		}

		.complete-not-done {
			text {

				color: #333333;
			}

			border:2rpx solid #F5F5F5;
			background-color:#F5F5F5
		}

		.complete-correct {
			text {
				color: #FFFFFF;
			}

			border:2rpx solid #36C892;
			background-color:#36C892
		}

		.complete-error {
			text {
				color: #FFFFFF;
			}

			border: 2rpx solid #F5F5F5;
			background-color:#F74E41
		}

		.un-complete-current {
			border: 2rpx solid #F5F5F5;
			background-color: #F5F5F5
		}

		.un-complete-done {
			border: 2rpx solid #36C892;
			background-color: #FFFFFF
		}

		.un-complete-not-done {
			border: 2rpx solid #F5F5F5;
			background-color: #FFFFFF
		}

	}
</style>
