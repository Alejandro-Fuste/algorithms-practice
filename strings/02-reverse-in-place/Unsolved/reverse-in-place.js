// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
	let [ left, right ] = [ 0, arr.length - 1 ];

	arr.forEach(c, i, (a) => {
		let temp = c;
		arr[left + 1] = arr[right - 1];
		arr[right - 1] = temp;
	});
};
