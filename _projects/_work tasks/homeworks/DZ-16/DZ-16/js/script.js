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
