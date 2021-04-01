// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
	let [ count, result, converted ] = [ 1, '', n.toString().split('') ];

	converted.forEach((c, i, a) => {
		let currentDigit = c;
		let digit = a[i + 1];
		if (currentDigit === digit) {
			count++;
		} else {
			result += count;
			result += currentDigit;
			count = 1;
			currentDigit = digit;
		}
	});

	return parseInt(result);
};

console.log(lookAndSay(5442));
