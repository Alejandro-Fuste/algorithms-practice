const bubbleSort = (array) => {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;

				sorted = false;
			}
		}
	}
	return array;
};

// module.exports = bubbleSort;

console.log(bubbleSort([ 54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2 ]));
