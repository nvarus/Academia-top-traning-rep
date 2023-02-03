/** Задание 1
 * создать html-страницу для ввода имени пользователя. Необходимо проверять каждый символ, который вводит
 * пользователь. Если он ввел цифру, то не отображать ее в input. */

const task1Input = document.querySelector('.task1__input')
const task1OutText = document.querySelector('.task1__outText')
task1Input.addEventListener('input', () => {
	let result: string = task1Input.value
	task1OutText.innerHTML = result.match(/\D/gi).join('')
})

/** Задание 2
Создать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть. */


const modalWindow = document.querySelector('.task2__modal')
const closeModal = () => {
	modalWindow.classList.add('none')
}

const task2Open = document.querySelector('.task2__button')
task2Open.addEventListener('click', () => {
	modalWindow.classList.remove('none')
})

const modalClose = document.querySelector('.modal__button')
modalClose.addEventListener('click', closeModal)

const xClose = document.querySelector('.modal__x')
xClose.addEventListener('click', closeModal)


