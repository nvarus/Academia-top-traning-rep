function remaind(x, y) {
	let i = 1;
	while (y * i <= x) i++;		// умножаем y * i и находим такой i, при котором их произведение больше x
	return x - (i - 1) * y; 	// возвращаемся на шаг назад, когда y * i был меньше x (i - 1) и от x отнимаем i * y
}

function test(x, y) {
	let correctAnswer = x % y;
	console.log(`Должно быть: ${correctAnswer} ... Тест: ${remaind(x, y)}`);
}

test(100, 1);
test(43, 12);
test(1, 1);
test(8, 4);
test(74, 12);
test(78954, 5);
