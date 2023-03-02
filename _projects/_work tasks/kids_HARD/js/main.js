'use strict'

/** при входе проверяем существует ли запись current_user в LS */
const startApp = (count = 0) => {
		for (let key in localStorage) {
		if (key === 'current_user') count++
	}
	if (count === 0) {
		console.log('Не найден current_user')
		logonWindow();
		popupHint('Вход не выполнен')
		
	} else {
		console.log('Найден current_user')
		let user = JSON.parse(localStorage.getItem('current_user'))
		exitWindow(user.firstName)
	}
}
const popupHint = (text) => {
	const popAp = $('#hint-anchor').append(`
	<div class="pHint">
	<p>${text}</p>
		<div class="triangle"></div>
	</div>
	`)
	const pHint = $('.pHint')
	pHint.hide()
	pHint.show(1000)
	pHint.on('mouseover', () =>{
		pHint.hide(1000)
	})
	
}

const exitWindow = (name) => {
	const headerControl = $('.header-controls');
	headerControl.append(`
	<div class="exit">
		<p class="exit__close" id="exit-close">&#10006;</p>
		<h3>Вы вошли как ${name}</h3>
		<h4 id="lk">Личный кабинет</h4>
		<h4 id="exit">Выйти</h4>
	</div>`)
	const EWindow = $('.exit').hide()
	document.addEventListener('click', (e) => {
		if (e.target.id === 'exit-close') {
			console.log('close')
			EWindow.hide(500)
		} else if (e.target.id === 'lk') {
			console.log('lk')
		}else if (e.target.id === 'exit') {
			EWindow.hide(500)
			localStorage.removeItem('current_user')
			EWindow.remove()
			logonWindow();
			popupHint('Вход не выполнен')
		} else if (e.target.id === 'user-link') {
			EWindow.show(500)
		}
	})
}

/** Окно входа пользователя */
const logonWindow = () => {
	const headerControl = $('.header-controls');
	// создаем окно входа
	headerControl.append(`
	<div class="logon">
		<p class="logon__close">&#10006;</p>
		<h3>Личный кабинет</h3>
		<form class="logon__form" name="logonForm">
			<input type="text" name="login" id="logon-login" placeholder="Введите логин">
			<input type="password" name="pass" id="logon-pass" placeholder="Введите пароль">
			<button id="logon-btn">Войти</button>
		</form>
		<div class='logon__message'></div>
		<div class="logon__reference">
			<span class="logon__registration">Регистрация</span>
			<span class="logon__forgot-pass">Забыли пароль?</span>
		</div>
	</div>`);
	// скрываем окно входа
	const logon = $('.logon').hide();
	// скрываем forgot-pass
	const forgotPass = $('.logon__forgot-pass').hide()
	// раскрываем окно входа при нажатии на ссылку
	const userLink = $('#user-link').on('click', ()=> {
		logon.slideDown(500);
	});
	userLink.attr('title', 'Вход и Регистрация');
	// нажатие на ссылку 'регистрация'
	const registration = $('.logon__registration').on('click', ()=>{
		logon.slideUp(300);
		registrationWindow();
	});
	// закрытие окна крестиком
	const close = $('.logon__close').on('click', ()=> {
		logon.slideUp(300);
		
	});
	// нажатие кнопки "Войти"
	const button = $('#logon-btn').on('click', (e)=> {
		const login = $('#logon-login');
		const pass = $('#logon-pass');
		let message = $('.logon__message');
		let response = validationLogon(login.val(), pass.val());
		console.log(response)
		if (response === 1) {
			e.preventDefault()
			message.text(`Пользователь ${login.val()} не найден`);
		} else if (response === 2) {
			e.preventDefault()
			message.text(`Не правильный пароль`);
			forgotPass.show();
		} else if (response === 0) {
			createDefaultUser(login.val());
			login.val('');
			pass.val('');
			logon.fadeOut(300);
			logon.remove()
		}
	})
}

// logonWindow()
startApp()

/** создаем запись в LS, которая будет указывать что пользователь вошел в систему */
const createDefaultUser = (login) => {
	//
	let user = JSON.parse(localStorage.getItem(login))
	console.log(user)
	localStorage.setItem('current_user', JSON.stringify({
		login: login,
		firstName: user.firstName,
		lastName: user.lastName,
		basket: user.basket
	}))
	exitWindow()
	popupHint(`Здравствуйте, ${user.firstName}`)
	
	
}



/** Окно регистрации пользователя */
const registrationWindow = () => {
	console.log('Регистрация нового пользователя')
}

/** Проверка введенных логина и пароля */
const validationLogon = (login, password) => {
	let errorCode = 1;
	console.log('Проверка: ', login, password)
	// перебираем все ключи в LS
	const keys = []
	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key)) {
			continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
		}
		keys.push(key)
	}
	keys.forEach(key => {
		// если логин есть в LS
		if (login  === key) {
			let user = JSON.parse(localStorage.getItem(key))
			console.log(user.pass)
			// если пароль совпадает
			if (user.pass === password) {
				errorCode = 0;
			} else {
				errorCode = 2;
			}
		}
	})
	return errorCode;
}


/** Личный кабинет пользователя */
const personalAccount = (login) => {
	console.log('Вход в ЛК ', login)
	
	
}




// тестовый объект для Local Storage
// localStorage.setItem('nvaru', JSON.stringify(  {
// 		pass: "1111",
// 		firstName: "Алексей",
// 		lastName: "Варюхин",
// 		basket: [],
// 			photo: "https://funart.pro/uploads/posts/2022-06/1655297308_8-funart-pro-p-yenot-s-tsvetkom-zhivotnie-krasivo-foto-8.jpg",
// 			hobby: [
// 				'dfdfd',
// 				'dfdfdf'
// 					]
// }))

// тестовый объект для Local Storage
// localStorage.setItem('current_user', JSON.stringify(  {
// 		login: "nvaru",
// 		name: "Алексей",
// 		basket: [
// 				'sssssss',
// 				'aaaaaaa'
// 			]
// }))
