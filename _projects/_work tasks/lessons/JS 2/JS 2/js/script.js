// let n = Number(prompt("Введите число:"));

/*Напишите скрипт, который запрашивает у пользователя число N и
выводит все нечетные числа от N (или
N-1, если N четное) до 1 в порядке убывания. Например, ввод 7,
вывод 7 5 3 1; ввод 10, вывод 9 7 5 3 1.*/

// for (let i = n; i > 0; i--) {
// 	if (i % 2 != 0) {
// 		console.log(i);
// 	};
// }

/* Напишите скрипт, который запрашивает у пользователя число N и
 выводит все числа, на которые делится
N, включая число 1 (примеры: ввод N=10, вывод 1, 2,
5; ввод 11, вывод 1). */

// let n = Number(prompt("Введите число:"));

// for (let i = 1; i < n; i++) {
// 	if (n % i == 0 && i !== 1) {
// 		console.log(i);
// 	};
// }

/*Напишите скрипт, который принимает от пользователя величину годовой
депозитной ставки (в процентах) и выводит количество лет, по прошествии
которых вклад увеличится вдвое. */
// let summ = 0;
// let deposit = Number(prompt("Введите ставку в процентах:"));
// let i = 0;
// while (summ < 100) {
// 	summ += deposit;
// 	i++;
// }

// console.log(i);
// i = 1;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 30);

// const arr = [1, 2, 3, 'while'];

// for (item in arr) {
// 	console.log(item);
// }

// for (item of arr) {
// 	console.log(item);
// }
// let answer = 0
// do {
// 	answer = Number(prompt("2 + 2 * 2 = "));

// } while (answer != 6);
// console.log("Верно");

// let min = Number(prompt("min "));
// let max = Number(prompt("max "));
// for (let i = min; i <= max; i += 4) {
// 	console.log(i);
// }



// let n = Number(prompt("Введите число:"));

// let i = 2;
// while (i <= n) {
// 	if (i == n) { console.log("Число простое") }
// 	else if (n % i == 0) {
// 		console.log("Число непростое");
// 		break;
// 	};
// 	i++;
// }