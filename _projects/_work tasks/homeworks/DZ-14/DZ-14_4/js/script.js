"use strict";

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
















