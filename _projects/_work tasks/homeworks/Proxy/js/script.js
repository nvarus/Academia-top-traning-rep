"use strict";
// Object
const person = {
	name: 'Alexey',
	age: 42,
	job: 'Fullstack'
}

const op = new Proxy(person, {
	get(target, prop) {
		return target[prop]
	}
})

// Генераторы
function* gen() {
	for (let i = 0; i < 10; i++) {
		yield i
	}
}