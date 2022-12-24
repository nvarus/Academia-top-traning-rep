
'use strict'

/** Задача 1:
создайте пустой объект, добавить имя возвраст
удалить возвраст
измениь имя
написать 2 функции, функция 1 на 1 уровне ,функция 2 на 2 уровне */

document.write(`<h1> Задача 1</h1>`);
const person = new Object();

person.name = 'Alex';
person.age = 42;
console.log(person);

// удаляем возраст
delete person.age;
console.log(person);

// изменяем имя
person.name = 'Alexey';

// создаем функцию
person.showName = function () {
	document.write(`<h2>Меня зовут, ${this.name}</h2>`);
}
// добавляем еще один объект
person.hobby = {
	'Hobby #1': 'History',
	'Hobby #2': 'Сomputers',
	'Hobby #3': 'World of Warcraft',
}
// создаем функцию во вложенном объекте, которая добавляет новое хобби
person.hobby.addHobby = function (newHobby) {
	// счетчик с количеством свойств +1, для порядкового номера нового свойства
	let newNum = 1;
	// перебираем в цикле элементы, что бы узнать их вол-во
	for (let item in person.hobby) {
		// что бы посчитать только свойсва, исключаем из пересчета функции
		if (typeof person.hobby[item] === 'function') continue;
		newNum++;
	}
	// генерируем новое свойство и присваиваем ему переданное значение
	person.hobby['Hobby #' + newNum] = newHobby;
}

// создаем функцию во вложенном объекте, которая выводит все свойства и значения
person.hobby.showHobby = function () {
	for (let item in person.hobby) {
		if (typeof person.hobby[item] === "function") continue;
		document.write(`<h2>${item} - ${person.hobby[item]}  </h2>`)
	}
}

// функция для ввода новых увлечений и вывода на экран
person.hobby.run = function () {
	let next;
	do {
		let newHobby = prompt('Введите новое увлечение: ');
		person.hobby.addHobby(newHobby);
		next = confirm('Хотите указать еще одно увлечение?');
	} while (next);
	person.hobby.showHobby();
}

person.hobby.run();



/** Задача 2:
Создать объект  для авто (производитель, модель, год выпуска,
сред скорость) и функции:
	1. Для вызова на экран информации об авто
	2. Подсчет времени для преодаления расстояния со средней
	скоростью (Водитель должен  каждые 4 часа делать
	перерыв на 1 час ) */

document.write(`<h1> Задача 2</h1>`);
function Auto(manufactured, model, year, middleSpeed) {
	this.manufactured = manufactured;
	this.model = model;
	this.year = year;
	this.middleSpeed = middleSpeed;
};

Auto.prototype.showAll = function (distance) {
	this.printProperty();
	this.calcOfTime(distance);
};

// выводит свойства автомобиля
Auto.prototype.printProperty = function () {
	document.write(`<h2> Свойства автомобиля: <\h2>`)
	document.write(`<h2>Производитель: ${this.manufactured}<\h2>`)
	document.write(`<h2>Модель: ${this.model}<\h2>`)
	document.write(`<h2>Год производства: ${this.year}<\h2>`)
	document.write(`<h2>Средняя скорость: ${this.middleSpeed} км/ч<\h2>`)
};

// принимает расстояние и выводит время за которое проедет автомобиль
Auto.prototype.calcOfTime = function (distance) {
	const distansePer4H = this.middleSpeed * 4; // сколько может проехать за 4 часа
	const fourHours = 300;	// минут в 4 часах + 1 час отдыха
	let remains = distance;
	let result = 0;
	while (true) {
		// если за 4 часа не проехали весь путь
		if (remains > distansePer4H) {
			result += fourHours;
			remains -= distansePer4H;
			continue;
			// если за 4 часа успеваем проехать весь оставшийся путь
		} else {
			result += remains * 60 / this.middleSpeed; // считаем за сколько минут проедем
			break;
		}
	}
	document.write(`<h2 class="result">Дистанция: ${distance} км. <br>
	Требуется времени:
	${Math.trunc(result / 60)} часов
	${Math.round(result % 60)} минут</h2>`)
	document.write(`<hr>`)
};



const patriot = new Auto('UAZ', '3163', 2019, 140);
patriot.showAll(1140);

const liaz = new Auto('ЛиАЗ', '677МБ', 1989, 65)
liaz.showAll(295);


// * Задача 3:
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби и след функции:
//		1. сложение 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//		2. вычитание 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//		3. умножение 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
//		4. Деление 2х объектов-дробей (пример d1: 12.1, d2: 21.1)
document.write(`<h1> Задача 3</h1>`);
const fract = new Object({
	d1: {
		num: 121,
		denom: 10,
	},

	d2: {
		num: 211,
		denom: 10,
	}
});
// создаем дополнительное свойство для хранения значения дроби
fract.d1.value = fract.d1.num / fract.d1.denom;
fract.d2.value = fract.d2.num / fract.d2.denom;

// функция сложения
fract.addition = () => fract.d1.value + fract.d2.value;
// функция вычитания
fract.subtraction = () => fract.d1.value - fract.d2.value;
// функция умножения
fract.multiplication = () => fract.d1.value * fract.d2.value;
// функция деления
fract.division = () => fract.d1.value / fract.d2.value;

// выводим результат
document.write(`<h2>Сложение: "${fract.d1.num} / ${fract.d1.denom} + 
						${fract.d2.num} / ${fract.d2.denom}" = ss${fract.addition()}</h2>`);
document.write(`<h2>Вычитание: "${fract.d1.num} / ${fract.d1.denom} - 
						${fract.d2.num} / ${fract.d2.denom}" = ${(fract.subtraction()).toFixed(2)}</h2>`);
document.write(`<h2>Умножение: "${fract.d1.num} / ${fract.d1.denom} * 
						${fract.d2.num} / ${fract.d2.denom}" = ${fract.multiplication()}</h2>`);
document.write(`<h2>Деление: "${fract.d1.num} / ${fract.d1.denom} / 
						${fract.d2.num} / ${fract.d2.denom}" = ${(fract.division()).toFixed(2)}</h2>`);