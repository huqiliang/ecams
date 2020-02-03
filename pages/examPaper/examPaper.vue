<template>
	<view class="exam-paper">
		<view class="progress-box">
			<!-- <progress class="progress" percent="20" stroke-width="6" :show-info="false" activeColor="#36C892" ></progress> -->
			<view class="progress">
				<view class="total-progress">
					<view class="current-progress" :style="{width:(examSituation.rate / examSituation.questionNum * 100)+'%'}">
						<text class="pop" :style="[popStyleRight]">{{examSituation.rate}}/{{examSituation.questionNum}}</text>
					</view>
				</view>
			</view>

		</view>
		<view class="count-down">
			<text class="count-down-text">倒计时：{{ms(time)}}</text>
		</view>

		<scroll-view :scroll-y="true" style="height:100%;width: 100%;">
			<view class="exam-paper-option">
				<view class="exam-paper-card">
					<view class="exam-paper-title">
						<text>{{examSituation.examName}}</text>
					</view>


					<view class="uni-flex exam-paper-option-box">
						<!-- <view class=" uni-flex-item-width">
							<text>A.阿托品</text>
						</view>
						<view class="  uni-flex-item-width">
							<text>B.冰帽</text>
						</view>
						<view class="  uni-flex-item-width">
							<text>C.人工呼吸，胸外心脏按压</text>
						</view>
						<view class="  uni-flex-item-width">
							<text>D.人工心脏起博</text>
						</view>
						<view class="  uni-flex-item-width">
							<text>E.气管插管</text>
						</view> -->
						{{paper.qtId==="5"?paper.groupQuestionStem:paper.questionTitle}}
					</view>

					<!-- <scroll-view  :scroll-y="true" style="height:100%;width: 100%;"> -->
					<!-- <view style="overflow-y: scroll;height: 624rpx;"> -->
					<view v-if="paper.qtId==='5'">
						<view class="exam-paper-topic" v-for="(item,index) in paper.groupQuestions" :key='index'>
							<view class="exam-paper-topic-title">
								<text>{{index+1}}.{{item.questionTitle}}：</text>
							</view>
							<view class="exam-paper-topic-option-list uni-flex" v-if="paper.qgType==='1'">
								<view v-for="val in item.questionItems" :key='val.qiName' @click="chooseAnswer(val,item)">
									<text class="exam-paper-topic-option-item" :class="{'exam-paper-topic-option-item-active':item.selectedQiId===val.qiId}">{{val.qiName}}</text>
								</view>
							</view>
							<view class="exam-paper-topic-option-list" v-else>
								<view class="bottom" v-for="val in item.questionItems" :key='val.qiName' @click="chooseAnswer(val,item)">
									<text class="exam-paper-topic-option-item" :class="{'exam-paper-topic-option-item-active':item.selectedQiId===val.qiId}">{{val.qiName}}</text>
									<text class="exam-paper-option-option">{{val.qiDisplayName}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="exam-paper-topic" v-else>
						<view class="exam-paper-topic-option-list">
							<view class="bottom" v-for="(item,index) in paper.questionItems" :key='index' @click="chooseAnswer(item)">
								<text class="exam-paper-topic-option-item" :class="{'exam-paper-topic-option-item-active':isActive(item)}">{{item.qiName}}</text>
								<text class="exam-paper-option-option">{{item.qiDisplayName}}</text>
							</view>
						</view>
					</view>
					<!-- </view> -->
					<!-- </scroll-view> -->
				</view>

			</view>
		</scroll-view>
		<view class="exam-paper-cooperation uni-flex">
			<view class="uni-flex-item exam-paper-cooperation-item" @click="changeTopic('pre')">
				<text class="icon left-icon"></text><text>上一题</text>
			</view>
			<view class="uni-flex-item exam-paper-cooperation-item" @click="goAnswer()">
				<text class="icon container-icon"></text><text>答题卡</text>
			</view>
			<view class="uni-flex-item exam-paper-cooperation-item" @click="changeTopic('next')">
				<text>下一题</text><text class="icon right-icon"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import api from "@/server/";
	import _ from "lodash"
	export default {
		data() {
			return {
				examSituation: null, //试卷信息
				timer: null,
				// time: 0,
				examId: null,
				paper: {} //当前试题
			};
		},
		methods: {
			ms(s){
				var h;
				h  =   Math.floor(s/60);
				s  =   s%60;
				h    +=    '';
				s    +=    '';
				h  =   (h.length==1)?'0'+h:h;
				s  =   (s.length==1)?'0'+s:s;
				return h+':'+s;
			},
			goAnswer() {
				// console.log(" this.examSituation.examId", this.examSituation.examId)
				// let  id =  this.examSituation.examId
				console.log()
				if (this.examSituation) {
					this.saveExam();
					uni.navigateTo({
						url: '../answerSheet/answerSheet?isComplete=' + this.isComplete + '&examId=' + this.examSituation.examId
					})
				}

			},
			isActive(item) {
				const qtId = this.paper.qtId;
				let active = false;
				switch (qtId) {
					case "1":
						//单选题
						active = this.paper.selectedQiId && this.paper.selectedQiId === item.qiId
						break;
					case "2":
						//多选题
						active = this.paper.selectedQiId && this.paper.selectedQiId.indexOf(item.qiId) > -1
						break;
					case "5":
						break;
				}
				return active
			},
			finish(fn) {
				this.time = 0
				clearInterval(this.timer)
				fn && fn()
			},
			saveExam() {
				uni.setStorageSync('exam_' + this.examId, {
					examQuestion: this.examQuestion,
					examSituation: this.examSituation
				})

			},
			chooseAnswer(item, questionItems) {
				if (!this.isComplete) {
					const qtId = this.paper.qtId;
					console.log(questionItems)
					switch (qtId) {
						case "1":
							//单选题
							this.$set(this.paper, "selectedQiId", item.qiId)
							break;
						case "2":
							//多选题
							let arr = this.paper.selectedQiId ? _.split(this.paper.selectedQiId, ",") : [];
							const id = item.qiId;
							if (arr.includes(id)) {
								_.pull(arr, id)
							} else {
								arr.push(id)
							}
							this.$set(this.paper, "selectedQiId", _.toString(arr))
							break;
						case "5":
							//组合题
							this.$set(questionItems, "selectedQiId", item.qiId)
							break;
						default:
							break;
					}
					this.examQuestion[this.examSituation.rate - 1] = this.paper
					this.saveExam()
				} else {
					uni.showToast({
						icon: "none",
						title: "已交卷，不能修改",
					})
				}
			},
			changeTopic(type) {
				if (type === 'next') {
					let rate = parseInt(this.examSituation.rate) + 1;
					if (rate <= this.examSituation.questionNum) {
						this.changePage(rate)
					} else {
						this.handPaper()
					}
				} else if (type === 'pre') {
					let rate = parseInt(this.examSituation.rate) - 1;

					if (rate > 0) {
						this.changePage(rate)
					}
				}
			},
			handPaper() {
				uni.showModal({
					title: "是否交卷?",
					success: async (res) => {
						console.log(this.examQuestion)
						//调用接口
						if (res.confirm) {
							let examQuestion = []

							_.map(this.examQuestion, val => {
								if (val.qtId === "5") {
									_.map(val.groupQuestions, item => {
										examQuestion.push({
											qId: item.qId,
											selectedQiId: item.selectedQiId
										})
									})
								} else {
									examQuestion.push({
										qId: val.qId,
										selectedQiId: val.selectedQiId
									})
								}

							})

							const res2 = await api.examLearn.updateUserExam(_.merge(this.examSituation, {
								examQuestion,
								examState: "3",
								asState: "3",
								timeSpan: this.examSituation.timeSpan
							}))
							if (res2) {
								uni.removeStorageSync('exam_' + this.examId)
								uni.showToast({
									title: "交卷成功",
								})
								uni.redirectTo({
									url: `../examResult/examResult?examId=${this.examId}`
								})

							}
						}

					}
				})
			},
			changePage(rate) {
				this.examSituation.rate = rate;
				this.paper = this.examQuestion[rate - 1]
				this.saveExam()
			},
		},
		onHide() {
			this.saveExam()
		},
		async onLoad(options) {
			console.log(options)
			this.examId = options.examId;
			let res;
			const exam = uni.getStorageSync('exam_' + options.examId);
			if (exam) {
				res = exam
			} else {
				res = await api.examLearn.getExamDetail({
					"userId": uni.getStorageSync('userInfo').userId,
					"examId": options.examId
				})
			}
			this.examSituation = res.examSituation;
			this.examQuestion = res.examQuestion;
			const rate = options.rate ? options.rate : (res.examSituation.rate ? res.examSituation.rate : 1)
			console.log(rate)
			this.changePage(rate)
			this.timer = setInterval(() => {
				this.time -= 1
				//console.log(this.time)
				if (this.time <= 0) {
					this.finish()
				}
			}, 1000)
		},
		computed: {
			isComplete() {
				if (this.examSituation)
					return this.examSituation.asState == 3 ? true : false
				return false
			},
			time: {
				get() {
					if (this.examSituation) {
						return parseFloat(this.examSituation.timeLimit) * 60 - (this.examSituation.hasOwnProperty("timeSpan") ?
							parseFloat(
								this.examSituation.timeSpan) * 60 :
							0)
					} else {
						return 0
					}
				},
				set(val) {
					this.$set(this.examSituation, "timeSpan", (parseFloat(this.examSituation.timeLimit) * 60 - parseFloat(val)) / 60)
				}
			},
			// percent() {
			// 	console.log("this.examSituation:",this.examSituation)
			// 	if (this.examSituation) {
			// 		return this.examSituation.rate
			// 	}
			// 	return 0
			// },
			popStyleRight() {
				return {
					right: 0
				}
				// if(this.examSituation) {

				// const flag = 87
				// if (this.percent / this.examSituation.questionNum * 100 <= 87) {
				// 	return {
				// 		left: '100%'
				// 	};
				// } else {
				// 	return {

				// 		left: `${this.examSituation.questionNum - (this.percent - (this.percent / this.examSituation.questionNum * 100))}%`
				// 	}
				// }

				// }
			}
		},
	}
</script>

<style lang="less">
	@import "../../common/mixins.less";

	.exam-paper {
		position: fixed;
		width: 100%;
		background: #F7F9FA;
		padding: 10rpx 0 192rpx;
		height: 100%;

		.progress-box {

			padding-top: 10rpx;

			.progress {
				.total-progress {
					width: 100%;
					height: 12rpx;
					background: #EBEEEF;

					.current-progress {
						background: #36C892;
						height: 12rpx;
						position: relative;

						.pop {
							position: absolute;
							top: -12rpx;

							font-family: PingFangSC-Regular;
							font-size: 20rpx;
							color: #FFFFFF;
							letter-spacing: 0;
							text-align: center;
							display: block;
							width: 96rpx;
							height: 32rpx;
							line-height: 32rpx;
							background: #36C892;
							border-radius: 16rpx;

						}
					}
				}
			}

		}

		.count-down {
			text-align: right;
			margin: 8rpx 32rpx 16rpx;
			height: 36rpx;

			.count-down-text {
				font-family: PingFangSC-Semibold;
				font-size: 12px;
				font-weight: bold;
				color: #333333;
				letter-spacing: 0;
				text-align: left;
				line-height: 18px;
			}

		}

		.exam-paper-option {

			// margin-top:64rpx;
			.exam-paper-card {
				overflow: hidden;
				position: relative;
				width: 686rpx;

				margin: 0 auto 126rpx;
				padding: 0 32rpx;

				border-radius: 16rpx;
				background: #ffffff;

				.exam-paper-title {
					position: relative;
					margin: 0 auto 64rpx;
					//position: absolute;
					height: 72rpx;
					display: block;
					z-index: 1;
					//padding-bottom:72rpx;
					padding: 10rpx 70rpx;
					text-align: center;

					text {
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 32rpx;
						color: #FFFFFF;
						z-index: 1;

					}

					&::before {
						content: '';
						background: #36C892;
						border-radius: 0 0 8px 8px;
						position: absolute;
						top: -30rpx;
						left: 0;
						right: 0;
						bottom: 0;
						z-index: -1;
						transform: perspective(90rpx) rotateX(-5deg);

					}

				}

				.exam-paper-option-box {
					flex-wrap: wrap;
					justify-content: flex-start;
					font-size: 32rpx;
					color: #333333;
					font-family: PingFangSC-Semibold;

					.uni-flex-item-width {
						box-sizing: border-box;
						min-width: 311rpx;
						padding-right: 31rpx;
						margin: 8rpx 0;

						text {
							font-family: PingFangSC-Semibold;
							font-size: 32rpx;
							color: #333333;
							text-align: left;
						}
					}
				}
			}

			.exam-paper-topic {
				margin: 64rpx 0;

				.exam-paper-topic-title {
					margin-bottom: 16rpx;

					text {
						font-family: PingFangSC-Regular;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						text-align: left;
					}
				}

				.exam-paper-topic-option-list {
					justify-content: space-between;

					.bottom {
						margin-bottom: 25px;
						display: flex;

						.exam-paper-option-option {
							margin-left: 15px;
							line-height: 70rpx;
							width: 90%;
						}
					}

					.exam-paper-topic-option-item {
						// box-sizing: border-box;
						display: block;
						width: 64rpx;
						height: 64rpx;
						border-radius: 50%;
						line-height: 64rpx;
						text-align: center;
						background-color: #F5F5F5;
						font-family: PingFangSC-Semibold;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						border: 1px solid #F5F5F5;
					}

					.exam-paper-topic-option-item-active {
						border: 1px solid #36C892;
						background: #EAF9F4;
						color: #36C892;

					}
				}
			}
		}

		.exam-paper-cooperation {
			justify-content: space-around;
			align-items: center;
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 94rpx;
			margin-top: 94rpx;

			background: #36C892;

			.exam-paper-cooperation-item {

				text-align: center;

				display: flex;
				align-items: center;
				justify-content: center;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #FFFFFF;
				letter-spacing: 0.24px;
				text-align: left;
				line-height: 21px;

				.icon {
					display: inline-block;
					width: 32rpx;
					height: 32rpx;
					background-repeat: no-repeat;
					background-size: cover;
				}

				.left-icon {
					.bg-image("../static/icon_left_circle");
					margin-right: 8rpx;
				}

				.right-icon {
					margin-left: 8rpx;
					.bg-image("../static/icon_right_circle");
				}

				.container-icon {
					margin-right: 8rpx;
					.bg-image("../static/icon_container");
				}
			}
		}
	}
</style>
