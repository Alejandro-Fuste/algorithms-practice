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
	// Add the function you want to test to the suite
	.add()
	.on('start', () => console.log('Beginning benchmark...'));
