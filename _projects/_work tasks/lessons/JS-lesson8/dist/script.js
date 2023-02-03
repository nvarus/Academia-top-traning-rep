// let hi = {
// //     'name': 'Alexey',
// // }
// //
// // let ho = {
// //     __proto__:hi
// // }
// // console.log(ho)
// //
// // class Human {
// //     constructor(names, age) {
// //         this.names = names;
// //         this.age = age;
// //     }
// //     info() {
// //         console.log(this.names, " ", this.age)
// //     }
// // }
// //
// //
// // class Student extends Human {
// //     constructor(names, age, course, group, arr = []) {
// //         super(names, age);
// //         this.course = course;
// //         this.group = group;
// //         this.aa = '2222';
// //         this.arr = arr;
// //     }
// //     info() {
// //         console.log(this.names, " ", this.age, " ", this.course, " ", this.group)
// //         console.log(this.#aa)
// //     }
// //
// // }
// // let human = new Human('Alexey', 42)
// // console.log(human)
// // let student = new Student('Alexey', 42, 2, 'web22');
// // student.HHH = 100
// // console.log(student.aa)
// //
// // class Jobs {
// //     constructor(arr = []) {
// //     }
// //     info() {
// //         console.log(this.arr)
// //     }
// // }
// //
// // let jobs = new Jobs([1, 2, 3]);
// // jobs.info()

/** Реализовать класс, описывающий новостную ленту. */

class News {
	
	constructor(arrNews = []) {
		this.arrNews = arrNews;
	}
	
	//  get-свойство, которое возвращает количество новостей
	get quantityNews() {
		return this.arrNews.length
	}
	
	//  метод для вывода на экран всех новостей
	showNews() {
		let news = document.querySelector('.content');
		news.innerHTML = '';
		this.arrNews.forEach((item) => {
			news.innerHTML += `
				<div class="news">${item}</div>
				`
		})
	}
	// метод для добавления новости
	addNews(NewNews) {
		this.arrNews.push(NewNews)
	}
	// метод для удаления новости
	popNews() {
		this.arrNews.pop()
	}
	
}

const news = new News([
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, animi asperiores delectus distinctio dolores ducimus ea eveniet fugiat illo illum libero molestiae non omnis quas quod rem sint unde.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, animi asperiores delectus distinctio dolores ducimus ea eveniet fugiat illo illum libero molestiae non omnis quas quod rem sint unde.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, animi asperiores delectus distinctio dolores ducimus ea eveniet fugiat illo illum libero molestiae non omnis quas quod rem sint unde.'])
news.showNews()


















