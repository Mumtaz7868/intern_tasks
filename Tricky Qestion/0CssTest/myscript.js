// var romanToInt = function (s) {
// 	let Roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// 	let count = 0;

// 	for (var i = 0; i < s.length; i++) {
// 		count = count + Roman[s[i]];
// 	}
// 	return count;
// };
// console.log(romanToInt("IV"));

// function romanint(num) {
// 	var romanObj = {
// 			M: 1000,
// 			CM: 900,
// 			D: 500,
// 			CD: 400,
// 			C: 100,
// 			XC: 90,
// 			L: 50,
// 			XL: 40,
// 			X: 10,
// 			IX: 9,
// 			V: 5,
// 			IV: 4,
// 			I: 1,
// 		},
// 		roman = "";
// 	for (i in romanObj) {
// 		while (num >= romanObj[i]) {
// 			roman = roman + i;
// 			num = num - romanObj[i];
// 		}
// 	}
// 	return roman;
// }
// console.log(romanint(7));
