<script>
	import { userAuth, getOauth2OpenId } from "./server/modules/personInfo.js"
	export default {
		 onLaunch: async function() {
			uni.login({
				success: async (res) => {  
					try{
						const resultObj = await getOauth2OpenId(res.code);
						
						const userAuthResult = await userAuth(resultObj.openid);
						
						if(userAuthResult && userAuthResult.errorCode==='success') {
							
							if(userAuthResult.registered === "true") {
								
								uni.setStorageSync('userInfo', userAuthResult.userInfo);
							}else {
								const openid = resultObj.openid;
								const config = {
									url:`../identityAuth/identityAuth?openid=${openid}`,
									success:() => {
										
									},
									fail:(err) => {
										console.log("fail",err)
									}
								}
								uni.reLaunch(config)
							}
						}
					}catch(e){
						uni.showModal({
							title:`错误${JSON.stringify(e)}`,
							content:JSON.stringify(e)
						});
						//TODO handle the exception
					}
					
					
					
				}  
			});
			// if(!uni.getStorageSync("userInfo")){
			// 	const res = await  userAuth("abcd");
			// 	if(res && res.errorCode==='success'){
			// 		uni.setStorageSync('userInfo', res.userInfo);
			// 	}
			// }
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	 @import './common/uni.css';
</style>
