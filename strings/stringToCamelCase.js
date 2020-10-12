/*

Directions:
    Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples:

    toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

    toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

Sample Tests:

    Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
    Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")



*/

function toCamelCase(str) {
	//   valid input to ensure it's not an empty string
	//   split the string
	//   push the first character into new array
	//   find the delimiters
	//   capitalize the first character after each delimiter
	//   push into new array
	//   join array
	//   return array
}

console.log(toCamelCase(''));
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase('The-Stealth-Warrior'));
console.log(toCamelCase('A-B-C'));
