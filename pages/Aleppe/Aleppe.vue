<template>
	<view class="alppe-wrap">
		<t-table @change="change">
			<t-tr>
				<t-th>رەت سانى</t-th>
				<t-th>اراپشا</t-th>
				<t-th>حاپين</t-th>
			</t-tr>
			<t-tr v-for="item in tableList" :key="item.id">
				<t-td>{{ item.id }}</t-td>
				<t-td>{{ item.arab }}</t-td>
				<t-td>{{ item.hapin }}</t-td>
			</t-tr>
		</t-table>
		<view class="hapin-wrap">
			hapin(哈拼)，即哈萨克语拼音化，其来源于一项便于汉族学习哈萨克语的语言实验，致力于解决哈萨克语文字输入问题。哈拼目前主要由三个大项构成，即 哈拼标准化、哈拼输入法支持、哈拼开发工具。项目官网：https://ha-pin.github.io
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				tableList: [{
						id: 1,
						arab: 'ا',
						hapin: 'a'
					},
					{
						id: 2,
						arab: 'ٴا',
						hapin: 'xa'
					},
					{
						id: 3,
						arab: 'ب',
						hapin: 'b'
					},
					{
						id: 4,
						arab: 'ۆ',
						hapin: 'v'
					},
					{
						id: 5,
						arab: 'گ',
						hapin: 'g'
					},
					{
						id: 6,
						arab: 'ع',
						hapin: 'gh'
					},
					{
						id: 7,
						arab: 'د',
						hapin: 'd'
					},
					{
						id: 8,
						arab: 'ە',
						hapin: 'ye'
					},
					{
						id: 9,
						arab: 'ج',
						hapin: 'j'
					},
					{
						id: 10,
						arab: 'ز',
						hapin: 'z'
					},
					{
						id: 11,
						arab: 'ي',
						hapin: 'i'
					},
					{
						id: 12,
						arab: 'ك',
						hapin: 'k'
					},
					{
						id: 13,
						arab: 'ق',
						hapin: 'q'
					},
					{
						id: 14,
						arab: 'ل',
						hapin: 'l'
					},
					{
						id: 15,
						arab: 'م',
						hapin: 'm'
					},
					{
						id: 16,
						arab: 'ن',
						hapin: 'n'
					},
					{
						id: 17,
						arab: 'ڭ',
						hapin: 'ng'
					},
					{
						id: 18,
						arab: 'و',
						hapin: 'o'
					},
					{
						id: 19,
						arab: 'ٴو',
						hapin: 'xo'
					},
					{
						id: 20,
						arab: 'پ',
						hapin: 'p'
					},
					{
						id: 21,
						arab: 'ر',
						hapin: 'r'
					},
					{
						id: 22,
						arab: 'س',
						hapin: 's'
					},
					{
						id: 23,
						arab: 'ت',
						hapin: 't'
					}, {
						id: 24,
						arab: 'ۋ',
						hapin: 'w'
					}, {
						id: 25,
						arab: 'ۇ',
						hapin: 'u'
					}, {
						id: 26,
						arab: 'ٴۇ',
						hapin: 'xu/yu'
					},
					{
						id: 27,
						arab: 'ف',
						hapin: 'f'
					},
					{
						id: 28,
						arab: 'ح',
						hapin: 'h'
					},
					{
						id: 29,
						arab: 'ھ',
						hapin: 'hh'
					},
					{
						id: 30,
						arab: 'چ',
						hapin: 'ch'
					},
					{
						id: 31,
						arab: 'ش',
						hapin: 'sh'
					},
					{
						id: 32,
						arab: 'ى',
						hapin: 'e'
					},
					{
						id: 33,
						arab: 'ٴى',
						hapin: 'xe'
					}
				]
			}
		},
		methods: {
			change(e) {
				console.log(e.detail);
			},
		}
	}
</script>

<style lang="scss">
.hapin-wrap{
	margin: 15rpx;
}
</style>
