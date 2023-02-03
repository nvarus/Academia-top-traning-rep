"use strict";
/** Задание 1
 * создать html-страницу для ввода имени пользователя. Необходимо проверять каждый символ, который вводит
 * пользователь. Если он ввел цифру, то не отображать ее в input. */
const task1Input = document.querySelector('.task1__input');
const task1OutText = document.querySelector('.task1__outText');
task1Input.addEventListener('input', () => {
    let result = task1Input.value;
    task1OutText.innerHTML = result.match(/\D/gi).join('');
});


/** Задание 2
создать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть. */
const modalWindow = document.querySelector('.task2__modal');
const closeModal = () => {
    modalWindow.classList.add('none');
};
const task2Open = document.querySelector('.task2__button');
task2Open.addEventListener('click', () => {
    modalWindow.classList.remove('none');
});
const modalClose = document.querySelector('.modal__button');
modalClose.addEventListener('click', closeModal);
const xClose = document.querySelector('.modal__x');
xClose.addEventListener('click', closeModal);


/** Задание 4
создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет. */
const lights = document.querySelector('#traffic-lights').classList
document.querySelector('.task4__button').addEventListener('click', () => {
    if (lights.value === 'light_green') {
        lights.remove('light_green');
        lights.add('light_yellow');
    } else if (lights.value === 'light_yellow') {
        lights.remove('light_yellow');
        lights.add('light_red')
    } else {
        lights.remove('light_red');
        lights.add('light_green');
    }
});

/** Задание 5
создать html-страницу со списком книг. При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей – необходимо возвращать прежний цвет. */

document.addEventListener('click', (e) => {
    // если нажатый элемент является тегом li
    if (e.target.tagName === 'LI') {
        const element = document.querySelector('.active')
        element && element.classList.remove('active')
        e.target.classList.add('active')
    }
})