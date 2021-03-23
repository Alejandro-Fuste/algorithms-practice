// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
	let newStr = [];
	str.split(' ').forEach((c) => {
		newStr.push(c.replace(/[a-z]/, (c) => c.toUpperCase()));
	});

	return newStr.join(' ');
};

console.log(titleCase('a lannister always pays his debts'));

module.exports = titleCase;
