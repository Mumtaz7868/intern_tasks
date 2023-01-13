// {with function}

function removedublicate(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = nums.length; j >= i + 1; j--) {
			if (nums[i] == nums[j]) {
				nums.splice(i, 1);
			}
		}
	}
	return nums;
}
let nums = [1, 1, 2];
console.log(removedublicate(nums));
