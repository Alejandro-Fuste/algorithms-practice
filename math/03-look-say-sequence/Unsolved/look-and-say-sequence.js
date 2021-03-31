// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
	let [ count, result, converted ] = [ 1, '', n.toString().split('') ];

	converted.forEach((c, i, a) => {
		if (c === a[i + 1]) {
			count++;
			result += count;
			result += c;
		} else {
			result += `1${c}`;
		}
	});

	return parseInt(result);
};

console.log(lookAndSay(5442));
