"use strict";

/** Beginner Series #3 Sum of Numbers */
/** Учитывая два целых числа a и b, которые могут быть положительными или отрицательными,
 * найдите сумму всех целых чисел между ними и включая их, и верните ее. Если два числа равны,
 * верните a или b.

Примечание: a и b не упорядочены! */

function getSum(a, b) {
	if (a === b) return a;
	if (a > b) {
		let tmp = b;
		b = a;
		a = tmp;
	}
	let sum = 0;
	while (a <= b) {
		console.log(sum)
		sum += a;
		a++;
	}
	return sum
}

/** Бесконечное количество полок расположено одна над другой в шахматном порядке.
Кошка может перепрыгивать либо на одну, либо на три полки одновременно: с полки i
 на полку i +1 или i +3 (кошка не может забраться на полку прямо над своей головой)*/
function solution(start, finish) {
	let bigJamp = Math.trunc((finish - start) / 3)
	let remains = (finish - start) % 3
	return bigJamp + remains
}

// Arrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]]
/** #Добавление значений массивов сдвинутым способом */
function addingShifted(arrayOfArrays, shift) {
	const newArray = [];
	let myShift = 0;
	for (let i in arrayOfArrays) {
		for (let j in arrayOfArrays[i]) {
			if (i == 0) {
				newArray.push(arrayOfArrays[i][j]);
			} else {
				if (newArray[+j + myShift] == undefined) newArray[+j + myShift] = 0;
				newArray[+j + myShift] += arrayOfArrays[i][j];
			}
		}
		myShift += shift;
	}
	return newArray;
}

/** В этом Ката вы реализуете алгоритм Луна, который используется для проверки номеров кредитных карт.

Учитывая положительное целое число до 16 цифр, верните значение true,
если это действительный номер кредитной карты, и значение false, если это не так.

Вот алгоритм:
Удвойте каждую вторую цифру, сканируя справа налево, начиная со второй цифры (справа).
Другой способ подумать об этом таков: если есть четное количество цифр, удвойте каждую вторую цифру, начиная с первой;
если есть нечетное количество цифр, удвойте каждую вторую цифру, начиная со второй: */