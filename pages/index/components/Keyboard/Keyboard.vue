<template>
	<view class="keyboard-wrapper">
		<text class="kb-text" :class="[setClass(item)]" v-for="(item,index) in kb" :key="item[0]" @click="subWord(item)">
			{{item[lang]}}
		</text>
		<text class="kb-text kb-backspace" @click="backspace">←</text>
		<text class="kb-text kb-submit" @click="submit">确定</text>
	</view>
</template>

<script>
	export default {
		props: {
			lang: Number,
			included: Array,
			right: Array,
			except: Array
		},
		data() {
			return {
				kb: {
					a: ["a", "ا"],
					b: ["b", "ب"],
					d: ["d", "د"],
					e: ["e", "ى"],
					f: ["f", "ف"],
					g: ["g", "گ"],
					h: ["h", "ح"],
					i: ["i", "ي"],
					j: ["j", "ج"],
					k: ["k", "ك"],
					l: ["l", "ل"],
					m: ["m", "م"],
					n: ["n", "ن"],
					o: ["o", "و"],
					p: ["p", "پ"],
					q: ["q", "ق"],
					r: ["r", "ر"],
					s: ["s", "س"],
					t: ["t", "ت"],
					u: ["u", "ۇ"],
					v: ["v", "ۆ"],
					w: ["w", "ۋ"],
					z: ["z", "ز"],
					ye: ["ye", "ە"],
					gh: ["gh", "ع"],
					hh: ["hh", "ھ"],
					ng: ["ng", "ڭ"],
					sh: ["sh", "ش"],
					ch: ["ch", "چ"],
					xa: ["xa", "ٴا"],
					xe: ["xe", "ٴى"],
					xo: ["xo", "ٴو"],
					xu: ["xu", "ٴۇ"],
				}
			}
		},
		methods: {
			subWord(item) {
				if(this.except.includes(item[this.lang])) return
				console.log(item)
				console.log(this.lang)
				this.$emit("subWord", item);
			},
			submit() {
				this.$emit("submit");
			},
			backspace(item) {
				this.$emit("backspace", item);
			},
			setClass(item) {
				if (this.right.includes(item[this.lang])) return "right"

				if (this.included && this.included.includes(item[this.lang])) return "include"
				if (this.except && this.except.includes(item[this.lang])) return "except"
				return {}
			}
		}
	}
</script>

<style lang="scss">
	.keyboard-wrapper {
		position: fixed;
		width: 100%;
		max-width: 750px;
		bottom: 0;
		left: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		background-color: #FFFFFF;

		.kb-text {
			height: 70rpx;
			width: 16.6666666666666%;
			// margin: 7rpx;
			text-align: center;
			line-height: 70rpx;
			font-size: 40rpx;
			font-weight: blod;
			box-sizing: border-box;
			border: 4rpx solid #f0f0f0;
			border-radius: 4rpx;
		}

		.kb-submit {
			width: 33.33333%;
			color: #FFF;
			background-color: #0d828e;
		}
	}

	.include {
		color: #FFF;
		background-color: #de7525;
	}

	.right {
		color: #FFF;
		background-color: #1d9c9c;
	}

	.except {
		color: #FFF;
		background-color: #5d6673;
	}
</style>
