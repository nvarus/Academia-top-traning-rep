const array = [4220, 47, 88, 4, 1, 8, 55, 27, 33, 52, 8, 0];

/** Написать функцию которая принимает массив
 * и возвращает наименьшее число в этом массиве */

const findMin = (arr = array) => {
	let min = arr[0];
	for (let index in arr) {
		if(arr[index] < min) {
			min = arr[index];
		}
	}
	return min
}

const bubbleSort = (arr = array) => {
	let sortFail;
	for (let k = 0; true; k++) {
		sortFail = 0;
		for (let i = 0; i <= arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {    // элементы стоят не по порядку
				let tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
				sortFail ++;
			}
		}
		console.log(k)
		if (sortFail === 0) return arr;
	}
}

/** 1. находим номер минимального значения в текущем списке
 *  2. производим обмен этого значения со значением первой неотсортированной позиции
 *  (обмен не нужен, если минимальный элемент уже находится на данной позиции)
 *  3. теперь сортируем хвост списка, исключив из рассмотрения уже отсортированные элементы */
const selectSort = (arr = array) => {
	for (let currElem = 0;currElem <= arr.length - 1; currElem++) {
		for (let next = currElem; next <= arr.length; next++) {
			if (arr[next] < arr[currElem]) {
				let tmp = arr[currElem];
				arr[currElem] = arr[next];
				arr[next] = tmp;
			}
		}
		console.log(arr)
	}
}


const sortedArray = [0, 1, 4, 8, 8, 27, 33, 47, 52, 55, 88, 92, 96, 101, 101, 105, 121, 123,
125, 125, 126, 129, 134, 136, 137, 139, 158, 169, 200, 252, 498, 1028, 1596, 2036, 2045]

/** Бинарный поиск - поиск в отсортированном массиве */

const binarySearch = (number, arr = sortedArray) => {
	let low = 0;
	let high = arr.length - 1;
	
	while (low <= high) {
		let half = Math.trunc((high + low) / 2)
		let guess = arr[half];
		if (guess === number) {
			return half;
		} else if (guess > number) {
			high = half - 1;
		} else {
			low = half + 1;
		}
	}
	return 'Нет такого числа';
	
}
const func = (num) => {
	for (let i = 1; num > 1; i++) {
		console.log(num, i)
		num /= 2;
	}
}









