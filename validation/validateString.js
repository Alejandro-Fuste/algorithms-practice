/*

*** Validation ***

- Purpose: 
    This code is will validate strings to ensure the user has entered a string that is 
    not empty, not a string, and/or contains only whitespaces.   

*/

// Create function that will take in a string as an argument
const validateString = (string) => {
	// Use ternary operator that will return 'invalid string' if any of the two conditions are true
	// Conditions to check if data type is a string, if the string is empty, and if string contains only white spaces

	return typeof string != 'string' || !string.trim().length ? 'Invalid String' : 'Valid String';
};

console.log(validateString(''));
console.log(validateString(8));
console.log(validateString(null));
console.log(validateString(undefined));
console.log(validateString('  '));
console.log(validateString('not empty'));
