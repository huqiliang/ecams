<template>
	<view class="transfer-application">
		<form @submit="formSubmit" @reset="formReset">
			<cell class="transfer-application-cell" title="类型" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.post" :range="formSelectList.typeList">
						<view class="right-value">{{formSelectList.postList[transferApplication.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="transfer-application-cell" title="日期" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="transferApplication.time" >
						<view class="right-value">{{transferApplication.time}}</view>
					</picker>
				</view>
			</cell>
			<cell class="transfer-application-cell" title="班次" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[transferApplication.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="transfer-application-cell" title="换班人" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.changeMan" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[transferApplication.changeMan]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="transfer-application-cell-reason" title="理由" :border="false" :arrow="false">
				<view class="transfer-application-reason" slot="right-content">
					<textarea ></textarea>
				</view>
			</cell>
			
			<button form-type="submit" class="transfer-application-button">提交</button>
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
			return {
				transferApplication:{
					type:"",
					date:"",
					
				},
				formSelectList:{
					postList:[]
				}
			};
		}
	}
</script>

<style lang="less">
	.transfer-application {
		position: fixed;		top:0;
		width:100%;
		height:100%;
		padding-top: 32rpx;
		background-color: #F7F9FA;
		.transfer-application-cell-reason {
			/deep/ .cell-right-content {
				justify-content: flex-start;
				.transfer-application-reason{
					position: absolute;
					top: 92rpx;
					left: 0;
					
					textarea {
						text-align: left;
						font-family: PingFangSC-Regular;
						font-size: 16px;
						color: #999999;
						letter-spacing: -0.39px;
						
					}
				}
			}
		}
		.transfer-application-button {
			position: fixed;
			bottom:0;
			width: 100%;
			height: 94rpx;
			border-radius: 0;
			background: #36C892;
			font-family: PingFangSC-Regular;
			font-size: 17px;
			color: #FFFFFF;
			letter-spacing: 0.29px;
			line-height: 94rpx;
			border:none;
			&::after{
				display: none;
			}
		}
	}
</style>
