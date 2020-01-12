<script>
	import { userAuth, getOauth2OpenId } from "./server/modules/personInfo.js"
	export default {
		 onLaunch: async function() {
			uni.login({
				success: async (res) => {  
					const result = await getOauth2OpenId(res.code);
					if(res.errorCode === 'success') {
						const userAuthResult = await userAuth("abcd1234");
						if(userAuthResult && userAuthResult.errorCode==='success') {
							if(userAuthResult.registered === "true") {
								
								uni.setStorageSync('userInfo', userAuthResult.userInfo);
							}else {
								const config = {
									url:"../identityAuth/identityAuth",
									success:()=>{
										console.log('success')
									},
									fail:(err) => {
										console.log("fail",err)
									}
								}
								uni.navigateTo(config)
							}
						}
					}
					console.log(res)
				}  
			});  
			if(!uni.getStorageSync("userInfo")){
				const res = await  userAuth("abcd");
				if(res && res.errorCode==='success'){
					uni.setStorageSync('userInfo', res.userInfo);
				}
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	 @import './common/uni.css';
</style>
