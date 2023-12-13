const burger = document.querySelector('.burger-icon')
const menu = document.querySelector('.menu')

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
    })
}