//function hello() {
//	console.log('Hello', this)
//}
//
//const person = {
//	name: 'Alexey',
//	age: 42,
//	saHello: hello,
//	sayHelloWindow: hello.bind(document),
//	logInfo: function (job, phone) {
//		console.group(`${this.name} info:`)
//		console.log(`Name is ${this.name}`)
//		console.log(`Age is ${this.age}`)
//		console.log(`Job is ${job}`)
//		console.log(`Phone is ${phone}`)
//		console.groupEnd()
//	}
//}
//
//const lena = {
//	name: 'Elena',
//	age: 23
//}

//person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()
//person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')
//person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])

/// ======================================================

//const array = [1, 2, 3, 4, 5]
//
//function multBy(arr, n) {
//	return arr.map(function (i) {
//		return i * n
//	})
//}

Array.prototype.multBy = function (n) {
	return this.map(function (i) {
		return i * n
	})
}


array.multBy(2)