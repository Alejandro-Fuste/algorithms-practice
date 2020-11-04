/* 


Instructions:

    Define a function that takes one integer argument and returns logical value 
    true or false depending on if the integer is a prime.

    Per Wikipedia, a prime number (or a prime) is a natural number greater 
    than 1 that has no positive divisors other than 1 and itself.

Requirements:

    - You can assume you will be given an integer input.
    
    - You can not assume that the integer will be only positive. You may be given 
      negative numbers as well (or 0).

    - NOTE on performance: There are no fancy optimizations required, but still 
      the most trivial solutions might time out. Numbers go up to 2^31 (or similar, 
      depends on language version). Looping all the way up to n, or n/2, will be too slow.

Example:

is_prime(1)  (false) 
is_prime(2)  (true)  
is_prime(-1) (false) 


*/

function isPrime(num) {
	// Create variable to hold an array of divisors
	let res = [];

	// Use guard clause to return false for any negative integers
	if (num < 2) return false;

	// Use basic for loop to find divisors of an integer
	for (var i = 2; i <= Math.floor(num / 2); ++i) if (num % i == 0) res.push(i);

	// Use length method to check if res variable is empty
	return res.length === 0;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(-1));

// Use binary search technigue to get a more efficient algorithm

let currentElement;
let currentIndex;
