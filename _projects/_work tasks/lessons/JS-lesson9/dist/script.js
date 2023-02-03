

/** Задание 1
Создать html-страницу для генерации случайных чисел. */

const btn = document.querySelector('#btn')
const number = document.querySelector('#number')

btn.addEventListener('click', () => {
	number.innerHTML = Math.trunc(Math.random() * 100);
	
})