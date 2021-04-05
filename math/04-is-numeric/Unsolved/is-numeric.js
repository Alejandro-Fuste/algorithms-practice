// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
	// setup object to hold true values for numbers
	const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };

	let hasNum = false;
	let hasDecimal = false;

	for (let i = 0; i < str.length; i++) {
		if (str[0]) !hasNum;
		if (str[0] === '+' || str[0] === '-') continue;

		if (str[i] === '.') {
			!hasDecimal;
			continue;
		}
	}

	return false;
};

console.log(isNumeric('-0123.00')); // => true
console.log(isNumeric('+-a13')); // => false
console.log(isNumeric('')); // => false
