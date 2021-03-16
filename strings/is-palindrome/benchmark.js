// Bring in benchmark package and generate file
const [ Benchmark, generate ] = [ require('benchmark'), require('./generate') ];

const palindrome1 = require('./Solved/is-palindrome');
const palindrome2 = require('./Unsolved/is-palindrome');

// Generate an array of random numbers of the given length
let length = 40000;
let stuff = generate(length);
let randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you want
//    to execute and time

let suite = new Benchmark.Suite();

suite
	// Add the function you want to test to the suite
	.add('Bubble Sort', function() {
		const testArray = [ ...stuff ];
		bubbleSort(testArray);
	})
	.add('Quick Sort', function() {
		const testArray2 = [ ...stuff ];
		quickSort(testArray2);
	})
	// On 'start', run the 'start' function.
	.on('start', function start() {
		console.log('Beginning benchmark...');
	})
	// On 'complete' event, print the test's name and average time in milliseconds
	.on('complete', function report() {
		console.log(`On average ${this[0].name} took ${this[0].stats.mean * 1000} milliseconds to complete.`);
		console.log(`On average ${this[1].name} took ${this[1].stats.mean * 1000} milliseconds to complete.`);
	})
	// Run the test!
	.run();
