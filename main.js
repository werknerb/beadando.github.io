const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.navitem')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')


hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('navitem-active')
    line1.classList.toggle('line-1-active')
    line2.classList.toggle('line-2-active')
    line3.classList.toggle('line-3-active')
})
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('navitem-active')
})

