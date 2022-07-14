const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')//удаляем скрытость окна
})

modal.addEventListener('click', (event) =>{
  const target = event.target

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {//если тыкаем на область за окном или крестик
      modal.classList.add('hidden')//скрываем окно
  }
})

