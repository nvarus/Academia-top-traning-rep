/* Задание 2
Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
количества и цены за единицу товара */
// создаем класс для строки с товаром
class ProductLine {
    productName
    quantity
    pricePerUnit
    lineAmount: number
    constructor(name: string, qty: number, price: number) {
        this.productName = name;
        this.quantity = qty;
        this.pricePerUnit = price;
        // создаем допольнительное свойство с суммой по строке цена * кол-во 
        this.lineAmount = qty * price;
    }
}
// создаем массив
const cashVoucher: ProductLine[] = [];
// заполняем объектами типа ProductLine
cashVoucher.push(new ProductLine('Печенье "Юбилейное"', 2, 96));
cashVoucher.push(new ProductLine('Молоко "Моя Бурёнка"', 3, 89));
cashVoucher.push(new ProductLine('Чай "Индийский"', 1, 119));

let list = document.querySelector('.list__list');
let sum = document.querySelector('.voucher__result');

/** 1. Распечатка чека на экран. */
function showVoucher(array = cashVoucher): void {
    // проходим по массиву
    array.forEach(obj => {
        // затем по объекту
        for (let element in obj) {
            // выводим значения на экран
            list?.innerHTML += `<div>${obj[element]}</div>`;
        }
    });
    // выводим на экран результат работы функций calcSum(), maxPrice() и countProd()
    sum?.innerHTML += `<div>Общая сумма покупки: ${calcSum(array)} руб.</div>`;
    sum?.innerHTML += `<div>Самая дорогая покупка: ${maxPrice(array)} руб.</div>`;
    let averagePrice = calcSum(array) / countProd(array);
    sum?.innerHTML += `<div>Средняя стоимость одного товара: ${averagePrice.toFixed(2)} руб.</div>`;
}

/** 2. Подсчет общей суммы покупки. */
const calcSum = (array = cashVoucher, result: number = 0): number => {
    for (let item of array) result += item['lineAmount'];
    return result;
};

/** 3. Получение самой дорогой покупки в чеке. */
const maxPrice = (array = cashVoucher, max: number = 0): number => {
    for (let item of array) {
        if (item['pricePerUnit'] > max) max = item['pricePerUnit'];
    }
    return max;
};

/** 4. Подсчет средней стоимости одного товара в чеке. */
const countProd = (array = cashVoucher, count = 0): number => {
    for (let item of array) count += item['quantity'];
    return count;
}
showVoucher();
