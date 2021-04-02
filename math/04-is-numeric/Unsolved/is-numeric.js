// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
	// setup object to hold array for digits and special characters
	let characters = {
		allCharacters: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-' ],
		operators: [ '+', '-' ],
		decimal: [ '.' ],
		operatorCount: 0,
		decimalCount: 0,
		outcome: true
	};

	let { allCharacters, operators, operatorCount, decimal, decimalCount, outcome } = characters;
	// split and loop through
	str.split('').forEach((c) => {
		// use indexof to find allCharacters in array
		if (allCharacters.indexOf(c) === -1) return false;
		// use indexof to increase operatorCount variable
		if (operators.indexOf(c) != -1) operatorCount++;
		if (decimal.indexOf(c) != -1) decimalCount++;
	});

	// return false if more than one special character
	if (decimalCount > 1 || operatorCount > 1) outcome = false;

	// return true if both conditions are false
	return outcome;
};

console.log(isNumeric('-0123.00')); // => true
console.log(isNumeric('+-a13')); // => false
