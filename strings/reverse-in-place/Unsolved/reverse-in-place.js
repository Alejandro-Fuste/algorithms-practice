// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
	let [ left, right ] = [ 0, arr.length - 1 ];

	while (left < right) {
		let temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;

		left++;
		right--;
	}

	return arr;
};

console.log(reverseInPlace([ 2, 4, 6, 8 ]));
