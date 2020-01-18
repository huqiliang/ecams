<template>
	<view class="personInfo">
		<view class="personInfo-cell-container">
			<!-- <cell title="人脸数据"  content="尚未验证"></cell> -->
			
			<!-- <cell class="personInfo-cell" title="姓名" :arrow="false">
				<view slot="right-content">
					<input 	@blur="({detail:{value}})=>{
										this.changeInput(value,'userName')
								  }" 
									@confirm="({detail:{value}})=>{
										this.changeInput(value,'userName')
								  }" class="name-input right-value" placeholder-class="placeholder" placeholder="请输入" :value="personInfo.userName" />
				</view>
			</cell>
			<cell class="personInfo-cell" title="联系电话" :arrow="false">
				<view slot="right-content">
					<input type="number" @blur="({detail:{value}})=>{
										this.changeInput(value,'mobilePhone')
								  }" @confirm="({detail:{value}})=>{
										this.changeInput(value,'mobilePhone')
								  }" placeholder-class="placeholder" class="mobile-input right-value" placeholder="请输入" :value="personInfo.mobilePhone" />
				</view>
			</cell>
			<cell class="personInfo-cell" title="生日" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changeInput(value,'birthday')
								  }" mode="date" :value="personInfo.birthday" >
						<view class="right-value">{{personInfo.birthday}}</view>
					</picker>
				</view>
			</cell> -->
			<cell title="姓名"  :content="personInfo.userName" :arrow="false"></cell>
			<cell title="生日"  :content="personInfo.birthday" :arrow="false"></cell>
			<cell title="联系电话"  :content="personInfo.mobilePhone" :arrow="false"></cell>
			<!-- <cell class="personInfo-cell" title="身份证号" :arrow="false">
				<view slot="right-content">
					<input class="name-input right-value" @blur="({detail:{value}})=>{
										this.changeInput(value,'cardId')
								  }" @confirm="({detail:{value}})=>{
										this.changeInput(value,'cardId')
								  }" placeholder-class="placeholder" placeholder="请输入" :value="personInfo.cardId" />
				</view>
			</cell> -->
			<cell title="身份证号"  :content="personInfo.certificateNo" :arrow="false"></cell>
		</view>
		<view class="personInfo-cell-container">
			<cell class="cell-item" title="所属分站"  :content="formSelectList.orgIdList[getIndex(formSelectList.orgIdList,personInfo.orgId)].text" ></cell>
			<cell class="cell-item" title="岗位"  :content="formSelectList.stationList[getIndex(formSelectList.stationList,personInfo.station)].text" ></cell>
			<cell class="cell-item" title="执业资格"  :content="formSelectList.qualificationList[getIndex(formSelectList.qualificationList,personInfo.qualification)].text" ></cell>
			<cell class="cell-item" title="职称"  :content="formSelectList.titleList[getIndex(formSelectList.titleList,personInfo.title)].text" ></cell>
			<cell class="cell-item" title="调入年月"  :content="personInfo.logonTime" ></cell>
			<cell class="cell-item" title="党员"  :content="formSelectList.partyMemberList[getIndex(formSelectList.partyMemberList,personInfo.partyMember)].text" ></cell>
			<!-- <cell class="personInfo-cell" title="所属分站" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'orgId')
								  }" mode="selector" :range-key="'text'" :value="personInfo.orgId" :range="formSelectList.orgIdList">
						<view class="right-value">{{selectFormText('orgIdList',personInfo.orgId)}}</view>
					</picker>
				</view>
			</cell>
			<cell class="personInfo-cell" title="岗位" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'station')
								  }" mode="selector" :range-key="'text'" :value="personInfo.station" :range="formSelectList.stationList">
						<view class="right-value">{{selectFormText('stationList',personInfo.station)}}</view>
					</picker>
				</view>
			</cell>
			
			<cell class="personInfo-cell" title="执业资格" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'qualification')
								  }" mode="selector" :range-key="'text'" :value="personInfo.qualification" :range="formSelectList.qualificationList">
						<view class="right-value">{{selectFormText('qualificationList',personInfo.qualification)}}</view>
					</picker>
				</view>
			</cell>
			<cell class="personInfo-cell" title="职称" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'title')
								  }" mode="selector" :range-key="'text'" :value="personInfo.title" :range="formSelectList.titleList">
						<view class="right-value">{{selectFormText('titleList',personInfo.title)}}</view>
					</picker>
				</view>
			</cell>
			<cell class="personInfo-cell" title="调入年月" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'logonTime')
								  }" mode="date" :value="personInfo.logonTime" >
						<view class="right-value">{{personInfo.logonTime}}</view>
					</picker>
				</view>
			</cell>
			<cell class="personInfo-cell" title="党员" >
				<view slot="right-content">
					<picker @change="({detail:{value}})=>{
										this.changePicker(value,'partyMember')
								  }" mode="selector" :range-key="'text'" :value="personInfo.partyMember" :range="formSelectList.partyMemberList">
						<view class="right-value">{{formSelectList.partyMemberList[personInfo.partyMember].text }}</view>
					</picker>
				</view>
			</cell> -->
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
					orgId: '3',
					station:'2',
					title: '1',
					qualification:0,
					birthday: currentDate,
					logonTime: currentDate,
					partyMember:0,
					pictureUrl2:"",
					introduce:"",
					certificateNo:""
				},
				// personInfoSubmitForm:{
				// 	userCode: "",
				// 	wechatNo: "",
				// 	wechatName: "",
				// 	sex: "",
				// 	userName:"",
				// 	mobilePhone:"",
				// 	orgId: "1",
				// 	station:"0",
				// 	title: '0',
				// 	qualification:'0',
				// 	birthday: currentDate,
				// 	logonTime: currentDate,
				// 	partyMember:'0',
				// 	pictureUrl2:"",
				// 	introduce:""
				// },
				formSelectList:{
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
					orgIdList: [
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
					]
				}
			};
		},
		computed:{
			userInfo() {
				return uni.getStorageSync('userInfo')
			},
			selectFormText() {
					return function(key,id) {
						if(this.formSelectList[key]) {
							
							const findItem = this.formSelectList[key].find(item=>{
								return item.id === id;
							})
							if(findItem) {
								return findItem.text;
							}
						}
					}
			},
		},
		async onLoad() {
			const userInfo = uni.getStorageSync('userInfo');
			this.personInfo = userInfo;
			const formSelectList = await this.getFormSelectList();
			const {stationList,qualificationList,titleList,orgList,partyMemberList} = formSelectList;
			this.formSelectList = {
				stationList,qualificationList,titleList,orgIdList:orgList,partyMemberList
			}
			// const arr = ['orgId','station','qualification','title','partyMember']
			// arr.forEach(key=>{
			// 	this.personInfo[key] =  this.getIndex(this.formSelectList[`${key}List`],userInfo[key]);
			// })
			
			
			this.personInfo.logonTime = userInfo.logonTime.split(" ")[0];
			
		},
		methods:{
			getIndex(list,id) {
				const findIndex = list.findIndex(item=>{
					console.log(item)
					return item.id === id
				})
				console.log(findIndex);
				if(findIndex>-1) {
					
					return findIndex;
				}
			},
			getCode(list,index) {
				return list[index].id
			},
			async updateUserInfo() {
				const userInfo = {
					userCode: "",
					wechatNo: this.personInfo.wechatNo,
					wechatName: this.userInfo.nickName,
					sex: this.userInfo.gender,
					userName:this.personInfo.userName,
					mobilePhone:this.personInfo.mobilePhone,
					orgId: this.getCode(this.formSelectList.orgIdList,this.personInfo.orgId),
					station:this.getCode(this.formSelectList.stationList,this.personInfo.station),
					title: this.getCode(this.formSelectList.titleList,this.personInfo.title),
					qualification:this.getCode(this.formSelectList.qualificationList,this.personInfo.qualification),
					logonTime: this.personInfo.logonTime,
					partyMember:this.getCode(this.formSelectList.partyMemberList,this.personInfo.partyMember),
					pictureUrl2:"",
					introduce:""
				}
				const res = await api.personInfo.userRegister(userInfo);
				if(res.errorCode === 'success') {
					uni.showToast({
							title: '修改成功',
							duration: 2000
					});
				}
			},
			changeInput(value,key) {
				this.personInfo[key] = value;
				this.updateUserInfo();
			},
			changePicker(index,key) {
				const value = this.getCode(this.formSelectList[`${key}List`],index)
				this.personInfo[key] = value;
				this.updateUserInfo();
			},
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
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped lang="less">
.personInfo{
	background-color: #f7f9fa;
	padding-top: 32rpx;
	padding-bottom: 94rpx;
	.personInfo-cell-container{
		margin-bottom: 32rpx;
		background-color: #fff;
		.personInfo-cell{
			background-color: #fff;
			.cell-item {
				/deep/ .cell-wrapper {
					/deep/ .cell-container {
						/deep/ .cell-title {
							background-color: #fff;
							/deep/ .cell-title-text {
								font-family: PingFangSC-Regular;
								font-size: 32rpx;
								color: #333333;
								text-align: right;
							}
						}
						/deep/ .cell-right-content {
							/deep/ .cell-content-text {
								font-family: PingFangSC-Regular;
								font-size: 16px;
								color: #999999;
								letter-spacing: -0.39px;
								text-align: right;
							}
						}	
					}
				}
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
