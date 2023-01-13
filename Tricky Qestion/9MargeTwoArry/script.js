// margeArr = [...arr, ...Arr];
function sortArr(nums1, m, nums2, n) {
	let p = m - 1;
	let q = n - 1;
	let l = m + n - 1;
	while (p >= 0 && q >= 0) {
		if (nums1[p] > nums2[q]) {
			nums1[l--] = nums1[p--];
		} else {
			nums1[l--] = nums2[q--];
		}
	}
	while (p >= 0) {
		nums1[l--] = nums1[p--];
	}
	while (q >= 0) {
		nums1[l--] = nums2[q--];
	}
	return nums1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
m = nums1.length - 3;
n = nums2.length;
console.log(sortArr(nums1, m, nums2, n));

// // {With other Method}
// function sortArr(nums1, m, nums2, n) {
// 	let first = m - 1;
// 	let second = n - 1;
// 	let i = m + n - 1;
// 	while (second >= 0) {
// 		let fVal = nums1[first];
// 		let sVal = nums2[second];

// 		if (fVal > sVal) {
// 			nums1[i] = fVal;
// 			i--;
// 			first--;
// 		} else {
// 			nums1[i] = sVal;
// 			i--;
// 			second--;
// 		}
// 	}
// 	return nums1;
// }
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// m = nums1.length - 3;
// n = nums2.length;
// console.log(sortArr(nums1, m, nums2, n));
