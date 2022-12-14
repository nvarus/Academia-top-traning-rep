/*******************************************************************
* Возвести в квадрат каждую цифру числа и объединить их.
* Например, если мы запустим 9119 через функцию, получится 811181
* Примечание: Функция принимает целое число и возвращает целое число
********************************************************************/

const NUMBER = 88;

const everyDigit = (number) => {
    let str_number = String(number);
    const lenArr = str_number.length;
    let sum = ""

    for (let i = 0; i < lenArr; i++) {
        sum += Number(str_number[i]) ** 2;
    }
    return Number(sum);
}





console.log(everyDigit(NUMBER))


