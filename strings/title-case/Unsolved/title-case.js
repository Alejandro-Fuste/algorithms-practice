// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
	let newStr = [];
	str.split(' ').forEach((c) => {
		console.log(c[0].toUpperCase());
		console.log(c);
	});

	return str;
};

console.log(titleCase('a lannister always pays his debts'));

module.exports = titleCase;
