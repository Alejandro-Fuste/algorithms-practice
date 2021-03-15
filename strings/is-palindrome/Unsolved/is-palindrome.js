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
// var isPalindrome = function(str) {
// 	// removed variables and moved code to return statement

// 	// Return the comparison of the str and reversed string
// 	return str === str.split('').reverse().join('');
// };

// different approach
var isPalindrome = function(str) {
	// instead of using reverse method, use loop
	let left = 0;
	let right = str.length - 1;

	while (left <= right) {
		if (str[left].charCodeAt(0) < 65 && str[right].charCodeAt(0) < 65) {
			left++;
			right--;
		}
		if (str[left].charCodeAt(0) < 65) {
			left++;
			right = right;
		}
		if (str[right].charCodeAt(0) < 65) {
			right--;
			left = left;
		}
		if (str[left].toLowerCase() != str[right].toLowerCase()) return false;
		if (str[left].toLowerCase() == str[right].toLowerCase()) {
			left++;
			right--;
		}
	}
	return true;
};
