// Bring in benchmark package and generate file
const [ Benchmark, generate ] = [ require('benchmark'), require('../generate') ];

// Generate an array of random numbers of the given length
let length = 10000;
let stuff = generate(length);
let randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you want
//    to execute and time

let suite = new Benchmark.Suite();

suite
	.add('Linear Search', function linearSearch() {
		for (i = 0; i < stuff.length; i++) {
			if (stuff[i] === randomValue) {
				return stuff[i];
			}
		}
		return false;
	})
	.on('start', function start() {
		console.log('Beginning benchmark...');
	})
	.on('complete', function report() {
		// let benchmark = Benchmark.filter(this, 'successfull')[0];

		console.log(`On average ${this[0].name} took ${this[0].stats.mean * 1000} milliseconds to complete.`);
	})
	// Run the test!
	.run();

// const Benchmark = require('benchmark');

// const suite = new Benchmark.Suite();

// suite
// 	.add('random test', function() {
// 		Math.floor(Math.random() * 10) + 1;
// 	})
// 	.on('complete', function() {
// 		console.log(this);
// 	})
// 	.run();
