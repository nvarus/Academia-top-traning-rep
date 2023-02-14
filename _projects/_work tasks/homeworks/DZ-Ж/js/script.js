// это форма, получаем доступ по name
const myForm = document.forms.form1

// это радио кнопки, получаем доступ по их name
const radio = myForm.radioAnswer

document.addEventListener('click', e => {
	// ищем кнопку по name
	if (e.target.name === "buttonAnswer") {
		// перебираем радио кнопки
		radio.forEach(rad => {
			// если кнопка выбрана
			if (rad.checked) {
				// выводим значение ее поля data-answer
				console.log(rad.dataset.answer)
			}
		})
		e.preventDefault()
	}
})