// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
	arr.forEach((c) => {
		if (c % 3 === 0 && c % 5 === 0) {
			console.log('Fizz Buzz');
		} else if (c % 3 === 0) {
			console.log('Fizz');
		} else if (c % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(c);
		}
	});
};
