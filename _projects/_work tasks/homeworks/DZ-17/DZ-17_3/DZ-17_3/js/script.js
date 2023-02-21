"use strict";

/** Задание 6
создать html-страницу с возможностью забронировать билеты на поезд. Для начала пользователь выбирает направление поезда
и дату поездки, дальше отмечает места для брони. Также добавить возможность посмотреть уже забронированные билеты.
Хранить информацию в заранее подготовленных массивах. */

class Direct {
	constructor(direction, price) {
		this.direction = direction;
		this.price = price;
	}
};

const directList = [
	new Direct('Ульяновск - Москва', 1800),
	new Direct('Ульяновск - Казань', 700),
	new Direct('Ульяновск - Челябинск', 2300),
	new Direct('Ульяновск - Самара', 800),
	new Direct('Ульяновск - Нижний Новгород', 1200)
];

class Booked {
	constructor(direction, date, seats = []) {
		this.direction = direction;
		this.date = date;
		this.seats = seats;
	}
};

const bookedSeats = [
	new Booked('Ульяновск - Челябинск', "2023-02-25", [5, 6, 12]),
	new Booked('Ульяновск - Челябинск', "2023-02-25", [1, 3, 4]),
	new Booked('Ульяновск - Москва', "2023-02-22", [1, 2, 3])
];

const selectForm = document.forms.formSelect;
const formDirection = selectForm.direction;
const formDate = selectForm.date;

const fillSelect = () => {
	directList.forEach(direct => {
		formDirection.innerHTML += `
		<option>${direct.direction}</option>`;
	});
}

const checkReserv = (e) => {
	e.preventDefault()
	if ( document.querySelector(".ticket")) {
		const ticket = document.querySelector('.ticket')
		ticket.remove()
	}
	
	// проверяем уже занятые места
	let reservedSeats = [];
	bookedSeats.forEach(booked => {
		if (booked.direction === formDirection.value && booked.date === formDate.value) {
			const arr = reservedSeats;
			reservedSeats = arr.concat(booked.seats)
		}
	});
	let currentPrice = '';
	directList.forEach(direct => {
		if (direct.direction === formDirection.value) {
			currentPrice = direct.price
		}
	})
	showSeatsForm(reservedSeats, currentPrice)
}
// формируем форму с местами
const showSeatsForm = (seats = [], price) => {
	let reserv = seats.sort((a, b) => a - b);
	const seatsForm = document.createElement('form');
	const footer = document.createElement('div');
	footer.classList.add('footer')
	seatsForm.name = "seatsForm"
	seatsForm.classList.add('seatsForm')
	const content = document.querySelector('.task3__content')
	
	content.append(seatsForm)
	content.append(footer)
	for (let i = 1; i <= 28; i++) {
		seatsForm.innerHTML += `
		<div class="check-wrap">
			<input type="checkbox" value="${i}" class="checkbox" data-book="free" >
			<span>${i}</span>
		</div>`
	}
	footer.innerHTML += `
		<span id="summ">Сумма: </span>
		<button id="book" class="button">Бронировать</button>
`
	// отмечаем забронированные места
	const checkbox = document.querySelectorAll('.checkbox')
	const checkWrap = document.querySelectorAll('.check-wrap')
	let i = 0;
	reserv.forEach(check => {
		while (i <= checkbox.length - 1) {
			if (check === +checkbox[i].value) {
				checkbox[i].setAttribute("checked","")
				checkbox[i].setAttribute("disabled","")
				checkbox[i].dataset.book = 'reserv'
				checkWrap[i].style.color = "gray"
				i++
				break
			}
			i++
		}
	});
	const sumSpan = document.querySelector('#summ')
	let sum = 0;
	sumSpan.textContent = sum + 'р.'
	document.addEventListener('click', e => {
		if (e.target.dataset.book === 'free') {
			sum += price
			sumSpan.textContent = sum + 'р.'
			e.target.dataset.book = 'book';
		}
		
		if (e.target.id === 'book') {
			e.preventDefault()
			const bookCheck = []
			checkbox.forEach(checkbox => {
				if (checkbox.dataset.book === "book") {
					bookCheck.push(+checkbox.value)
				}
			})
			bookedSeats.push(new Booked(formDirection.value, formDate.value, bookCheck))
			
			const ticket = document.createElement('div')
			ticket.classList.add('ticket')
			content.append(ticket)
			ticket.innerHTML += `
			<div class="title">Направление</div>
			<div class="title">Дата</div>
			<div class="title">Место</div>
			`
			bookCheck.forEach(check => {
				ticket.innerHTML += `
				<div>${formDirection.value}</div>
				<div>${formDate.value}</div>
				<div>${check}</div>
			`
			
			})
			
			
			seatsForm.remove()
			footer.remove()
		}
	})
	
}

fillSelect();

const selectButton = document.querySelector('.button')
selectButton.addEventListener('click', checkReserv)