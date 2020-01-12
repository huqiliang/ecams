<script>
	import { userAuth } from "./server/modules/personInfo.js"
	export default {
		 onLaunch: async function() {
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
