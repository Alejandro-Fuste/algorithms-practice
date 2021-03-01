const generate = (length) => {
	let array = [];

	for (i = 0; i < length; i++) {
		array.push(Math.ceil(Math.random() * length));
	}

	return array;
};

module.exports = generate;
