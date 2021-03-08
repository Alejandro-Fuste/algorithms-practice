const quickSort = (array) => {
	// Create variables for first item, left and right arrays
	const [ pivot, left, right ] = [ array[0], [], [] ];

	// Loop through the array
	for (i = 0; i < array.length; i++) {
		if (i < pivot) {
			left.push(i);
		} else right.push(i);
	}

	return left + pivot + right;
};
// Push item in left variable if it's less than the pivot
// Push item in right variable if it's greater than the pivot

// Use recursion to repeat this process
// Join left, pivot, right in return statement

module.exports = quickSort;

// quickSort([ 0, 1 ]);
