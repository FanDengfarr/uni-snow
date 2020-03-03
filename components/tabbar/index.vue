<template>
	<view :class="$style.container" >
		<div v-for="(item,index) in list " :key="index" :class="[$style.index]">{{item}}</div>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				list:[1,2,3,4,5,6,6]
			}
		}
		}
</script>

<style lang="less" modules>
	.container{
		display: grid;
		grid-template-columns: repeat(auto-fit, 100px);
	}
</style>
