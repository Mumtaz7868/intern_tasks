// function findVowels(vowels) {
// 	let reg = /[aeiou]/gi;
// 	let cahar = vowels.match(reg);
// 	return cahar.length;
// }
// let vowels = "My Name Is Mumtaz And I am a Student";
// console.log(findVowels(vowels));

//    {other way}
function findVowels(string) {
	let res = "";
	let vowels = ["a", "e", "i", "o", "u"];
	let letter = string.toLowerCase();
	for (let i = 0; i < string.length; i++) {
		if (vowels.includes(letter[i])) {
			res += letter[i];
		}
	}
	return res.length;
}
let vowels = "My Name Is Mumtaz And I am a Student";
console.log(findVowels(vowels));
