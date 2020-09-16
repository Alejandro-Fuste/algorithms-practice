// My Solution

function duplicateEncode(word) {
	// create new variable to store new string
	let newWord = '';

	// Change all characters to lowercase
	let lowerCase = word.toLowerCase();

	// Split the string into individual characters
	let splitWord = lowerCase.split('');

	// Use loop to go through the list of characters
	splitWord.forEach((item) => {
		// Use filter method to find all instances the character is in the string
		let checkCharacter = splitWord.filter((i) => i === item);

		/* Use the length array method to get amount of times the character is in the word
        and use addition assignment operator to push new character into newWord variable based
        on condition*/
		if (checkCharacter.length === 1) {
			newWord += '(';
		} else if (checkCharacter.length > 1) {
			newWord += ')';
		} else {
			newWord += 'No characters found';
		}
	});

	// return new variable
	return newWord;
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));

// Other solution
