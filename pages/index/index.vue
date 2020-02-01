<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				interval: ''
			}
		},
		methods: {
			hasUserInfo() {
				if (uni.getStorageSync('userInfo')) {
					return true
				} else {
					return false
				}
			}
		},
		onShow() {
			this.interval = setInterval(() => {
				console.log(this.hasUserInfo())
				if (this.hasUserInfo()) {
					clearInterval(this.interval)
					uni.redirectTo({
						url: '../personIndex/personIndex',
					});
				}
			}, 1000)

		},
		onHide() {
			clearInterval(this.interval)
		}
	}
</script>

<style scoped>

</style>
