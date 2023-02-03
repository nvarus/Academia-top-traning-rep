"use strict";
/** Задание 3 */
/** Реализовать класс Employee, описывающий работника */
class Employee {
    constructor(name, position, experience, salary) {
        this.name = name;
        this.position = position;
        this.experience = experience;
        this.salary = salary;
    }
}
/** создаем массив работников банка */
const employList = [
    new Employee('Михайлова Ульяна', 'кредитный аналитик', 4, 92500),
    new Employee('Панкова София', 'кассир-операционист', 2, 42800),
    new Employee('Кузнецов Сергей', 'кредитный инспектор', 2, 53000),
    new Employee('Шилов Глеб', 'руководитель банка', 8, 168900),
    new Employee('Корчагина Василиса', 'юрист', 5, 124500),
    new Employee('Смирнов Максим', 'стажер', 0.2, 35000),
    new Employee('Павлова Ксения', 'финансовый операционист', 2, 51800),
    new Employee('Седова Сафия', 'финансовый аналитик', 6, 118900),
    new Employee('Власов Лев', 'начальник отдела', 4, 138900),
    new Employee('Ермаков Михаил', 'ипотечный брокер', 3, 114900)
];
/** Реализовать класс EmpTable для генерации html кода таблицы со списком работников банка. */
class EmpTable {
    constructor(employList) {
        this.employList = employList;
    }
    // получить html код таблицы
    getHtml() {
        let result = `
<div class="table__title">Имя</div>
<div class="table__title">Должность</div>
<div class="table__title">Стаж</div>
<div class="table__title">Зарплата</div>`;
        for (const i in this.employList) {
            for (const j in this.employList[i]) {
                result += `<div class="table__data">${this.employList[i][j]}</div>`;
            }
        }
        return result;
    }
}
const empTable = new EmpTable(employList);


/** Задание 4 */
/** Реализовать класс StyledEmpTable, который наследуется от класса EmpTable */
class StyledEmpTable extends EmpTable {
    constructor(cssClass = [], styles = []) {
        super(employList);
        this.cssClass = cssClass;
        this.styles = styles;
    }
    /** метод getStyles(), который возвращает строку со стилями для таблицы в тегах style */
    getStyles() {
        let result = `<style>`;
        for (const i in this.cssClass) {
            result += this.cssClass[i] + '{';
            result += this.styles[i] + '}';
        }
        return result + '</style>'
    }
    /** Переопределить метод getHtml(), который добавляет стили к тому, что возвращает
    метод getHtml() из родительского класса. */
    getHtml() {
       return  this.getStyles() + super.getHtml();
    }
   
   
}
const styledEmpTable = new StyledEmpTable(['.content', '.table__title', '.table__data'], [
   `display: grid;
   grid-template-columns: 0.7fr 0.8fr 0.3fr 0.4fr;
   max-width: 500px;
   background-color: #ff9858;
   box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
   margin: 0 auto;`,
   `border: 1px solid #ffffff;
   text-align: center;
   font-size: 15px;
   line-height: 24px;
   font-weight: 600;`,
    `text-align: center;
    line-height: 18px;
    border: 1px solid #ffffff;`]);
// Создать объект класса StyledEmpTable и вывести на экран результат работы метода getHtml()
let cont = document.querySelector('.content')
cont.innerHTML += styledEmpTable.getHtml()
