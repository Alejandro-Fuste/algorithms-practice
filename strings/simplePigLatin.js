// Instructions
/* 
    Move the first letter of each word to the end of it, 
    then add "ay" to the end of the word. Leave punctuation 
    marks untouched. 
*/

function pigIt(str) {
	// Split the str input to create an array of words & store in variable
	let splitArray = str.split(' ');
	let splitWord = [];
	let finalPhrase = [];

	// With forEach loop, split each word to get an array of letters
	splitArray.forEach((element) => {
		splitWord.push(element.split(''));
	});

	// With another forEach loop, use shift to extract first letter, push first letter & 'ay' to the end
	splitWord.forEach((c, i, a) => {
		if (c.length <= 1 && /\W/g.test(c)) {
			a[i].push(c);
		} else {
			a[i].push(c.shift(), 'ay');
		}
	});

	// With another forEach loop, push each word into finalPhrase variable
	splitWord.forEach((c, i, a) => finalPhrase.push(c.join('')));

	// Join all words into one string in return statement
	return finalPhrase.join(' ');
}

// Sample Tests
// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
// console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay')
