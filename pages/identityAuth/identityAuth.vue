<template>
	<view class="identity-auth">
		<form @submit="formSubmit" @reset="formReset">
			<cell class="identity-auth-cell" title="名字" :arrow="false">
				<view slot="right-content">
					<input class="name-input right-value" placeholder-class="placeholder" placeholder="请输入" />
				</view>
			</cell>
			<cell class="identity-auth-cell" title="手机号" :arrow="false">
				<view slot="right-content">
					<input type="number" placeholder-class="placeholder" class="mobile-input right-value" placeholder="请输入" />
				</view>
			</cell>
			<cell class="identity-auth-cell" title="岗位" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[identityAuth.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="所属分站" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[identityAuth.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="执业资格" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[identityAuth.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="职称" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="identityAuth.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[identityAuth.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="调入急救中心时间" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="identityAuth.time" >
						<view class="right-value">{{identityAuth.time}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="党员" >
				<view slot="right-content">
					<picker @change="bindTGPickerChange" mode="selector" :value="identityAuth.tg" :range="formSelectList.tgList">
						<view class="right-value">{{formSelectList.tgList[identityAuth.tg]}}</view>
					</picker>
				</view>
			</cell>
			<button form-type="submit" class="identity-auth-button">提交</button>
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
			const currentDate = this.getDate()
			return {
				identityAuth:{
					name:"",
					mobile:"",
					post: 0,
					orgId: "",
					orgName: "",
					title: "",
					titleName: "",
					positionId: "",
					positionName:"",
					time: currentDate,
					tg:1
				},
				formSelectList:{
					postList:[
						"医生"
					],
					tgList:[
						"是",
						"否"
					]
				}
			};
		},
		onLoad() {
			uni.login({  
				success: function(res) {  
					// 获取code  
					console.log(JSON.stringify(res));  
				}  
			});  
			// const authorizeConfig = {
			// 	scope:'scope.userInfo',
			// 	success(){
			// 		console.log(123)
			// 		uni.getUserInfo({
			// 		  provider: 'weixin',
			// 		  success:  (infoRes) => {
			// 			console.log(infoRes);
			// 		  }
			// 		})
			// 	}
			// }
			// uni.authorize({
			//     scope: 'scope.userInfo',
			//     success() {
			//         uni.getUserInfo({
			//           provider: 'weixin',
					  
			// 		   withCredentials:true,    
			//           success:  (infoRes) => {
			//         	console.log(infoRes);
			//           }
			//         })
			//     }
			// })
			// uni.getUserInfo({
			//   provider: 'weixin',
			//    withCredentials:true,    
			//   success:  (infoRes) => {
			// 	console.log(infoRes);
			//   }
			// })
			// uni.getSystemInfo({
			// 	success:(res)=>{
			// 		console.log(res)
			// 	}
			// })
			
			
		},
		methods:{
			formSubmit() {
				alert('submit')
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
	padding-top:32rpx;
	background-color: #F7F9FA;
	.identity-auth-cell{
		.right-value {
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
