/** Задание 1 */
/** Реализовать класс, описывающий простой маркер. */
const t1 = document.querySelector('.content').innerHTML += `<div class="title">Задание 1</div>`
class Marker {
	constructor(color, inkLevel) {
		this.color = color;     // поле, которое хранит цвет маркера
		this.inkLevel = inkLevel;  // поле, которое хранит количество чернил
	}
	// метод для печати
	print(text) {
		const content = document.querySelector('.content')
		let result = `<h2 style = "color: ${this.color};">`
		for (let letter of text) {       // выводим по буквам текст
			if (this.inkLevel <= 0) {     // если чернила кончились прекращаем вывод
				break;
			}
			result += letter;
			if (letter !== ' ') {         // расходуем чернила, только если
				this.inkLevel -= 0.5       // символ не является пробелом
			}
		}
		result += `</h2>`
		content.innerHTML += result;
		// выводим сколько осталось чернил
		if (this.inkLevel > 0) {
			content.innerHTML += `<div>Осталось чернил: ${this.inkLevel}%</div>`;
		} else {
			content.innerHTML += `<div>Чернила закончились</div>`;
		}
	}
}

const marker = new Marker('red', 100);
marker.print('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, et.')

// заправляющийся маркер, унаследованный от простого маркера
class RefilledMarker extends Marker {
	constructor(color, inkLevel) {
		super();
		this.color = color;
		this.inkLevel = inkLevel;
	}
	// метод для заправки маркера
	refuel(ink) {
		if (ink + this.inkLevel > 100) {    // не даем заправить больше 100%
			this.inkLevel = 100;
		} else {
			this.inkLevel += ink;
		}
		const content = document.querySelector('.content')
		content.innerHTML += `<div>Заправка. новый уровень: ${this.inkLevel}%</div>`;
	}
}

const refilledMarker = new RefilledMarker('Indigo', 40)
refilledMarker.print('consectetur adipisicing elit. Deleniti. ectetur adipisicing elit. Deleniti.')

refilledMarker.refuel(95)


//-------------------------------------------------------------------------------------------------------------------

/** Задание 2 */
/** Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date */
const t2 = document.querySelector('.content')
t2.innerHTML += `<div class="title">Задание 2</div>`

class ExtendedDate extends Date {
	
	// метод для вывода даты (числа и месяца) текстом
	getDateToText() {
		let year = this.getFullYear();
		
		const days = ['', 'первое',	'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое',
			'десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое',
			'семнадцатое',	'восемнадцатое', 'девятнадцатое', 'двадцатое', 'двадцать первое', 'двадцать второе',
			'двадцать третье', 'двадцать четвертое', 'двадцать пятое', 'двадцать шестое', 'двадцать седьмое', 'двадцать' +
			' восьмое',	'двадцать девятое', 'тридцатое', 'тридцать первое'];
		let day = days[this.getDate()]
		
		const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
								'августа', 'сентября', 'октября', 'ноября', 'декабря']
		let month =  months[this.getMonth()]
		
		return `${day} ${month} ${year} г`
	}
	
	// метод для проверки – это прошедшая дата или будущая
	getPastOrFuture() {
		let now = new Date();
		
		return (this.getTime() < now.getTime()) ? false : true;
	}
	
	// метод для проверки – високосный год или нет
	getLeapYear() {
		let year = this.getFullYear();
		if (year % 400 === 0) return true
		else if (year % 100 === 0) return false
		else if (year % 4 === 0) return true
		else return false
	}
	
	// метод, возвращающий следующую дату.
	getNextDate() {
		// создаем переменную и устанавливаем ей текущий день + 1
		let d = this.setDate(this.getDate() + 1);
		// создаем новый объект Date и присваиваем ему значение следующего дня
		let nextDay = new Date(d)
		let option = {year: 'numeric', month: 'long', day: '2-digit'}
			return nextDay.toLocaleDateString('Ru-Ru', option)
	}
}


let date = new ExtendedDate('12/31/2020')
t2.innerHTML += `<p class="task2">Введенная дата: ${date.toLocaleDateString('Ru-RU')}</p>`
t2.innerHTML += `<p class="task2">Вывод текстом: ${date.getDateToText()}</p>`
t2.innerHTML += `<p class="task2">Будущее ?: ${date.getPastOrFuture()}</p>`
t2.innerHTML += `<p class="task2">Високосный ?: ${date.getLeapYear()}</p>`
t2.innerHTML += `<p class="task2">Следующая дата: ${date.getNextDate()}</p>`







































