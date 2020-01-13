<template>
	<view>
		<view>
			<text>{{title}}</text>
		</view>
		<view>
			<text>{{content}}</text>
		</view>
		<view>
			<button class='login-button' open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">确定</button>
			<button class='cancel' @click="cancel" >取消</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			cancel() {
				
			}
		}
	}
</script>

<style>
</style>
