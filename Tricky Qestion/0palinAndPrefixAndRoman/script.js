//  {Palindorm  Question}
// function palindrome(n) {
// 	let result = 0;
// 	let x = 121;
// 	while (x != 0) {
// 		result = result * 10 + (x % 10);
// 		// console.log(result);
// 		x = Math.floor(x / 10);
// 		// console.log(x + " " + "x");
// 	}
// 	return result === n;
// }
// console.log(palindrome(121));

// {sum two element of arry}
// function towsum(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// }
// // let target = 9;
// let target = 6;
// let arr = [2, 3, 6, 4, 5, 3, 5, 7];
// console.log(towsum(arr, target));

// function romanint(s) {
// 	console.log(s);
// 	const obj = {
// 		I: 1,
// 		IV: 4,
// 		V: 5,
// 		IX: 9,
// 		X: 10,
// 		XL: 40,
// 		L: 50,
// 		XC: 90,
// 		C: 100,
// 		CD: 400,
// 		D: 500,
// 		CM: 900,
// 		M: 1000,
// 	};
// 	console.log(typeof obj);
// 	let result = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		// console.log(s);
// 		const curr = obj[s[i]];
// 		const next = obj[s[i + 1]];
// 		// console.log(next);
// 		if (curr < next) {
// 			result = result + next - curr;
// 			// console.log(result);
// 			i++;
// 		} else {
// 			result = result + curr;
// 			// console.log(result);
// 		}
// 	}
// 	return result;
// }

// console.log(romanint("IV"));

//  {Palindrome in String}
palind = (plin) => {
	let j = plin.length - 1;
	for (let i = 0; i < plin.length / 2; i++) {
		if (plin[i] !== plin[j]) {
			return "not palindrom";
		} else {
			j--;
		}
	}
	return "is palindrom";
};
console.log(palind("bab"));
