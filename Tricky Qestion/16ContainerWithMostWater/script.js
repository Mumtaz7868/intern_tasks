var maxArea = function (height) {
	var maxArea = 0;
	var length = height.length;
	var head = 0,
		tail = length - 1;
	while (tail - head > 0) {
		var area = Math.min(height[head], height[tail]) * (tail - head);
		maxArea = Math.max(maxArea, area);
		if (height[head] > height[tail]) {
			tail--;
		} else {
			head++;
		}
	}
	return maxArea;
};
// let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let heights = [1, 1];
let heights = [1, 2, 1];
console.log(maxArea(heights));
