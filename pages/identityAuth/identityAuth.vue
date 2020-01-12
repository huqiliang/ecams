<template>
	<view class="identity-auth">
		<form @submit="formSubmit" @reset="formReset">
			<cell class="identity-auth-cell" title="名字" :arrow="false">
				<view slot="right-content">
					<input class="name-input right-value" placeholder-class="placeholder" placeholder="请输入" :value="identityAuth.userName" />
				</view>
			</cell>
			<cell class="identity-auth-cell" title="手机号" :arrow="false">
				<view slot="right-content">
					<input type="number" placeholder-class="placeholder" class="mobile-input right-value" placeholder="请输入" :value="identityAuth.mobilePhone" />
				</view>
			</cell>
			<cell class="identity-auth-cell" title="岗位" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.station" :range="formSelectList.stationList">
						<view class="right-value">{{formSelectList.stationList[identityAuth.station]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="所属分站" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.orgId" :range="formSelectList.orgList">
						<view class="right-value">{{formSelectList.orgList[identityAuth.orgId] || "请选择所属分站"}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="执业资格" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[identityAuth.post]  || "请选择执业资格"}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="职称" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.title" :range="formSelectList.titleList">
						<view class="right-value">{{formSelectList.titleList[identityAuth.title] || "请选择职称"}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="调入急救中心时间" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="identityAuth.logonTime" >
						<view class="right-value">{{identityAuth.logonTime || "请选择调入急救中心时间"}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="党员" >
				<view slot="right-content">
					<picker @change="bindTGPickerChange" mode="selector" :value="identityAuth.tg" :range="formSelectList.tgList">
						<view class="right-value">{{formSelectList.tgList[identityAuth.tg] || "请选择党员"}}</view>
					</picker>
				</view>
			</cell>
			<button form-type="submit" class="identity-auth-button">提交</button>
		</form>	
	</view>
</template>

<script>
	import cell from "@/components/Cell/CellItem.vue"
	import api from '@/server/index';
	export default {
		components:{
			cell
		},
		data() {
			const currentDate = this.getDate()
			return {
				identityAuth:{
					
					// userCode: "shenlu",
					// "wechatNo": "",
					// "wechatName": "",
					/* "sex": "", */
					userName:"",
					mobilePhone:"",
					orgId: "0",
					station:"0",
					title: "0",
					tg:"0",
					logonTime: currentDate,
					
					pictureUrl2:"",
					introduce:""
				},
				formSelectList:{
					stationList:[
						"医生"
					],
					titleList:["中级医生"],
					orgList:[],
					tgList:[
						"是",
						"否"
					]
				}
			};
		},
		onLoad() {
		},
		methods:{
			async formSubmit() {
				const userInfo = {
					...this.identityAuth
				}
				const res = await api.personInfo.userRegister(userInfo);
				if(res.errorCode === 'success') {
					// const config = {
					// 	url:"../personIndex/personIndex",
					// 	success:()=>{
					// 		console.log('success',res);
					// 	},
					// 	fail:(err) => {
					// 		console.log("fail",err)
					// 	}
					// }
					// uni.navigateTo(config)
				}
			},
			formReset() {
				
			},
			bindDatePickerChange({detail: {value}}) {
				this.identityAuth.time = value;
			},
			bindTGPickerChange({ detail: { value } }) {
				
				this.identityAuth.tg = value;
			},
			bindPostPickerChange() {
			
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}年${month}月${day}日`;
			}
		}
	}
</script>

<style scoped lang="less">
.identity-auth {
	width:100%;
	height:100vh;
	background:rgb(247,249,250);
	padding-top:32rpx;
	background-color: #F7F9FA;
	.identity-auth-cell{
		.right-value {
			display: block;
			width:100%;
			font-family: PingFangSC-Regular;
			font-size: 32rpx;
			text-align: right;
			color: #333333;
		}
		.name-input {
			
		}
		.placeholder {
			font-size: 32rpx;
			color: #999999;
			text-align: right;
		}
	}
	.identity-auth-button{
		position:fixed;
		width:100%;
		height: 94rpx;
		background: #36C892;
		font-family: PingFangSC-Regular;
		font-size: 34rpx;
		color: #FFFFFF;
		border-radius: 0;
		bottom:0;
	}
	/deep/ .cell-wrapper {
		/deep/ .cell-container {	
			/deep/ .cell-title {
				/deep/ .cell-title-text {	
					font-family: PingFangSC-Regular;
					font-size: 34rpx;
					color: #333333;
					text-align: left;
				}
			}
			/deep/ .cell-right-content {
				
			}
		}
	}
}
</style>
