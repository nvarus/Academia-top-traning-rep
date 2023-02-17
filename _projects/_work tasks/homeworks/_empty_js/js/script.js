"use strict";

class Queries {
	constructor(question, ans1, ans2, correctAnswer) {
		this.question = question;
		this.ans1 = ans1;
		this.ans2 = ans2;
		this.correctAnswer = correctAnswer;
	}
}

const qu = [
	new Queries("Сколько букв в слове 'Привет'", "2", "6", 2),
	new Queries("Сколько букв в слове 'Пока'", "4", "6", 1)
]
const html = {
	correctCount: 0,
	count: 0,
	showQuestion() {
		const form = document.forms.form1
		form.innerHTML = `
			<p>${this.count + 1}) ${qu[this.count].question}</p>
			<div>
			<input type="radio" name="answer" data-answer="1"><span>${qu[this.count].ans1}</span>
			</div>
			<div>
			<input type="radio" name="answer" data-answer="2"><span>${qu[this.count].ans2}</span>
			</div>
			<button name="button">${(this.count < qu.length - 1) ? 'Следующий' : 'Результат'}</button>
`
	},
	clickBtn(e) {
		const form = document.forms.form1
		let check = 0
		if (e.target.name === 'button') {
			e.preventDefault()
			const radio = document.forms.form1.answer
			radio.forEach(rad => {
				if (rad.checked) {
					console.log(+rad.dataset.answer)
					console.log(qu[html.count].correctAnswer)
					if (+rad.dataset.answer === +qu[html.count].correctAnswer) {
						html.correctCount++
					}
					html.count++
					html.showQuestion()
				}
				
			})
			
		}
	}
}
html.showQuestion()
document.addEventListener('click', html.clickBtn)

