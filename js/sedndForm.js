const form = document.querySelector('.form-test-drive')
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const phone = document.querySelector('#phone');

form.addEventListener('submit', (event) => {
  event.preventDefault()//отмена перезагрузки страницы после отправки формы

  let data = {}

  for (let {name, value} of form.elements) {
    if (name) {
      data[name] = value
    }
  }

  if(!name.value || !mail.value || !phone.value) {
    alert('Заполните все поля');
  } else {
      fetch('https://jsonplaceholder.typicode.com/posts', {//оправляем данные на сервер
    method: 'POST',
    body: JSON.stringify(data)//переведет наш объект в строчку
  })
    .then(response => {
      if (response.status === 200 || response.status === 201) {//если передача данных прошла успешно
        return response.json()
     } else {
       throw new Error(response.status)
     }
      })
      .then(data => {
        alert('Данные успешно отправлены')
        form.reset()//перезагрузка формы после отправки
      })
     .catch(error => {
        alert('Произошла ошибка, статус ' + error.message)
     })
  }
})