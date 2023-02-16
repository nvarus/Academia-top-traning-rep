"use strict";
//
//
// window.addEventListener("DOMContentLoaded", e => {
// 	let product = fetch("https://fakestoreapi.com/products")
// 		.then(response => {return response.json();})
// 		.then(dataProd => {
// 			console.log(dataProd)
// 	})
// 	console.log(product)
// })


// const arr = {
// 	"title": 1,
// 	"asd": 2,
// 	"title1": 1,
// 	"ads1": 2
// }
// arr["asdasda"] = 22222;
// const arr1 = JSON.stringify(arr, null, " ")
// document.body.innerHTML +=`<pre>${arr1}</pre>`
// const arr2 = JSON.parse(arr1, (key, value)=> {
// 	console.log(key, value)
// })
const btn = document.querySelector('button')
const text = document.querySelector('textarea')


btn.addEventListener('click', e =>{
	let textParse = JSON.parse(text.value)
	let textString = JSON.stringify(textParse, null, " ")
	document.body.innerHTML += textString
})


