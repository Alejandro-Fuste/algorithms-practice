// Bring in benchmark package and generate file
const [ Benchmark, generate ] = [ require('benchmark'), require('./generate') ];

// Bring in files to be tested
const [ palindromeReverse, palindromeWhileLoop ] = [
	require('../strings/is-palindrome/Solved/is-palindrome'),
	require('../strings/is-palindrome/Unsolved/is-palindrome')
];

// Generate an array of random numbers of the given length
// let length = 40000;
// let stuff = generate(length);
// let randomValue = stuff[Math.ceil(Math.random() * length)];

// Palindrome Test Case
const palindromeTestCase = `111111111111111111111111111111111111111111111111111111111111`;

// A "suite" is a series of code snippets you want
//    to execute and time

let suite = new Benchmark.Suite();

suite
	// Add the function you want to test to the suite
	.add('Palindrome Reverse Method', function() {
		const testArray = palindromeTestCase;
		palindromeReverse(testArray);
	})
	.add('Palindrome While Loop', function() {
		const testArray2 = palindromeTestCase;
		palindromeWhileLoop(testArray2);
	})
	// On 'start', run the 'start' function.
	.on('start', function start() {
		console.log('Beginning benchmark...');
	})
	// On 'complete' event, print the test's name and average time in milliseconds
	.on('complete', function report() {
		console.log(`On average ${this[0].name} took ${this[0].stats.mean} milliseconds to complete.`);
		console.log(`On average ${this[1].name} took ${this[1].stats.mean} milliseconds to complete.`);
	})
	// Run the test!
	.run();
