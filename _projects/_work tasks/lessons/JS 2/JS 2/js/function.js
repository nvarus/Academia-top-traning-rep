
// const getRemainder = (x, y) => {
// 	if (y === 0) return NaN;
// 	// переменная для перебора чисел
// 	let i = 1;
// 	// результат умножения делителя на i, нужно найти максимально возможный d
// 	let d = y;	// изначально равен y
// 	while (d <= x) {
// 		// z является потенциальным остатком от деления, если в следующую итерацию
// 		// d превысит x и цикл прервется, значение z останется  как остаток
// 		z = x - d;
// 		i++;			// увеличиваем i на единицу
// 		d = i * y;	// получаем d, что бы сравнить с x на следующем шаге
// 	}
// 	document.write("Остаток = " + z)
// }


// console.log(getRemainder(15, 4));

// function remaind(x, y) {
// 	let i = 1;
// 	while (y * i <= x) i++;		// умножаем y * i и находим такой i, при котором их произведение больше x
// 	return x - (i - 1) * y; 	// возвращаемся на шаг назад, когда y * i был меньше x (i - 1) и от x отнимаем i * y
// }

// function test(x, y) {
// 	let correctAnswer = x % y;
// 	console.log(`Должно быть: ${correctAnswer} ... Тест: ${remaind(x, y)}`);
// }

// test(100, 1);
// test(43, 12);
// test(1, 1);
// test(8, 4);
// test(74, 12);
// test(78954, 5);


// function matryoshka(n) {
// 	if (n == 1) {
// 		console.log('Матрешечка')
// 	}
// 	else {
// 		console.log('Верх матрешки # ' + n);
// 		matryoshka(n - 1);
// 		console.log('Низ матрешки # ' + n);
// 	}
// }

// matryoshka(5);

function factorial(n) {
	if (n == 0) return 1;
	return factorial(n - 1) * n;
}
console.log(factorial(5));