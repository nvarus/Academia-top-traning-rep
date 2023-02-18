"use strict";
/** Задание 5
создать html-страницу с возможностью отмечать присутствующих на паре. Для начала пользователь выбирает группу и пару,
дальше вводит тему занятия и отмечает присутствующих. Также добавить возможность посмотреть уже отмеченные пары.
Хранить информацию в заранее подготовленных массивах. */


class Group {
    constructor(name = [], present = []) {
        this.name = name;
        this.present = present;
    }
}

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
	]
}

class Lesson {
	constructor(lessonName, group, present=[], topic, saved) {
		this.lessonName = lessonName;
		this.group = group;
		this.present = present;
		this.topic = topic;
		this.saved = saved;
	}
}

const lessonsList = [
	new Lesson('lesson1', "group1", [true, true, false, true, true, false, false, true, true, true], "Классы", true),
	new Lesson('lesson2', "group2", [true, true, false, true, true, false, false, true], "Логические операторы", true),
	new Lesson('lesson3', "group1", [true, true, false, true, true, false, false, true, true, true], "Циклы", true),
]

const fillOption = () => {
	const form = document.querySelector('#task2-form');
	// заполняем группу
	const selectGroup = document.querySelector('#task2-group');
	Object.keys(groups).forEach(group => {
		const option = document.createElement('option');
		option.value = group;
		option.textContent = group;
		selectGroup.append(option);
	});

	// заполняем урок
	const selectLesson = form.task2Lesson;
	lessonsList.forEach(lesson => {
		const option = document.createElement('option');
		option.value = lesson.lessonName;
		option.textContent = lesson.lessonName;
		selectLesson.append(option);
	});
	const newOption = document.createElement('option');
	newOption.value = 'newLesson';
	newOption.textContent = 'Новый урок';
	selectLesson.append(newOption);
}

const newLesson = () => {
	const form2 = document.forms.task2Form
	const lessonSelect = form2.task2Lesson
	const lessonGroup = form2.task2Group
	const list = document.querySelector('.task2-list')
	list.innerHTML = `
	<form id="task2-listForm" name="task2ListForm" class="task2-listForm">
		<label for="task2-topic">Тема урока</label><input id="task2-topic" name="task2Topic">


		<div class="listForm__grid">`

	const listFormGrid = document.querySelector('.listForm__grid')
	let studentList = groups[lessonGroup.value]
	listFormGrid.innerHTML += `
	<h3 class="listForm__gridElem">Имя</h3>
	<h3 class="listForm__gridElem">Явка</h3>
	
	`
	studentList.forEach(student => {
		listFormGrid.innerHTML += `
		<p class="listForm__student listForm__gridElem">${student}</p>
		<div class="listForm__gridElem listForm__inputWrapper">
		<input type="checkbox" class="listForm__checkbox" name="listFormCheckbox">
		</div>
		`
	})
	list.innerHTML += `
		</div>
	</form>
	`
	
}

// обрабатываем нажатие кнопок


fillOption()

const chooseBtn = document.querySelector("#task2-chooseBtn")
chooseBtn.addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.id === 'task2-chooseBtn') {
		// если выбран пункт Новый урок
		const lessonSelect = document.forms.task2Form.task2Lesson
		if (lessonSelect.value === 'newLesson') {
			newLesson()
		} else {
			console.log('старый урок')
		}
	}
	
})
