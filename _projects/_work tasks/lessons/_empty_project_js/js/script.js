// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 === 0) {
// 		div.innerHTML += `
// 		<h2>${arr[i]}</h2>`;
// 	}
// }

let div = document.querySelector('div.test')
let div2 = document.querySelector('div.test2')
let div3 = document.querySelector('div.test3')
// const arr2 = arr.map(function (value, index) {
// 	if (value % 2 === 0) return value;
// });

// div.innerHTML = arr2;

// const arr3 = arr.filter(item => item % 2 === 0)
// div.innerHTML = arr3;
// let arr4
// const delElement = (arr, index) => {
// 	arr4 = arr.splice(index, 4)
// }


// delElement(arr, 2)
// console.log(arr)
// console.log(arr4)

// const summ = (arr, s = 0) => {
// 	for (let item of arr) s += item;
// 	return s;
// }
// console.log(summ(arr))
const arr = [78, 2, 3, 4, 5, 6, 7, 78, 98, 31];

// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] < min) {
// 		min = arr[i];
// 	}
// }
// console.log(min)

const Jopa = [23, 463, 54864, 234, 54, 76, 8]

const min = function (myArr, minNum = myArr[0]) { //Создаём абстрактную переменную и передаём ей массив (myArr)
	// let minNum = myArr[0]//создаём переменную и приравнивааем её к первому ключу из переданного массива
	for (let item of myArr) { //проходим по циклу переменной item, которая будет являться элементом массива
		if (item < minNum) {
			minNum = item
		}
	}
	return minNum
}

console.log(min(Jopa)) //передаём значение конкретного массива Jopa
console.log(min(arr))
//передаём массив NoName с конкретными значениями
console.log(min([123, 235, 437, 4536, 345, 55, 6, 346]))