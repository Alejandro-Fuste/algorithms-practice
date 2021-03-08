const quickSort = (array) => {
	// Create variables for first item, left and right arrays
	const [ pivot, left, right ] = [ array[0], [], [] ];

	// return array if it's small
	if (array.length <= 1) return array;

	// Loop through the array
	for (i = 1; i < array.length; i++) {
		if (array[i] <= pivot) {
			left.push(array[i]);
		} else right.push(array[i]);
	}

	return quickSort(left).concat(pivot, quickSort(right));
};
// Push item in left variable if it's less than the pivot
// Push item in right variable if it's greater than the pivot

// Use recursion to repeat this process
// Join left, pivot, right in return statement

// module.exports = quickSort;

console.log(quickSort([]));
