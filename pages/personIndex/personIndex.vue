<template>
	<view class="person-index">
		
		<view class="nav-bar-title-and-person-info-bg">
			<view class="nav-bar-wrapper" :style="{height:nav_bar_wrapper_height}">
				<view class="status_bar" :style="{height:status_bar_height}">
					  <!-- 这里是状态栏 -->
				</view>
				<!-- :style="{top:status_bar_height}" -->
				<view class="nav-bar"  >
					<text class="nav-bar-title">个人中心</text>
				</view>
			</view>
			<view class="person-user-info uni-flex" :style="{'padding-top':nav_bar_wrapper_height}">
				<view class="person-user-info-left  uni-flex">
					<view class="avart">
						<image></image>
					</view>
					<view class="area">
						<view class="name">
							<text>{{userInfo.userName}}</text>
						</view>
						<view>
							<text class="station1">{{userInfo.station}} </text>
							<text class="station2">金城分站 </text>
							<text class="title-name">{{userInfo.labelName}} </text>
						</view>
					</view>
				</view>
				<navigator url="../notice/notice" animationType='pop-in' animationDuration="200" >
					<view class="message has-message ">
					</view>
				</navigator>
			</view>
		</view>
		<view class="person-index-info-bar uni-flex">
			<view class="diligence uni-flex-item" >
				<view class="diligence-number">
					<text>
						{{userInfo.systemKbn}}
					</text>
				</view>
				<view class="diligence-text">
					<text>
						勤奋值
					</text>
				</view>
			</view>
			<view class="my-exam uni-flex-item">
				<view class="my-exam-number">
					<text>
						2
					</text>
				</view>
				<view class="my-exam-text">
					<text>
						我的考试
					</text>
				</view>
			</view>
		</view>
		<view class="person-index-main">
			<view class="person-index-main-wrapper">
				<view class="person-index-main-bar uni-flex">
					
					<view class="bar-item uni-flex-item" v-for="item in barList">
						<navigator :url="item.url">
							<view class="">
								<image class="bar-item-image" :src="item.icon" mode=""></image>
							</view>
							<view class="">
								<text class="bar-item-text">{{item.name}}</text>
							</view>
						</navigator>
					</view>
				</view>
				
			</view>
		</view>
		<view  class="person-index-main-step">
			<personStep list="messageList"></personStep>
			
		</view>
	</view>
</template>

