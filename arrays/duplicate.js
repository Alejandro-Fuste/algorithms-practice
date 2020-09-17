/* 
Goal:

The goal of this exercise is to remove duplicates from an array. 

*/

// Create function that accepts an array as argument and will use Set to remove duplicates

function removeDuplicatesWithSet(array) {
	// Use set to remove duplicates and from array method to create an array
	return Array.from(new Set(array));
}

// Create function that accepts an array as argument and will use filter to remove duplicates

function removeDuplicatesWithFilter(array) {
	// Use filter and indexOf method to remove duplicates
	return array.filter((c, i) => array.indexOf(c) === i);
}

console.log(removeDuplicatesWithSet([ 1, 1, 2, 3, 3, 4, 4, 5 ]));
console.log(removeDuplicatesWithFilter([ 1, 1, 2, 3, 3, 4, 4, 5 ]));
// console.log(removeDuplicates('success'));
