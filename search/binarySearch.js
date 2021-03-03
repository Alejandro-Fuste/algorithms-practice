// Binary search with recursion

const binarySearch = (array, randomValue, left, right) => {
	let middle = Math.floor((left + right) / 2);

	if (left > right) {
		return -1;
	} else if (randomValue === array[middle]) {
		return middle;
	} else if (randomValue < array[middle]) {
		return binarySearch(array, randomValue, left, middle - 1);
	} else if (randomValue > array[middle]) {
		return binarySearch(array, randomValue, middle + 1, right);
	}
};

module.exports = binarySearch;
