// My Solution

// Create object to hold number alternatives

const alternatives = {
	'1': [ '1', '2', '4' ],
	'2': [ '1', '2', '3', '5' ],
	'3': [ '2', '3', '6' ],
	'4': [ '1', '4', '5', '7' ],
	'5': [ '2', '4', '5', '6', '8' ],
	'6': [ '3', '5', '6', '9' ],
	'7': [ '4', '7', '8' ],
	'8': [ '0', '5', '7', '8', '9' ],
	'9': [ '6', '8', '9' ],
	'0': [ '0', '8' ]
};

const reduceFunction = (total, currentValue) => total * alternatives[currentValue].length;

function getPINs(observed) {
	// Ensure observed parameter is a string & then split the string
	let observedString = observed.toString().split('');
	console.log(observedString);
	// Determine number of permutations
	let permutations = observedString.reduce(reduceFunction, 1);
	console.log(permutations);
	// Determine number subset combinations
	observedString.shift();

	let subset = observedString.reduce(reduceFunction, 1);

	return subset;
}

// console.log(getPINs('8'));
// console.log(getPINs('11'));
console.log(getPINs('369'));
console.log(getPINs('11'));
console.log(getPINs('33'));
console.log(getPINs('973'));
console.log(getPINs('4444'));
