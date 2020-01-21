<template>
	<view class="exam-result">
		<view class="exam-result-image-box">
			<view :class="[isPass ? 'pass' : 'unpass', 'exam-result-image']"></view>
			<text class="exam-result-text">{{resultText}}</text>
		</view>
		<view class="exam-result-info uni-flex">
			<view class="exam-result-pass-num-box uni-flex-item">
				<view class="exam-result-info-top-text">
					<text class="exam-result-info-pass-number">{{examResult.rightAnswers}}</text>
					<text class="exam-result-info-symbol">/</text>
					<text class="exam-result-info-total-number">{{examResult.questionNum}}</text>
				</view>
				<view class="exam-result-info-bottom-text">
					<text>答对</text>
				</view>
			</view>
			<view class="exam-result-score-box uni-flex-item">
				<view class="exam-result-info-top-text">
					<text class="exam-result-score-number">{{examResult.score}}</text>
				</view>
				<view class="exam-result-info-bottom-text">
					<text>得分</text>
				</view>
			</view>
			<view class="exam-result-use-time-box uni-flex-item">
				<view class="exam-result-info-top-text">
					<text class="exam-result-time-number">{{examResult.timeSpan}}分</text>
				</view>
				<view class="exam-result-info-bottom-text">
					<text>用时</text>
				</view>
			</view>
		</view>
		
		<view class="cooperative-group uni-flex">
			<view class="uni-flex-item button-to-index">
				<button @click="goToIndex">返回首页</button>
			</view>
			<view class="uni-flex-item button-view-result">
				<button @click="viewResult">查看答题结果</button>
			</view>
		</view>
	</view>
</template>

<script>
	import api from "@/server/index.js"
	import {
		ERR_OK
	} from "@/utils/config.js"
	
	export default {
		
		data() {
			return {
				examResult:{},
				isPass:true,
			};
		},
		computed:{
			resultText(){
				return this.isPass ? "恭喜通过本次考试！" :"很遗憾，未通过"
			}
		},
		onLoad() {
			this.getExamResult();
		},
		methods:{
			async getExamResult(examId="4") {
				const data = {
					userId: uni.getStorageSync("userInfo").userId,
					examId
				}
				const res = await api.examLearn.getExamDetail(data);
				if (res.errorCode === ERR_OK) {
					
					this.examResult = res.examSituation
					if(this.examResult.score > this.examResult.passingMark) {
						this.isPass = true;
					}else {
						this.isPass = false;
					}
				}
			},
			goToIndex() {
				
				const config = {
					url:"../personIndex/personIndex",
					success:()=>{
						console.log('success',arguments)
					},
					fail:(err) => {
						console.log("fail",err)
					}
				}
				uni.navigateTo(config)
			},
			viewResult() {
				const config = {
					url:"../answerSheet/answerSheet?isComplete=true",
					success:()=>{
						console.log('success',arguments)
					},
					fail:(err) => {
						console.log("fail",err)
					}
				}
				uni.navigateTo(config)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/mixins.less";
	.exam-result {
		.exam-result-image-box{
			width:100%;
			// height:252rpx;
			margin-bottom: 64rpx;
			padding-top:32rpx;
			
			.pass {
				//.bg-image("../static/icon_pass");
				//三倍图本身有问题 只放2被图片
				background-image:url("../../static/icon_pass@2x.png") 
				
				
			}
			.unpass {
				//.bg-image("../static/icon_unpass");
				//background-image:url("../../static/icon_unpass@2x.png")
				//三倍图本身有问题 只放2被图片
				background-image: url("../../static/icon_unpass@2x.png");
				
			}
			.exam-result-image{
				width:280rpx;
				height:252rpx;
				margin: 0 auto 0;
				
				background-size: 100%;
				background-position: center center;
				background-repeat: no-repeat;
			}
			.exam-result-text{
				width: 100%;
				display: block;
				font-family: PingFangSC-Semibold;
				font-size: 32rpx;
				color: #36C892;
				text-align: center;
				
			}
			
		}
		.exam-result-info{
			align-items: center;
			justify-content: space-around;
			
			.exam-result-info-top-text {
				text-align: center;
				text {
					text-align: center;
				}
				.exam-result-info-pass-number {
					font-family: DINEngschrift-Alternate;
					font-size: 48rpx;
					color: #36C892;
					text-align: center;
				}
				.exam-result-info-symbol {
					font-family: DINEngschrift-Alternate;
					font-size: 48rpx;
					color: #333333;
					text-align: center;
				}
				.exam-result-info-total-number {
					font-family: DINEngschrift-Alternate;
					font-size: 48rpx;
					color: #333333;
					text-align: center;
				}
				.exam-result-score-number {
					font-family: DINEngschrift-Alternate;
					font-size: 48rpx;
					color: #36C892;
					text-align: center;
				}
				.exam-result-time-number {
					font-family: DINEngschrift-Alternate;
					font-size: 48rpx;
					color: #333333;
					text-align: center;
				}
			}
			.exam-result-info-bottom-text {
				text-align: center;
				text {
					font-family: PingFangSC-Regular;
					font-size: 28rpx;
					color: #999999;
					text-align: center;
				}
			}
			
		}
		.cooperative-group {
			position:fixed;
			width:100%;
			height: 96rpx;
			bottom:0rpx;
			
			.button-to-index {
				button {
					height: 96rpx;
					line-height: 96rpx;
					background: #F5F5F5;
					border-radius: 0;
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #36C892;
					text-align: center;
					border:none;
					&::after{
						border:none;
						border-radius:0;
					}
				}
			}
			.button-view-result{
				button {
					border:none;
					height: 96rpx;
					line-height: 96rpx;
					background: #36C892;
					border-radius: 0;
					font-family: PingFangSC-Regular;
					font-size: 16px;
					color: #FFFFFF;
					text-align: center;
					&::after{
						border:none;
						border-radius:0;
					}
				}
			}
		}
	}
	
</style>
