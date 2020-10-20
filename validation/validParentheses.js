/*


Instructions:
    Write a function called that takes a string of parentheses, and determines if the order of 
    the parentheses is valid. The function should return true if the string is valid, and false 
    if it's invalid.

Examples:
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

Sample Tests:
    Test.assertEquals(validParentheses( "()" ), true);
    Test.assertEquals(validParentheses( "())" ), false);

    const true1 = '()';
    const true2 = '()()';
    const true3 = '(())';

    const false1 = '())':
    const false2 = ")(()))";
    const false3 = "(";

*/

function validParentheses(parens) {
	const regex = /(^\(+)(?=\)*(?=\(*))\)$/g;
	const openParen = (parens.match(/(\(+)/g) || []).length;
	const closeParen = (parens.match(/(\)+)/g) || []).length;

	console.log(openParen, closeParen);

	return regex.test(parens);
}

console.log(validParentheses('(') + ' should be true');
console.log(validParentheses(')') + ' should be false');

// console.log(validParentheses('()') + ' should be true');
// console.log(validParentheses('())') + ' should be false');
// console.log(validParentheses('(()') + ' should be false');
// console.log(validParentheses('()(') + ' should be false');
// console.log(validParentheses('(())') + ' should be true');
