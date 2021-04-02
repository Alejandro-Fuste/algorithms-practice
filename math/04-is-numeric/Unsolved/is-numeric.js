// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
	// setup object to hold array for digits and special characters
	let characters = {
		numbers: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
		specialCharacters: [ '.', '+', '-' ],
		count: 0
	};

	let { numbers, specialCharacters, count } = characters;
	// split and loop through
	str.split('').forEach((c) => {
		// use indexof to find numbers in array
		if (numbers.indexOf(c) === -1) return false;
		// use indexof to increase count variable
		if (specialCharacters.indexOf(c) != -1) count++;
	});

	// return true if both conditions are false
	return true;
};
