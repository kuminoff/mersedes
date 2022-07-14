const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem) => {
      btnItem.classList.remove('feature__link_active') //удаляем у всех кнопок класс feature__link_active
    }) 
    btnItem.classList.add('feature__link_active') //добавляем кнопке класс feature__link_active

     lists.forEach((listsItem) => {
      listsItem.classList.add('hidden') //добавляем ко всем спискам класс hidden (он скроется)
     }) 
    
    lists[index].classList.remove('hidden') //элемент с выбраннам индексом удаляет класс hidden (он откроется)
  })
})