// * Создать массив «Список покупок». Каждый элемент массива является объектом,
// * который содержит название продукта, необходимое количество и куплен или нет

let display = document.querySelector('.form__display');

// добавление покупки в список
let inputName = document.querySelector('#input-name');
let inputQuant = document.querySelector('#input-quant');
let buttonAdd = document.querySelector('#btn-add');
buttonAdd.addEventListener('click', () => {
	addItem(inputName.value, +inputQuant.value);
	inputName.value = '';
	inputQuant.value = '';
	showList(shopList);
});
// покупка
let inputBuy = document.querySelector('#input-buy');
let buttonBuy = document.querySelector('#btn-buy');
buttonBuy.addEventListener('click', () => {
	purchased(inputBuy.value);
	inputBuy.value = '';
	showList(shopList);
});


const shopList = [

	{
		name: 'хлеб',
		quant: 1,
		bought: 'да',
	},

	{
		name: 'МОЛОКО',
		quant: 1,
		bought: 'Нет',
	},

	{
		name: 'Сыр',
		quant: 1,
		bought: 'да',
	},
	{
		name: 'Мясо',
		quant: 2,
		bought: 'нет',
	},
]

// * 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function showList(list = shopList) {
	let buy = document.querySelector('.buy');
	let notBuy = document.querySelector('.not-buy');
	buy.innerHTML = '';
	notBuy.innerHTML = '';
	// проходим по массиву
	for (let i in list) {
		let product = list[i];
		// проходим по объекту
		for (let item in product) {
			let word = product[item];
			// выводим все строки с заглавной буквы
			if (typeof word === 'string') word = word[0].toUpperCase() + word.substring(1).toLowerCase();

			if (product['bought'].toLowerCase() === 'да') {
				buy.innerHTML += `<div class='grid-element'>${word}</div>`;
			}
			if (product['bought'].toLowerCase() === 'нет') {
				notBuy.innerHTML += `<div class='grid-element'>${word}</div>`;
			}
		}
	}
}

// * Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
// * в списке продуктом, необходимо увеличивать количество в существующей покупке,
// * а не добавлять новую.
function addItem(nm, qt = 1, list = shopList) {
	if (qt < 1) qt = 1; // если в поле количество не ввести значение по умолчанию будет значение 1
	let flag = false;
	for (let i in list) {
		if (list[i]['name'].toLowerCase() === nm.toLowerCase()) { // если в списке есть такой продукт 
			if (list[i]['bought'].toLowerCase() === 'да') {		// и он уже куплен
				display.innerHTML = `
			<div class="form__error">Вы уже купили ${nm.toLowerCase()}</div>`
				flag = true;
				break;
			}
			list[i]['quant'] += qt;	// добавляем количество, если в списке есть продукт и он не куплен
			display.innerHTML = `
			<div class="form__ok">К пункту ${list[i]['name']} добавлено ${qt} шт.</div>`
			flag = true;
			continue;
		}
	}
	if (flag === false) {	// если продукт не найден в списке
		list.push({		// создаем новый объект
			name: nm.toLowerCase(),
			quant: qt,
			bought: 'нет',
		},)
		display.innerHTML = `
		<div class="form__ok">В список добавлен предмет: ${nm.toLowerCase()}, ${qt} шт.</div>`
	}
}

// * 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function purchased(product, list = shopList) {
	find = false;
	for (let i in list) {
		if (list[i]['name'].toLowerCase() === product.toLowerCase()) { // если в списке есть продукт
			if (list[i]['bought'] === 'нет') {	// и он не куплен
				list[i]['bought'] = 'да';	// отмечаем как купленый
				find = true;
				break;
			} else {
				display.innerHTML = `
				<div class="form__error">Вы уже купили ${product.toLowerCase()}</div>`
				find = true;
			}
		}
	}
	if (find === false) display.innerHTML = `<div class="form__error">В вашем списке нет: ${product.toLowerCase()}</div>` // если не найден в списке
}

showList(shopList);


