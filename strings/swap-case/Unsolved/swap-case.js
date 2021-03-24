// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
	let newStr = [];

	return str.toUpperCase().split(' ').map((c) => c.toLowerCase());
};
console.log(swapCase('Luke, I Am Your Father'));
