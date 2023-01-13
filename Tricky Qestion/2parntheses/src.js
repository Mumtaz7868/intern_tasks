function isValid(s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		let top = stack[stack.length - 1];
		if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
			stack.push(s[i]);
		} else if (
			(s[i] == ")" && top == "(") ||
			(s[i] == "}" && top == "{") ||
			(s[i] == "]" && top == "[")
		) {
			stack.pop();
		} else {
			return false;
		}
	}
	if (stack.length == 0) {
		return true;
	}
	if (stack.length != 0) {
		return false;
	}
}
let s = "[]";
console.log(isValid(s));

list1 = [1, 3, 2, 4];
list2 = [1, 3, 4];
function sortedList(list1, list2) {
	b = list1.concat(list2);
	c = b.sort();
	console.log(b);
}
sortedList(list1, list2);
