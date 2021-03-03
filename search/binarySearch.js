const binarySearch = (array, randomValue) => {
	let left = 0;
	let right = array.length - 1;
	let middle = Math.floor((right + left) / 2);

	if (randomValue === array[middle]) {
		console.log(`Found your number (${randomValue})`);
	} else if (randomValue < array[middle]) {
		right = middle;
		console.log(`Bring right down to ${right}`);
	}
};

module.exports = binarySearch;
