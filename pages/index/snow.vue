<template>
	<view class="root">
		<view class="snow" v-for="(item,index) in array" :key="index"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array:new Array(250)
			}
		},
		computed: {},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.root {
		height: 100vh;
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		overflow: hidden;
		filter: drop-shadow(0 0 20upx white);
		
		// 从最小值到最大值的随机数
		@function random_range($min, $max) {
			$random_range: $min+floor( random() * (($max - $min) + 1));
			@return $random_range;
		}

		.snow {
			$total: 250;
			position: absolute;
			width: 20upx;
			height: 20upx;
			background-color: #ffffff;
			border-radius: 50%;

			@for $i from 1 through $total {
				$random-x: random(100)*1vw;
				$random-offset: random_range(-10, 10)*1vw;
				$random-x-end: $random-x + $random-offset;
				$random-x-end-yoyo: $random-x +($random-offset / 2);
				$random-yoyo-time: random_range(0.3,0.8);
				$random-yoyo-y: $random-yoyo-time * 100vh;
				$random-scale: random();
				$fall-duration: random_range(10, 30) * 1s;
				$fall-delay: random(30) * -1s;

				&:nth-child(#{$i}) {
					opacity: random();
					transform: translate($random-x, -20upx) scale($random-scale);
					animation: fall-#{$i} $fall-duration $fall-delay linear infinite;

				}

				@keyframes fall-#{$i} {
					#{percentage($random-yoyo-time)} {
						transform: translate($random-x-end, $random-yoyo-y) scale($random-scale)
					}

					to {
						transform: translate($random-x-end-yoyo, 100vh) scale($random-scale)
					}
				}
			}
		}
	}
</style>
