function moveZeros(nums) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			nums[res] = nums[i];
			res++;
		}
	}
	for (let j = res; j < nums.length; j++) {
		nums[j] = 0;
	}
	return nums;
}
let nums = [0, 1, 0, 3, 12];
// let nums = [0];
console.log(moveZeros(nums));
