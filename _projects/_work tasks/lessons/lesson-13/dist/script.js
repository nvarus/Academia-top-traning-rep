"use strict";


// focus, blur click


const formPerson = document.forms.person;
// const formPerson = document.querySelector('form')
const personName = formPerson.personName
const personFamily = formPerson.personFamily
const personAge = formPerson.personAge
const personMail = formPerson.personMail
const patternEmail = "^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"
formPerson.addEventListener('submit', (e) => {
	
	
	if (!email(personMail)) {
		personMail.placeholder = "Не валидный email"
		console.log('Не валидный email')
		e.preventDefault();
	}
})

personMail.addEventListener('focus', (e) =>{

})

const email = (eml) => {
	return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(eml.value)
}





