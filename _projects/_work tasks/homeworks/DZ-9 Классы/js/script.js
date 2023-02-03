class Circle {
	constructor(rad) {
		this._radius = rad;
	}
	
	get radius() {
		return this._radius;
	}
	
	set radius(value) {
		this._radius = value;
	}
	
	get diameter() {
		return this._radius * 2;
	}
	
	calcArea() {
		return 2 * Math.PI * this._radius ** 2;
	}
	
	calcLength() {
		return this._radius * Math.PI * 2;
	}
	
	show() {
		let content = document.querySelector('.content');
		content.innerHTML += `
		<h3 style="color: blue;">Задание 1</h3>
		<p>радиус окружности: ${this.radius}<br>
		диаметр окружности: ${this.diameter}<br>
		площадь окружности: ${this.calcArea().toFixed(2)}<br>
		периметр окружности: ${this.calcLength().toFixed(2)}<br></p>
		<h5>Задаем новый радиус: circle1.radius = ${circle1.radius = 25}</h5>
		<p>новый радиус: ${this.radius}<br>
		новый диаметр: ${this.diameter}<br>
		новая площадь: ${this.calcArea().toFixed(2)}<br>
		новый периметр: ${this.calcLength().toFixed(2)}<br></p>`
	}
}

const circle1 = new Circle(15)
circle1.show()
//-------------------------------------------------------------------------------------------------------------------
let content = document.querySelector('.content');
content.innerHTML += `<h3 style="color: blue;margin-top: 40px;">Задания  2, 3, 4</h3>`
//-------------------------------------------------------------------------------------------------------------------

/** ЗAДАНИЕ 2 */
/** Реализовать класс, описывающий html элемент. */
class HtmlElement {
	constructor(name, selfClosing, text, attributes, style, childTads) {
		this.name = name;
		this.selfClosing = selfClosing;  // самозакрывающийся тег или нет
		this.text = text;
		this.attributes = attributes;
		this.style = style;
		this.childTads = childTads;
	}
	
	get openerTag() {
		let opener = `<${this.name} `;
		opener = this.attribInstall(opener);
		opener = this.styleInstall(opener);
		return opener;
	}
	
	get closingTag() {
		if (this.selfClosing) {
			return ''
		} else return `</${this.name}>`;
	}
	
	// метод для установки атрибута
	attribInstall(text) {
		this.attributes.forEach((item) => {
			text += item + ' ';
		});
		return text;
	}
	
	// метод для установки атрибута
	styleInstall(text) {
		text += (this.style.length >= 1) ? `style="` : '';
		this.style.forEach((item) => {
			text += item;
		});
		return (this.style.length >= 1) ? text + `">` : text + `>`;
	}
	
	// метод для добавления вложенного элемента в конец текущего элемента
	addToEnd() {
		let result = '';
		if (this.childTads === undefined) { // проверка на случай, свойство childTads не содержит массив
			return '';
		} else {
			this.childTads.forEach((item) => {
				result += item.getHtml();
			});
		}
		return result;
	}
	
	/** возвращает html код в виде строки, включая html код вложенных элементов */
	getHtml() {
		return this.openerTag + this.text + this.addToEnd() + this.closingTag;
	}
}

//--------------------------------------------- ОБЪЕКТЫ ------------------------------------------------------
const a = new HtmlElement('a', false, 'More...', ['href="https://www.lipsum.com/"', 'target="_blank"'], [], [])
const p = new HtmlElement('p', false,
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s' +
	' standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
	['class="text"'], ['text-align: justify;'], [a])
const img = new HtmlElement('img', true, '', ['src="lipsum.webp"', 'alt="Lorem Ipsum"', 'class="img"'],
	['width: 100%;'], [])
const h3 = new HtmlElement('h3', false, 'What is Lorem Ipsum?', [], [], [])
const div1 = new HtmlElement('div', false, '', ['class="block"'], ['width: 300px;', 'margin: 10px;'], [h3, img, p])
const rootDiv = new HtmlElement('div', false, '', ['id="wrapper"', 'class="wrap"'],
	['display: flex;'], [div1, div1])


/** ЗAДАНИЕ 3 */
/** Реализовать класс, который описывает css класс */
class CssClass {
	constructor(className, styles = []) {
		this.className = className;
		this.styles = styles;
	}
	
	// метод для установки стиля
	addStyle(style) {
		this.styles.push(style);
	}
	
	//  метод для удаления стиля
	delStyle() {
		this.styles.pop();
	}
	
	// возвращает css код в виде строки
	getCss() {
		let result = `${this.className} {`
		this.styles.forEach((item) => {
			result += item;
		})
		return result + `}`
	}
}

//--------------------------------------------- ОБЪЕКТЫ ------------------------------------------------------
const wrap = new CssClass('.wrap', ['display: flex;']);
const block = new CssClass('.block', ['width: 300px;', 'margin: 10px;']);
const imgStyle = new CssClass('.img', ['width: 100%;']);
const text = new CssClass('.text', ['text-align: justify;', 'color: MidnightBlue;']);


/** ЗAДАНИЕ 4 */
/** Реализовать класс, описывающий блок html документ */
class HtmlBlock {
	constructor(styleCollection, rootElement) {
		this.styleCollection = styleCollection;
		this.rootElement = rootElement;
	}
	
	/** возвращает строку с html кодом (сначала теги style с описанием всех классов, а потомвсе html содержимое
	 * из корневого тега и его вложенных элементов) */
	getCode() {
		let result = `<style>`
		this.styleCollection.forEach((item) => {
			result += item.getCss();
		})
		return result + `</style>` + rootDiv.getHtml()
	}
}

//--------------------------------------------- ОБЪЕКТЫ ------------------------------------------------------
const code = new HtmlBlock([wrap, block, imgStyle, text], rootDiv)
// вывод на экран
document.write(code.getCode());