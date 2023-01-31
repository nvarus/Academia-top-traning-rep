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
	newsArray: [
		
		{
			title: 'What is Lorem Ipsum?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: 'Why do we use it?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: 'Where does it come from?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
		{
			title: 'Where can I get some?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt doloremque enim, error fugit' +
				' illo impedit itaque, maiores maxime natus neque placeat praesentium quas ullam vero. Consectetur' +
				' corporis esse est explicabo ipsum libero rerum? Cupiditate dolore ipsam nisi quos sint ut. At in labore magnam, quae saepe sint voluptatem. A architecto asperiores ducimus minima nam? Accusamus aperiam beatae consequuntur cum eius illum iste iusto mollitia nobis omnis quae repellendus, saepe sed sunt, totam voluptas voluptate. Ad aut beatae, delectus excepturi qui quis quisquam repellendus sint sit tempore ullam, voluptates! Deleniti dolorem dolorum non! Ab deleniti iure labore optio. Autem, omnis.',
		},
	
	], // массив с новостями
	currentNews: 0,
	
	addNews(newsNum) {
		const section = document.createElement('section')
		section.classList.add('news')
		const title = document.createElement('h2')
		title.classList.add('news__title')
		const text = document.createElement('p')
		text.classList.add('news__text')
		section.append(title)
		section.append(text)
		
		if (newsNum < this.newsArray.length) {
			title.textContent = this.newsArray[newsNum].title
			text.textContent = this.newsArray[newsNum].text
		} else {
			title.textContent = "НОВОСТИ ЗАКОНЧИЛИСЬ"
			this.currentNews--
			
		}
		document.querySelector('.task4').append(section)
	}, // выводит на экран новость с указанным номером из массива newsArray
	nextNews() {
		this.currentNews++
		this.addNews(this.currentNews)
	}, // добавляет следующую новость
}

news.addNews(news.currentNews)
















