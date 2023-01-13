// console.log("first");
function isPalindrome(s) {
	if (s == "") {
		return true;
	}
	let res = "";
	res = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

	// const reversed = res.split("").reverse().join("");

	// if (reversed === res) {
	// 	return "String is palindrome";
	// } else {
	// 	return "The string is not a palindrome";
	// }

	let j = res.length - 1;
	for (let i = 0; i < res.length; i++, j--) {
		if (res[i] !== res[j]) {
			return false;
		}
	}
	return true;
}
let s = "A man, a plan, a canal: Panama";
// let s = "race a car";
// let s = "";
console.log(isPalindrome(s));
