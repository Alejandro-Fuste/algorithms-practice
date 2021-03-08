// const generate = require('../benchmark/generate');

// const length = 40000;

// const testArray = generate(length);

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

module.exports = bubbleSort;

// Check execution time with console.time
// console.time('40k test');
// console.log(bubbleSort(testArray));
// console.timeEnd('40k test');
