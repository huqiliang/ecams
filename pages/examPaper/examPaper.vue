<template>
	<view class="exam-paper">
		<view class="progress-box">
			<!-- <progress class="progress" percent="20" stroke-width="6" :show-info="false" activeColor="#36C892" ></progress> -->
			<view class="progress">
				<view class="total-progress" >
					<view class="current-progress" :style="{width:percent+'%'}">
						<text class="pop" :style="[popStyleRight]">{{percent}}/100</text>
					</view>
				</view>
			</view>
			
		</view>
		<view class="count-down">
			<text class="count-down-text">倒计时：1：59</text>
		</view>
		
			<scroll-view  :scroll-y="true" style="height:100%;width: 100%;">
				<view class="exam-paper-option">
					<view class="exam-paper-card">
					<view class="exam-paper-title">
						<text>配伍选择题·第1题</text>
					</view>
					
						
							<view class="uni-flex exam-paper-option-box">
								<view class=" uni-flex-item-width">
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
								</view>
							</view>
						
						<!-- <scroll-view  :scroll-y="true" style="height:100%;width: 100%;"> -->
						<!-- <view style="overflow-y: scroll;height: 624rpx;"> -->
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>1.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>2.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>3.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>4.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>5.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>6.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>7.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>8.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
							<view class="exam-paper-topic">
								<view class="exam-paper-topic-title">
									<text>9.确立心脏骤停后给予的最基本的生命支持方法是：</text>
								</view>
								<view class="exam-paper-topic-option-list uni-flex">
									<text class="exam-paper-topic-option-item exam-paper-topic-option-item-active">A</text>
									<text class="exam-paper-topic-option-item">B</text>
									<text class="exam-paper-topic-option-item">C</text>
									<text class="exam-paper-topic-option-item">D</text>
									<text class="exam-paper-topic-option-item">E</text>
								</view>
							</view>
						<!-- </view> -->
						<!-- </scroll-view> -->
				</view>
				
			</view>
		</scroll-view>
		<view class="exam-paper-cooperation uni-flex">
			<view class="uni-flex-item exam-paper-cooperation-item"  @click="changeTopic('pre')">
				<text class="icon left-icon"></text><text>上一题</text>
			</view>
			<view  class="uni-flex-item exam-paper-cooperation-item">
				<text class="icon container-icon"></text><text>答题卡</text>
			</view>
			<view class="uni-flex-item exam-paper-cooperation-item" @click="changeTopic('next')">
				<text>下一题</text><text class="icon  right-icon"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent:87
			};
		},
		props:{
			time:{
				type:Number
			}
		},
		methods:{
			changeTopic(type) {
				if(type === 'next') {
					if(this.percent< 100){
						
					this.percent += 1
					}
				}else if(type === 'pre') {
					if(this.percent >0){
						
					this.percent -= 1
					}
				}
			}
		},
		computed:{
			popStyleRight() {
				const flag = 87
				if(this.percent <= 87 ){
					
					return {
						left: '100%'
					};
				}else {
					return {
						
						left: `${100 - (this.percent - flag)}%`
					}
				}
				
			}
		}
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
		
		.progress-box{
			
			padding-top: 10rpx;
			.progress{
				.total-progress {
					width: 100%;
					height: 12rpx;
					background:#EBEEEF;
					.current-progress{
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
			.count-down-text{
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
			.exam-paper-card{
				overflow: hidden;
				position: relative;
				width: 686rpx;
				
				margin:0 auto 126rpx;
				padding:0 32rpx;
				
				border-radius: 16rpx;
				background: #ffffff;
				.exam-paper-title{
					position: relative;
					margin:0 auto  64rpx;
					//position: absolute;
					width:392rpx;
					height:72rpx;
					display: block;
					z-index: 1;
					//padding-bottom:72rpx;
					
					
					
					padding:14rpx 70rpx;
					text{
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 32rpx;
						color: #FFFFFF;
						z-index: 1;
						 
					}
					&::before{
						content: '';
						background: #36C892;
						border-radius: 0 0 8px 8px;
						position: absolute;
						top:-30rpx;
						left:0;
						right:0;
						bottom:0;
						z-index: -1;
						transform: perspective(90rpx) rotateX(-5deg);
						
					}	
				
			}
			
				.exam-paper-option-box {
					flex-wrap: wrap;
					justify-content: flex-start;
					.uni-flex-item-width{
						box-sizing: border-box;
						min-width:311rpx;
						padding-right:31rpx;
						margin:8rpx 0;
						text{
							font-family: PingFangSC-Semibold;
							font-size: 32rpx;
							color: #333333;
							text-align: left;
						}
					}
				}
			}
			.exam-paper-topic{
				margin: 64rpx 0;
				.exam-paper-topic-title{
					margin-bottom: 16rpx;
					text{
						font-family: PingFangSC-Regular;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						text-align: left;
					}
				}
				.exam-paper-topic-option-list{
					justify-content: space-between;
					.exam-paper-topic-option-item{
						// box-sizing: border-box;
						display: block;
						width: 64rpx;
						height: 64rpx;
						border-radius: 50%;
						line-height: 64rpx;
						text-align: center;
						background-color:#F5F5F5;
						font-family: PingFangSC-Semibold;
						font-size: 32rpx;
						color: #333333;
						letter-spacing: 0;
						
					}
					.exam-paper-topic-option-item-active {
						border:1px solid #36C892;
						background: #EAF9F4;
						color:#36C892;	
						
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
			.exam-paper-cooperation-item{
				
				text-align: center;
				
				display:flex;
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
