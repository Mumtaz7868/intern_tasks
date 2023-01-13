function filterNegNumber(nums) {
	// nums.sort();
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= 0) {
			res.push(nums[i]);
		}
	}
	return res;
}
let nums = [2, -2, -5, 3, 5, 6, 7, -1, 0, -3];
console.log(filterNegNumber(nums));
