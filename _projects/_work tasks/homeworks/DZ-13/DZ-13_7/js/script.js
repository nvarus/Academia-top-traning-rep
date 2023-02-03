"use strict";
// клик на элементе
document.addEventListener('click', (e) => {
    // при нажатии на элемент li к нему добавляется класс .none
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('none');
    }
});
// жирный шрифт при наведении
document.addEventListener('mouseover', (e) => {
    // что бы при выделении заголовка, жирный шрифт не наследовался потомками
    if (e.target.className === 'title') {
        const child = e.target.children;
        child[0].classList.add('non-bold'); // отменяем у дочернего объекта жирный шрифт
        e.target.classList.add('bold');
    }
    else {
        e.target.classList.add('bold');
    }
});
document.addEventListener('mouseout', (e) => {
    e.target.classList.remove('bold');
});
