"use strict";

const position = {
	oldX: 20,      // координаты предыдущего нажатия кнопки мыши
	oldY: 20,
	newX: 20,      // новые координаты
	newY: 20,
	get deltaX() {
		return this.newX - this.oldX
	},
	get deltaY() {
		return this.newY - this.oldY
	}
	
	
}

const content = document.querySelector('.field')
const ball = document.querySelector('.ball')

content.addEventListener('click', e => {
	
	const fieldHeight = window.innerHeight       // высота окна
	const fieldWidth = window.innerWidth         // ширина окна
	
	// предыдущие значения записываем в old
	position.oldX = position.newX
	position.oldY = position.newY
	// новые значения с клика мыши записываем в new
	position.newX = e.pageX - 50
	position.newY = e.pageY - 50
	
	if (e.pageX + 100 > window.innerWidth) {
		position.newX = window.innerWidth - 100
	}  else if (e.pageX - 100 < 0) {
		position.newX = 0
	} else position.newX = e.pageX - 50

	if (e.pageY + 100 > window.innerHeight) {
		position.newY = window.innerHeight - 100
	} else if (e.pageY - 100 < 0) {
		position.newY = 0
	} else position.newY = e.pageY - 50
	
	
	// анимация движения мяча
	let move = setInterval(() => {
		let speedX = 0;
		let speedY = 0;
		
		// условие завершения анимации
		if (position.newX === position.oldX || position.newY === position.oldY) {  // если мяч достиг нужной точки
			clearInterval(move)                                                     // прекратить setInterval
		}
		
		// Что бы мяч двигался по прямой, у более длинного пути уменьшаем кол-во шагов
		if (Math.abs(position.deltaX) > Math.abs(position.deltaY)) {   // если путь по X больше пути по Y
			speedX = Math.abs(position.deltaX) / (Math.abs(position.deltaY) + 1)
			speedY = 1
		} else {
			speedX = 1
			speedY = Math.abs(position.deltaY) / (Math.abs(position.deltaX) + 1)
		}
		
		if (position.deltaX > 0) {
			position.oldX += speedX
		} else {
			position.oldX -= speedX
		}
		
		if (position.deltaY > 0) {
			position.oldY += speedY
		} else {
			position.oldY -= speedY
		}
		
		ball.style.left = position.oldX + 'px'
		ball.style.top = position.oldY + 'px'
		
		
	}, 2)
})
