function firstUniqChar(string) {
	// for (i = 0; i < s.length; i++) {
	// 	if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
	// 		return i;
	// 	}
	// }
	// return -1;
	for (let i = 0; i < string.length; i++) {
		let firstIndex = string.indexOf(string[i]);
		let lastIndex = string.lastIndexOf(string[i]);
		if (firstIndex === lastIndex) {
			return i;
		}
	}
	return -1;
}
// let s = "leetcodee";
let s = "aabb";
// let s = "loveleetcode";
console.log(firstUniqChar(s));
