// Write code to create a function that returns the factorial of `num`

// let factorial = function(num) {
// 	// create total state variable
// 	let total = 1;
// 	// guard clause to return 1 if num = 0
// 	if (num === 0) return 1;
// 	// Use for loop to pass in num as the conditional
// 	for (i = 1; i <= num; i++) {
// 		// multiple numbers inside loop
// 		total *= i;
// 	}
// 	return total;
// };

// refractored solution
// use right and left variables to perform multiplication
// from both ends

let factorial = function(num) {
	let [ left, right, middle ] = [ 1, num, Math.floor(num / 2) ];

	for (i = 1; i < middle; i++) {
		left *= i + 1;
		right *= num - i;
	}
	if (num === 0) return 1;
	if (num % 2 != 0) return (middle + 1) * left * right;
	return left * right;
};

module.exports = factorial;
