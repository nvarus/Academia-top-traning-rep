const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
	box.innerHTML += '<div class="color-block"></div>'
	console.log('sdf')
})
