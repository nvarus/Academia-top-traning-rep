/******************************************************************************************
* Завершите метод/функцию так, чтобы она преобразовала слова, разделенные тире/подчеркиванием,
* в camelcasing. Первое слово в выходных данных должно быть заглавным, 
* только если исходное слово было заглавным 
* П Р И М Е Р:
* "the-stealth-warrior" gets converted to "theStealthWarrior"
* "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*******************************************************************************************/

const ENTERING_TEXT1 = "the-stealth-warrior";
const ENTERING_TEXT2 = "_эта_функция_для__умножения-чисел";

function toCamelCase(str) {

    let newText = '';
    // флаг, означающий что на следующей итерации нужно изменить регистр
    let toUpper = false;

    for (i = 0; i < str.length; i++) {
        if (str[i] != "_" && str[i] != "-") {
            // если найдена буква, проверяем поднят ли флаг toUpper
            if (toUpper) {
                newText += str[i].toUpperCase(); // если true, меняем регист
                toUpper = false;
            } else {
                newText += str[i];         // иначе просто добавляем букву
            }


        } else { toUpper = true } // если обнаружены _ или -
    }

    return newText;
}

console.log(toCamelCase(ENTERING_TEXT1));
console.log(toCamelCase(ENTERING_TEXT2));

