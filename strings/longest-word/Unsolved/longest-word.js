// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
	let sortedString = str.split(' ');

	return sortedString[0];
};

console.log(longestWord('i love programming'));
