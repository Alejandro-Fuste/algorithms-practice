// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
	let count = 0;
	str.toLowerCase().split('').forEach((c) => {
		if ([ 'a', 'e', 'i', 'o', 'u' ].indexOf(c) != -1) count++;
	});
	return count;
};
