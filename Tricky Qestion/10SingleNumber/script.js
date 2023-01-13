function singlNumber(nums) {
	for (let i = 0; i < nums.length; i++) {
		let res = 0;
		for (let j = 0; j < nums.length; j++) {
			if (nums[i] == nums[j]) {
				res++;
			}
		}
		if (res == 1) {
			return nums[i];
		}
	}
}

// let nums = [2, 2, 1];
let nums = [4, 1, 2, 1, 2];
// let nums = [1];
console.log(singlNumber(nums));
