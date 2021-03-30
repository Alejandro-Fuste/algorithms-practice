// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
	let [ left, right ] = [ 0, arr.length - 1 ];

	arr.forEach(c, i, (a) => {
		let temp = c;
		arr[left + i] = arr[right - i];
		arr[right - i] = temp;
	});

	return arr;
};

console.log(reverseInPlace([ 2, 4, 6, 8 ]));
