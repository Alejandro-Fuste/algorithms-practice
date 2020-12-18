/*

Instructions:

    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
    after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are 
    numbers or special characters included in the string, they should be returned as they are. Only 
    letters from the latin/english alphabet should be shifted, like in the original 
    Rot13 "implementation".



*/

function rot13(message) {
	//set up object to hold arrays of uppercase & lowercase letters of alphabet
	const letters = {
		lowerCase: [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		],
		uppercase: [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z'
		]
	};
	// split message to array of words
	let splitIntoWords = message.split(' ');

	// split words to array of individual letters
	let splitIntoLetters = splitIntoWords.map((c) => c.split(''));
	return splitIntoLetters;
	// need to loop through letters and replace only letters...will need condition
	// joined letters back together & return ciphered message
}

console.log(rot13('test'));
console.log(rot13('Test'));
