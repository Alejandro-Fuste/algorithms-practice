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

	// Use recursion to sort left & right arrays
	return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = quickSort;

// console.log(quickSort([]));
