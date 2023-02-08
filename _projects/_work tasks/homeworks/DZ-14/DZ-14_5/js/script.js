"use strict";
/** Задание 5
Создать html-страницу, на которой пользователь может ввести номер месяца, год, и получить календарь на указанный месяц.
Календарь можно генерировать с помощью таблицы. Начальный день недели всегда должен быть понедельник. */

const form = document.querySelector('#form');
const button = form.querySelector('#button');
const monthIn = form.querySelector('#month');
const yearIn = form.querySelector('#year');

const date = {
	year: 0,
	month: 0,
	get firstWeakDay() {
		const day = new Date(date.year, date.month - 1, 1).getDay();
		if (day === 0) {
			return 7;
		} else return day;
	},
	
	get lastWeakDay() {
		const day = new Date(date.year, date.month - 1, date.lastDayMonth).getDay();
		if (day === 0) {
			return 7;
		} else return day;
	},
	
	lastDayMonth: 0,
	months: ['', 'Январь', 'Февраль', 'Март', 'Апрель' , 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	week: ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'],
}

// Получаем данные из формы
const getDataForm = () => {
	
	if (document.querySelector('.table')) {
		document.querySelector('.table').remove();
		document.querySelector('h2').remove();
	}
	
	date.year = +yearIn.value;
	date.month = +monthIn.value;
	date.lastDayMonth = new Date(date.year, date.month, 0).getDate();
	getHtml();
}

const getHtml = () => {
	const h2 = document.createElement('h2');
	h2.textContent = `${date.year}, ${date.months[date.month]}`;
	form.append(h2);
	const content = document.querySelector('.content');
	const table = document.createElement('div');
	
	// формируем заголовок таблицы
	table.classList.add('table');
	content.append(table);
	date.week.forEach(weekDay => {
		const div = document.createElement('div');
		div.classList.add('table__title');
		div.textContent = weekDay;
		table.append(div);
	});
	
	// вставляем пустые дни перед 1м числом
	for (let i = 1; i < date.firstWeakDay; i++) {
		const div = document.createElement('div');
		div.classList.add('table__empty-day');
		div.textContent = '-';
		table.append(div);
	}
	
	// вставляем дни
	for (let i = 1; i <= date.lastDayMonth; i++) {
		const div = document.createElement('div');
		div.classList.add('table__day');
		div.textContent = `${i}`;
		table.append(div);
	}
	console.log(date.lastWeakDay)
	// вставляем пустые дни после последнего числа
	for (let i = 1; i <= 7 - date.lastWeakDay; i++) {
		const div = document.createElement('div');
		div.classList.add('table__empty-day');
		div.textContent = '-';
		table.append(div);
	}
}

button.addEventListener('click', getDataForm);