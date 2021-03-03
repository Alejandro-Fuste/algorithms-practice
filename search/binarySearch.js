const data = [ 12, 23, 38, 40, 54, 62, 71, 87, 99 ];

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

console.log(binarySearch(data, 23, 0, data.length - 1));

// module.exports = binarySearch;
