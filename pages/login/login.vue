<template>
	<view>
		<button class='login-button' open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">用户一键登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			};
		},
		onLoad() {
			uni.login({
				success: function(res) {  
					// 获取code  
					console.log(JSON.stringify(res));  
				}  
			});  
			uni.authorize({
				scope: 'scope.userLocation',
				success() {
					uni.getLocation()
				}
			})
		},
		methods:{
			getuserinfo: ()=>{
				// wx登录
				wx.login({
				  success (res) {
					if (res.code) {
					  //发起网络请求
					  var code = res.code
						// 获取微信用户信息
						wx.getUserInfo({
						  success: function(res) {
							console.log(res);
							var userInfo = res.userInfo
							var nickName = userInfo.nickName
							var avatarUrl = userInfo.avatarUrl
							var gender = userInfo.gender //性别 0：未知、1：男、2：女
							var province = userInfo.province
							var city = userInfo.city
							var country = userInfo.country
						  },
						  fail:res=>{
							  // 获取失败的去引导用户授权 
						   }
						})
						
					}
				  }
				})
			}
		}
	}
</script>

<style lang="less">
.login-button {
	background: #36C892;
	color:#fff;
}
</style>
