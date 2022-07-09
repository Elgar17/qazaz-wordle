// 生成随机数，排除数组 exceptList中的数字 
export const randomNumExceptArr = (l, r, exceptList) => {
	if (exceptList.length >= r - l) return -1
	let ran = randomNum(l,r)
	// return 1
	if (exceptList.some(v => v == ran)) {
		randomNumExceptArr(l, r, exceptList)
	} else {
		return ran
	}
}


export const randomNum = (l, r) => {
	return Math.floor(Math.random() * (r - l + 1) + l)
}
