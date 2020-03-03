<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title" @click="goTo">{{changeTitle}}</text>
			<view class="title" @click="goToSnow">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log('iiii');
		},
		computed: {
			changeTitle() {
				return 'helloeee'
			},
		},
		data() {
			return {
				title: 'value'
			}
		},
		methods: {
			goTo() {
				uni.navigateTo({
					url: './index'
				})
			},
			goToSnow() {
				uni.navigateTo({
					url: './snow',
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
