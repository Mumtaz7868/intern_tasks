// function fib(n) {
// 	if (n <= 1) return n;
// 	return fib(n - 1) + fib(n - 2);
// }

// function countWays(s) {
// 	return fib(s + 1);
// }

// let s = 2;
// console.log(countWays(s));

//  {Second way}
var climbStairs = function (n) {
	var result = 0;
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;
	var prepre = 1;
	var pre = 2;
	for (var i = 2; i < n; i++) {
		result = prepre + pre;
		prepre = pre;
		pre = result;
	}
	return result;
};
