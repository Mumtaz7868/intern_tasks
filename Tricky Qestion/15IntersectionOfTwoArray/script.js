function intersect(nums1, nums2) {
	let res = [];
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				res.push(nums1[i]);
				nums2.splice(j, 1);
				break;
			}
		}
	}

	return res;
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
// let nums1 = [1, 2, 2, 1];
// let nums2 = [2];
// let nums1 = [4, 9, 5];
// let nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));

// function intersect(nums1, nums2) {
// 	let result = [];
// 	for (let i = 0; i < nums1.length; i++) {
// 		let index = nums2.indexOf(nums1[i]);
// 		if (index !== -1) {
// 			result.push(nums2.splice(index, 1)[0]);
// 		}
// 	}
// 	return result;
// }
// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2];
// console.log(intersect(nums1, nums2));
