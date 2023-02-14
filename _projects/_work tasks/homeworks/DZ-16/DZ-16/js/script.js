"use strict";

class Message {
	date;
	text;
	name;
	
	constructor(userName, messageDate, messageText) {
		this.name = userName;
		this.date = new Date(messageDate);
		this.text = messageText;
	}
	
}

const messageList = [
	new Message('Kempleav', '2022/11/29',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque cumque cupiditate ducimus esse facere incidunt libero minus nesciunt nostrum, numquam obcaecati omnis, pariatur porro quae qui saepe suscipit voluptatum!'),
	new Message('Jade', '2022/12/06', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ratione.'),
	new Message('Dalerma', '2022/12/15', 'Lorem ipsum dolor sit amet, consectetur adipisicing.'),
	new Message('Qwind', '2022/12/31',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum eos facilis, odio praesentium quae quis rem rerum veniam! Ab assumenda cupiditate error labore nostrum provident quam rerum sequi vitae.	'),
]// массив сообщений


class ShowHTML {
	constructor(messageList) {
		this.messageList = messageList;
	}
	
	getHtml() {
		const messages = document.querySelector('.task1__messages')
		
		
		
		this.messageList.forEach(message => {
			const wrap = document.createElement('div')
			wrap.classList.add('message');
			const nameDate = document.createElement('div')
			nameDate.classList.add('message__nameDate')
			wrap.append(nameDate)
			const nameMessage = document.createElement('h2')
			nameMessage.classList.add('message__name')
			nameMessage.textContent = message.name;
			nameDate.append(nameMessage)
			const dateMessage = document.createElement('h2')
			dateMessage.classList.add('message__date')
			dateMessage.textContent = message.date;
			nameDate.append(dateMessage)
			const text = document.createElement('p')
			text.classList.add('message__text')
			text.textContent = message.text;
			wrap.append(text)
			
			messages.append(wrap)
		})
	}
	
	updateMessage() {
		const messages = document.querySelector('.task1__messages')
		messages.remove()
		const task1 = document.querySelector('.task1')
		const newMessages = document.createElement('div')
		newMessages.classList.add('task1__messages')
		task1.prepend(newMessages)
		show1.getHtml()
	}
	
	addMessage(e) {
		e.preventDefault()
		const form = document.forms.namedItem('task1')
		let name = form.elements.namedItem('task1FormName')
		const text = form.elements.namedItem('task1FormMessage')
		const date = new Date();
		messageList.push(new Message(name.value, date, text.value))
		name.value = ''
		text.value = ''
		show1.updateMessage()
	}
	
}
const show1 = new ShowHTML(messageList)
show1.getHtml()
const button = document.querySelector('#task1-form-button')
button.addEventListener('click', show1.addMessage)


/** Задание 2
создать html-страницу для прохождения теста. Вопросы теста имеют два варианта ответа (только 1 правильный). После
 прохождения теста, вывести количество правильных ответов. */

class Questions {
	constructor(question, answer1, answer2, correctAnswer) {
		this.question = question;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.correctAnswer = correctAnswer;
	}
}

const questList = [
	new Questions('Сколько букв в слове "Привет"', "2", "6", 2),
	new Questions('Сколько букв в слове "Пока"', "4", "7", 1),
	new Questions('Сколько будет "7 + 3"', "9", "10", 2),
	new Questions('Сколько длилась "столетняя война"', "100", "116", 2),
	new Questions('Сколько длилась "тридцатилетняя война"', "30", "32", 1),
];

const quest = {
	count: 0,   // номер вопроса
	corrAnswers: 0,   // кол-во правильных ответов
	
	showQuestion() {
		// если вопросы закончились, выводим результат
		if (this.count === questList.length) {
			this.result()
		} else {
			// иначе выводим текст текущего вопроса на экран
			const root = document.querySelector('#task2-root')
			// текст для кнопки, если вопрос последний, выводим 'Finish', иначе 'Next'
			let buttonText = (this.count < questList.length - 1) ? 'Next' : 'Finish';
			// создаем форму и выводим на экран
			const question = `
		<form id="task2-form">
			<p class="task2-questin">${this.count + 1}) ${questList[this.count].question}?</p>
			
			<div class="task2-radio">
				<input type="radio" name="answer" data-answer="1">
				<span>${questList[this.count].answer1}</span>
			</div>
			<div class="task2-radio">
				<input type="radio" name="answer" data-answer="2">
				<span>${questList[this.count].answer2}</span>
			</div>
			<button id="task2-button">${buttonText}</button>
			<div class="task2-alert"></div>
		</form>
		`
			root.innerHTML = question
		}
	},
	// при нажатии на кнопку выводим текст следующего вопроса
	nextQuestion(e, check = 0) {
		const answer = document.querySelectorAll('input[name="answer"]')
		const alert = document.querySelector('.task2-alert')
		const form = document.querySelector('#task2-form')
		if (e.target.id === 'task2-button') {
			e.preventDefault()
			answer.forEach(radio => {
				if (radio.checked) {
					check++
					if (+radio.dataset.answer === +questList[quest.count].correctAnswer) quest.corrAnswers++;
					quest.count++
					form.remove()
					quest.showQuestion()
				}
			})
			// если ни одна кнопка не нажата, выводим сообщение
			if (check === 0) {
				alert.innerHTML = `<p>Выберите ответ!</p>`
			}
		}
	},
	// вывод результата
	result() {
		const root = document.querySelector('#task2-root')
		root.innerHTML = `
		<div id="task2-form">
			<h2>Результат:</h2>
			<h3>${quest.corrAnswers} правильных ответа из ${questList.length} вопросов</h3>
		</div>
		`
	}
	
}
quest.showQuestion()

document.addEventListener('click', quest.nextQuestion)

/** Задание 3
создать html-страницу с формой для ввода стилизованного текста. После заполнения формы, вывести текст на экран в
 соответствии с указанными стилями. */
const task3 = {
	
	
	showText() {
		const div = document.querySelector('.task3__div')
		const textarea = document.querySelector('.task3__textarea')
		div.textContent = `Результат:`+ textarea.value
		div.classList.remove('task3__none')
		
		const checkBox = document.querySelectorAll('.task3__check')
		checkBox.forEach(item => {
			// если чекбокс выбран, добавляем к результату нужный класс
			if (item.checked) div.classList.add(item.dataset.check)});
		
		const radio = document.querySelectorAll('.task3__radio')
		radio.forEach(item => {
			// если radio кнопка выбрана, добавляем к результату нужный стиль
			if (item.checked) div.style.textAlign = item.dataset.radio});
		
	}
}

const task3Button = document.querySelector('#task3-button')
task3Button.addEventListener('click', task3.showText)

































