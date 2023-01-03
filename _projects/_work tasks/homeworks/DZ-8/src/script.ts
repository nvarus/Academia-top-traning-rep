/** 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
одинаковой длины */
const stringCompar = (str1: string, str2: string): number => {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
};

/** 2. Написать функцию, которая переводит в верхний регистр первый символ переданной строки */
const firsLetterUp = (str: string) => str[0].toUpperCase() + str.substring(1);

/** 3. Написать функцию, которая считает количество гласных букв в переданной строке. */
const vowelLetters = (str: string) => (str.match(/[ауоыэеёиюя]/gi))?.length;

/** 4. Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру. */
const spamFilter = (str: string, count: boolean = false): boolean => {
    const spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'xxx', 'ххх'];
    // проходим по массиву с ключевыми словами
    spam.forEach(item => {
        // используем регулярные выражения, с ключем i, не зависящим от регистра
        let regexp = new RegExp(item, 'gi');
        // если .match возвращает не null, значит в строке есть спам
        if (str.match(regexp) !== null) count = true;
    }
    return count;
};

/** 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”. */
const trimLine = (str: string, length: number) => {
    if (str.length > length) {
        return str.slice(0, length - 3) + '...';
    } else return str;
};

/** 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.6. Написать функцию,
 * которая проверяет, является ли переданная строка палиндромом. */
const palindrom = (str: any, flag: boolean = false) => {
    // разворачиваем слово и сравниваем с первоначальной версией
    let reverce = str.split('').reverse().join('');
    if (str.toLowerCase() === reverce.toLowerCase()) flag = true;
    return flag;
};

/** 7. Написать функцию, которая считает количество слов в предложении */
// ключ \S - означает все кроме пробелов, + одно и более всхождение.
const numWords = (str: string) => str.match(/\S+/g)?.length;

/** 8. Написать функцию, которая возвращает самое длинное слово из предложения */
const findLongestWord = (str: string) => {
    let arrStr = str.split(' ');
    let veryLong = arrStr[0];
    for (let item of arrStr) {
        veryLong = (item.length > veryLong.length) ? item : veryLong;
    }
    return veryLong;
};

/** 9. Написать функцию, которая считает среднюю длину слова в предложении. */
const averageWordLen = (str) => {
    let sum = 0;
    // разделяем предложение на слова
    let arrStr = str.split(' ');
    // находим количество всех букв
    arrStr.forEach(item => sum += item.length)
    // делим кол-во букв на количество слов
    return sum / arrStr.length;
};

/** 10. Написать функцию, которая принимает строку и символ и выводит индексы,
 *  по которым находится этот символ в строке. Также вывести, сколько всего раз
 * встречается этот символ в строке. */
const numbCharact = (str: string, char: string) => {
    const newArr = [];
    let i = 0;
    while (true) {
        let findIndex = str.indexOf(char, i);
        if (findIndex === -1) break;
        newArr.push(findIndex);
        i = findIndex + 1;
    }
    let showResult = `<div style="
    font-size: 26px;
    text-align:center;
    font-weight:600;
    color: red;"
    >Количество вхождений символа '${char}': ${newArr.length} <br>Индексы: `
    newArr.forEach(item => showResult += (`${item} `));
    showResult += `</div>`
    document.write(showResult);
}