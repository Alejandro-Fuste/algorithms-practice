const data = [ 12, 23, 38, 40, 54, 62, 71, 87, 99 ];

const binarySearch = (array, randomValue, left, right) => {
	let middle = Math.floor((right + left) / 2);

	if (randomValue === array[middle]) {
		console.log(`Found your number (${randomValue})`);
	} else if (randomValue < array[middle]) {
		right = middle;
		console.log(`Bring right down to ${right}`);
	} else if (randomValue > array[middle]) {
		left = middle + 1;
		console.log(`Bring left up to ${left}`);
	}
};

console.log(binarySearch(data, 54));

module.exports = binarySearch;
