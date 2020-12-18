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
	// create variable to hold ciphered letters and characters
	let finalLetters = [];

	// split message to array of words
	let splitIntoLetters = message.split('');

	// need to loop through letters and replace only letters
	let replaceLetters = splitIntoLetters.map((c) => c.replace(c, letters.lowerCaseCipher[c]));

	// need condition to tell whether letter is uppercase or lowercase & push
	if (c === /\W/ || c === /\d/) {
		// push if character is not a letter
		finalLetters.push(c);
	} else if (letters.lowerCase.indexOf(c) !== -1) {
		// replace & push if lowercase letter
	} else {
		// replace & push uppercase letter
	}

	// joined letters back together & return ciphered message
	return replaceLetters;
}

console.log(rot13('test')); // output = "grfg";
console.log(rot13('Test')); // output = "Grfg";
