// студент без имени
const user = {
	status: "student",
	kurs: 1,
}
console.log(user)
const user1 = {
	__proto__:user,
	status: "student",
	kurs: 1,
	name: "Петя"
}
console.log(user1)