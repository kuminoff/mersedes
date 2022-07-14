const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const clickMenu = document.querySelectorAll('.menu-list__link')

const toggleMenu = () => {
  burger.classList.toggle('humburger-menu-active')//переключатель класса
  menuElem.classList.toggle('menu-active')//переключатель класса
}

burger.addEventListener('click', () => {
  toggleMenu()
})