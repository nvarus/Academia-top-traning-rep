/* 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и
количество других знаков. */
const strInfo = (str: string) => {
	let number = str.match(/\d/gi);
	let latin = str.match(/[a-z]/gui);
	let cyrillic = str.match(/[а-я]/gui)
	let space = str.match(/\s/g)
	let symbol = str.match(/[^a-zа-я0-9\s]/gui)
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


/** 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.*/

const numToString = (num: number): string => {
	const array1: string [] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
	const array11: string [] = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать',
		'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
	const array20: string [] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
		'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

	let tens = Math.trunc(num / 10);
	let units = num % 10;
	if (num < 10 || num > 99) return `число вне диапазона`;
	if (num < 20) return array11[units];
	else return `${array20[tens]} ${array1[units]}`;

};

/** 3 Написать функцию, которая заменяет в полученной строке большие буквы на маленькие,
 * маленькие – на большие, а цифры – на знак нижнего подчеркивания. */
const upperLowerLining = (str: string) => {
	let newStr = ''
	for (let letter of str) {
		if (letter === letter.toLowerCase()) newStr += letter.toUpperCase();
		else if (letter === letter.toUpperCase()) newStr += letter.toLowerCase();
	}
	return newStr.replace(/[0-9]/gi, '_');
};

/** 4. Написать функцию, которая преобразует названия css стилей с дефисом в название в СamelСase стиле:
 *  font-size  в fontSize, background-color в backgroundColor, textalign в textAlign. */
const cssInCamalCase = (property: any) => {
	let newStr = ''
	for (let i = 0; i <= property.length; i++) {
		if (property[i] === '-') {
			newStr = property.replace(property[i + 1], property[i + 1].toUpperCase())
			newStr = newStr.replace(/-/gi, '');
		}
	}
	return newStr
}

/** 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
 Например: cascading style sheets в CSS, объектноориентированное программирование в ООП.*/
const abbr = (str: string, result = '') => {
	let newStr = str.split(' ')
	newStr.forEach(item => result += item[0].toUpperCase())
	return result
}

/** 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную
 * строку и возвращает ее. */
function getLongString(): string {
	let result = [];
	for (let i = 0; i < arguments.length; i++) result.push(arguments[i]);
	return result.join(' ');
}