<script>
		import {ERR_OK} from "@/utils/config.js"
	import personStep from "./personStep.vue"
	import api from "@/server/index.js"
	export default {
		components:{
			personStep
		},
		data() {
			return {
				userInfo:{},
				messageList:[],
				barList:[
					{
						url:"",
						icon:"../../static/icon_pbb@3x.png",
						name:"排班表"
					},
					{
						url:"../examLearn/examLearn",
						icon:"../../static/icon_ks@3x.png",
						name:"考试学习"
					},
					{
						url:"",
						icon:"../../static/icon_hy@3x.png",
						name:"会议"
					},
					{
						url:"",
						icon:"../../static/icon_ywpm@3x.png",
						name:"业务排名"
					}
				]
			};
		},
		computed:{
			
			nav_bar_wrapper_height() {
				const nav_bar_wrapper_height = 
				 uni.getSystemInfoSync().statusBarHeight + 44 + 'px';
				 return nav_bar_wrapper_height
			},
			person_user_info_height() {
				const nav_bar_wrapper_height =
				 uni.getSystemInfoSync().statusBarHeight + 44 + 'px';
				 return nav_bar_wrapper_height
			},
			status_bar_height(){
				return uni.getSystemInfoSync().statusBarHeight + 'px';
			}

		},
		onLoad() {
			this.userHomePageInfo()
		},
		methods:{
			async userHomePageInfo(userId="1",wechatNo="abcd") {
				
				const res =await api.personInfo.userHomePageInfo(userId,wechatNo);
				if(res.data.errorCode === ERR_OK){
					this.userInfo = res.data.userInfo
					this.messageList = res.data.messageList
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/mixins.less";
	.person-index{
		
		width:100%;
		height:100%;
		//position: fixed;
		background-color: #F7F9F4;
		.nav-bar-title-and-person-info-bg {
			width: 100%;
			
			background-image: linear-gradient(225deg, #4BDB9B 0%, #4AB8AF 100%);
			margin-bottom: 100rpx;
			.nav-bar-wrapper {
				position:fixed;
				width:100%;
				
				//height: 548rpx;
				.status_bar {
					//position:fixed;
					//top:0;
					width: 100%;
					// height:40rpx;
				}
				.nav-bar{
					position:fixed;
					width: 100%;
					//background-image: linear-gradient(225deg, #4BDB9B 0%, #4AB8AF 100%);
					z-index: 1;
					//height: 548rpx;
					line-height: 88rpx;
					text-align: center;
					.nav-bar-title {
						color:#FFFFFF;
						font-family: PingFangSC-Regular;
						font-size: 34rpx;
					}
				}
			}
			.person-user-info {
				
				box-sizing: border-box;
				justify-content: space-between;
				align-items: center;
				//height: 292rpx;
				padding:40rpx 32rpx 132rpx;
				.avart{
				
					flex-basis:16%;
					height: 120rpx;
					margin-right: 32rpx;
					image {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						background-color: #FFFFFF;
					}
				}
				.area{
					.name {
						font-family: PingFangSC-Medium;
						font-size: 17px;
						color: #FFFFFF;
						
						text-align: left;
					}
					.station1,.station2,.title-name {
						font-family: PingFangSC-Regular;
						font-size: 14px;
						color: #FFFFFF;
						letter-spacing: 0.23px;
						text-align: left;
					}
				}
				.message{
					width: 48rpx;
					height: 48rpx;
					.bg-image("../static/icon_msg_tip");
					background-position: center center;					background-size:cover;
					background-repeat: no-repeat;
					position:relative;
				}
				.has-message {
					&::before {
						position:absolute;
						content:"";
						width: 16rpx;
						height: 16rpx;
						border-radius: 50%;
						background-color:#FF3B30;
						right:0
					}
				}
			}
		}
		.person-index-info-bar {
			justify-content: space-around;
			padding-top:32rpx;
			// align-items: center;
			position:absolute;
			width:686rpx;
			height:256rpx;
			left: 50%;
			margin-left:-343rpx;
			margin-top : -196rpx;
			background: #FFFFFF;
			border-top-left-radius: 16rpx;
			border-top-right-radius: 16rpx;
			.diligence {
				text-align: center;
				.diligence-number {
					text {
						font-family: PingFangSC-Regular;
						font-size: 30px;
						color: #333333;
						
						text-align: center;
					}
				}
					
				.diligence-text{
					text{
						font-family: PingFangSC-Regular;
						font-size: 13px;
						color: #999999;
						
					}
				}
			}
			.my-exam {
				text-align: center;
				.my-exam-number {
					text {
						font-family: PingFangSC-Regular;
						font-size: 30px;
						color: #333333;
						
						text-align: center;
					}
				}
					
				.my-exam-text{
					text{
						font-family: PingFangSC-Regular;
						font-size: 13px;
						color: #999999;
						
					}
				}
			}
			
		}
		.person-index-main{
			position: relative;
			background-color: #ffffff;
			box-shadow: 0px -6px 20px 0px #eee;
			.person-index-main-wrapper{
				margin: 0 32rpx;
				.person-index-main-bar{
					padding: 52rpx 0 80rpx;
					justify-content: space-around;
					.bar-item {
						text-align: center;
						.bar-item-image{
							width:94rpx;
							height:94rpx;
							border-radius: 50%;
						}
						.bar-item-text {
							font-family: PingFangSC-Regular;
							font-size: 24rpx;
							color: #333333;
							text-align: center;
							line-height: 32rpx;
						}
					}
				}
				
			}
		}
		.person-index-main-step{
			// overflow-y: scroll;
			//height: 886rpx;
			//padding-bottom: 40rpx;
			z-index: 3;
			position: relative;
		}

	}
</style>
