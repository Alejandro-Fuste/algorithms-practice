// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
	let acronym = str.split(' ').map((c) => c.slice(0, 1).toUpperCase());

	return acronym.join('');
};

console.log(acronymBuilder('For your information'));
