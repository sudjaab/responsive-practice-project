const nav = document.querySelector('.nav-grid')
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
	if (hamburger.classList.contains('change')) {
		hamburger.classList.remove('change')
		console.log('close')
		nav.classList.remove('open')
	} else {
		hamburger.classList.add('change')
		console.log('open')
		nav.classList.toggle('open')
	}
}
