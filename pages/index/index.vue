<template>
	<view class="content">
		<wordle-header @changeLang="changeLang"></wordle-header>
		<view class="main-wrapper">
			<view class="text-area" v-for="(item, index) in answersList" :key="index" :class="{ rtl: lang === 1 }">
				<text class="text-box" v-for="(val, index) in item" :key="index" :class="{
            right: val[1] === 1,
            include: val[1] === 2,
            except: val[1] === 3,
          }">
					{{ val[0] }}
				</text>
			</view>
			<view v-if="!got" class="text-area" :class="{ rtl: lang == 1 }">
				<text class="text-box" v-for="(item, index) in answerLen" :key="index">
					{{ inputValue && inputValue[index] ? inputValue[index] : "" }}
				</text>
			</view>
			<view v-if="got">
				<view class="su-text">
					🎉 恭喜猜对了！累计找了{{sum}}个单词！
				</view>
				<view class="su-btn-wrap">
					<button class="su-btn" type="default" plain="true" size="mini">再来一个词</button>
					<button class="su-btn" type="default" plain="true" size="mini">分享</button>
				</view>
			</view>
		</view>
		<!--    <view class="locale-list">
      <view
        class="locale-item"
        v-for="(item, index) in locales"
        :key="index"
        @click="onLocaleChange(item)"
      >
        <text class="text">{{ item.text }}</text>
        <text class="icon-check" v-if="item.code == applicationLocale"></text>
      </view>
    </view> -->
		<view class="kb-wrap">
			<keyboard :lang="lang" @subWord="subWord" @submit="submit" @backspace="backspace" :included="arrIncluded"
				:right="arrRight" :except="arrExcept" />
		</view>
	</view>
</template>

<script>
	import Header from "./components/Header/Header.vue";
	import w from "../../static/word/index.js";
	import {
		randomNumExceptArr
	} from "../../utils/index.js";
	import Keyboard from "./components/Keyboard/Keyboard.vue";
	export default {
		components: {
			"wordle-header": Header,
			keyboard: Keyboard,
		},
		data() {
			return {
				systemLocale: "",
				applicationLocale: "",
				answer: ["aral", "ارا"],
				answersList: [],
				inputValue: [],
				ansLen: 0,
				lang: 1, // 0 hapin 1 arab
				included: new Set(),
				right: new Set(),
				except: new Set(),
				got: false,
				randNum: 0,
				// 本地存储
				finded: [], // 找到的单词
				sum: 0,
				// successRate: 0

			};
		},
		computed: {
			locales() {
				return [{
						text: this.$t("locale.auto"),
						code: "auto",
					},
					{
						text: this.$t("locale.zh-hans"),
						code: "zh-Hans",
					},
					{
						text: this.$t("locale.kz"),
						code: "kz",
					},
				];
			},
			answerLen() {
				return this.answer[this.lang].length;
			},
			arrRight() {
				return Array.from(this.right);
			},
			arrIncluded() {
				return Array.from(this.included);
			},
			arrExcept() {
				return Array.from(this.except);
			},
		},
		onLoad() {
			this.updateWord()
			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			this.applicationLocale = uni.getLocale();
			this.isAndroid = systemInfo.platform.toLowerCase() === "android";
			uni.onLocaleChange((e) => {
				this.applicationLocale = e.locale;
			});
		},
		onShow() {
			let _this = this
			uni.getStorage({
				key: "sum",
				success: function(res) {
					_this.sum = res.data
				}
			}) // finded
			uni.getStorage({
				key: "finded",
				success: function(res) {
					_this.finded = res.data
				}
			})
		},
		methods: {
			getLocale() {
				uni.getStorage({
					key: "sum",
					success: function(res) {
				  console.log(res.data); //123456789
					}
				})
			},
			onLocaleChange(e) {
				if (this.isAndroid) {
					uni.showModal({
						content: this.$t("index.language-change-confirm"),
						success: (res) => {
							if (res.confirm) {
								uni.setLocale(e.code);
							}
						},
					});
				} else {
					uni.setLocale(e.code);
					this.$i18n.locale = e.code;
				}
			},
			subWord(item) {
				if (this.inputValue.length < this.answer[this.lang].length) {
					this.inputValue.push(item[this.lang]);
				}
			},
			backspace(item) {
				if (this.inputValue.length > 0) {
					this.inputValue.pop();
				}
			},
			submit(item) {
				if (
					!this.got &&
					this.inputValue.length === this.answer[this.lang].length
				) {
					this.answersList.push(this.checkWord());
					this.inputValue = [];
				}
			},
			changeLang(isHapin) {
				if (isHapin) {
					this.lang = 0;
				} else {
					this.lang = 1;
				}
				this.inputValue = [];
				this.answersList = [];
				this.included.clear();
				this.right.clear();
				this.except.clear();
			},
			checkWord() {
				let r = [];
				let i = [];
				let e = [];
				const resList = [...this.inputValue].map((item, index) => {
					// 确认
					if (item === this.answer[this.lang].charAt(index)) {
						r.push(item);
						return [item, 1];
					}
					// 包含
					if (this.answer[this.lang].includes(item)) {
						i.push(item);
						return [item, 2];
					}
					// 除了
					e.push(item);
					return [item, 3];
				});
				this.included = new Set([...this.included, ...i]);
				this.right = new Set([...this.right, ...r]);
				this.except = new Set([...this.except, ...e]);

				if (resList.every((val) => val[1] === 1)) {
					this.got = true;
					uni.setStorage({
						key: "sum",
						data: ++this.sum
					})
					this.finded.push(this.randNum)
				}
				return resList;
			},
			aginWord() {
				this.got = false
				updateWord()
			},
			updateWord() {
				this.randNum = randomNumExceptArr(0, w.length - 1, [])
				this.answer = w[this.randNum].split("$").reverse()
			},
		},
	};
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.main-wrapper {
		padding-bottom: 400px;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;

		.text-box {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 40rpx;
			font-weight: blod;
			height: 80rpx;
			width: 80rpx;
			margin: 0 10rpx;
			border: 1px solid #f0f0f0;
		}
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.rtl {
		direction: rtl;
	}

	.include {
		color: #fff;
		background-color: #de7525;
	}

	.right {
		color: #fff;
		background-color: #1d9c9c;
	}

	.except {
		color: #fff;
		background-color: #5d6673;
	}

	.kb-wrap {
		width: 100%;
		margin: 0 auto;
	}

	.kb-wrap::after {
		content: "";
		display: block;
		/*必须是块级元素*/
		clear: both;
	}

	.su-text {
		padding: 20rpx 0;
	}

	.su-btn-wrap {
		display: flex;
		justify-content: space-between;
	}

	.su-btn {
		color: #1d9c9c !important;
		border: 1px solid #1d9c9c !important;
		background-color: rgba(0, 0, 0, 0);
	}
</style>
