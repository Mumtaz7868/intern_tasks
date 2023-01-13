// //    {with function}

// function majorityElement(nums) {
// 	nums.sort();
// 	let index = Math.floor((nums.length - 1) / 2);

// 	return nums[index];
// }
// let nums = [3, 2, 3];
// let nums = [2, 2, 1, 1, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums));

// function majorityElement(nums) {
// 	let n = nums.length - 1;
// 	let majority = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < nums.length; j++) {
// 			if (nums[i] == nums[j]) {
// 				count++;
// 			}
// 			if (count > majority) {
// 				majority = count;
// 			}
// 			if (majority > n / 2) {
// 				return nums[i];
// 			}
// 		}
// 	}
// }

// let nums = [3, 2, 3];
// // let nums = [2, 2, 1, 1, 1, 1, 2, 2, 2, 2];
// console.log(majorityElement(nums));

function majorityElement(nums) {
	let sorted = nums.sort();
	return sorted[Math.floor(nums.length / 2)];
}

let nums = [3, 2, 3, 3];
// let nums = [2, 2, 1, 1, 1];
console.log(majorityElement(nums));
