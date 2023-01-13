function containsDublicate(nums) {
	nums.sort(function (a, b) {
		return a - b;
	});
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			return true;
		}
	}
	return false;
}
// let nums = [1, 2, 3, 1];
let nums = [2, 14, 18, 22, 22];
// let nums = [1, 2, 3, 4];
// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDublicate(nums));
