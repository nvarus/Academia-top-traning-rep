"use strict";
//const text = document.querySelector('.content')
//
//function func() {
//	console.log('Окно закрылось')
//	text.classList.add('bg')
////	text.removeEventListener('click', func)
//	text.removeEventListener('mousemove', mouseHendler)
//}
//
//function mouseHendler() {
//	text.innerHTML += 'Новый текст '
//}
//
//text.addEventListener('click',func, {passive: true})
//text.addEventListener('mousemove', mouseHendler)
//
//document.addEventListener('keydown', function (e) {
//	console.log(e.code)
//})
document.addEventListener('DOMContentLoaded', () => {
    console.log('Дерево сайта загружено');
});
window.addEventListener('load', () => {
    console.log('данные страницы загружены');
});
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});
