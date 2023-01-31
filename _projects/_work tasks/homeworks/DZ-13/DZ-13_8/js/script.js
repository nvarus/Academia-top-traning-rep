"use strict";
/** Задание 8
 * создать html-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать
 * мышку в правом нижнем углу и тянуть ее дальше. */
const position = {
	firstX: 0,   // начальная позиция по оси X
	firstY: 0,   // начальная позиция по оси Y
	nextX: 0,     // следующая позиция по оси X
	nextY: 0,      // следующая позиция по оси Y
	width: 300,
	height: 150,
	get deltaX() {return this.nextX - this.firstX},    // смещение по оси X
	get deltaY() {return this.nextY - this.firstY},     // смещение по оси Y
}
// задаем начальные размеры элемента
const framedText = document.querySelector('.framed-text');
framedText.style.width = `${position.width}px`;
framedText.style.height = `${position.height}px`;

// нажатие на кнопку
document.addEventListener('mousedown', (e) => {
	// позиция курсора при нажатии на кнопку
	position.firstX = position.nextX = e.pageX;
	position.firstY = position.nextY = e.pageY;
	// если курсор находится на треугольнике, при смещении мыши запускается событие mousemove
	if (e.target.className === 'triangle') {
		document.addEventListener('mousemove', move);
		
	}
});
// прекратить событие mousemove при отпускании мыши
document.addEventListener('mouseup', (e) => {
	document.removeEventListener('mousemove', move);
});


const move = (e) => {
	// X
	position.firstX = position.nextX;      // предыдущая точка
	position.nextX = e.pageX;              // следующая точка
	position.width += position.deltaX;     // смещение курсора
	framedText.style.width = `${position.width}px`; // изменяем размер элемента на разницу смещения курсора
	// Y
	position.firstY = position.nextY;
	position.nextY = e.pageY;
	position.height += position.deltaY;
	framedText.style.height = `${position.height}px`;
}