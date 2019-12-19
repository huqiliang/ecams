<template>
	<view class="answer-sheet">
		<view class="answer-sheet-type-tip">
			<view class="uni-flex">
				<view class="uni-flex-item">
					<text :class="[answerSheetMap[''],'dot-tip']"></text>
					<text></text>
				</view>
				<view class="uni-flex-item">
					<text class="dot-tip"></text>
					<text></text>
				</view>
				<view class="uni-flex-item">
					<text class="dot-tip"></text>
					<text></text>
				</view>
			</view>
		</view>
		<view class="uni-flex">
			<view class="uni-flex-item" v-for="(answer,index) in answerList" :key="index">
				<view class="">
					<text>{{index}}{{answerSheetMap[answer.status]}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const completeStyle = {
		notDone:'complete-not-done',
		correct:'complete-correct',
		error:'complete-error'
	}
	const unCompleteStyle = {
		current:'un-complete-current', 
		done: 'un-complete-done',  
		notDone: 'un-complete-not-done',
	}
	
	const dotTipMap = {
		
	}
	
	export default {
		props:{
		},
		data() {
			return {
				//答题卡是已完成还是未完成的答题卡
				isComplete:false,
				answerList:[
					{
						status:"0"
					},
					{
						status:"1"
					},
					{
						status:"2"
					},
					{
						status:"0"
					}
				]
			};
		},
		onLoad(option){
		},
		computed:{
			// 返回是完成还是未完成状态的样式
			answerSheetMap () {
				if(this.isComplete) {
					return this.completeState;
				}else{
					return this.unCompleteState;
				}
			},
			completeState (){
				return {
					0:"正确",
					1:"错误",
					2:"未做"
				}
			},
			unCompleteState (){
				return {
					0:"当前",
					1:"已做",
					2:"未做"
				}
			}
		}
	}
</script>

<style lang="less">
.answer-sheet {
	
	.answer-sheet-type-tip {
		
		.dot-tip{
			width: 24rpx;
			height: 24rpx;
			border-radius: 50%;
		}
	}
	.complete-not-done {
		border:2rpx solid #F5F5F5;
		background-color:#F5F5F5
	}
	.complete-correct {
		border:2rpx solid #36C892;
		background-color:#36C892
	}
	.complete-error {
		border: 2rpx solid #F5F5F5;
		background-color:#FFFFFF
	}
	.un-complete-current {
		border:2rpx solid #F5F5F5;
		background-color:#F5F5F5
	}
	.un-complete-done {
		border:2rpx solid #36C892;
		background-color:#FFFFFF
	}
	.un-complete-notDone {
		border:2rpx solid #F5F5F5;
		background-color:#FFFFFF
	}
}
</style>
