// * Создать массив «Список покупок». Каждый элемент массива является объектом,
// * который содержит название продукта, необходимое количество и куплен или нет

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
function addItem(nm, qt, list = shopList) {
	let flag = false;
	for (let i in list) {
		if (list[i]['name'].toLowerCase() === nm.toLowerCase()) { // если в списке есть такой продукт 
			if (list[i]['bought'].toLocaleLowerCase() === 'да') {		// и он уже куплен
				alert(`Вы уже купили ${list[i]['name']}`)
				flag = true;
				break;
			}
			list[i]['quant'] += qt;	// добавляем количество, если в списке есть продукт и он не куплен
			flag = true;
			continue;
		}
	}
	if (flag === false) {	// если продукт не найден в списке
		list.push({		// создаем новый объект
			name: nm,
			quant: qt,
			bought: 'нет',
		},)

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
				alert(`Вы уже купили ${list[i]['name']}`) // если есть в списке, но куплен
				find = true;
			}
		}
	}
	if (find === false) alert(`В вашем списке нет ${product}`) // если не найден в списке
}

addItem('молоко', 2)
addItem('Колбаса', 1)

purchased('колбаса')
// purchased('сыр')
purchased('мясо')
showList();
