function reverseString(s) {
	// let result = s.reverse();
	let result = [];
	for (let i = s.length - 1; i >= 0; i--) {
		result.push(s[i]);
	}

	return result;
}
let s = ["h", "e", "l", "l", "o"];
// let s = ["H","a","n","n","a","h"]
console.log(reverseString(s));
