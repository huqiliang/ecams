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
					<picker @change="bindStationPickerChange" mode="selector" :range-key="'text'" :value="identityAuth.station" :range="formSelectList.stationList">
						<view class="right-value">{{formSelectList.stationList[identityAuth.station].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="所属分站" >
				<view slot="right-content">
					<picker @change="bindOrgPickerChange" mode="selector" :range-key="'text'" :value="identityAuth.orgId" :range="formSelectList.orgList">
						<view class="right-value">{{formSelectList.orgList[identityAuth.orgId].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="执业资格" >
				<view slot="right-content">
					<picker @change="bindQualificationPickerChange" mode="selector" :range-key="'text'" :value="identityAuth.qualification" :range="formSelectList.qualificationList">
						<view class="right-value">{{formSelectList.qualificationList[identityAuth.qualification].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="职称" >
				<view slot="right-content">
					<picker @change="bindTitlePickerChange" mode="selector" :range-key="'text'" :value="identityAuth.title" :range="formSelectList.titleList">
						<view class="right-value">{{formSelectList.titleList[identityAuth.title].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="调入急救中心时间" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="identityAuth.logonTime" >
						<view class="right-value">{{identityAuth.logonTime}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="党员" >
				<view slot="right-content">
					<picker @change="bindPartyMemberPickerChange" mode="selector" :range-key="'text'" :value="identityAuth.partyMember" :range="formSelectList.partyMemberList">
						<view class="right-value">{{formSelectList.partyMemberList[identityAuth.partyMember].text}}</view>
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
					userCode: "",
					wechatNo: "",
					wechatName: "",
					sex: "",
					userName:"",
					mobilePhone:"",
					orgId: 0,
					station:0,
					title: 0,
					qualification:0,
					logonTime: currentDate,
					partyMember:0,
					pictureUrl2:"",
					introduce:""
				},
				formSelectList:{
					stationList: [
					    {
					      "id": "1",
					      "text": "主任"
					    },
					    {
					      "id": "2",
					      "text": "副主任"
					    },
					    {
					      "id": "3",
					      "text": "科室负责人"
					    },
					    {
					      "id": "4",
					      "text": "分站长"
					    },
					    {
					      "id": "5",
					      "text": "调度员"
					    },
					    {
					      "id": "6",
					      "text": "医生"
					    },
					    {
					      "id": "7",
					      "text": "护士"
					    },
					    {
					      "id": "8",
					      "text": "驾驶员"
					    },
					    {
					      "id": "9",
					      "text": "担架员"
					    }
					  ],
					qualificationList: [
					    {
					      "id": "0",
					      "text": "否"
					    },
					    {
					      "id": "1",
					      "text": "是"
					    }
					  ],
					titleList: [
					    {
					      "id": "1",
					      "text": "主任医师"
					    },
					    {
					      "id": "2",
					      "text": "副主任医师"
					    },
					    {
					      "id": "3",
					      "text": "主治医师"
					    },
					    {
					      "id": "4",
					      "text": "医师"
					    },
					    {
					      "id": "5",
					      "text": "医士"
					    },
					    {
					      "id": "6",
					      "text": "主任护师"
					    },
					    {
					      "id": "7",
					      "text": "副主任护师"
					    },
					    {
					      "id": "8",
					      "text": "主管护师"
					    },
					    {
					      "id": "9",
					      "text": "护师"
					    },
					    {
					      "id": "10",
					      "text": "护士"
					    }
					  ],
					orgList: [
					    {
					      "id": "1",
					      "text": "金城分站"
					    },
					    {
					      "id": "2",
					      "text": "中桥分站"
					    },
					    {
					      "id": "3",
					      "text": "虹桥分站"
					    }
					  ],
					partyMemberList: [
					    {
					      "id": "0",
					      "text": "否"
					    },
					    {
					      "id": "1",
					      "text": "是"
					    }
					  ],
				}
			};
		},
		onShow: function() {
			uni.hideHomeButton()
			console.log('App Show')
		},
		async onLoad(openidObj) {
			this.identityAuth.wechatNo = openidObj.openid;
			const formSelectList = await this.getFormSelectList();
			const {stationList,qualificationList,titleList,orgList,partyMemberList} = formSelectList;
			this.formSelectList = {
				stationList,qualificationList,titleList,orgList,partyMemberList
			}
		},
		methods:{
			async getFormSelectList() {
				const res = await api.personInfo.userRegisterInit();
				if(res.errorCode === 'success') {
					return res;
				}
			},
			async formSubmit() {
				const localStorageUserInfo = uni.getStorageSync("userInfo");
				const userInfo = {
					userCode: "",
					wechatNo: this.identityAuth.wechatNo,
					wechatName: "",
					sex: "",
					userName:this.identityAuth.userName,
					mobilePhone:this.identityAuth.mobilePhone,
					orgId: this.getCode(this.formSelectList.orgList,this.identityAuth.orgId),
					station:this.getCode(this.formSelectList.stationList,this.identityAuth.station),
					title: this.getCode(this.formSelectList.titleList,this.identityAuth.title),
					qualification:this.getCode(this.formSelectList.qualificationList,this.identityAuth.qualification),
					logonTime: this.identityAuth.logonTime,
					partyMember:this.getCode(this.formSelectList.partyMemberList,this.identityAuth.partyMember),
					pictureUrl2:"",
					introduce:""
				}
				const res = await api.personInfo.userRegister(userInfo);
				if(res.errorCode === 'success') {
					const config = {
						url:"../personIndex/personIndex",
						success:()=>{
							console.log('success',res);
						},
						fail:(err) => {
							console.log("fail",err)
						}
					}
					uni.navigateTo(config)
				}
			},
			formReset() {
				
			},
			getCode(list,index) {
				return list[index].id
			},
			bindStationPickerChange({detail:{value}}) {
				this.identityAuth.station = value;
			},
			bindOrgPickerChange({detail:{value}}) {
				this.identityAuth.orgId = value;
			},
			bindQualificationPickerChange({detail:{value}}) {
				this.identityAuth.qualification = value;
			},
			bindTitlePickerChange({detail:{value}}) {
				this.identityAuth.title = value;
			},
			bindPartyMemberPickerChange({detail:{value}}) {
				this.identityAuth.partyMember = value;
			},
			bindDatePickerChange({detail: {value}}) {
				this.identityAuth.time = value;
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
				return `${year}-${month}-${day}`;
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
