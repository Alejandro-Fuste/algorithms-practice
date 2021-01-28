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
		// const numbers = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
		const numberObj = {
			0: 0,
			1: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' },
			2: { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'LX', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
			3: { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
			4: { 1: 'M', 2: 'MM', 3: 'MMM', 4: 'MMMM' }
		};
		// variable to concat string
		let romanString = '';

		// convert number to string & then split it
		let stringifyNumber = number.toString().split('');

		stringifyNumber.forEach(function(c, i) {
			romanString += numberObj[stringifyNumber.length - i][+c];
		});

		return romanString;
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
			if (c === 'M' && i === 0) {
				sumNumbers.push(romanNumerals[c]);
			} else if (romanNumerals[c] == romanNumerals[input[i + 1]]) {
				sumNumbers.push(romanNumerals[c]);
			} else if (romanNumerals[c] > romanNumerals[input[i + 1]]) {
				sumNumbers.push(romanNumerals[c] + romanNumerals[input[i + 1]]);
				input.splice([ i + 1 ], 1);
			} else if (romanNumerals[c] < romanNumerals[input[i + 1]]) {
				sumNumbers.push(romanNumerals[input[i + 1]] - romanNumerals[c]);
				input.splice([ i + 1 ], 1);
			} else {
				sumNumbers.push(romanNumerals[c]);
			}
		});

		// use reduce method to return final number
		return sumNumbers.reduce(function(total, num) {
			return total + num;
		}, 0);
	}
}

console.log(RomanNumerals.toRoman(1000)); // 'M'
console.log(RomanNumerals.toRoman(999)); // "CMXCIX"
console.log(RomanNumerals.fromRoman('IV')); // 4
console.log(RomanNumerals.fromRoman('MDCLXIX')); //1669
