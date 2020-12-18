/*

Instructions:

    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
    after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. If there are 
    numbers or special characters included in the string, they should be returned as they are. Only 
    letters from the latin/english alphabet should be shifted, like in the original 
    Rot13 "implementation".



*/

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
	lowerCaseCipher: {
		a: 'n',
		b: 'o',
		c: 'p',
		d: 'q',
		e: 'r',
		f: 's',
		g: 't',
		h: 'u',
		i: 'v',
		j: 'w',
		k: 'x',
		l: 'y',
		m: 'z',
		n: 'a',
		o: 'b',
		p: 'c',
		q: 'd',
		r: 'e',
		s: 'f',
		t: 'g',
		u: 'h',
		v: 'i',
		w: 'j',
		x: 'k',
		y: 'l',
		z: 'm'
	},
	upperCase: [
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
	],
	upperCaseCipher: {
		A: 'N',
		B: 'O',
		C: 'P',
		D: 'Q',
		E: 'R',
		F: 'S',
		G: 'T',
		H: 'U',
		I: 'V',
		J: 'W',
		K: 'X',
		L: 'Y',
		M: 'Z',
		N: 'A',
		O: 'B',
		P: 'C',
		Q: 'D',
		R: 'E',
		S: 'F',
		T: 'G',
		U: 'H',
		V: 'I',
		W: 'J',
		X: 'K',
		Y: 'L',
		Z: 'M'
	}
};
/*

Loops to create ciphers
for (i = 0; i < letters.upperCase.length / 2; i++) {
	letters.upperCaseCipher.push({ letters.upperCasei]]: `${letters.upperCase[i + 13]}` });
}
for (i = 13; i < letters.upperCase.length; i++) {
	letters.upperCaseCipher.push({ [letters.upperCase[i]]: `${letters.upperCase[i - 13]}` });
}
*/

function rot13(message) {
	// split message to array of words
	let splitIntoWords = message.split(' ');

	// split words to array of individual letters
	let splitIntoLetters = splitIntoWords.map((c) => c.split(''));
	return splitIntoLetters;
	/* need to loop through letters and replace only letters...will need condition
	let replaceLetters = splitIntoLetters.map(c => c.replace(c, ) */

	// joined letters back together & return ciphered message
}

// console.log(rot13('test')) // output = "grfg";
// console.log(rot13('Test')); // output = "Grfg";
