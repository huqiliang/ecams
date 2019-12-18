<template>
	<view class="transfer-application">
		<form @submit="formSubmit" @reset="formReset">
			<cell class="identity-auth-cell" title="类型" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.post" :range="formSelectList.typeList">
						<view class="right-value">{{formSelectList.postList[transferApplication.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="日期" >
				<view slot="right-content">
					<picker @change="bindDatePickerChange" mode="date" :value="transferApplication.time" >
						<view class="right-value">{{transferApplication.time}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="班次" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.post" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[transferApplication.post]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="换班人" >
				<view slot="right-content">
					<picker @change="bindPostPickerChange" mode="selector" :value="transferApplication.changeMan" :range="formSelectList.postList">
						<view class="right-value">{{formSelectList.postList[transferApplication.changeMan]}}</view>
					</picker>
				</view>
			</cell>
			<cell class="identity-auth-cell" title="理由" >
				<view slot="right-content">
					<textarea></textarea>
				</view>
			</cell>
			
			<button form-type="submit" class="identity-auth-button">提交</button>
		</form>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				transferApplication:{
					type:"",
					date:"",
					
				},
				formSelectList:{}
			};
		}
	}
</script>

<style lang="less">

</style>
