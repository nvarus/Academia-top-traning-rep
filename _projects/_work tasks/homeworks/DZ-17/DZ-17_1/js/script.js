"use strict";

class BooksCard {
	constructor(image, title, author, price) {
		this.image = image;
		this.title = title;
		this.author = author;
		this.price = price;
	}
}

const books = [
	new BooksCard('/img/1.webp', 'JavaScript с нуля', 'Кирупа Чиннатхамби', 1416),
	new BooksCard('/img/2.webp', 'Современный JavaScript для нетерпеливых', 'Кей С. Хорстманн', 1784),
	new BooksCard('/img/3.webp', 'Изучаем программирование на JavaScript', 'Эрик Фримен', 2179),
	new BooksCard('/img/4.webp', 'JavaScript для глубокого обучения: TensorFlow.js', 'Франсуа Шолле', 3409),
];

const list = {
	// создаем страницу с книгами из массива books
	showHtml() {
		const content = document.querySelector('.task1__content');
		let bookID = 0;
		books.forEach(card => {
			content.innerHTML += `
			<div class="card">
				<div class="img-wrap">
					<img src="${card.image}" alt="">
				</div>
				<div class="card-info">
					<p class="card-title">${card.title}</p>
					<p class="card-author">${card.author}</p>
					<p class="card-price">${card.price}р.</p>
					<button data-id="${bookID}" class="card-button button">Купить</button>
				</div>
			</div>
			`;
			bookID++;
		});
	},
	// нажатие кнопок
	buttonClick(e) {
		// если нажата кнопка купить
		if (e.target.classList.contains('card-button')) {
			// вызываем метод openForm и передаем id книги
			list.openForm(e.target.dataset.id);
			//если нажата кнопка Оформить в форме
		} else if (e.target.name === 'task1-button' ) {
			e.preventDefault();
			list.openResult();
		}
	},
	// создаем форму и выводим на экран
	openForm(bookID) {
		const removeContent = document.querySelector('.task1__content');
		removeContent.remove();  // удаляем страницу с книгами
		const content = document.createElement('div');
		content.classList.add('task1__form');
		const task1 = document.querySelector('.task1');
		task1.append(content);
		task1.style.maxWidth = "470px";
		content.innerHTML += `
		<form id="task1-form" name="task1Form">
			<div class="form__book form__flex">
				<label>Книга</label>
				<input type="text" data-ID="${bookID}" disabled value="ID:${bookID}" id="bookId" name="bookId">
				<input type="text" disabled value="${books[bookID].title}" class="form__input" name="book">
			</div>
			<div class="form__quantity form__flex">
				<label>Количество*</label>
				<input type="number" class="form__input" name="quantity" value="1">
			</div>
			<div class="form__name form__flex">
				<label>Имя*</label>
				<input type="text" class="form__input" name="firstName">
			</div>
			<div class="form__address form__flex">
				<label>Адрес доставки*</label>
				<textarea name="address" id="" cols="30" rows="5" class="form__input"></textarea>
			</div>
			<div class="form__date form__flex">
				<label>Дата доставки*</label>
				<input type="date" class="form__input" name="date">
			</div>
			<div class="form__comment form__flex">
				<label>Примечание</label>
				<textarea name="comment" id="" cols="30" rows="5" class="form__input"></textarea>
			</div>
			<button class="form__button button" name="task1-button">Оформить</button>
			<p id="form-message">* - поля, обязательные для заполнения</p>
		</form>
		`;
	},
	// выводим результат
	openResult() {
		const form1 = document.forms.task1Form;
		let bookID = +form1.elements.bookId.dataset.id;
		let book = form1.elements.book.value;
		let quantity = form1.elements.quantity.value;
		let firstName = form1.elements.firstName.value;
		let address = form1.elements.address.value;
		let date = new Date(form1.elements.date.value);
		let comment = form1.elements.comment.value;
		
		const option = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		
		if (quantity === '' || firstName === '' || address === '' || date === '') {
			const message = document.querySelector('#form-message');
			message.textContent = 'ЗАПОЛНИТЕ ОБЯЗАТЕЛЬНЫЕ ПОЛЯ !';
		} else {
			form1.remove();
			const task1 = document.querySelector('.task1');
			task1.style.maxWidth = "700px";
			const div = document.querySelector('.task1__form');
			div.innerHTML += `
			<h2>Уважаемый, ${firstName}! Благодарим Вас за заказ.</h2>
			<p>Ваш товар: "${book}", ${quantity}шт. Сумма: ${books[bookID].price * quantity}р.</p>
			<p>Будет доставлен ${date.toLocaleDateString('ru-RU', option)} по адресу: ${address}</p>
			<p>Примечание: ${comment}</p>
			`;
		};
		
	}
};
list.showHtml();
document.addEventListener('click', list.buttonClick);