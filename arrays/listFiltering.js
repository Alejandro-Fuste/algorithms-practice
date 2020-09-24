/*

Exercise Goal: In this kata you will create a function that takes a list
               of non-negative integers and strings and returns a new list 
               with the strings filtered out. 

*/

function filter_list(l) {
	// Use filter method with typeof operator
	// With filter, will need c to get current value
	// With typeof operator, will set the condition for c to not equal a string

	return l.filter((c) => typeof c != 'string');
}

console.log(filter_list([ 1, 2, 'a', 'b' ]));
console.log(filter_list([ 1, 'a', 'b', 0, 15 ]));
console.log(filter_list([ 1, 2, 'aasf', '1', '123', 123 ]));
