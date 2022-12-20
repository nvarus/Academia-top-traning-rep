// let x = 1;
// function f1() {
// 	let x = 1;
// 	console.log(x);
// 	function f2() {
// 		console.log(x);
// 	}
// }
// f1();


// for (let i = 0; i <= 10; i++) {
// 	console.log(i)
// }

// умножаем 2 на 100

// let i = 2;
// function multipl(i) {
// 	console.log(i * 100);
// 	if (i > 100) return;
// 	multipl(i + 1);
// }
// multipl(i);

// function multy(x, y) {
// 	return x + y;
// }

// console.log(multy(12, 14));

// 1. Написать функцию, которая вычисляет факториал заданного числа

// let number = 5;
// let summ = 1;
// for (let i = 1; i < number; i++) {
// 	summ += summ * i;
// 	console.log(summ);
// }

// te
// let number = 5;
// let summ = 1;
// let i = 1;
// function f1(i) {
// 	summ += summ * i;
// 	if ()
// 	f1(i + 1)


// }

// 2. Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке.И еще одну
// функцию – для вывода в обратном порядке.

// let i = 5;
// let stop = 100;

// function orderPositive(i) {
// 	if (i > stop) return;
// 	console.log(i)
// 	orderPositive(i + 1);
// }
// orderPositive(i)

// function orderPositive(stop) {
// 	if (stop < i) return;
// 	console.log(stop)
// 	orderPositive(stop - 1);
// }
// orderPositive(stop)

// 3. Написать функцию, которая выводит переданное ей число
// задом наперед. Например: число 1234 вывести как 4321.

// let m = 1234;
// let summ = '';
// while (m >= 1) {
// 	n = m % 10;
// 	m = Math.trunc(m / 10);
// 	summ += n;
// }

// console.log(summ);


// let m = 1234;
// let summ = '';
// function f1() {
// 	n = m % 10;
// 	m = Math.trunc(m / 10);
// 	summ += n;
// 	console.log(summ)
// 	if (m < 1) return;
// 	f1()
// }
// f1()

// let i = 0;
// function f1() {
// 	for ()
// }

/*
* Найти минимальное элемент в массиве и вернуть его индекс */
// // Создаем произвольный массив
// const myArray = [12, 3, 7, 14, 19, 99, 28, 49];

// // Передаем массив в функцию
// function findMin(array) {
// 	// переменная будет хранить индекс минимального массива
// 	let minIndex = 0;
// 	// цикл от 0 до длины массива length
// 	for (let i = 0; i < array.length; i++) {
// 		// если текущий элемент меньше элемента с индексом minIndex
// 		if (myArray[i] < myArray[minIndex]) minIndex = i; // текущий элемент сохраняем
// 	}
// 	return minIndex;
// }

// console.log(findMin(myArray));