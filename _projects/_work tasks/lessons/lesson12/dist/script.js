"use strict";

// const content = document.querySelector('.content')
// const wrap = document.createElement('div')
// wrap.classList.add('wrap')
// wrap.id = 'wrap'
// wrap.textContent = 'hello'
//
// const box2 = document.querySelector('.box2')
// const box3 = box2.cloneNode(true)
// box3.textContent = 'hhhhh'
//
// content.append(box3)
//
// const items = document.querySelector('.items2')
// console.log(items.previousElementSibling)
// console.log(items.nextElementSibling)
// console.log(items.parentElement)
//
// const menu = document.querySelector('.menu')
// console.log(menu.firstElementChild)
// console.log(menu.lastElementChild)

/** Создать html-страницу с текстом и палитрой цветов.При клике на цвет палитры,
 * должен изменяться цвет текста на выбранный. Для указания, какой ячейке какой
 * цвет соответствует,можно использовать атрибут data-color в каждой ячейке,
 * а потом c помощью JS получать необходимый цвет из этого атрибута. */

class Pallet {
	constructor(cls = []) {
		this.colors = 	cls;
		this.getPallet()
	}

	getPallet() {
		const content = document.querySelector('.content')
		// создаем палитру
		const palletWrap = document.createElement('div')
		palletWrap.classList.add('text-box__pallet', 'pallet')
		// создаем элемент
		const palletElementSample = document.createElement('div')
		
		this.colors.forEach((item) => {
			const instance = palletElementSample.cloneNode(true)
			instance.classList.add('pallet__color')
			instance.setAttribute('data-color', `${item}`)
			content.append(instance)
		})
	}
}

const pallet1 = new Pallet (['red', 'green', 'blue'])



























