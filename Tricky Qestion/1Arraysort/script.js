var arr = [5, 2, 4, 3, 1];
function sortArr() {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
console.log(sortArr());

// {Array sorting with function}

// let a = [3, 1, 7, 12, 23, 45];

// console.log(
// 	a.sort(function (a, b) {
// 		return a - b;
// 	})
// );
