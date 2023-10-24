const mobileBtn = document.querySelector('.mobile-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const header = document.querySelector('.header')
const body = document.querySelector('body')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show')
    header.classList.add('static')
    body.style.overflow = 'hidden'
})

mobileMenu.addEventListener('click', (e) => {
    mobileMenu.classList.remove('show')
    header.classList.remove('static')
    body.style.overflow = 'unset'
})


