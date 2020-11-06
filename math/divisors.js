function divisors(integer) {
	var res = [];
	for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
	return res.length === 0 ? `${integer} is prime` : res;
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(1400));
console.log(divisors(13));
