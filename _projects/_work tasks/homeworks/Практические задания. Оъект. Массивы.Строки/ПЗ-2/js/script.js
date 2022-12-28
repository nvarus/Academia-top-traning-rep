'use strict'

//* Задание 1
//* Создать массив из 10 случайных чисел
const myArray = new Array();
for (let i = 0; i < 10; i++) {
	myArray.push(Math.floor(Math.random() * (101 - 0)));
}
console.log(myArray)
//* 1. Функция принимает массив и выводит его на экран.
const showArr = function (myArray) {
	for (let i in myArray) {
		if (i % 5 === 0 && i != 0) document.write(`<br>`)
		document.write(`
		<span class='showArr'>${myArray[i]} </span>`)
	}
}
showArr(myArray)

//* 2. Функция принимает массив и выводит только четные элементы.
// Вариант 1
const even = (myArray) => {
	const evenArr = [];
	for (let item of myArray) {
		if (item % 2 === 0) evenArr.push(item);
	}
	return evenArr;
}
// Вариант 2
const even2 = myArray => myArray.filter(i => i % 2 === 0);

//* 3. Функция принимает массив и возвращает сумму всех элементов массива.
// Вариант 1
const summ = (myArray, sum = 0) => {
	for (let item of myArray) sum += item;
	return sum;
}

// Вариант 2
const summ2 = (myArray, sum = 0) => {
	myArray.forEach(value => sum += value);
	return sum;
}

//* 4. Функция принимает массив и возвращает его максимальный элемент.
const maxItem = (myArray) => {
	let max = 0;
	for (let i of myArray) {
		if (i > max) max = i;
	}
	return max;
}

//* 5. Функция добавления нового элемента в массив по указанному индексу.
const insertItem = (myArray, index, item) => myArray.splice(index, 0, item);

//* 6. Функция удаления элемента из массива по указанному индексу.
const removeItem = (myArray, index) => myArray.splice(index, 1);

//* Задание 2
//* Создать еще один массив из 5 случайных чисел
const newArray = new Array();
for (let i = 0; i < 5; i++) {
	newArray.push(Math.floor(Math.random() * (101 - 0)));
}
console.log(newArray)

//* 1. Функция принимает 2 массива и возвращает новый массив, в котором собраны
//* все элементы из двух массивов без повторений.
const mergeArr = (myArray, newArray) => {
	const arr = myArray.concat(newArray);

}



