// Instructions
/* 
    Move the first letter of each word to the end of it, 
    then add "ay" to the end of the word. Leave punctuation 
    marks untouched. 
*/

function pigIt(str) {
	// Split the str input to create an array of words & store in variable
	let splitArray = str.split(' ');
	// Split each word to get an array of letters
	// Use shift to extract first letter
	// Push first letter to the end
	// Push ay to end
	// Repeat previous process for each word
	// Join all words into one string
	return splitArray;
}

// Sample Tests
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay')
