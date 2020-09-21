/*

*** Validation ***

- Purpose: 
    This code is will validate strings to ensure the user has entered a string that is 
    not empty, not a string, and/or contains only whitespaces.   

*/

// Create function that will take in a string as an argument
function validateString(string) {
	// Use ternary operator that will return 'invalid string' if any of the three conditions is true
	// Conditions to check if data type is a string, if the string is empty, and if string contains only white spaces

	let valid =
		typeof string != 'string' || (string.length === 0) | /^\s*$/.test(string) ? 'Invalid String' : 'Valid String';

	console.log(valid);

	return valid;
}

validateString('');
validateString(8);
validateString('  ');
validateString('not empty');
