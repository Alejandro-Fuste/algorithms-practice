function linearSearch(array) {
	for (i = 0; i < array.length; i++) {
		if (array[i] === randomValue) {
			return array[i];
		}
	}
	return false;
}

module.exports = linearSearch;
