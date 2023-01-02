"use strict";
/* Задание 3
Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.*/
// создаем класс для свойствв css
class CssStyle {
    constructor(pr, vl) {
        this._property = pr;
        this._value = vl;
    }
    // метод для вывода свойства и значения
    getCss() {
        return `${this._property}: ${this._value};`;
    }
}
// создаем массив
const arrStyle = [];
// заполняем его css свойствми
arrStyle.push(new CssStyle('color', 'red'));
arrStyle.push(new CssStyle('font-size', '36px'));
arrStyle.push(new CssStyle('text-align', 'center'));
arrStyle.push(new CssStyle('text-decoration', 'underline'));
arrStyle.push(new CssStyle('text-transform', 'uppercase'));
arrStyle.push(new CssStyle('font-weight', '600'));
arrStyle.push(new CssStyle('margin-top', '40vh'));
/** Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью
 * document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями,
 * перечисленными в массиве. */
const showText = (arr = arrStyle, text) => {
    // формируем открывающий тег
    let openTag = `<p style="`;
    // проходим по массиву и с помошью метода getCss() заполняем атрибут style
    arr.forEach(item => openTag += item.getCss());
    openTag += `">`;
    let closedTag = `</p>`;
    // выводим на экран
    document.write(openTag + text + closedTag);
};
showText(arrStyle, 'Lorem ipsum dolor sit amet.');
