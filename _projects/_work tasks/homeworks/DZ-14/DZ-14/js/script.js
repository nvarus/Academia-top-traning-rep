"use strict";
/** Задание 1
создать html-страницу с трекбаром.Предоставить пользователю возможность изменять положение синего указателя. */

const slider = document.querySelector('.slider');
const line = document.querySelector('.line');

const trackbar = {
	firstX: 0,  // начальная позиция
	nextX: 0,   // следующая позиция
	leftShift: 0,
	get delta() {
		return this.nextX - this.firstX;
	}, get sliderWidth() {
		return line.offsetWidth - slider.offsetWidth;
	},
};
// нажатие на кнопку
document.addEventListener('mousedown', (e) => {
	trackbar.firstX = trackbar.nextX = e.pageX;
	if (e.target.className === 'slider') {
		document.addEventListener('mousemove', move);
	}
});

// прекратить событие mousemove при отпускании мыши
document.addEventListener('mouseup', () => {
	document.removeEventListener('mousemove', move);
});

const move = (e) => {
	trackbar.firstX = trackbar.nextX;
	trackbar.nextX = e.pageX;
	// ограничение выхода за края элемента
	if (trackbar.leftShift < 0) {
		trackbar.leftShift = 0;
	} else if (trackbar.leftShift > trackbar.sliderWidth) {
		trackbar.leftShift = trackbar.sliderWidth;
	} else {
		trackbar.leftShift += trackbar.delta;
	}
	
	slider.style.left = `${trackbar.leftShift}px`;
};

//----------------------------------------------------------------------------------

/** Задание 2
создать html-страницу с галереей. */
const gallery = {
	src: 0, imgArray: ['./img/task1/js.png', './img/task1/jquery.png', './img/task1/nodejs.png', './img/task1/vue.png',
		'./img/task1/npm.png', './img/task1/prettir.png', './img/task1/ts.png', './img/task1/jest.png',],
	
	// устанавливает изображение
	set img(path) {
		const img = document.querySelector('#img');
		img.setAttribute('src', path);
	},
	
	/** проверяем, если текущее положение крайнее, делаем стрелку не активной */
	checkArrow() {
		const back = document.querySelector('.gallery__back');
		const ff = document.querySelector('.gallery__forward');
		if (gallery.src < 1) {
			back.classList.add('disable');
		} else {
			back.classList.remove('disable');
		}
		
		if (gallery.src >= gallery.imgArray.length - 1) {
			ff.classList.add('disable');
		} else {
			ff.classList.remove('disable');
		}
	},
	
	arrowClick: (e) => {
		// если нажата кнопка назад
		if (e.target.dataset.arrow === 'back') {
			if (gallery.src > 0) {
				gallery.src--;
				gallery.img = gallery.imgArray[gallery.src];
				gallery.checkArrow();
			}
			// если нажата кнопка вперед
		} else if (e.target.dataset.arrow === 'ff') {
			if (gallery.src < gallery.imgArray.length - 1) {
				gallery.src++;
				gallery.img = gallery.imgArray[gallery.src];
				gallery.checkArrow();
			}
		}
	}
}

gallery.img = gallery.imgArray[gallery.src];
gallery.checkArrow();

const arrow = document.querySelectorAll('.arrow');

arrow.forEach(btn => {
	btn.addEventListener('click', gallery.arrowClick);
})
//--------------------------------------------------------------------------------------

/** Задание 3
Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может
быть развернут только один блок информации. */

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('info__title')) {
		// если целевой объект имеет класс hidden
		if (e.target.classList.contains('hidden')) {
			// перебираем все объекты с классом info__title
			const titles = document.querySelectorAll('.info__title');
			titles.forEach(element => {
				element.classList.add('hidden'); // и добавляем класс hidden всем
			})
			e.target.classList.remove('hidden'); // потом убираем у нужного класса
		} else {
			e.target.classList.add('hidden');
		}
	}
});


/** Задание 4
Создать html-страницу с новостями. Необходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще
 новости в список. Новости для подгрузки хранить в заранее подготовленном массиве. */

const news = {
	
	currentNews: 0,
	
	newsArray: [
		
		{
			title: '1. What is Lorem Ipsum?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: '2. Why do we use it?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: '3. Where does it come from?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: '4. Where can I get some?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
	
	], // массив с новостями
	
	nextNews(newsArr = this.newsArray) {
		// ======== создаем html блок для вывода новости =========
		const section = document.createElement('section');
		section.classList.add('news');
		const title = document.createElement('h2');
		title.classList.add('news__title');
		const text = document.createElement('p');
		text.classList.add('news__text');
		section.append(title);
		section.append(text);
		// перебираем новости по порядку, если закончились, начинаем заново
		console.log(`currentNews: ${this.currentNews} length: ${newsArr.length}`)
		if (this.currentNews < newsArr.length) {
			// если не дошли до конца массива, выводим следующую новость
			title.textContent = newsArr[this.currentNews].title;
			text.textContent = newsArr[this.currentNews].text;
			this.currentNews++
			// если новости закончились, сообщаем об этом
		} else if (this.currentNews === newsArr.length) {
			console.log('next news')
			title.textContent = 'НОВОСТИ ЗАКОНЧИЛИСЬ';
			this.currentNews++
			// вывозим заново новости
		} else {
			title.textContent = newsArr[0].title;
			text.textContent = newsArr[0].text;
			this.currentNews = 1;
		}
		
		document.querySelector('.task4').append(section);
	}, // выводит на экран следующую новость
	
	checkPosition() {
		// высота документа
		const height = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight	);
		
		const screenHeight = window.innerHeight; // высота экрана
		const scrolled = window.scrollY // сколько пикселей уже проскроллено
		const position = scrolled + screenHeight; // текущая позиция
		const upPoint = height - 5 // точка загрузки
			// если достигли низа документа
		if (position >= (upPoint) ) {
			// временно останавливаем событие, что бы не загрузились лишние элементы
			document.removeEventListener('scroll', news.checkPosition)
			news.delay()
			
		}
		
		
		
	}, // определяет конец скролла
	
	
	// задержка открытия новости и анимация полосы загрузки
	delay() {
		// создаем элементы загрузки
		const out = document.querySelector('.task4')
		const downloadWrap = document.createElement('div')
		downloadWrap.classList.add('wrap')
		const text = document.createElement('p')
		text.textContent = 'Загружаем следующую новость'
		downloadWrap.append(text)
		const downloadLane = document.createElement('div')
		downloadLane.classList.add('lane')
		downloadWrap.append(downloadLane)
		out.append(downloadWrap)
		// с помощью setInterval имитируем полосу загрузки
		let count = 0;
		window.scrollBy(0, 50);
		const download = setInterval(()=> {
			downloadLane.append(document.createElement('div'))
			count++
			// условие завершения setInterval
			if (count > 30) {
				clearInterval(download)
				downloadWrap.remove()      // удаляем полосу загрузки
				news.nextNews()            // выводим следующую новость
				window.scrollBy(0, 50);
				document.addEventListener('scroll', news.checkPosition) // снова запускаем событие
			}
		}, 50)
	} // задержка открытия новости и анимация полосы загрузки
}
news.nextNews()
document.addEventListener('scroll', news.checkPosition)















