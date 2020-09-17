/* 
Goal:

The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate.

*/

// My Solution

// function duplicateEncode(word) {
// 	// create new variable to store new string
// 	let newWord = '';

// 	// Change all characters to lowercase
// 	let lowerCase = word.toLowerCase();

// 	// Split the string into individual characters
// 	let splitWord = lowerCase.split('');

// 	// Use loop to go through the list of characters
// 	splitWord.forEach((item) => {
// 		// Use filter method to find all instances the character is in the string
// 		let checkCharacter = splitWord.filter((i) => i === item);

// 		/* Use the length array method to get amount of times the character is in the word
//         and use addition assignment operator to push new character into newWord variable based
//         on condition*/
// 		if (checkCharacter.length === 1) {
// 			newWord += '(';
// 		} else if (checkCharacter.length > 1) {
// 			newWord += ')';
// 		} else {
// 			newWord += 'No characters found';
// 		}
// 	});

// 	// return new variable
// 	return newWord;
// }

// console.log(duplicateEncode('din'));
// console.log(duplicateEncode('recede'));
// console.log(duplicateEncode('Success'));
// console.log(duplicateEncode('(( @'));

// Better Solution

function duplicateEncode(word) {
	// First, change all characters to lowercase & split the string into individual characters
	// Next, use map method, indexof & lastIndexOf array methods with ternary operator
	// C = current value, i = index, a = array
	// Use the 'a' so you can use the indexOf & lastIndexOf array methods. The "c" will passed into these methods
	// If the values of the two array methods don't equal, then you know there are duplicate values
	// Lastly, use join string method to put the new string together

	let newString = word
		.toLowerCase()
		.split('')
		.map((c, i, a) => (a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')'))
		.join('');

	// // return new string
	return newString;
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
