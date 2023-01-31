"use strict";
//// Замыкание это функция внутри другой функции
//function createCalcFunction(n: number) {
//	return function () {
//		console.log(1000 * n)
//	}
//}
//
//const calc = createCalcFunction(42)
//calc()
//function createIncrementor(n:number) {
//	return function (num: number) {
//		return n + num
//	}
//}
//
//const addOne = createIncrementor(1)
//const addTen = createIncrementor(10)
//
//console.log(addOne(10))
//console.log(addOne(41))
//
//console.log(addTen(10))
//console.log(addTen(41))
function urlGenetator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    };
}
const comUrl = urlGenetator('com');
const ruUrl = urlGenetator('ru');
console.log(comUrl('google'));
console.log(ruUrl('yandex'));
