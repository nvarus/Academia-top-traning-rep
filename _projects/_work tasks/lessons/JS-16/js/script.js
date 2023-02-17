"use strict";
const form = document.forms[0];
console.log(form.elements[name])


// const forms = document.querySelectorAll('input')
// forms.forEach(item => {
// 	console.log(item)
// })

// form.addEventListener("submit", (e) => {
// 	// object[e.target.name] = e.target.value
//
// 	for(let i = 0;i < forma.length; i++) {
//
// 		object[forma.item.name] = forma.item.value
// 		console.log(item)
// 	}
//
//
// 	console.log(object);
// 	localStorage.setItem("forma", JSON.stringify(object))
// });
// if (localStorage.getItem("forma")) {
// 	object = JSON.parse(localStorage.getItem("forma"))
// 	console.log(object);
// 	for (let item in object) {
// 		form.elements[item].value = object[item]
// 	}
// }

