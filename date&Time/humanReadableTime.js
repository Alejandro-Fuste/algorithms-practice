/*

Instruction:
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.

Sample Tests: 

    describe('examples', function() {
        it('should format correctly', function() {
            Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
            Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
            Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
            Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
            Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });

 */

function humanReadable(seconds) {
	/* Format time equal to or less than 24 hours 
	    -create a new Date object, pass in seconds, and multiply seconds by 1000 to get milliseconds
	    -use the ISOString method to get time format
        -use the substring method to remove everything except the time
    */

	/* Format time greater than 24 hours
        -Within a temperal literal string, use Math.floor and within it 
         divide seconds by 3600000 and multiply by 1000
        -Then use toString method to convert number to string
        -Concatenate it with new Date and substring to get minutes and seconds
    
     */

	return seconds <= 86399
		? new Date(seconds * 1000).toISOString().substr(11, 8)
		: `${Math.floor(seconds / 3600).toString()}${new Date(seconds * 1000).toISOString().substr(13, 6)}`;
}

console.log(humanReadable(0));
console.log(humanReadable(86399));
console.log(humanReadable(359999));
