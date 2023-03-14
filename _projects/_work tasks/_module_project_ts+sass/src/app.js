// импортируем модуль
import Test from './Test.js';


// ссылка на DOM
const appDOM = document.querySelector('#app');

// создаем объект класса Test
const test = new Test();

// записываем значение вызова метода в DOM
appDOM.innerHTML = test.render()