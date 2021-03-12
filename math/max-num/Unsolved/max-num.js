// Write code to return the largest number in the given array

var maxNum = function(arr) {
	const sorted = arr.sort((a, b) => a - b);

	return sorted[sorted.length - 1];
};
