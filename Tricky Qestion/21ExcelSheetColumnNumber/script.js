function titleToNumber(columnTitle) {
	let result = 0;
	let pow = 0;
	for (let i = columnTitle.length - 1; i >= 0; i--) {
		let val = columnTitle.charCodeAt(i) - 65 + 1;
		console.log(val);
		result += val * Math.pow(26, pow);
		pow++;
	}
	return result;
}
let columnTitle = "A";
// let columnTitle = "AB";
// let columnTitle = "ZY";
console.log(titleToNumber(columnTitle));

// function titleToNumber(columnTitle) {
// const charCodeBase = "A".charCodeAt();
// let n = titleToNumber.length;
// let number = 0;

// /*
//  * Think of it as base 26. For example,
//  * Column number of "AB" = 1 * 26^1 + 2 * 26^0
//  */
// for (let i = 0; i < titleToNumber.length; i++)
// 	number +=
// 		(titleToNumber.charCodeAt(i) - charCodeBase + 1) *
// 		Math.pow(26, n - i - 1);

// return number;

// }
// let columnTitle = "A";
// let columnTitle = "AB";
// let columnTitle = "ZY";
// console.log(titleToNumber(columnTitle));
