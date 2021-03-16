// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
	// create total state variable
	let total = 1;
	// guard clause to return 1 if num = 0
	if (num === 0) return 1;
	// Use for loop to pass in num as the conditional
	for (i = 1; i <= num; i++) {
		// multiple numbers inside loop
		total *= i;
	}
	return total;
};

// refractored solution
// use right and left variables to perform multiplication
// from both ends

let factorial = function(num) {};

module.exports = factorial;
