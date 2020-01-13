<template>
	<view class="notice">
		<view class="notice-cell-container">
			<!-- <cell title="人脸数据"  content="尚未验证"></cell> -->
			<cell class="identity-auth-cell" title="姓名" :arrow="false">
				<view slot="right-content">
					<input class="name-input right-value" placeholder-class="placeholder" placeholder="请输入" :value="personInfo.userName" />
				</view>
			</cell>
			<cell class="identity-auth-cell" title="联系电话" :arrow="false">
				<view slot="right-content">
					<input type="number" placeholder-class="placeholder" class="mobile-input right-value" placeholder="请输入" :value="personInfo.mobilePhone" />
				</view>
			</cell>
			<!-- <cell title="姓名"  content="孙晋" :arrow="false"></cell> -->
			<!-- <cell title="生日"  content="1980-11-1" ></cell> -->
			<!-- <cell title="联系电话"  content="13812341234" :arrow="false"></cell> -->
			<cell class="identity-auth-cell" title="生日" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="personInfo.logonTime" >
						<view class="right-value">{{personInfo.logonTime}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="身份证号" :arrow="false">
				<view slot="right-content">
					<input class="name-input right-value" placeholder-class="placeholder" placeholder="请输入" :value="personInfo.userName" />
				</view>
			</cell>
			<!-- <cell title="身份证号"  content="330110198011011234" :arrow="false"></cell> -->
		</view>
		<view class="notice-cell-container">
			<cell class="identity-auth-cell" title="所属分站" >
				<view slot="right-content">
					<picker @change="bindOrgPickerChange" mode="selector" :range-key="'text'" :value="personInfo.orgId" :range="formSelectList.orgList">
						<view class="right-value">{{formSelectList.orgList[personInfo.orgId].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="岗位" >
				<view slot="right-content">
					<picker @change="bindStationPickerChange" mode="selector" :range-key="'text'" :value="personInfo.station" :range="formSelectList.stationList">
						<view class="right-value">{{formSelectList.stationList[personInfo.station].text}}</view>
					</picker>
				</view>
			</cell>
			
			<cell class="identity-auth-cell" title="执业资格" >
				<view slot="right-content">
					<picker @change="bindQualificationPickerChange" mode="selector" :range-key="'text'" :value="personInfo.qualification" :range="formSelectList.qualificationList">
						<view class="right-value">{{formSelectList.qualificationList[personInfo.qualification].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="职称" >
				<view slot="right-content">
					<picker @change="bindTitlePickerChange" mode="selector" :range-key="'text'" :value="personInfo.title" :range="formSelectList.titleList">
						<view class="right-value">{{formSelectList.titleList[personInfo.title].text}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="调入年月" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="personInfo.logonTime" >
						<view class="right-value">{{personInfo.logonTime}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="党员" >
				<view slot="right-content">
					<picker @change="bindPartyMemberPickerChange" mode="selector" :range-key="'text'" :value="personInfo.partyMember" :range="formSelectList.partyMemberList">
						<view class="right-value">{{formSelectList.partyMemberList[personInfo.partyMember].text}}</view>
					</picker>
				</view>
			</cell>
		</view>
		<button class="login-out">退出登录</button>
	</view>
</template>

<script>
	import cell from "@/components/Cell/CellItem.vue"
	import api from "@/server/";
	export default {
		components:{
			cell
		},
		data() {
			const currentDate = this.getDate()
			return {
				personInfo:{
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
					stationList:[],
					qualificationList:[],
					titleList:[],
					orgList: [],
					partyMemberList:[]
				}
			};
		},
		async onLoad(userInfo) {
			this.personInfo.userName = userInfo.nickName;
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
.notice {
	background-color: #f7f9fa;
	padding-top: 32rpx;
	padding-bottom: 94rpx;
	.notice-cell-container{
		margin-bottom: 32rpx;
		background-color: #fff;
		.cell-title {
			/deep/ text{
				font-family: PingFangSC-Regular;
				font-size: 32rpx;
				color: red;
				text-align: right;
				}
		}
	}
	.login-out{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 94rpx;
		background: #F74E41;
		font-family: PingFangSC-Regular;
		font-size: 34rpx;
		color: #FFFFFF;
		border-radius: 0;
		text-align: center;
		line-height: 94rpx;
	}
}
</style>
