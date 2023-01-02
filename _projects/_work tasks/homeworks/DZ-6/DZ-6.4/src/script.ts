/* Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест
(от 10 до 20) и названия факультета, для которого она предназначена.Написать несколько функций для работы с ним. */
// Создаем класс для аудиторий
let list = document.querySelector('.list__list');

const btnSelect = document.querySelector('#btn-select');
btnSelect.addEventListener('click', () => {
    let select = document.querySelector('#select');
    selectAuditori(select.value);
})

const btnGroupSelect = document.querySelector('#btn-group-select');
btnGroupSelect.addEventListener('click', () => {
    let selectGroup = document.querySelector('#group-select');
    selectGroupAud(selectGroup.value);
})

const btnSortSeat = document.querySelector('.sort__seat');
btnSortSeat.addEventListener('click', () => sortForSeats());

const btnSortTitle = document.querySelector('.sort__title');
btnSortTitle.addEventListener('click', () => sortForTitle());

class Auditorium {
    title;
    seats;
    faculty;
    constructor(t: string, s: number, f: string) {
        this.title = t;
        this.seats = s;
        this.faculty = f;
        let select = document.querySelector('#select');
        select?.innerHTML += `<option>${this.faculty}</option>`;
    }
    // метод для сравнения аудиторий и групп
    auditForGroup(group: Group) {
        if (group.students <= this.seats && group.faculty === this.faculty) {
            return 1;
        } else return 0;
    }
    // метод для вывода на экран аудитории
    showAuditori(fakult = 'all', seat = 0) {

        if (fakult === this.faculty && seat <= this.seats || fakult === 'all') {
            list?.innerHTML += `<div>${this.title}</div>`;
            list?.innerHTML += `<div>${this.seats}</div>`;
            list?.innerHTML += `<div>${this.faculty}</div>`;
        }
    }
}

class Group {
    public title;
    public students;
    public faculty;
    constructor(t: string, stud: number, f: string) {
        this.title = t;
        this.students = stud;
        this.faculty = f;
        let selectGroup = document.querySelector('#group-select');
        selectGroup?.innerHTML += `<option>${this.title}</option>`;
    }
}

// создаем аудитории
const auditori: Auditorium[] = [];
auditori.push(new Auditorium('Большая', 20, 'Юридический'))
auditori.push(new Auditorium('Малая', 10, 'Физико-математический'))
auditori.push(new Auditorium('Красная', 16, 'Экономический'))
auditori.push(new Auditorium('Зеленая', 12, 'Экономический'))
auditori.push(new Auditorium('Синяя', 18, 'Радио-технический'))

// создаем группы
const group = [];
group.push(new Group('юрист4', 16, 'Юридический'))
group.push(new Group('физмат3', 8, 'Физико-математический'))
group.push(new Group('эконом6', 16, 'Экономический'))
group.push(new Group('эконом7', 10, 'Экономический'))
group.push(new Group('радио10', 14, 'Радио-технический'))

/** 1. Вывод на экран всех аудиторий. */
const showAllAud = () => {
    list?.innerHTML = '';
    auditori.forEach(item => item.showAuditori());
}

/** 2. Вывод на экран аудиторий для указанного факультета.*/
const selectAuditori = (facult: string) => {
    list?.innerHTML = '';
    auditori.forEach(item => item.showAuditori(facult))
}

/** 3. Вывод на экран только тех аудиторий, которые подходят для переданной группы.
 * Объект-группа состоит из названия,количества студентов и названия факультета. */
const selectGroupAud = (gr: string) => {
    list?.innerHTML = '';
    for (let item of group) {
        if (item.title === gr) {
            auditori.forEach(elem => elem.showAuditori(item.faculty, item.students));
        }
    }
}

/** 4. Функция сортировки аудиторий по количеству мест. */
const sortForSeats = () => {
    auditori.sort((a, b) => a.seats > b.seats ? 1 : -1)
    showAllAud();
}

/** 5. Функция сортировки аудиторий по названию (по алфавиту). */
const sortForTitle = () => {
    auditori.sort((a, b) => a.title > b.title ? 1 : -1)
    showAllAud();
}
showAllAud();