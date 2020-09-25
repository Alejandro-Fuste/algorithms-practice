/*

Exercise Goal: Create a function that will add to numbers together and 
then convert those numbers to binary. 

*/

// My Solution

// function addBinary(a, b) {
// 	// Add a and b and store value in sum variable
// 	let sum = a + b;

// 	// Convert sum to binary with toString method with 2 as the radix
// 	return sum.toString(2);
// }

// console.log(addBinary(5, 5));
// console.log(addBinary(237, 656));

// Other Solution

const addBinary = (a, b) => (a + b).toString(2);

console.log(addBinary(5, 5));
console.log(addBinary(237, 656));
