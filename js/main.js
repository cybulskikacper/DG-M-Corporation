const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.body
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')

	if (navMobile.classList.contains('nav-mobile--active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}

navBtn.addEventListener('click', handleNav)

const handleNavLinkClick = () => {
	navBtn.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
	body.style.overflow = 'auto'
}

// Add click event listener to each navigation link
navLinks.forEach(link => {
	link.addEventListener('click', handleNavLinkClick)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
