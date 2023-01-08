/** 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и
количество других знаков. */
const strInfo = (str: string) => {
	// используем объект RegExp и метод Match для выбора нужных значений
	let number = str.match(/\d/gi); // числа
	let latin = str.match(/[a-z]/gui);  // латинские буквы
	let cyrillic = str.match(/[а-я]/gui) // кириллица
	let space = str.match(/\s/g)    // пробелы
	let symbol = str.match(/[^a-zа-я0-9\s]/gui) // символы
	let string = document.querySelector('.string')
	// @ts-ignore
	string?.innerHTML = `
    <h2>Введенная строка:</h2>
    <p>${str}</p>`;
	let info = document.querySelector('.info')
	// @ts-ignore
	info?.innerHTML = `
    <h2>Состав строки:</h2>
    <ul>
    <li>цифры: ${(number === null) ? 0 : number.length}</li>
    <li>латинские буквы: ${(latin === null) ? 0 : latin.length}</li>
    <li>русские буквы: ${(cyrillic === null) ? 0 : cyrillic.length}</li>
    <li>пробелы: ${(space === null) ? 0 : space.length}</li>
    <li>другие символы: ${(symbol === null) ? 0 : symbol.length}</li></ul>
`
};
strInfo('as df gh jk ываыв ыв аыва 7875465424 /-*/+-/-/+')


/** 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.*/

const numToString = (num: number): string => {
	// массив единиц
	const array1: string [] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
	// массив чисел от 10 до 19
	const array11: string [] = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать',
		'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
	// массив десятков
	const array20: string [] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
		'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

	let tens = Math.trunc(num / 10); // десятки
	let units = num % 10;   // единицы
	if (num < 10 || num > 99) return `число вне диапазона`; // если число вне диапазона 10 - 99
	if (num < 20) return array11[units];
	else return `${array20[tens]} ${array1[units]}`;

};

/** 3 Написать функцию, которая заменяет в полученной строке большие буквы на маленькие,
 * маленькие – на большие, а цифры – на знак нижнего подчеркивания. */
const upperLowerLining = (str: string) => {
	let newStr = ''
	for (let letter of str) {   // проходим по строке
		// если буква строчная, заменяем на заглавную
		if (letter === letter.toLowerCase()) newStr += letter.toUpperCase();
		// если буква заглавная, заменяем на строчную
		else if (letter === letter.toUpperCase()) newStr += letter.toLowerCase();
	}
	// заменяем все числа на дефисы
	return newStr.replace(/[0-9]/gi, '_');
};

/** 4. Написать функцию, которая преобразует названия css стилей с дефисом в название в СamelСase стиле:
 *  font-size  в fontSize, background-color в backgroundColor, textalign в textAlign. */
const cssInCamalCase = (property: any) => {
	let newStr = ''
	for (let i = 0; i <= property.length; i++) {    // проходим в цикле по полученной строке
		if (property[i] === '-') {  // если встретим дефис
			newStr = property.replace(property[i + 1], property[i + 1].toUpperCase()) // заменяем следующую букву на заглавную
			newStr = newStr.replace(/-/gi, ''); // заменяем дефис на пустую строку
		}
	}
	return newStr
}

/** 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
 Например: cascading style sheets в CSS, объектноориентированное программирование в ООП.*/
const abbr = (str: string, result = '') => {
	let newStr = str.split(' ')     // разбиваем введенную строку на слова
	newStr.forEach(item => result += item[0].toUpperCase()) // проходим по массиву и берем только первую букву в верхнем регистре
	return result
}

/** 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную
 * строку и возвращает ее. */
function getLongString(): string {
	let result = [];    // создаем массив
	for (let i = 0; i < arguments.length; i++) result.push(arguments[i]);   // проходим по аргументам и собираем их значения в массив
	return result.join(' ');    // соединяем в одну строку
}

/** 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет,
 * какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает
   пример и возвращает результат. */
function calc(example = '42+58') {
	let numbers: any = example.match(/\d+/gi);  // только числа
	let operator: any = example.match(/\D/gi);  // все кроме чисел
	console.log(operator)
	switch (operator[0]) {
		case '+':
			return +numbers[0] + +numbers[1];
			break;
		case '-':
			return +numbers[0] - +numbers[1];
			break;
		case '*':
			return +numbers[0] * +numbers[1];
			break;
		case '/':
			return +numbers[0] / +numbers[1];
			break;
	}
}

// через eval
const calc2 = str => eval(str);



/** 8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например:
 * url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about” */
const parseURL = (url: string | URL) => new  URL(url);

const parseURL2 = (url = 'https://learn.javascript.ru/regexp-methods/str-methods/info/regexp')  => {
	// сохраняем в массив все элементы url без /
	// ['https', 'learn.javascript.ru', 'regexp-methods', 'str-methods', 'info', 'regexp']
	let regexp = url.match(/[^:\/]+/gi)
	// первые два элемента это протокол и домен,
	// с помощью цикла, формируем путь
	let path = '';
	for (let i = 2; i < regexp.length; i++) {
		path += regexp[i]
		path += (i < regexp.length -1) ? '/' : '';
	}
	return `информация: протокол: ${regexp[0]}, домен: ${regexp[1]}, путь: ${path}`
}

/** 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
Выполняя задание, не используйте функцию split() */

const strSeparator = (str = '10/08/2020', sep = '/'):string[] => {
	const result: string[] = [];    // создаем массив для хранения результата
	let ar = 0;
	result[0] = ''
	for (let i in str) {        // проходим по строке
		if (str[i] !== sep) {   // если текущий символ не является разделителем
			result[ar] += str[i];   // сохраняем текущий символ в текущий элемент массива
		} else {
			ar++;                   // иначе создаем новый элемент
			result[ar] = '';
			continue;
		}
	}
	return result
}

/** 10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего входного параметра. Например:
 print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020” */
function template(str = 'Today is %1 %2.%3.%4', val0 = 'Monday', val1 = 10, val2 = 8, val3 = 2020) {
	// создадим массив из шаблонов %
	let tmpl = str.match(/%\d+/gi)  // '%1', '%2', '%3', '%4'
	for (let i in tmpl) {   // пройдем по шаблонам в цикле
		str = str.replace(tmpl[i], eval(`val${i}`)) // и вставим вместо них значение параметра, подставив имя из 'val' + i
	}
}


