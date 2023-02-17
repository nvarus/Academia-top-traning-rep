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
	new Lesson('lesson1', groups.group1, [true, true, false, true, true, false, false, true, true, true], "Классы", true),
	new Lesson('lesson2', groups.group2, [true, true, false, true, true, false, false, true], "Логические операторы", true),
	new Lesson('lesson3', groups.group1, [true, true, false, true, true, false, false, true, true, true], "Циклы", true),
]

const fillOption = () => {
	const form = document.forms.task2Form;
	// заполняем группу
	const selectGroup = form.task2Group;
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
		selectLesson.append(option)
	})
	const newOption = document.createElement('option');
	newOption.value = 'newLesson';
	newOption.textContent = 'Новый урок';
	selectLesson.append(newOption)
	
	
}
fillOption()

document.addEventListener('click', (e) => {
	const form = document.forms.task2Form;
	const selectLesson = form.task2Lesson;
	const selectGroup = form.task2Group;
	if (e.target.id === 'task2-button') {
		e.preventDefault()
		console.log(selectLesson.value)
		selectGroup.value = 'group2'
		console.log(lessonsList[1])
		console.log(lessonsList[1])
	}
})