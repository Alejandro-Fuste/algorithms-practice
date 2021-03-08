// Bring in benchmark package and generate file
const [ Benchmark, generate ] = [ require('benchmark'), require('./generate') ];

const bubbleSort = require('../sort/bubbleSort');

// Generate an array of random numbers of the given length
let length = 10000;
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
	// On 'start', run the 'start' function.
	.on('start', function start() {
		console.log('Beginning benchmark...');
	})
	// On 'complete' event, print the test's name and average time in milliseconds
	.on('complete', function report() {
		console.log(`On average ${this[0].name} took ${this[0].stats.mean * 1000} milliseconds to complete.`);
	})
	// Run the test!
	.run();
