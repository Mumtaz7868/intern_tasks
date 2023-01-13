function fizzBuzz(n) {
	let result = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
			// return result;
		} else if (i % 3 === 0) {
			result.push("Fizz");
			// return result;
		} else if (i % 5 === 0) {
			result.push("Buzz");
			// return result;
		} else {
			result.push(i.toString());
		}
	}

	return result;
}
// var n = 3;
let n = 20;
// let n = 15;
console.log(fizzBuzz(n));
console.log("3" + 4 + 5);
console.log(3 + 4 + "5");

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
