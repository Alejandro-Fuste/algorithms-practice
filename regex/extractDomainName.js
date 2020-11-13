/*

Extract the domain name from a URL

Instructions: 

    Write a function that when given a URL as a string, parses out 
    just the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github" 
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"


Sample Tests:

    Test.assertEquals(domainName("http://google.com"), "google");
    Test.assertEquals(domainName("http://google.co.jp"), "google");
    Test.assertEquals(domainName("http://google.co.jp"), "xakep");
    Test.assertEquals(domainName("https://youtube.com"), "youtube");


*/

function domainName(url) {
	// To parse out the domain name, insert regex into first argument and
	// use empty string as second argument of replace method
	// Use split method with a period as the argument to split the url into
	// an array
	// Return the domain name using bracket notation with '0' inside the brackets

	return url.replace(/(http:\/\/|https:\/\/|www\.)/g, '').split('.')[0];
}

console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('https://youtube.com'));
