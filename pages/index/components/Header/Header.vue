<template>
	<view>
		<view class="Header-wrapper">
			<view class="">
				<text @click="handle" class="explain-wrapper">
					<text class="iconfont">&#xe600;</text>
				</text>
				<text>
					<!-- <text @click="toHapin"> {{ $t("index.table") }}</text> -->
					<text @click="toHapin" class="iconfont">&#xe778;</text>
				</text>
			</view>
			<view class="">
					<text>中文</text>
					<switch @change="changeLocale" color="#1d9c9c" style="transform:scale(0.7)" />
					<text @click="toHapin">hapin</text>
					<switch @change="changeLang" color="#1d9c9c" style="transform:scale(0.7)" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "wordle-header",
		data() {
			return {
				isHapin: false
			}
		},
		methods: {
			handle() {
				uni.navigateTo({
					url: `/pages/Rule/Rule?isHapin=${this.isHapin}`
				})
			},
			toHapin() {
				uni.navigateTo({
					url: `/pages/Hapin/Hapin?isHapin=${this.isHapin}`
				})
			},
			Close() {
				this.isShow = false;
			},
			changeLang() {
				this.isHapin = !this.isHapin
				this.$emit("changeLang", this.isHapin)
			},
			changeLocale(e) {
				if (e.detail.value) {
					// uni.setLocale(e.code);
					this.$i18n.locale = "zh-Hans";
				} else {
					// uni.setLocale("kz");
					this.$i18n.locale = "kz";
				}
			}
		}
	}
</script>

<style lang="scss">
	.Header-wrapper {
		display: flex;
		justify-content: space-between;
		width: 750rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		border-bottom: 2rpx solid #f5f6f7;
	}
	.explain-wrapper{
		margin-right: 12rpx;
	}
</style>
