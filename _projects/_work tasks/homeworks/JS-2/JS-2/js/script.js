/*
* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */
// Предположим что мы не знаем какое число больше, пользователь
// может вводить числа в любом порядке.
let firstNumber = +prompt("Введите первое число:");
let secondNumber = +prompt("Введите второе число:");

// если первое число больше, меняем их местами
if (firstNumber > secondNumber) {
	let temp = secondNumber;
	secondNumber = firstNumber;
	firstNumber = temp;
}
// создаем переменную для подсчета суммы
let sum = 0;
// перебираем в цикле все числа от firstNumber до secondNumber и суммируем в sum
for (let i = firstNumber; i <= secondNumber; i++) { sum += i };
alert("Сумма чисел от " + firstNumber + " до " + secondNumber + " равна " + sum)

/************************************************************************************ */
/*
* 2. Запросить 2 числа и найти только наибольший общий делитель. */
// общий делитель не может превышать меньшего из двух чисел.
// запрашиваем числи и находим минимальное
let minNumber = +prompt("Введите первое число:");
let maxNumber = +prompt("Введите второе число:");
// если первое число больше, меняем их местами
if (minNumber > maxNumber) {
	let temp = maxNumber;
	maxNumber = minNumber;
	minNumber = temp;
}
// ищем НОД начиная с наименьшего числа и до нуля, первый найденный
// делитель и будет наибольшим
for (let i = minNumber; i > 0; i--) {
	if (minNumber % i == 0 && maxNumber % i == 0) {
		alert("Наибольший общий делитель равен " + i);
		break;
	}
}

/************************************************************************************ */
/*
* 3. Запросить у пользователя число и вывести все делители этого числа. */
// Вариант 1: С массивом
let yourNum = +prompt("Введите число");
const divisors = [];
for (let i = 2; i < yourNum; i++) {
	if (yourNum % i == 0) { divisors.push(i) }
}
alert(`Делители числа ${yourNum}: ${divisors}`)
document.write(`Делители числа ${yourNum}: ${divisors}`);
console.log("Делители числа %s: %s", yourNum, divisors);

// Вариант 2:
let yourNumber = +prompt("Введите число");
document.write("Делители числа " + yourNumber + ": ");
for (let i = 2; i < yourNumber; i++) {
	if (yourNumber % i == 0) {
		document.write(i);
		document.write(" ");
	}
}
/************************************************************************************* */
/*
* 4.Определить количество цифр в введенном числе. */
// Вариант 1: только положительные числа
let yourNumber = +prompt("Введите число");
// делим число на 10 до тех пор, пока оно не будет меньше 1.
// кол-во итераций цикла и будет кол-во цифр
for (i = 0; yourNumber > 1; i++) { yourNumber /= 10; }
console.log("Введенное число содержит %s цифр", i);

// Вариант 2: положительные и отрицательные
let yourNum = +prompt("Введите число");
//проверяем положительное или отрицательное
if (yourNum > 0) {
	for (i = 0; yourNum > 1; i++) { yourNum /= 10; }
	console.log("Положительно число содержит %s цифр", i);
} else if (yourNum < 0) {
	for (i = 0; yourNum < -1; i++) { yourNum /= 10; }
	console.log("Отрицательное число содержит %s цифр", i);
} else {
	console.log("Ваше число содержит одну цифру: ноль");
}

/*********************************************************************************** */
/*
* 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,
* отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
* Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10)
* для ввода чисел пользователем. */
let entredNumber;
let positiveNum = 0, negativeNum = 0, evenNum = 0;

for (let i = 1; i <= 10; i++) {
	entredNumber = +prompt("Введите число №" + i + ': ');
	if (entredNumber > 0) {
		positiveNum++;
	} else if (entredNumber < 0) { negativeNum++; }
	if (entredNumber % 2 == 0) { evenNum++; }
}
alert("Введено чисел. Положительных: " + positiveNum +
	", отрицательных: " + negativeNum +
	", нулей: " + (10 - positiveNum - negativeNum) +
	", четных: " + evenNum +
	", не четных: " + (10 - evenNum));

