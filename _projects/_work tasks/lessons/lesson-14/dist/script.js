"use strict";


/** Задание 3
Создать html-страницу с формой для заполнения информации о пользователе. После заполнения
 формы вывести всю введенную информацию в текстовом виде. */

const form = document.querySelector('#form');
const personFn = form.querySelector('#person-Fn');
const personLastName = form.querySelector('#person-lastName');
const personDate = form.querySelector('#person-date');
const personCountry = form.querySelector('#person-country');
const personCity = form.querySelector('#person-city');
const personGender = form.querySelectorAll("[name='personGender']");
const personSkills = form.querySelectorAll("[name='personSkill']");
const body = document.querySelector('body')

function signIn(e) {
	let listSkill = ""
	for (let item of personGender) {
		if (item.checked) {
			gender = `<div class="col">Пол</div><div class="col">${item.value}</div>`
			item.checked = false
		}
	}
	
	for (let personskill of personSkills) {
		if (personskill.checked) {
			listSkill += personskill.value + ', '
			personskill.checked = false
		}
	}
	skill = `<div class="col">Навыки</div><div class="col">${listSkill}</div>`
	
	const table = document.createElement('div')
	table.className = 'table'
	table.append(personFn.value)
	table.append(personLastName.value)
	table.append(personDate.value)
	table.append(personCountry.value)
	table.append(personCity.value)
	table.append(gender)
	table.append(skill)
	table.append(listSkill)
	body.append(table)
	e.preventDefault()
}
