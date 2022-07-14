const linkHead = document.querySelectorAll('.menu-list__link') //получил все элементы с определенным селектором
const mainScroll = document.querySelector('.main__scroll')//получил элемент кнопки
const newArray = [...linkHead, mainScroll]//объединит два массива

newArray.forEach(link => { //перебираем массив
  link.addEventListener('click', (event) => { //по клику событие ниже
    event.preventDefault()//отключаем классическое поведение ссылки
    
    const ID = event.target.getAttribute('href').substr(1)//ищет идинтификатор элемента и удаляет первый символ

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',//плавный переход
      block: 'start'//переход в начало блока
    })
  })
})