/*********************************************************************************** */
/*
* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
* вывести результат и спросить, хочет ли он решить еще один пример.
* И так до тех пор, пока пользователь не откажется. */
// Вариант 1:
do {
	let result;
	let firstNumber = Number(prompt("Введите первое число: "));
	let secondNumber = Number(prompt("Введите второе число: "));
	let sign = prompt("Введите знак: ");

	if (sign == '+') { result = firstNumber + secondNumber }
	else if (sign == '-') { result = firstNumber - secondNumber }
	else if (sign == '*') { result = firstNumber * secondNumber }
	else if (sign == '/') { result = firstNumber / secondNumber }
	else if (sign == '%') { result = firstNumber % secondNumber }
	else {
		var continuation = confirm("Введен не правильный знак. Хотите еще пример ?");
		continue;
	}
	var continuation = confirm("Результат = " + result + " Еще пример ?");
	// цикл продолжается, пока пользователь не нажмет НЕТ
} while (continuation);

// Вариант 2: с помощью функции eval()
do {
	let firstNumber = Number(prompt("Введите первое число: "));
	let secondNumber = Number(prompt("Введите второе число: "));
	let sign = prompt("Введите знак: ");
	var continuation = confirm(eval(`${firstNumber}` + sign + `${secondNumber}`));
	// цикл продолжается, пока пользователь не нажмет НЕТ
} while (continuation);

/************************************************************************************* */
/*
* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа
* и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/
// используем метод slice()
// запрашиваеми число и сохраняем его в виде строки
do {
	let number = prompt("Введите число: ");
	let shift = +prompt("На сколько сдвинуть ? "); // сдвиг сохраняем в виде числа.
	// применяем к строке метод массива slice()
	let result = number.slice(shift) + number.slice(0, shift);
	var continuation = confirm(`Результат: ${result}. Хотите еще ?`);
} while (continuation);

/********************************************************************************** */
/*
* 8. Зациклить вывод дней недели таким образом: «День недели.Хотите увидеть
* следующий день?» и так до тех пор, пока пользователь нажимает OK. */
// создаем массив с днями недели
const dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница',
	'Суббота', 'Воскресенье'];
let i = 0;
do {
	// т.к. в масииве всего шесть элементов, дойдя до dayOfWeek[7], приравниваем его к dayOfWeek[0]
	if (i > 6) { i = 0 };
	var continuation = confirm(`${dayOfWeek[i]}. Хотите увидеть следующий день ?`);
	i++;
	//если пользователь нажимает НЕТ, continuation = false, цикл завершается
} while (continuation);

/************************************************************************************************ */
/*
* 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо
* умножить на числа от 1 до 10. */
// Вариант 1:
for (let i = 2; i <= 9; i++) {
	for (let j = 1; j <= 10; j++) {
		document.write(i * j);
		document.write(" ")
	}
	document.write("<br>")
}

// Вариант 2: c с массивом
const array = [];
for (let i = 2; i <= 9; i++) {
	array[i] = new Array();
	for (let j = 1; j <= 10; j++) {
		array[i][j - 1] = i * j;
	}
}
console.log(array);
/************************************************************************************************** */
/*
* 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
* каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
* «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон.
* Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его
* число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. */
let low = 0;		// переменная для минимального значения
let high = 100;	// для максимального значения
let N = 50;			// текущее значение
let answer = false;
// бесконечный цикл
while (true) {
	answer = (confirm(`Ваше число равно ${N} ?`)) ? 'equally' : false;
	// если N == загаданному числу, цикл прерывается, игра окончена.
	if (answer == 'equally') {
		alert(`Вы загадали число ${N}.`);
		break;
	}
	answer = (confirm(`Ваше число больше ${N} ?`)) ? 'more' : false;
	// если загаданное число больше N...
	if (answer == 'more') {
		// нижнюю границу устанавливаем в точку N
		low = N;
		// делим новый отрезок пополам, округляем в большую сторону с Math.ceil() на случай, если число получилось дробным
		N = Math.ceil((high + low) / 2);
		continue;	// так как ответ получен, завершаем итерацию
	}
	answer = (confirm(`Ваше число меньше ${N} ?`)) ? 'less' : false;
	// если загаданное число меньше N...
	if (answer == 'less') {
		// верхнюю границу устанавливаем в точку N
		high = N;
		N = Math.floor((high + low) / 2);	// теперь округляем в меньшую сторону
	} else { alert("Не правильный ответ, попробуйте еще раз") };
}
