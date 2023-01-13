// function removeSpaces(names) {
// 	let count = "";
// 	for (let i = 0; i < names.length; i++) {
// 		if (names[i] !== " ") {
// 			count += names[i];
// 		}
// 	}
// 	//  {with function}
// 	// let count = names.split(" ").join("");
// 	return count;
// }
// let names = "My Name Is Mumtaz";
// console.log(removeSpaces(names));

// {With Regex solve}
function removeSpaces(names) {
	let count = names.replace(/\s/g, "");
	return count;
}
let names = "My Name Is Mumtaz";
console.log(removeSpaces(names));
