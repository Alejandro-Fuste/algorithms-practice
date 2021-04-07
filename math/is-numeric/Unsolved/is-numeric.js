// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

// const { has } = require('benchmark');

var isNumeric = function(str) {
	// setup object to hold true values for numbers
	const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };

	let hasNum = false;
	let hasDecimal = false;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		console.log(char);

		if (numbers[char]) {
			hasNum = true;
			continue;
		}

		if (i === 0) {
			if (char === '+' || char === '-') {
				continue;
			}
		}

		if (char === '.') {
			if (hasDecimal === true) {
				return false;
			}

			hasDecimal = true;
			continue;
		}

		return false;
	}

	if (hasNum) return true;

	return false;
};

console.log(isNumeric('.48')); // => true
