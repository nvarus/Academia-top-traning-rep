"use strict";
/** 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет,
 * какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает
   пример и возвращает результат. */
function calc(example = '42+58') {
    let numbers = example.match(/\d+/gi);
    let operator = example.match(/\D/gi);
    console.log(operator);
    switch (operator[0]) {
        case '+':
            return +numbers[0] + +numbers[1];
            break;
        case '-':
            return +numbers[0] - +numbers[1];
            break;
        case '*':
            return +numbers[0] * +numbers[1];
            break;
        case '/':
            return +numbers[0] / +numbers[1];
            break;
    }
}
// через eval
const calc2 = (str = '42+58') => eval(str);
/** 8. Написать функцию, которая получает url и выводит подробную информацию о нем. Например:
 * url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about” */
const parseURL = (url) => new URL(url);
const parseURL2 = (url = 'https://learn.javascript.ru/regexp-methods/str-methods/info/regexp') => {
    let regexp = url.match(/[^:\/]+/gi);
    let path = '';
    for (let i = 2; i < regexp.length; i++) {
        path += regexp[i];
        path += (i < regexp.length - 1) ? '/' : '';
    }
    return `информация: протокол: ${regexp[0]}, домен: ${regexp[1]}, путь: ${path}`;
};
/** 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью
указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
Выполняя задание, не используйте функцию split() */
const strSeparator = (str = '10/08/2020', sep = '/') => {
    const result = [];
    let ar = 0;
    result[0] = '';
    for (let i in str) {
        if (str[i] !== sep) {
            result[ar] += str[i];
        }
        else {
            ar++;
            result[ar] = '';
            continue;
        }
    }
    return result;
};
/** 10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего входного параметра. Например:
 print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020” */
