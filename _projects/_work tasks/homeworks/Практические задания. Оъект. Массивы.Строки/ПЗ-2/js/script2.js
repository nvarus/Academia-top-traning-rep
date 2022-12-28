function isPrime(num) {
	if (Math.abs(num) == 1 || num == 0) return false;
	for (let i = 2; i < Math.abs(num); i++) {
		return num % i === 0 ? false : true;
	}
}