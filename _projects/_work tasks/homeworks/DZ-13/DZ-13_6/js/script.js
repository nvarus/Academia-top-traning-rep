"use strict";
/** Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки.
Но если она не помещается сверху от кнопки, тогда отображается снизу */
class ButtonCreate {
    constructor(buttonID, buttonClasses, buttonTitle, ClassTarget, popupHintText) {
        /** создает и возвращает кнопку */
        this.getButton = () => {
            const btn = document.createElement('button');
            // добавляем ID
            btn.id = this.btnID;
            // добавить специальный класс
            btn.classList.add('btnHint__button');
            // добавляем css классы
            this.btnClasses.forEach((cssClass) => {
                btn.classList.add(cssClass);
            });
            // добавляем подпись
            btn.textContent = this.btnTitle;
            // вставляем кнопку на страницу
            return btn;
        };
        /** создает и возвращает подсказку */
        this.getPopup = () => {
            // создаем всплывающую подсказку с надписью
            const popup = document.createElement('div');
            popup.classList.add('btnHint__popup');
            popup.id = `hint-${this.btnID}`;
            popup.textContent = this.hintText;
            // создаем стрелку и вставляем в popup
            const array = document.createElement('div');
            array.id = `popup-array-${this.btnID}`;
            array.classList.add('btnHint__popup-array');
            popup.append(array);
            return popup;
        };
        /** вставляет кнопку с подсказкой в HTML */
        this.InsButtonWithHint = () => {
            const target = document.querySelector(`.${this.target}`);
            const div = document.createElement('div');
            div.classList.add('btnHint');
            div.append(this.getButton());
            div.append(this.getPopup());
            //@ts-ignore
            target.append(div);
        };
        this.popupEvent = () => {
            const button = document.querySelector(`#${this.btnID}`); // получаем доступ к кнопке
            const hint = document.querySelector(`#hint-${this.btnID}`); // получаем доступ к подсказке
            const popupArray = document.querySelector(`#popup-array-${this.btnID}`); // получаем доступ к подсказке
            //@ts-ignore
            // наведение мыши
            button.addEventListener('mouseover', () => {
                //@ts-ignore
                // поведение подсказки, если до края экрана меньше 50px
                if (button.getBoundingClientRect().top <= 50) {
                    hint.classList.remove('btnHint__popup');
                    hint.classList.add('popup-rotate');
                    popupArray.classList.remove('btnHint__popup-array');
                    popupArray.classList.add('popup-array-rotate');
                }
                else {
                    hint.classList.remove('popup-rotate');
                    hint.classList.add('btnHint__popup');
                    popupArray.classList.remove('popup-array-rotate');
                    popupArray.classList.add('btnHint__popup-array');
                }
                let sizeUp = 0.2; // начальный размер при появлении подсказки
                //@ts-ignore
                hint.style.transform = `scale(${sizeUp})`;
                //@ts-ignore
                hint.style.display = "block";
                //анимация увеличения
                const increase = setInterval(() => {
                    if (sizeUp >= 1.0)
                        clearInterval(increase);
                    //@ts-ignore
                    hint.style.transform = `scale(${sizeUp})`;
                    sizeUp += 0.05;
                }, 10);
            });
            // убирание мыши
            button.addEventListener('mouseout', () => {
                let sizeDw = 1;
                //анимация уменьшения
                const decrease = setInterval(() => {
                    // условие завершения анимации и отключения подсказки
                    if (sizeDw <= 0.2) {
                        clearInterval(decrease);
                        //@ts-ignore
                        hint.style.display = "none";
                    }
                    //@ts-ignore
                    hint.style.transform = `scale(${sizeDw})`;
                    sizeDw -= 0.05;
                }, 10);
            });
        };
        this.btnID = buttonID;
        this.btnClasses = buttonClasses;
        this.btnTitle = buttonTitle;
        this.target = ClassTarget;
        this.hintText = popupHintText;
        this.InsButtonWithHint();
        this.popupEvent();
    }
}
const btn1 = new ButtonCreate('button1', ['btn'], 'Отправить', 'content', 'Подсказка для кнопки');
const btn2 = new ButtonCreate('button2', ['btn'], 'Загрузить', 'content', 'Подсказка');
const btn3 = new ButtonCreate('button3', ['btn'], 'ХоХоХо', 'content', 'Подсказка');
