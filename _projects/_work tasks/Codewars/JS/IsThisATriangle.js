/***********************************************************
 * Реализуйте функцию, которая принимает 3 целых значения
 * a, b, c. Функция должна возвращать true, если треугольник
 * может быть построен со сторонами заданной длины, и false
 * в любом другом случае.
 ***********************************************************/

const isThisATriangle = (a, b, c) => {
	// поместим значения в массив и отсортируем
	const array = [];
	array.push(a, b, c);
	array.sort(function (a, b) { return b - a; });
	// если значения не number или не положительные, вернуть false
	for (item of array) {
		if (typeof item != 'number' || item <= 0) {
			return false;
		}
	}
	// проверим, длину сторон
	if (array[0] >= array[1] + array[2]) {
		return false;
	}
	return true;
}


// const myFunc = item => item * 2;

console.log(isThisATriangle(3, 5, 7));			// true
console.log(isThisATriangle(2, 1, 5));			// false
console.log(isThisATriangle(40, 20, 21));	// true
console.log(isThisATriangle(-1, 5, 7));		// false
