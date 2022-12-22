
'use strict'

/** Задача 1: 
создайте пустой объект, добавить имя возвраст
удалить возвраст 
измениь имя
написать 2 функции, функция 1 на 1 уровне ,функция 2 на 2 уровне */

// const person = new Object();

// person.name = 'Alex';
// person.age = 42;
// console.log(person);
// // удаляем возрвст
// delete person.age;
// console.log(person);
// // изменяем имя
// person.name = 'Alexey';
// // создаем функцию
// person.showName = function () {
// 	document.write(`<h2>Меня зовут, ${this.name}</h2>`);
// }
// // добавляем еще один объект
// person.hobby = {
// 	h1: 'History',
// 	h2: 'Сomputers',
// 	h3: 'American Football',
// };

// person.hobby.showHobby = function () {
// 	for (let item in person.hobby) {
// 		// if (item == showHobby) continue;
// 		document.write(`<h3 class='hobby'>${item} = ${person.hobby[item]}  </h3>`)
// 	}

// }

// person.hobby.showHobby()



// /** Задача 2:
// Создать объект  для авто (производитель, модель, год выпуска,
// сред скорость) и функции:
// 	1. Для вызова на экран информации об авто
// 	2. Подсчет времени для преодаления расстояния со средней
// 	скоростью (Водитель должен  каждые 4 часа делать
// 	перерыв на 1 час ) */

// function Auto(manufactured, model, year, middleSpeed) {
// 	this.manufactured = manufactured;
// 	this.model = model;
// 	this.year = year;
// 	this.middleSpeed = middleSpeed;
// };

// Auto.prototype.showAll = function (distance) {
// 	this.printProperty();
// 	this.calcOfTime(distance);
// };

// // выводит свойства автомобиля
// Auto.prototype.printProperty = function () {
// 	document.write(`<h1> Свойства автомобиля <\h1>`)
// 	document.write(`<h2>Производитель: ${this.manufactured}<\h2>`)
// 	document.write(`<h2>Модель: ${this.model}<\h2>`)
// 	document.write(`<h2>Год производства: ${this.year}<\h2>`)
// 	document.write(`<h2>Средняя скорость: ${this.middleSpeed} км/ч<\h2>`)
// };

// // принимает расстояние и выводит время за которое проедет автомобиль
// Auto.prototype.calcOfTime = function (distance) {
// 	const distansePer4H = this.middleSpeed * 4; // сколько может проехать за 4 часа
// 	const fourHours = 300;	// минут в 4 часах + 1 час отдыха
// 	let remains = distance;
// 	let result = 0;
// 	while (true) {
// 		// если за 4 часа не проехали весь путь
// 		if (remains > distansePer4H) {
// 			result += fourHours;
// 			remains -= distansePer4H;
// 			continue;
// 			// если за 4 часа успеваем проехать весь оставшийся путь
// 		} else {
// 			result += remains * 60 / this.middleSpeed; // считаем за сколько минут проедем
// 			break;
// 		}
// 	}
// 	document.write(`<h2 class="result">Дистанция: ${distance} км. <br>
// 	Требуется времени:
// 	${Math.trunc(result / 60)} часов
// 	${Math.round(result % 60)} минут</h2>`)
// 	document.write(`<hr>`)
// };



// const patriot = new Auto('UAZ', '3163', 2019, 140);
// patriot.showAll(1140);

// const liaz = new Auto('ЛиАЗ', '677МБ', 1989, 65)
// liaz.showAll(295);


