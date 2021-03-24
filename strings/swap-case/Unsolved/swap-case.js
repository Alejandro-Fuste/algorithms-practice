// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
	let newStr = str.toUpperCase().split(' ').map((c) => c.replace(/[a-z]/, c.toLowerCase()));

	return newStr;
};
console.log(swapCase('Luke, I Am Your Father'));
