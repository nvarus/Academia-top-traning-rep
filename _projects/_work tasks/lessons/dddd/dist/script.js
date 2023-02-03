// const content = document.querySelector('.content')
// content.addEventListener('mousemove', () => {
// 	content.innerHTML = `x = ${event.offsetX}; y = ${event.offsetY}`;
// })
//
// content.addEventListener('click', () => {
// 	content.innerHTML = `ЛЕВАЯ`
// })
//
// content.addEventListener('contextmenu', () => {
// 	content.innerHTML = `ПРАВАЯ`
// })

// const btn = document.querySelector('#btn')
// const text = document.querySelector('#text')
//
// btn.addEventListener('click', () => {
// 	text.classList.toggle('None')
// })


// const html = document.querySelector('#html')
// const css = document.querySelector('#css')
// const js = document.querySelector('#js')
//
const p_html = document.querySelector('#p-html')
const p_css = document.querySelector('#p-css')
const p_js = document.querySelector('#p-js')
//
//
//
//
//
// css.addEventListener('click',() => {
// 	p_html.classList.add('None')
// 	p_js.classList.add('None')
// 	p_css.classList.remove('None')
// })
// html.addEventListener('click',() => {
// 	p_html.classList.remove('None')
// 	p_js.classList.add('None')
// 	p_css.classList.add('None')
//
// })
// js.addEventListener('click',() => {
// 	p_html.classList.add('None')
// 	p_js.classList.remove('None')
// 	p_css.classList.add('None')
// })

const btn = document.querySelectorAll('.btn')

btn.forEach(item => {
	item.addEventListener('click', () => {
		if (item.id === 'html') {
			
			
			console.log('HTML')
		}
		if (item.id === 'css') {
			console.log('CSS')
		}
		if (item.id === 'js') {
			console.log('JS')
		}
		
		
		
	})
})
