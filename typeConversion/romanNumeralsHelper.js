/* 

Instructions:
    Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.



Help:


| Symbol | Value |
|----------------|
| I      |  1    |
| V      |  5    |
| X      |  10   |
| L      |  50   |
| C      |  100  |
| D      |  500  |
| M      |  1000 |


*/

// Create RomanNumerals class
class RomanNumerals {
	// add constructor and pass in number and romanNumber
	constructor(number, romanNumeral) {}

	// add toRoman static method to class that takes in number
	static toRoman(number) {
		const numbers = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };

		// added
		const romanString = '';
	}

	// add fromRoman static method to class that takes in romanNumeral
	static fromRoman(romanNumeral) {
		const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

		// Split romanNumeral string and store it in a new varaibale
		let input = romanNumeral.split('');

		// variable to hold array of numbers that will need to be sum
		let sumNumbers = [];

		// split romanNumeral into individual characters and loop through them
		input.forEach((c, i) => {
			// conditional statements to push first number, then add/subtract/push subsequent numbers
			if (c === 'M') {
				sumNumbers.push(romanNumerals[c]);
			} else if (romanNumerals[c] == romanNumerals[i + 1]) {
				sumNumbers.push(romanNumerals[c]);
			} else {
				sumNumbers.push(romanNumerals[c]);
			}
		});

		// use reduce method to return final number
	}
}

console.log(RomanNumerals.toRoman(1000)); // 'M'
console.log(RomanNumerals.toRoman(999)); // "CMXCIX"
console.log(RomanNumerals.fromRoman('IV')); // 4
console.log(RomanNumerals.fromRoman('MDCLXIX')); //1669
