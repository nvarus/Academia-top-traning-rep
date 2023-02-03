//// студент без имени
//const user = {
//	status: "student",
//	kurs: 1,
//}
//console.log(user)
//const user1 = {
//	__proto__:user,
//	status: "student",
//	kurs: 1,
//	name: "Петя"
//}
//user1.kurs = 2;
//console.log(user1)

const grangFather = {
	race: 'Negroid',
	hairColor: 'Black',
	height: 185,
	makeRepaire: function () {
		console.log('Я хорошо делаю ремонт')
	}
}

console.log(grangFather)

const dad = {
	hairColor: 'blonde',
	__proto__: grangFather,
}
console.log(dad)

const baby = {
	__proto__: dad,
	
}
console.log(baby)
dad.__proto__.makeRepaire()