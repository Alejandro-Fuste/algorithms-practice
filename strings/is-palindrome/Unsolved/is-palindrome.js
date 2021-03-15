// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
// 	// Need variables to store original string and reversed string
// 	let original = str;
// 	// Need to split, reverse, and join str
// 	let reversed = str.split('').reverse().join('');
// 	// Return the comparison of both variables
// 	return original === reversed;
// };

// refractored
var isPalindrome = function(str) {
	// removed variables and moved code to return statement

	// Return the comparison of the str and reversed string
	return str === str.split('').reverse().join('');
};

// different approach
