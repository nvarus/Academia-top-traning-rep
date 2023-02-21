"use strict";

/** Задание 5
создать html-страницу с возможностью отмечать присутствующих на паре. Для начала пользователь выбирает группу и пару,
дальше вводит тему занятия и отмечает присутствующих. Также добавить возможность посмотреть уже отмеченные пары.
Хранить информацию в заранее подготовленных массивах. */

const groups = {
	group1: [
		"Павлова Дарья",
		"Гусева Алиса",
		"Игнатов Макар",
		"Степанова Майя",
		"Черкасов Тимофей",
		"Архипова Вера",
		"Филатов Егор",
		"Макаров Павел",
		"Власова Мария",
		"Прохоров Илья"
	],
	group2: [
		"Новикова Анна",
		"Ежова Анастасия",
		"Зыкова Вера",
		"Никитин Александр",
		"Ефимова Мила",
		"Титов Матвей",
		"Алексеева Амелия",
		"Пименова Юлия"
	],
	group3: [
		"Sharon Carroll",
		"Lillie Allen",
		"Peter Williams",
		"Dana Rodgers",
		"Thomas Valdez",
		"Bonnie Bishop"
	]
}

class Lesson {
	constructor(lessonName, group, present = [], topic) {
		this.lessonName = lessonName;
		this.group = group;
		this.present = present;
		this.topic = topic;
	}
}

const lessonsList = [
	new Lesson('lesson1', "group1", [true, true, false, true, true, false, false, true, true, true], "Классы"),
	new Lesson('lesson2', "group2", [true, false, false, true, true, false, false, true], "Логические операторы"),
	new Lesson('lesson3', "group3", [false, true, false, true, true, true], "Циклы"),
]

const fillOption = () => {
	const form = document.querySelector('#task2-form');
	// заполняем группу
	const selectGroup = document.querySelector('#task2-group');
	Object.keys(groups).forEach(group => {
		const option = document.createElement('option');
		option.value = group;
		option.textContent = group;
		option.classList.add('optionRemove')
		selectGroup.append(option);
	});
	
	// заполняем урок
	const selectLesson = form.task2Lesson;
	lessonsList.forEach(lesson => {
		const option = document.createElement('option');
		option.value = lesson.lessonName;
		option.classList.add('optionRemove')
		option.textContent = lesson.lessonName;
		selectLesson.append(option);
	});
	const newOption = document.createElement('option');
	newOption.value = 'newLesson';
	newOption.textContent = 'Новый урок';
	newOption.classList.add('optionRemove');
	selectLesson.append(newOption);
}

// формируем список нового урока
const newLesson = () => {
	const form2 = document.forms.task2Form;
	const lessonGroup = form2.task2Group;
	const list = document.querySelector('.task2-list');
	list.innerHTML = `
	<form id="task2-listForm" name="task2ListForm" class="task2-listForm">
		<label for="task2-topic">Тема урока</label><input id="task2-topic" name="task2Topic">
		<div class="listForm__grid">`
	// формируем заголовок таблицы
	const listFormGrid = document.querySelector('.listForm__grid')
	let studentList = groups[lessonGroup.value]
	listFormGrid.innerHTML += `
	<h3 class="listForm__gridElem">Имя</h3>
	<h3 class="listForm__gridElem">Явка</h3>`;
	// формируем строки таблицы
	studentList.forEach(student => {
		listFormGrid.innerHTML += `
		<p class="listForm__student listForm__gridElem">${student}</p>
		<div class="listForm__gridElem listForm__inputWrapper">
		<input type="checkbox" class="listForm__checkbox" name="listFormCheckbox">
		</div>`;
	});
	const listForm = document.querySelector('#task2-listForm');
	listForm.innerHTML += `
			<button class="listForm__button" name="listFormButton">Сохранить</button>`;
	list.innerHTML += `
	</div>
	</form>`;
	const listButton = document.querySelector('.listForm__button');
	listButton.addEventListener('click', toSaveLesson);
}

const toSaveLesson = (e) => {
	e.preventDefault();
	const form = document.forms.task2Form;
	const lessonGroup = form.task2Group;
	const listForm = document.forms.task2ListForm;
	const checkBox = listForm.listFormCheckbox;
	const checkList = [];
	checkBox.forEach(check => {(check.checked)? checkList.push(true):checkList.push(false)});
	console.log(checkList)
	lessonsList.push(new Lesson(
		'lesson' + (+lessonsList.length + 1),
		lessonGroup.value,
		checkList,
		listForm.task2Topic.value
	));
	// сброс
	const optionRemove = document.querySelectorAll('.optionRemove');
	optionRemove.forEach(option => {
		option.remove();
	});
	fillOption();
	listForm.remove();
}

// формируем список сохраненного урока
const savedLesson = () => {
	const form = document.forms.task2Form;
	const lesson = form.task2Lesson;    // название урока
	const group = form.task2Group;
	// перебираем список уроков
	lessonsList.forEach(less => {
		if (less.lessonName === lesson.value) {
			group.value = less.group;
			const list = document.querySelector('.task2-list');
			list.innerHTML = `
			<div class="list-topic">
			<span>Тема урока:</span>
			<div>${less.topic}</div>
			</div>
			<div class="listForm__grid"></div>`;
			const gridBox = document.querySelector('.listForm__grid');
			gridBox.innerHTML = `
			<h3 class="listForm__gridElem">Имя</h3>
			<h3 class="listForm__gridElem">Явка</h3>`;
			for (let i in groups[less.group]) {
				gridBox.innerHTML += `
				<div class="listForm__gridElem">${groups[less.group][i]}</div>
				<div class="listForm__gridElem">${(less.present[i]) ? 'Да' : 'Нет'}</div>`;
			}
		}
	});
}

fillOption()

const chooseBtn = document.querySelector("#task2-chooseBtn");
chooseBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.id === 'task2-chooseBtn') {
		const lessonSelect = document.forms.task2Form.task2Lesson;
		// если выбран пункт Новый урок
		if (lessonSelect.value === 'newLesson') {
			newLesson();
			// если выбран уже сохраненный урок
		} else {
			savedLesson();
		}
	}
	
});
