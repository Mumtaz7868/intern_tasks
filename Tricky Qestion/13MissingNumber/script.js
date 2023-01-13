function missingNumber(nums) {
	nums.sort(function (a, b) {
		return a - b;
	});
	let res = 0;
	let sum = 0;
	let n = nums.length;
	for (let i = 0; i < nums.length; i++) {
		res += nums[i];
		sum = (n * (n + 1)) / 2;
	}
	return sum - res;
}
// let nums = [3, 0, 1];
let nums = [0, 1];
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums));
