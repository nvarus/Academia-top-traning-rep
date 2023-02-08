"use strict";
/** Задание 6
создать html-страницу со списком ссылок. Ссылки на внешние источники (которые начинаются с http://)
необходимо подчеркнуть пунктиром. */
const reference = document.querySelectorAll('.task6__ref')
const regexp = /https?:\/\//;
reference.forEach(ref => {
	if (regexp.test(ref.textContent)) {
		ref.style.borderBottom = "2px dashed blue"
	}
})

/** Задание 7
создать html-страницу со списком книг. При щелчке на элемент, цвет текста должен меняться на оранжевый. При
 повторном щелчке на другую книгу, предыдущей необходимо возвращать прежний цвет.
 Если при клике мышкой была зажата клавиша Ctrl, то элемент добавляется/удаляется из выделенных. Если при клике мышкой
была зажата клавиша Shift, то к выделению добавляются все элементы в промежутке от предыдущего кликнутого до текущего.*/
const li = document.querySelectorAll('.books')
// нумеруем список с помощью атрибута data
for (let i = 0; i < li.length; i++) {
	li[i].setAttribute('data-li', i + 1)
}
let previousClick = 0;
let currentClick = 0;

document.addEventListener('click', (e) => {
	previousClick = +currentClick;
	currentClick = +e.target.dataset.li
	
	let minClick;
	let maxClick;
	
	if (previousClick >= currentClick) {
		maxClick = previousClick;
		minClick = currentClick;
	} else {
		maxClick = currentClick;
		minClick = previousClick;
	}
	// с нажатым Ctrl
	if (e.target.classList.contains('books') && e.ctrlKey) {
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active')
		} else {
			e.target.classList.add('active')
		}
		// с нажатым Shift
	} else if (e.target.classList.contains('books') && e.shiftKey) {
		document.getSelection().removeAllRanges(); // отключаем выделение текста с помощью Shift
		li.forEach(item => {
			if (item.dataset.li >= minClick && item.dataset.li <= maxClick) {
				item.classList.add('active')
			}
		})
		// Без модификатора
	} else if (e.target.classList.contains('books')) {
		li.forEach(item => {
			item.classList.remove('active')
		})
		e.target.classList.add('active')
	}
})

/** Задание 8
создать html-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега
div. При нажатии Ctrl+E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При
 нажатии Ctrl+S, вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по
 умолчанию для этих сочетаний клавиш. */

const txt = {
	// в value хранится наш текст
	value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus amet, doloremque doloribus ea eius' +
		' excepturi facilis fugit impedit inventore iste iusto laboriosam magnam necessitatibus neque nostrum,' +
		' obcaecati odit optio qui quis quos repellendus rerum sed similique tempore temporibus vel veniam! Architecto' +
		' cumque earum expedita, fugit libero qui tempore voluptatum.',
	
	// метод для вывода на экран элемента
	show(elem) {
		// сохраняем значение и удаляем старый элемент
		if (!!document.querySelector('.task8__text')) { // проверяем, существует ли элемент
			const oldElem = document.querySelector('.task8__text')
			if (oldElem.tagName === "TEXTAREA") { // если элемент textarea
				txt.value = oldElem.value     //сохраняем значнние
			}
			oldElem.remove()     // удаляем элемент
		}
		const newElement = document.createElement(elem)
		newElement.classList.add('task8__text')
		newElement.textContent = txt.value
		root.append(newElement)
	},
	// обрабатываем нажатие клавиш
	processAClick(e) {
		if (e.code === 'KeyE' && e.ctrlKey) {
			e.preventDefault()
			txt.show('textarea')
		} else if (e.code === 'KeyS' && e.ctrlKey) {
			e.preventDefault()
			txt.show('div')
		}
	}
	
	
};
const root = document.querySelector('#root')
txt.show('div')
document.addEventListener('keydown', txt.processAClick)

/** Задание 9
создать html-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать
данные по этой колонке. Например: на скриншоте люди отсортированы по возрасту. Учтите, что числовые значения должны
сортироваться как числа, а не как строки. */
class Person {
	constructor(firstName, lastName, age, company) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.company = company;
	}
}
const personList = [
	new Person('Тимоти', 'Кук', 62,'Apple'),
	new Person('Ларри', 'Пейдж', 49,'Google'),
	new Person('Сергей', 'Брин', 49,'Google'),
	new Person('Билл', 'Гейтс', 67,'Microsoft'),
	new Person('Марк', 'Цукерберг', 38,'Facebook'),
	new Person('Линус', 'Торвальдс', 53,'The Linux Foundation'),
	new Person('Бьёрн', 'Страуструп', 72,'AT&T'),
	new Person('Гвидо ван', 'Россум', 67,'Microsoft'),
];
// данные для заголовка
const title = [
	{id: 'firstName', name: 'Имя', type: 'string'},
	{id: 'lastName', name: 'Фамилия', type: 'string'},
	{id: 'age', name: 'Возраст', type: 'number'},
	{id: 'company', name: 'Компания', type: 'string'},
]
class PersonTable {
	constructor(personList) {
		this.personList = personList;
	}
	// формируем html код таблицы
	getHtml() {
		const root = document.querySelector('#task9-root');
		const table = document.createElement('div');
		table.classList.add('task9__table');
		
		// заголовок таблицы
		title.forEach(object => {
			const div = document.createElement('div');
			div.id = object.id;
			div.textContent = object.name;
			div.setAttribute("data-type", object.type)
			div.className = 'task9__title task9__grid';
			table.append(div);
		})
		// строки таблицы
		for (let i in personList) {
			for (let j in personList[i]) {
				const div = document.createElement('div');
				div.textContent = personList[i][j];
				div.classList.add('task9__grid')
				table.append(div)
			}
		}
		root.append(table)
	}
	// сортировка таблицы
	sortTable(e) {
		if (e.target.classList.contains('task9__title')) {
			// для сортировки по алфавиту
			if (e.target.dataset.type === "string") {
				personList.sort((a, b) => (a[e.target.id]).localeCompare(b[e.target.id]));
				// для сортировки чисел
			} else if (e.target.dataset.type === "number") {
				personList.sort((a, b) => a[e.target.id] - b[e.target.id]);
			}
			const oldTable = document.querySelector('.task9__table')
			oldTable.remove();
			table1.getHtml();
		}
	}
}

const table1 = new PersonTable(personList);
table1.getHtml()

const clickTitle = document.querySelectorAll('.task9__title')
clickTitle.forEach(item => {
	addEventListener('click', table1.sortTable)
})

















