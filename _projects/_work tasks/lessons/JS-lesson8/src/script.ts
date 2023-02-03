let hi = {
	'name': 'Alexey',
}

let ho = {
	__proto__:hi
}
console.log(ho)

class Homan {
	constructor(names, age) {
		this.names = names;
		this.age = age;
	}
	info() {
		console.log(this.names)
	}
}