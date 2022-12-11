/*
* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */

// // Предположим что мы не знаем какое число больше, пользователь
// // может вводить числа в любом порядке.
// let firstNumber = +prompt("Введите первое число:");
// let secondNumber = +prompt("Введите второе число:");

// // если первое число больше, меняем их местами
// if (firstNumber > secondNumber) {
// 	let temp = secondNumber;
// 	secondNumber = firstNumber;
// 	firstNumber = temp;
// }

// // создаем переменную для подсчета суммы
// let sum = 0;
// // перебираем в цикле все числа от firstNumber до secondNumber и суммируем в sum
// for (let i = firstNumber; i <= secondNumber; i++) { sum += i };
// alert("Сумма чисел от " + firstNumber + " до " + secondNumber + " равна " + sum)

/************************************************************************************ */
/*
* 2. Запросить 2 числа и найти только наибольший общий делитель. */

// // общий делитель не может превышать меньшего из двух чисел.
// // запрашиваем числи и находим минимальное
// let minNumber = +prompt("Введите первое число:");
// let maxNumber = +prompt("Введите второе число:");
// // если первое число больше, меняем их местами
// if (minNumber > maxNumber) {
// 	let temp = maxNumber;
// 	maxNumber = minNumber;
// 	minNumber = temp;
// }
// // ищем НОД начиная с наименьшего числа и до нуля, первый найденный
// // делитель и будет наибольшим
// for (let i = minNumber; i > 0; i--) {
// 	if (minNumber % i == 0 && maxNumber % i == 0) {
// 		alert("Наибольший общий делитель равен " + i);
// 		break;
// 	}
// }

/************************************************************************************ */
/*
* 3. Запросить у пользователя число и вывести все делители этого числа. */

// // Вариант 1:
// let yourNumber = +prompt("Введите число");
// document.write("Делители числа " + yourNumber + ": ");
// for (let i = 2; i < yourNumber; i++) {
// 	if (yourNumber % i == 0) {
// 		document.write(i);
// 		document.write(" ");
// 	}
// }
// // Вариант 2: С массивом
// let yourNum = +prompt("Введите число");
// const divisors = [];
// for (let i = 2; i < yourNum; i++) {
// 	if (yourNum % i == 0) { divisors.push(i) }
// }
// document.write("Делители числа " + yourNum + ": " + divisors);
// console.log("Делители числа %s: %s", yourNum, divisors);

/************************************************************************************* */
/*
* 4.Определить количество цифр в введенном числе. */

// // Вариант 1: только положительные числа
// let yourNumber = +prompt("Введите число");
// // делим число на 10 до тех пор, пока оно не будет меньше 1.
// // кол-во итераций цикла и будет кол-во цифр
// for (i = 0; yourNumber > 1; i++) { yourNumber /= 10; }
// console.log("Введенное число содержит %s цифр", i);

// // Вариант 1: положительные и отрицательные
// let yourNum = +prompt("Введите число");
// //проверяем положительное или отрицательное
// if (yourNum > 0) {
// 	for (i = 0; yourNum > 1; i++) { yourNum /= 10; }
// 	console.log("Положительно число содержит %s цифр", i);
// } else if (yourNum < 0) {
// 	for (i = 0; yourNum < -1; i++) { yourNum /= 10; }
// 	console.log("Отрицательное число содержит %s цифр", i);
// } else {
// 	console.log("Ваше число содержит одну цифру: ноль");
// }

/*********************************************************************************** */
/*
* 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
* отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
* Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10)
* для ввода чисел пользователем. */

// let entredNumber;
// let positiveNum = 0, negativeNum = 0, evenNum = 0;

// for (let i = 1; i <= 10; i++) {
// 	entredNumber = +prompt("Введите число №" + i + ': ');
// 	if (entredNumber > 0) {
// 		positiveNum++;
// 	} else if (entredNumber < 0) { negativeNum++; }
// 	if (entredNumber % 2 == 0) { evenNum++; }
// }
// alert("Введено чисел. Положительных: " + positiveNum +
// 	", отрицательных: " + negativeNum +
// 	", нулей: " + (10 - positiveNum - negativeNum) +
// 	", четных: " + evenNum +
// 	", не четных: " + (10 - evenNum));

/*********************************************************************************** */
/*
* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
* вывести результат и спросить, хочет ли он решить еще один пример.
* И так до тех пор, пока пользователь не откажется. */
// // Вариант 1:
// do {
// 	let result;
// 	let firstNumber = Number(prompt("Введите первое число: "));
// 	let secondNumber = Number(prompt("Введите второе число: "));
// 	let sign = prompt("Введите знак: ");

// 	if (sign == '+') { result = firstNumber + secondNumber }
// 	else if (sign == '-') { result = firstNumber - secondNumber }
// 	else if (sign == '*') { result = firstNumber * secondNumber }
// 	else if (sign == '/') { result = firstNumber / secondNumber }
// 	else if (sign == '%') { result = firstNumber % secondNumber }
// 	else {
// 		var continuation = confirm("Введен не правильный знак. Хотите еще пример ?");
// 		continue;
// 	}
// 	var continuation = confirm("Результат = " + result + " Еще пример ?");
// 	// цикл продолжается, пока пользователь не нажмет НЕТ
// } while (continuation);

// Вариант 2: с помощью функции eval()
// do {
// 	let firstNumber = Number(prompt("Введите первое число: "));
// 	let secondNumber = Number(prompt("Введите второе число: "));
// 	let sign = prompt("Введите знак: ");
// 	var continuation = confirm(eval(`${firstNumber}` + sign + `${secondNumber}`));
// 	// цикл продолжается, пока пользователь не нажмет НЕТ
// } while (continuation);

/************************************************************************************* */
/*
* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа
* и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

